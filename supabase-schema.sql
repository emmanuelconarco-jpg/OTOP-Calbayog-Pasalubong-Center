-- Run this once in Supabase Dashboard > SQL Editor.
-- Supabase Auth stores passwords securely; never create a password column here.
create extension if not exists "pgcrypto";

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  phone text,
  created_at timestamptz not null default now()
);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = ''
as $$
begin
  insert into public.profiles (id, full_name, phone)
  values (
    new.id,
    coalesce(nullif(new.raw_user_meta_data->>'full_name', ''), nullif(new.email, ''), new.id::text),
    new.raw_user_meta_data->>'phone'
  )
  on conflict (id) do update set
    full_name = excluded.full_name,
    phone = excluded.phone;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  description text,
  icon text,
  created_at timestamptz not null default now()
);

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category_id uuid references public.categories(id) on delete set null,
  description text not null default '',
  price numeric(12,2) not null check (price >= 0),
  stock integer not null default 0 check (stock >= 0),
  image text not null default '🛍️',
  producer text not null default 'OTOP Calbayog',
  featured boolean not null default false,
  status text not null default 'active' check (status in ('active','inactive')),
  created_at timestamptz not null default now()
);

alter table public.profiles add column if not exists is_admin boolean not null default false;

create or replace function public.prevent_profile_admin_change()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  if auth.uid() is not null then
    if tg_op = 'INSERT' and new.is_admin then
      raise exception 'Only a database administrator can grant admin access';
    elsif tg_op = 'UPDATE' and new.is_admin is distinct from old.is_admin then
      raise exception 'Only a database administrator can change admin access';
    end if;
  end if;
  return new;
end;
$$;

drop trigger if exists prevent_profile_admin_insert on public.profiles;
create trigger prevent_profile_admin_insert
  before insert on public.profiles
  for each row execute function public.prevent_profile_admin_change();

drop trigger if exists prevent_profile_admin_update on public.profiles;
create trigger prevent_profile_admin_update
  before update of is_admin on public.profiles
  for each row execute function public.prevent_profile_admin_change();

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  order_number text unique not null,
  customer_id uuid not null references public.profiles(id),
  customer_name text not null,
  customer_email text not null,
  customer_phone text not null,
  delivery_address jsonb not null,
  order_type text not null check (order_type in ('Delivery','Store Pickup')),
  payment_method text not null,
  subtotal numeric(12,2) not null check (subtotal >= 0),
  delivery_fee numeric(12,2) not null default 0 check (delivery_fee >= 0),
  total numeric(12,2) not null check (total >= 0),
  status text not null default 'Pending' check (status in ('Pending','Confirmed','Preparing','Ready for Pickup','Out for Delivery','Completed','Cancelled')),
  created_at timestamptz not null default now()
);

create table if not exists public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  product_id uuid not null references public.products(id),
  product_name text not null,
  quantity integer not null check (quantity > 0),
  unit_price numeric(12,2) not null check (unit_price >= 0),
  subtotal numeric(12,2) not null check (subtotal >= 0)
);

alter table public.profiles enable row level security;
alter table public.categories enable row level security;
alter table public.products enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;

drop policy if exists "Public can view categories" on public.categories;
create policy "Public can view categories" on public.categories for select using (true);
drop policy if exists "Public can view active products" on public.products;
create policy "Public can view active products" on public.products for select using (status = 'active');
drop policy if exists "Signed in users can add products" on public.products;
drop policy if exists "Superadmins can add products" on public.products;
create policy "Superadmins can add products" on public.products for insert to authenticated
  with check (exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_admin));
drop policy if exists "Signed in users can update products" on public.products;
drop policy if exists "Superadmins can update products" on public.products;
create policy "Superadmins can update products" on public.products for update to authenticated
  using (exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_admin))
  with check (exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_admin));

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'product-images',
  'product-images',
  true,
  5242880,
  array['image/jpeg', 'image/png', 'image/webp']
)
on conflict (id) do update set
  name = excluded.name,
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Public can view product images" on storage.objects;
create policy "Public can view product images" on storage.objects for select
  using (bucket_id = 'product-images');
drop policy if exists "Superadmins can upload product images" on storage.objects;
create policy "Superadmins can upload product images" on storage.objects for insert to authenticated
  with check (
    bucket_id = 'product-images'
    and exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_admin)
  );
drop policy if exists "Superadmins can update product images" on storage.objects;
create policy "Superadmins can update product images" on storage.objects for update to authenticated
  using (
    bucket_id = 'product-images'
    and exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_admin)
  )
  with check (
    bucket_id = 'product-images'
    and exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_admin)
  );
drop policy if exists "Superadmins can delete product images" on storage.objects;
create policy "Superadmins can delete product images" on storage.objects for delete to authenticated
  using (
    bucket_id = 'product-images'
    and exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_admin)
  );

drop policy if exists "Users can view their profile" on public.profiles;
create policy "Users can view their profile" on public.profiles for select to authenticated using (auth.uid() = id);
drop policy if exists "Users can create their profile" on public.profiles;
create policy "Users can create their profile" on public.profiles for insert to authenticated with check (auth.uid() = id);
drop policy if exists "Users can update their profile" on public.profiles;
create policy "Users can update their profile" on public.profiles for update to authenticated using (auth.uid() = id) with check (auth.uid() = id);
drop policy if exists "Users can view own orders" on public.orders;
create policy "Users can view own orders" on public.orders for select to authenticated
  using (auth.uid() = customer_id or exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_admin));
drop policy if exists "Users can create own orders" on public.orders;
drop policy if exists "Users can view own order items" on public.order_items;
create policy "Users can view own order items" on public.order_items for select to authenticated
  using (exists (select 1 from public.orders o where o.id = order_id and (o.customer_id = auth.uid() or exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_admin))));
drop policy if exists "Users can create own order items" on public.order_items;
drop policy if exists "Admins can update orders" on public.orders;
create policy "Admins can update orders" on public.orders for update to authenticated
  using (exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_admin))
  with check (exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_admin));

create or replace function public.place_order(
  p_customer_name text,
  p_customer_email text,
  p_customer_phone text,
  p_delivery_address jsonb,
  p_order_type text,
  p_payment_method text,
  p_items jsonb
) returns public.orders
language plpgsql
security definer
set search_path = ''
as $$
declare
  item jsonb;
  product_row public.products%rowtype;
  new_order public.orders;
  calculated_subtotal numeric(12,2) := 0;
  delivery numeric(12,2) := 80;
  item_quantity integer;
  item_subtotal numeric(12,2);
begin
  if auth.uid() is null then raise exception 'You must be signed in to place an order'; end if;
  if p_order_type is null or p_order_type not in ('Delivery','Store Pickup') then raise exception 'Invalid order type'; end if;
  if p_payment_method is null or p_payment_method not in ('Cash on Delivery','Cash on Pickup','GCash','Bank Transfer') then
    raise exception 'Invalid payment method';
  end if;
  if nullif(btrim(p_customer_name), '') is null
    or nullif(btrim(p_customer_email), '') is null
    or nullif(btrim(p_customer_phone), '') is null then
    raise exception 'Customer name, email, and phone are required';
  end if;
  if p_delivery_address is null or pg_catalog.jsonb_typeof(p_delivery_address) <> 'object' then
    raise exception 'A delivery address is required';
  end if;
  if nullif(btrim(p_delivery_address->>'barangay'), '') is null
    or nullif(btrim(p_delivery_address->>'address'), '') is null
    or nullif(btrim(p_delivery_address->>'city'), '') is null
    or nullif(btrim(p_delivery_address->>'province'), '') is null then
    raise exception 'Complete delivery address details are required';
  end if;
  if p_items is null or pg_catalog.jsonb_typeof(p_items) <> 'array' then
    raise exception 'Order items must be an array';
  end if;
  if pg_catalog.jsonb_array_length(p_items) = 0 then
    raise exception 'Your cart is empty';
  end if;
  if exists (
    select 1
    from pg_catalog.jsonb_array_elements(p_items) as entry(value)
    group by entry.value->>'product_id'
    having count(*) > 1
  ) then
    raise exception 'Order contains a duplicate product';
  end if;
  for item in select entry.value from pg_catalog.jsonb_array_elements(p_items) as entry(value) loop
    if pg_catalog.jsonb_typeof(item) <> 'object'
      or nullif(item->>'product_id', '') is null
      or nullif(item->>'quantity', '') is null then
      raise exception 'Each order item requires a product and quantity';
    end if;
    item_quantity := (item->>'quantity')::integer;
    if item_quantity is null or item_quantity < 1 then
      raise exception 'Order quantities must be positive whole numbers';
    end if;
    select * into product_row
    from public.products
    where id = (item->>'product_id')::uuid and status = 'active'
    for update;
    if not found then
      raise exception 'Product "%" is no longer available', coalesce(item->>'product_name', item->>'product_id');
    end if;
    if item_quantity < 1 or item_quantity > product_row.stock then raise exception 'Insufficient stock for %', product_row.name; end if;
    item_subtotal := product_row.price * item_quantity;
    calculated_subtotal := calculated_subtotal + item_subtotal;
  end loop;
  if p_order_type = 'Store Pickup' or calculated_subtotal >= 1000 then delivery := 0; end if;
  insert into public.orders (order_number, customer_id, customer_name, customer_email, customer_phone, delivery_address, order_type, payment_method, subtotal, delivery_fee, total)
  values ('OTOP-' || pg_catalog.to_char(pg_catalog.now(), 'YYYYMMDD') || '-' || pg_catalog.upper(pg_catalog.substr(pg_catalog.replace(pg_catalog.gen_random_uuid()::text,'-',''),1,6)), auth.uid(), p_customer_name, p_customer_email, p_customer_phone, p_delivery_address, p_order_type, p_payment_method, calculated_subtotal, delivery, calculated_subtotal + delivery)
  returning * into new_order;
  for item in select entry.value from pg_catalog.jsonb_array_elements(p_items) as entry(value) loop
    item_quantity := (item->>'quantity')::integer;
    select * into product_row from public.products where id = (item->>'product_id')::uuid for update;
    item_subtotal := product_row.price * item_quantity;
    update public.products set stock = stock - item_quantity where id = product_row.id;
    insert into public.order_items (order_id, product_id, product_name, quantity, unit_price, subtotal)
    values (new_order.id, product_row.id, product_row.name, item_quantity, product_row.price, item_subtotal);
  end loop;
  return new_order;
end;
$$;

grant usage on schema public to authenticated;
revoke all on function public.place_order(text, text, text, jsonb, text, text, jsonb) from public, anon, authenticated;
grant execute on function public.place_order(text, text, text, jsonb, text, text, jsonb) to authenticated;
grant execute on function public.place_order(text, text, text, jsonb, text, text, jsonb) to service_role;

create or replace function public.cancel_order(p_order_id uuid)
returns public.orders
language plpgsql
security definer
set search_path = ''
as $$
declare
  target_order public.orders;
  order_item public.order_items%rowtype;
begin
  if auth.uid() is null then
    raise exception 'You must be signed in to cancel an order';
  end if;

  select * into target_order
  from public.orders
  where id = p_order_id and customer_id = auth.uid()
  for update;

  if not found then
    raise exception 'Order not found';
  end if;
  if target_order.status <> 'Pending' then
    raise exception 'Only pending orders can be cancelled';
  end if;

  for order_item in
    select * from public.order_items where order_id = target_order.id
  loop
    update public.products
    set stock = stock + order_item.quantity
    where id = order_item.product_id;
  end loop;

  update public.orders
  set status = 'Cancelled'
  where id = target_order.id
  returning * into target_order;

  return target_order;
end;
$$;

revoke all on function public.cancel_order(uuid) from public, anon, authenticated;
grant execute on function public.cancel_order(uuid) to authenticated;

insert into public.categories (slug, name, description, icon) values
  ('gourmet', 'Penn''s Gourmet', 'Discover flavorful local gourmet products.', '🐟'),
  ('coconut', 'Coconut Corner', 'Coconut-based favorites, sweets, and local specialties.', '🥥'),
  ('cacao', 'Cacao', 'Locally inspired chocolate treats and cacao specialties.', '🍫'),
  ('ping-pings-tinapa', 'Ping Ping''s Tinapa', 'Local smoked fish sold by the pack or piece.', '🐟')
on conflict (slug) do nothing;

insert into public.products (name, category_id, description, price, stock, image, producer, featured)
select v.name, c.id, v.description, v.price, v.stock, v.image, v.producer, v.featured
from (values
  ('CACAO SAMARIAN BONBONS','cacao','Handcrafted bonbons with a rich, single-origin cacao flavor.',180,30,'https://vazaeqwrrzwiwumylgwa.supabase.co/storage/v1/object/public/product-images/CACAO%20SAMARIAN%20BONBONS.jpg','Samarian',false),
  ('CACAO SAMARIAN CHOCO JAM','cacao','Smooth chocolate jam made with premium cacao for a sweet, spreadable finish.',220,30,'https://vazaeqwrrzwiwumylgwa.supabase.co/storage/v1/object/public/product-images/CACAO%20SAMARIAN%20CHOCO%20JAM.jpg','Samarian',false),
  ('CACAO SAMARIAN MILK CHOCOLATE','cacao','Velvety milk chocolate with a creamy finish and distinct cacao character.',170,35,'https://vazaeqwrrzwiwumylgwa.supabase.co/storage/v1/object/public/product-images/CACAO%20SAMARIAN%20MILK%20CHOCOLATE.jpg','Samarian',false),
  ('CACAO SAMARIAN TABLEA','cacao','Traditional cacao tablea for a rich, authentic hot chocolate and local recipe favorite.',160,40,'https://vazaeqwrrzwiwumylgwa.supabase.co/storage/v1/object/public/product-images/CACAO%20SAMARIAN%20TABLEA.jpg','Samarian',false),
  ('PENN''S GOURMET BULAD','gourmet','Penn''s Gourmet Bulad.',340,50,'https://vazaeqwrrzwiwumylgwa.supabase.co/storage/v1/object/public/product-images/PENN%27S%20GOURMET%20BULAD.jpg','Penn''s Gourmet',false),
  ('PENN''S GOURMET HONEY LEMON BAGOONG','gourmet','Penn''s Gourmet Honey Lemon Bagoong.',340,50,'https://vazaeqwrrzwiwumylgwa.supabase.co/storage/v1/object/public/product-images/PENN%27S%20GOURMET%20HONEY%20LEMON%20BAGOONG.jpg','Penn''s Gourmet',false),
  ('PENN''S GOURMET POMODORO TINAPA','gourmet','Penn''s Gourmet Pomodoro Tinapa.',340,50,'https://vazaeqwrrzwiwumylgwa.supabase.co/storage/v1/object/public/product-images/PENN%27S%20GOURMET%20POMODORO%20TINAPA.jpg','Penn''s Gourmet',false),
  ('PENN''S GOURMET TINAPA','gourmet','Penn''s Gourmet Tinapa.',340,50,'https://vazaeqwrrzwiwumylgwa.supabase.co/storage/v1/object/public/product-images/PENN%27S%20GOURMET%20TINAPA.jpg','Penn''s Gourmet',false),
  ('Belekoy','coconut','A sweet coconut treat with a chewy local flavor and familiar Calbayog taste.',90,40,'https://vazaeqwrrzwiwumylgwa.supabase.co/storage/v1/object/public/product-images/COCONUT%20CORNER%20BELEKOY.jpg','Coconut Corner',false),
  ('Bahalina Wine','coconut','A festive local wine with a smooth coconut-infused finish.',250,25,'🥥','Coconut Corner',false),
  ('Bukayo','coconut','A classic coconut candy made with rich, naturally sweet coconut flavor.',8,35,'🥥','Coconut Corner',false),
  ('Coco Bar','coconut','A rich coconut snack bar with a crunchy, sweet finish.',110,30,'https://vazaeqwrrzwiwumylgwa.supabase.co/storage/v1/object/public/product-images/COCONUT%20CORNER%20COCO%20BAR.jpg','Coconut Corner',false),
  ('Tuba','coconut','Fresh coconut sap wine with a distinctive local flavor and aroma.',120,18,'🥥','Coconut Corner',false),
  ('Suka','coconut','Traditional coconut vinegar made for authentic local cooking and dipping.',150,24,'🥥','Coconut Corner',false),
  ('Coconut Oil','coconut','Pure coconut oil for cooking, wellness, and everyday kitchen use.',140,30,'🥥','Coconut Corner',false),
  ('Coconut Jam','coconut','A creamy, rich spread made with coconut as the main ingredient.',185,32,'🥥','Coconut Corner',false),
  ('Chocolate','cacao','A rich chocolate treat made with locally grown cacao.',150,30,'🍫','Cacao',false),
  ('White Chocolate','cacao','A smooth, creamy white chocolate treat.',170,25,'🍫','Cacao',false),
  ('Cacao Tablea','cacao','Traditional pure cacao tablets for hot chocolate and local recipes.',140,30,'🍫','Cacao',false),
  ('Roasted Cacao Nibs','cacao','Crunchy roasted cacao pieces with a deep chocolate flavor.',180,25,'🍫','Cacao',false),
  ('Tamban (per pack)','ping-pings-tinapa','Smoked Tamban fish, sold per pack.',120,50,'https://vazaeqwrrzwiwumylgwa.supabase.co/storage/v1/object/public/product-images/PING%20PING''S%20SMOKE%20FISH%20TINAPA%20TAMBAN.jpg','Ping Ping''s Tinapa',false),
  ('Labtinaw (4-5 pcs)','ping-pings-tinapa','Smoked Labtinaw, sold as a pack of 4 to 5 pieces.',200,50,'https://vazaeqwrrzwiwumylgwa.supabase.co/storage/v1/object/public/product-images/PING%20PING''S%20SMOKE%20FISH%20TINAPA%20LABTINAW.jpg','Ping Ping''s Tinapa',false),
  ('Aguma (Hasa-Hasa) - 3 pcs','ping-pings-tinapa','Smoked Aguma (Hasa-Hasa), sold as a 3-piece pack.',170,50,'https://vazaeqwrrzwiwumylgwa.supabase.co/storage/v1/object/public/product-images/PING%20PING''S%20SMOKE%20FISH%20TINAPA%20AGUMA(HASA-HASA)%203PCS.jpg','Ping Ping''s Tinapa',false),
  ('Aguma (Hasa-Hasa) - 4 pcs','ping-pings-tinapa','Smoked Aguma (Hasa-Hasa), sold as a 4-piece pack.',220,50,'https://vazaeqwrrzwiwumylgwa.supabase.co/storage/v1/object/public/product-images/PING%20PING''S%20SMOKE%20FISH%20TINAPA%20AGUMA(HASA-HASA)%204PCS.jpg','Ping Ping''s Tinapa',false),
  ('Aguma (Hasa-Hasa) - 5 pcs','ping-pings-tinapa','Smoked Aguma (Hasa-Hasa), sold as a 5-piece pack.',280,50,'https://vazaeqwrrzwiwumylgwa.supabase.co/storage/v1/object/public/product-images/PING%20PING''S%20SMOKE%20FISH%20TINAPA%20AGUMA(HASA-HASA)%205PCS.jpg','Ping Ping''s Tinapa',false),
  ('Buraw (Alumahan) - 3 pcs','ping-pings-tinapa','Smoked Buraw (Alumahan), sold as a 3-piece pack.',300,50,'https://vazaeqwrrzwiwumylgwa.supabase.co/storage/v1/object/public/product-images/PING%20PING''S%20SMOKE%20FISH%20TINAPA%20BURAW(ALUMAHAN).jpg','Ping Ping''s Tinapa',false)
) as v(name, slug, description, price, stock, image, producer, featured)
join public.categories c on c.slug = v.slug
where not exists (select 1 from public.products p where p.name = v.name);

update public.products
set image = 'https://vazaeqwrrzwiwumylgwa.supabase.co/storage/v1/object/public/product-images/COCONUT%20CORNER%20BELEKOY.jpg'
where name = 'Belekoy';

update public.products
set image = 'https://vazaeqwrrzwiwumylgwa.supabase.co/storage/v1/object/public/product-images/COCONUT%20CORNER%20COCO%20BAR.jpg'
where name = 'Coco Bar';

update public.products set price = 90 where name = 'Belekoy';
update public.products set price = 250 where name = 'Bahalina Wine';
update public.products set price = 8 where name = 'Bukayo';
update public.products set price = 110 where name = 'Coco Bar';
update public.products set price = 120 where name = 'Tuba';
update public.products set price = 150 where name = 'Suka';
update public.products set price = 140 where name = 'Coconut Oil';
update public.products set price = 185 where name = 'Coconut Jam';

update public.products set image = 'https://vazaeqwrrzwiwumylgwa.supabase.co/storage/v1/object/public/product-images/PING%20PING''S%20SMOKE%20FISH%20TINAPA%20TAMBAN.jpg' where name = 'Tamban (per pack)';
update public.products set image = 'https://vazaeqwrrzwiwumylgwa.supabase.co/storage/v1/object/public/product-images/PING%20PING''S%20SMOKE%20FISH%20TINAPA%20LABTINAW.jpg' where name = 'Labtinaw (4-5 pcs)';
update public.products set image = 'https://vazaeqwrrzwiwumylgwa.supabase.co/storage/v1/object/public/product-images/PING%20PING''S%20SMOKE%20FISH%20TINAPA%20AGUMA(HASA-HASA)%203PCS.jpg' where name = 'Aguma (Hasa-Hasa) - 3 pcs';
update public.products set image = 'https://vazaeqwrrzwiwumylgwa.supabase.co/storage/v1/object/public/product-images/PING%20PING''S%20SMOKE%20FISH%20TINAPA%20AGUMA(HASA-HASA)%204PCS.jpg' where name = 'Aguma (Hasa-Hasa) - 4 pcs';
update public.products set image = 'https://vazaeqwrrzwiwumylgwa.supabase.co/storage/v1/object/public/product-images/PING%20PING''S%20SMOKE%20FISH%20TINAPA%20AGUMA(HASA-HASA)%205PCS.jpg' where name = 'Aguma (Hasa-Hasa) - 5 pcs';
update public.products set image = 'https://vazaeqwrrzwiwumylgwa.supabase.co/storage/v1/object/public/product-images/PING%20PING''S%20SMOKE%20FISH%20TINAPA%20BURAW(ALUMAHAN).jpg' where name = 'Buraw (Alumahan) - 3 pcs';
