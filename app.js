const categories = [
  {
    id: "gourmet",
    name: "Penn's Gourmet",
    description: "Discover flavorful local gourmet products.",
    icon: '<img src="PENN\'S%20GOURMET%20LOGO.jpg" alt="Penn\'s Gourmet logo" class="category-logo">',
  },
  {
    id: "coconut",
    name: "Coconut Corner",
    description: "Coconut-based favorites, sweets, and local specialties.",
    icon: '<img src="coconut-corner-logo.jpg" alt="Coconut Corner logo" class="category-logo">',
  },
  {
    id: "cacao",
    name: "Cacao",
    description: "Locally inspired chocolate treats and cacao specialties.",
    icon: '<img src="samarian%20logo.png" alt="Samarian cacao logo" class="category-logo">',
  },
  {
    id: "ping-pings-tinapa",
    name: "Ping Ping's Tinapa",
    description: "Local smoked fish sold by the pack or piece.",
    icon: '<img src="ping-pings-tinapa-logo.jpg" alt="Ping Ping’s Smoked Fish logo" class="category-logo">',
  },
];
const seedProducts = [
  [
    "CACAO SAMARIAN BONBONS",
    "Handcrafted bonbons with a rich, single-origin cacao flavor.",
    180,
    30,
    "https://vazaeqwrrzwiwumylgwa.supabase.co/storage/v1/object/public/product-images/CACAO%20SAMARIAN%20BONBONS.jpg",
    "cacao",
  ],
  [
    "CACAO SAMARIAN CHOCO JAM",
    "Smooth chocolate jam made with premium cacao for a sweet, spreadable finish.",
    220,
    30,
    "https://vazaeqwrrzwiwumylgwa.supabase.co/storage/v1/object/public/product-images/CACAO%20SAMARIAN%20CHOCO%20JAM.jpg",
    "cacao",
  ],
  [
    "CACAO SAMARIAN MILK CHOCOLATE",
    "Velvety milk chocolate with a creamy finish and distinct cacao character.",
    170,
    35,
    "https://vazaeqwrrzwiwumylgwa.supabase.co/storage/v1/object/public/product-images/CACAO%20SAMARIAN%20MILK%20CHOCOLATE.jpg",
    "cacao",
  ],
  [
    "CACAO SAMARIAN TABLEA",
    "Traditional cacao tablea for a rich, authentic hot chocolate and local recipe favorite.",
    160,
    40,
    "https://vazaeqwrrzwiwumylgwa.supabase.co/storage/v1/object/public/product-images/CACAO%20SAMARIAN%20TABLEA.jpg",
    "cacao",
  ],
  [
    "PENN'S GOURMET BULAD",
    "Penn's Gourmet Bulad.",
    340,
    50,
    "https://vazaeqwrrzwiwumylgwa.supabase.co/storage/v1/object/public/product-images/PENN%27S%20GOURMET%20BULAD.jpg",
  ],
  [
    "PENN'S GOURMET HONEY LEMON BAGOONG",
    "Penn's Gourmet Honey Lemon Bagoong.",
    340,
    50,
    "https://vazaeqwrrzwiwumylgwa.supabase.co/storage/v1/object/public/product-images/PENN%27S%20GOURMET%20HONEY%20LEMON%20BAGOONG.jpg",
  ],
  [
    "PENN'S GOURMET POMODORO TINAPA",
    "Penn's Gourmet Pomodoro Tinapa.",
    340,
    50,
    "https://vazaeqwrrzwiwumylgwa.supabase.co/storage/v1/object/public/product-images/PENN%27S%20GOURMET%20POMODORO%20TINAPA.jpg",
  ],
  [
    "PENN'S GOURMET TINAPA",
    "Penn's Gourmet Tinapa.",
    340,
    50,
    "https://vazaeqwrrzwiwumylgwa.supabase.co/storage/v1/object/public/product-images/PENN%27S%20GOURMET%20TINAPA.jpg",
  ],
  [
    "Belekoy",
    "A sweet coconut treat with a chewy local flavor and familiar Calbayog taste.",
    90,
    40,
    "https://vazaeqwrrzwiwumylgwa.supabase.co/storage/v1/object/public/product-images/COCONUT%20CORNER%20BELEKOY.jpg",
  ],
  [
    "Bahalina Wine",
    "A festive local wine with a smooth coconut-infused finish.",
    250,
    25,
    "🥥",
  ],
  [
    "Bukayo",
    "A classic coconut candy made with rich, naturally sweet coconut flavor.",
    8,
    35,
    "🥥",
  ],
  [
    "Coco Bar",
    "A rich coconut snack bar with a crunchy, sweet finish.",
    110,
    30,
    "https://vazaeqwrrzwiwumylgwa.supabase.co/storage/v1/object/public/product-images/COCONUT%20CORNER%20COCO%20BAR.jpg",
  ],
  [
    "Tuba",
    "Fresh coconut sap wine with a distinctive local flavor and aroma.",
    120,
    18,
    "🥥",
  ],
  [
    "Suka",
    "Traditional coconut vinegar made for authentic local cooking and dipping.",
    150,
    24,
    "🥥",
  ],
  [
    "Coconut Oil",
    "Pure coconut oil for cooking, wellness, and everyday kitchen use.",
    140,
    30,
    "🥥",
  ],
  [
    "Coconut Jam",
    "A creamy, rich spread made with coconut as the main ingredient.",
    185,
    32,
    "🥥",
  ],
  [
    "Chocolate",
    "A rich chocolate treat made with locally grown cacao.",
    150,
    30,
    "🍫",
  ],
  ["White Chocolate", "A smooth, creamy white chocolate treat.", 170, 25, "🍫"],
  [
    "Cacao Tablea",
    "Traditional pure cacao tablets for hot chocolate and local recipes.",
    140,
    30,
    "🍫",
  ],
  [
    "Roasted Cacao Nibs",
    "Crunchy roasted cacao pieces with a deep chocolate flavor.",
    180,
    25,
    "🍫",
  ],
  [
    "Tamban (per pack)",
    "Smoked Tamban fish, sold per pack.",
    120,
    50,
    "https://vazaeqwrrzwiwumylgwa.supabase.co/storage/v1/object/public/product-images/PING%20PING'S%20SMOKE%20FISH%20TINAPA%20TAMBAN.jpg",
    "ping-pings-tinapa",
  ],
  [
    "Labtinaw (4-5 pcs)",
    "Smoked Labtinaw, sold as a pack of 4 to 5 pieces.",
    200,
    50,
    "https://vazaeqwrrzwiwumylgwa.supabase.co/storage/v1/object/public/product-images/PING%20PING'S%20SMOKE%20FISH%20TINAPA%20LABTINAW.jpg",
    "ping-pings-tinapa",
  ],
  [
    "Aguma (Hasa-Hasa) - 3 pcs",
    "Smoked Aguma (Hasa-Hasa), sold as a 3-piece pack.",
    170,
    50,
    "https://vazaeqwrrzwiwumylgwa.supabase.co/storage/v1/object/public/product-images/PING%20PING'S%20SMOKE%20FISH%20TINAPA%20AGUMA(HASA-HASA)%203PCS.jpg",
    "ping-pings-tinapa",
  ],
  [
    "Aguma (Hasa-Hasa) - 4 pcs",
    "Smoked Aguma (Hasa-Hasa), sold as a 4-piece pack.",
    220,
    50,
    "https://vazaeqwrrzwiwumylgwa.supabase.co/storage/v1/object/public/product-images/PING%20PING'S%20SMOKE%20FISH%20TINAPA%20AGUMA(HASA-HASA)%204PCS.jpg",
    "ping-pings-tinapa",
  ],
  [
    "Aguma (Hasa-Hasa) - 5 pcs",
    "Smoked Aguma (Hasa-Hasa), sold as a 5-piece pack.",
    280,
    50,
    "https://vazaeqwrrzwiwumylgwa.supabase.co/storage/v1/object/public/product-images/PING%20PING'S%20SMOKE%20FISH%20TINAPA%20AGUMA(HASA-HASA)%205PCS.jpg",
    "ping-pings-tinapa",
  ],
  [
    "Buraw (Alumahan) - 3 pcs",
    "Smoked Buraw (Alumahan), sold as a 3-piece pack.",
    300,
    50,
    "https://vazaeqwrrzwiwumylgwa.supabase.co/storage/v1/object/public/product-images/PING%20PING'S%20SMOKE%20FISH%20TINAPA%20BURAW(ALUMAHAN).jpg",
    "ping-pings-tinapa",
  ],
].map((p, i) => {
  const category =
    p[5] ||
    ([
      "Chocolate",
      "White Chocolate",
      "Cacao Tablea",
      "Roasted Cacao Nibs",
      "CACAO SAMARIAN BONBONS",
      "CACAO SAMARIAN CHOCO JAM",
      "CACAO SAMARIAN MILK CHOCOLATE",
      "CACAO SAMARIAN TABLEA",
    ].includes(p[0])
      ? "cacao"
      : p[0].startsWith("PENN")
        ? "gourmet"
        : "coconut");
  return {
    id: (typeof crypto !== "undefined" && crypto.randomUUID)
      ? crypto.randomUUID()
      : `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g, (char) => {
          const r = Math.random() * 16 | 0;
          const v = char === "x" ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        }),
    name: p[0],
    category,
    description: p[1],
    price: p[2],
    stock: p[3],
    image: p[4],
    producer:
      category === "gourmet"
        ? "Penn's Gourmet"
        : category === "cacao"
          ? "Samarian"
          : category === "ping-pings-tinapa"
            ? "Ping Ping's Tinapa"
            : "Coconut Corner",
    featured: false,
    created: i + Date.now(),
  };
});
const retiredProductNames = new Set([
  "Ping Ping's Original Smoked Tinapa",
  "Penn's Gourmet Chili Garlic",
  "Penn's Special Sauce",
  "Calbayog Spiced Dilis",
  "Gourmet Pasalubong Box",
  "Coco Coir Planter",
  "Calbayog Dark Chocolate",
  "Local Cacao Tablea",
  "Cacao Chocolate Bars",
  "Cacao Gift Box",
  "Ping Ping's Tinapa Box",
  "Ping Ping's Tinapa Rice Meal",
  "Ping Ping's Tinapa Jar",
  "Ping Ping's Tinapa Pack",
  "Ping Ping's Tinapa Gift Set",
  "Handmade Arts & Crafts Gift",
  "Handmade Calbayog Souvenir",
  "Calbayog Mini Magnet",
  "Decorative Native Craft",
  "Native Woven Pouch",
]);
const supabaseClient = window.supabase?.createClient(
  "https://vazaeqwrrzwiwumylgwa.supabase.co",
  "sb_publishable_NF4kd3Ru1BMhQCGYX-VpMw_okwJTCCZ",
);
const supabaseReady = Boolean(supabaseClient);
function generateUuid() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
  return `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g, (char) => {
    const r = Math.random() * 16 | 0;
    const v = char === "x" ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
function normalizeProductId(id) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id)
    ? id
    : generateUuid();
}
function normalizeProductName(name) {
  return String(name ?? "")
    .trim()
    .replace(/\s+/g, " ")
    .toLowerCase();
}
let products = [
  ...seedProducts,
  ...JSON.parse(localStorage.getItem("otop-added-products") || "[]").filter(
    (p) => !retiredProductNames.has(p.name),
  ),
].map((product) => ({
  ...product,
  id: normalizeProductId(product.id),
}));
let cart = JSON.parse(localStorage.getItem("otop-cart") || "[]").filter((row) =>
  products.some((product) => product.id === row.id),
);
let lastOrder = JSON.parse(localStorage.getItem("otop-last-order") || "null");
localStorage.removeItem("otop-users");
localStorage.removeItem("otop-current-user");
let currentUser = null;
const $ = (s) => document.querySelector(s),
  money = (n) => `₱${n.toLocaleString("en-PH", { minimumFractionDigits: 2 })}`,
  catName = (id) => categories.find((c) => c.id === id)?.name || id;
function save() {
  localStorage.setItem("otop-cart", JSON.stringify(cart));
  $("#cart-count").textContent = cart.reduce((n, x) => n + x.quantity, 0);
  renderAuthButton();
}
function renderAuthButton() {
  $("#auth-button").textContent = currentUser
    ? `Hi, ${currentUser.name.split(" ")[0]}`
    : "Log in";
}
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2400);
}
function dbProduct(row) {
  return {
    id: row.id,
    name: row.name,
    category: row.categories?.slug || "gourmet",
    description: row.description,
    price: Number(row.price),
    stock: row.stock,
    image: row.image,
    producer: row.producer,
    featured: row.featured,
    created: new Date(row.created_at).getTime(),
  };
}
async function loadSupabaseData() {
  if (!supabaseReady) return;
  const { data, error } = await supabaseClient
    .from("products")
    .select(
      "id,name,description,price,stock,image,producer,featured,created_at,categories(slug)",
    )
    .eq("status", "active")
    .order("created_at", { ascending: false });
  if (error) {
    console.warn("Supabase products unavailable:", error.message);
    return;
  }
  const addedProducts = JSON.parse(
    localStorage.getItem("otop-added-products") || "[]",
  ).filter((p) => !retiredProductNames.has(p.name));
  const supabaseProducts = (data || [])
    .map(dbProduct)
    .filter((p) => !retiredProductNames.has(p.name));
  const catalogProducts = [...seedProducts, ...supabaseProducts];
  const mergedProducts = [...catalogProducts, ...addedProducts].reduce((all, p) => {
    const key = `${p.category}:${normalizeProductName(p.name)}`;
    const existing = all.find(
      (item) => `${item.category}:${normalizeProductName(item.name)}` === key,
    );
    if (existing) {
      Object.assign(existing, p);
    } else all.push(p);
    return all;
  }, []);
  const previousProducts = products;
  const productIdReplacements = new Map();
  for (const previousProduct of previousProducts) {
    const refreshedProduct = mergedProducts.find(
      (product) =>
        normalizeProductName(product.name) ===
          normalizeProductName(previousProduct.name) &&
        product.category === previousProduct.category,
    );
    if (refreshedProduct)
      productIdReplacements.set(previousProduct.id, refreshedProduct.id);
  }
  products = mergedProducts.filter((product) =>
    product.name && product.category && product.image,
  );
  cart = cart.map((row) => ({
    ...row,
    id: productIdReplacements.get(row.id) || row.id,
  }));
  cart = cart.filter((row) => products.some((p) => p.id === row.id));
  save();
  renderProducts();
  if (currentUser?.is_admin) renderAdmin();
}
async function loadSupabaseSession() {
  if (!supabaseReady) return;
  const applySession = async (session) => {
    if (!session) {
      currentUser = null;
      localStorage.removeItem("otop-current-user");
      save();
      return;
    }
    const u = session.user;
    const profile = await supabaseClient
      .from("profiles")
      .select("full_name,phone,is_admin")
      .eq("id", u.id)
      .maybeSingle();
    currentUser = {
      id: u.id,
      name: profile.data?.full_name || u.user_metadata?.full_name || u.email,
      email: u.email,
      phone: profile.data?.phone || u.user_metadata?.phone || "",
      is_admin: Boolean(profile.data?.is_admin),
    };
    localStorage.setItem("otop-current-user", JSON.stringify(currentUser));
    save();
  };
  const { data } = await supabaseClient.auth.getSession();
  await applySession(data.session);
  supabaseClient.auth.onAuthStateChange((_event, session) => {
    applySession(session);
  });
}
function showAuth(mode = "login") {
  renderAuth(mode);
  openModal("#auth-modal");
}
function renderAuth(mode = "login") {
  if (currentUser) {
    $("#auth-content").innerHTML =
      `<p class="eyebrow">YOUR OTOP ACCOUNT</p><h2>Welcome back.</h2><div class="account-card"><strong>${escapeHTML(currentUser.name)}</strong><span>${escapeHTML(currentUser.email)}</span><br><span>${escapeHTML(currentUser.phone || "Phone number not added")}</span></div><button class="btn btn-dark" data-order-history style="width:100%;margin-bottom:10px">View my order history →</button>${currentUser.is_admin ? '<button class="btn btn-dark" data-superadmin style="width:100%;margin-bottom:10px">Open Superadmin dashboard →</button>' : ""}<div class="account-actions"><button class="btn btn-light" data-close-modal>Close</button><button class="btn btn-primary" data-logout>Log out</button></div>`;
    return;
  }
  const login = mode === "login";
  $("#auth-content").innerHTML =
    `<p class="eyebrow">OTOP CALBAYOG</p><h2>${login ? "Welcome back." : "Join our local community."}</h2><p class="intro">${login ? "Log in to continue shopping and view your orders." : "Create an account to make checkout faster and keep track of your orders."}</p><form id="${login ? "login" : "register"}-form" class="auth-form">${login ? '<label>Email address<input name="email" type="email" autocomplete="email" required></label><label>Password<input name="password" type="password" autocomplete="current-password" minlength="6" required></label><button class="btn btn-primary" type="submit">Log in <span>→</span></button>' : '<label>Full name<input name="name" autocomplete="name" required></label><label>Email address<input name="email" type="email" autocomplete="email" required></label><label>Mobile number<input name="phone" type="tel" required></label><label>Password<input name="password" type="password" autocomplete="new-password" minlength="6" required></label><label>Confirm password<input name="confirmPassword" type="password" autocomplete="new-password" minlength="6" required></label><button class="btn btn-primary" type="submit">Create account <span>→</span></button>'}</form><p class="auth-switch">${login ? "New to OTOP?" : "Already have an account?"} <button type="button" data-auth-mode="${login ? "register" : "login"}">${login ? "Register here" : "Log in instead"}</button></p><p class="muted">Your account is secured by Supabase Auth.</p>`;
}
function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}
async function renderOrderHistory() {
  if (!currentUser?.id) return toast("Please log in to view your order history.");
  $("#auth-content").innerHTML =
    '<p class="eyebrow">YOUR ACCOUNT</p><h2>My order history</h2><p class="muted">Loading your orders…</p>';
  const { data, error } = await supabaseClient
    .from("orders")
    .select("id,order_number,order_type,payment_method,delivery_address,subtotal,delivery_fee,total,status,created_at,order_items(product_name,quantity,unit_price,subtotal)")
    .eq("customer_id", currentUser.id)
    .order("created_at", { ascending: false });
  if (error) {
    console.error("Could not load order history:", error.message);
    $("#auth-content").innerHTML =
      `<p class="eyebrow">YOUR ACCOUNT</p><h2>My order history</h2><p class="muted">We couldn’t load your orders. Please try again.</p><p class="muted">${escapeHTML(error.message)}</p><button class="btn btn-light" data-orders-back>Back to account</button>`;
    return;
  }
  const orders = data || [];
  $("#auth-content").innerHTML =
    `<div class="order-history-heading"><div><p class="eyebrow">YOUR ACCOUNT</p><h2>My order history</h2></div><button class="btn btn-light" data-orders-back>Back</button></div>${orders.length ? `<div class="order-history-list">${orders.map((order) => {
      const items = order.order_items || [];
      const address = order.delivery_address || {};
      const statusClass = String(order.status).toLowerCase().replace(/[^a-z0-9]+/g, "-");
      return `<article class="history-order"><div class="history-order-head"><div><strong>${escapeHTML(order.order_number)}</strong><span>${escapeHTML(new Date(order.created_at).toLocaleString("en-PH"))}</span></div><span class="order-status status-${statusClass}">${escapeHTML(order.status)}</span></div><div class="history-order-items">${items.map((item) => `<div><span>${escapeHTML(item.product_name)} × ${Number(item.quantity)}</span><b>${money(Number(item.subtotal))}</b></div>`).join("")}</div><div class="history-order-meta"><span>${escapeHTML(order.order_type)} · ${escapeHTML(order.payment_method)}</span><span>${escapeHTML([address.address, address.barangay, address.city, address.province].filter(Boolean).join(", "))}</span></div><div class="history-order-total"><span>Total</span><b>${money(Number(order.total))}</b></div>${order.status === "Pending" ? `<button class="btn btn-light cancel-order-btn" data-cancel-order="${escapeHTML(order.id)}">Cancel order</button>` : ""}</article>`;
    }).join("")}</div>` : '<p class="empty-state">You haven’t placed any orders yet.</p>'}`;
}
async function cancelCustomerOrder(orderId, button) {
  if (!currentUser?.id) return toast("Please log in to cancel an order.");
  if (!window.confirm("Cancel this pending order? This will restore its items to stock.")) return;
  button.disabled = true;
  button.textContent = "Cancelling…";
  const { error } = await supabaseClient.rpc("cancel_order", { p_order_id: orderId });
  if (error) {
    console.error("Could not cancel order:", error.message);
    toast(error.message);
    button.disabled = false;
    button.textContent = "Cancel order";
    return;
  }
  toast("Order cancelled.");
  await Promise.all([renderOrderHistory(), loadSupabaseData()]);
}
function productVisual(value) {
  const text = String(value ?? "");
  try {
    const url = new URL(text);
    if (url.protocol === "https:" || url.protocol === "http:") {
      const src = url.href.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
      return `<img class="product-photo" src="${src}" alt="" loading="lazy">`;
    }
  } catch {}
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function renderCategories() {
  const sel = $("#category-filter");
  sel.innerHTML =
    '<option value="all">All categories</option>' +
    categories
      .map((c) => `<option value="${c.id}">${c.name}</option>`)
      .join("");
  $("#category-grid").innerHTML = categories
    .map(
      (c) =>
        `<article class="category-card"><div class="cat-icon">${c.icon}</div><h3>${c.name}</h3><p>${c.description}</p><button type="button" data-category="${c.id}">VIEW PRODUCTS →</button></article>`,
    )
    .join("");
}
function renderProducts() {
  const q = $("#search-input").value.toLowerCase(),
    cat = $("#category-filter").value,
    sort = $("#sort-select").value;
  let list = products.filter(
    (p) =>
      (cat === "all" || p.category === cat) &&
      (!q ||
        `${p.name} ${catName(p.category)} ${p.producer}`
          .toLowerCase()
          .includes(q)),
  );
  if (sort === "low") list.sort((a, b) => a.price - b.price);
  if (sort === "high") list.sort((a, b) => b.price - a.price);
  if (sort === "newest") list.sort((a, b) => b.created - a.created);
  if (sort === "featured")
    list.sort((a, b) => Number(b.featured) - Number(a.featured));
  $("#product-grid").innerHTML = list.map(card).join("");
  $("#empty-products").hidden = list.length > 0;
}
function goToProductsView(categoryId = "all") {
  const filter = $("#category-filter");
  if (filter) {
    filter.value = categoryId;
  }
  renderProducts();
  const section = $("#products");
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    location.hash = "#products";
  } else {
    location.hash = "#products";
  }
}
function card(p) {
  return `<article class="product-card"><div class="product-image">${p.featured ? "<small>FEATURED</small>" : ""}${productVisual(p.image)}</div><div class="product-info"><span class="category">${catName(p.category)}</span><h3>${p.name}</h3><span class="rating">★★★★★ <span class="muted"> (sample)</span></span><div class="price">${money(p.price)} <span class="stock">${p.stock ? `${p.stock} in stock` : "Out of stock"}</span></div><div class="card-actions"><button class="view-btn" data-view="${p.id}">View product</button><button class="add-btn" data-add="${p.id}" ${!p.stock ? "disabled" : ""}>Add to cart</button></div></div></article>`;
}
function openModal(id) {
  $(id).classList.add("open");
  $(id).setAttribute("aria-hidden", "false");
}
function closeModals() {
  $$(".modal-wrap").forEach((x) => {
    x.classList.remove("open");
    x.setAttribute("aria-hidden", "true");
  });
}
function $$(s) {
  return [...document.querySelectorAll(s)];
}
function showProduct(id) {
  const p = products.find((x) => x.id === id);
  if (!p) return;
  $("#product-modal-content").innerHTML =
    `<div class="detail-layout"><div class="detail-image">${productVisual(p.image)}</div><div class="detail-copy"><span class="eyebrow">${catName(p.category)}</span><h2>${p.name}</h2><span class="rating">★★★★★ <span class="muted">Sample rating</span></span><div class="price">${money(p.price)}</div><p>${p.description}</p><p><b>Producer:</b> ${p.producer}<br><b>Availability:</b> ${p.stock ? `${p.stock} units available` : "Out of stock"}</p><div class="quantity-picker"><button data-detail-qty="-1">−</button><b id="detail-qty">1</b><button data-detail-qty="1">+</button></div><button class="btn btn-primary" data-add-detail="${p.id}" ${!p.stock ? "disabled" : ""}>Add to cart <span>→</span></button></div></div>`;
  $("#product-modal").dataset.product = id;
  openModal("#product-modal");
}
function add(id, quantity = 1) {
  const p = products.find((x) => x.id === id);
  if (!p || !p.stock) return toast("This product is currently out of stock.");
  const row = cart.find((x) => x.id === id),
    next = (row?.quantity || 0) + quantity;
  if (next > p.stock)
    return toast(`Only ${p.stock} available for this product.`);
  if (row) row.quantity = next;
  else cart.push({ id, quantity });
  save();
  renderCart();
  toast("Added to cart!");
}
function renderCart() {
  const items = $("#cart-items");
  if (!cart.length) {
    items.innerHTML =
      '<div class="empty-cart">Your cart is waiting for something local and lovely.<br><a class="text-link" href="#products" data-close-cart>Browse products →</a></div>';
    $("#cart-summary").innerHTML = "";
    return;
  }
  items.innerHTML = cart
    .map((row) => {
      const p = products.find((x) => x.id === row.id);
      return `<div class="cart-row"><div class="cart-thumb">${productVisual(p.image)}</div><div><h4>${p.name}</h4><small>${money(p.price)} · ${catName(p.category)}</small><div class="qty-controls"><button data-cart-qty="-1" data-id="${p.id}">−</button><b>${row.quantity}</b><button data-cart-qty="1" data-id="${p.id}">+</button><button class="remove" data-remove="${p.id}">Remove</button></div></div><b>${money(p.price * row.quantity)}</b></div>`;
    })
    .join("");
  const subtotal = cart.reduce(
      (n, r) => n + products.find((p) => p.id === r.id).price * r.quantity,
      0,
    ),
    fee = subtotal >= 1000 ? 0 : 80;
  $("#cart-summary").innerHTML =
    `<div class="summary-line"><span>Subtotal</span><b>${money(subtotal)}</b></div><div class="summary-line"><span>Delivery fee</span><b>${fee ? money(fee) : "FREE"}</b></div><div class="summary-line summary-total"><span>Total</span><b>${money(subtotal + fee)}</b></div><button class="btn btn-primary" data-checkout style="width:100%;margin-top:15px">Proceed to checkout →</button>`;
}
function openCart() {
  $("#cart-drawer").classList.add("open");
  $("#overlay").classList.add("open");
  renderCart();
}
function closeCart() {
  $("#cart-drawer").classList.remove("open");
  $("#overlay").classList.remove("open");
}
function checkoutDeliveryFee(subtotal, orderType) {
  return orderType === "Store Pickup" || subtotal >= 1000 ? 0 : 80;
}
function updateCheckoutTotals() {
  const form = $("#checkout-form");
  if (!form) return;
  const subtotal = cart.reduce(
      (n, row) => n + products.find((p) => p.id === row.id).price * row.quantity,
      0,
    ),
    orderType = form.querySelector('[name="orderType"]:checked')?.value,
    fee = checkoutDeliveryFee(subtotal, orderType);
  $("#checkout-items-subtotal").textContent = money(subtotal);
  $("#checkout-delivery-fee").textContent = fee ? money(fee) : "FREE";
  $("#checkout-total").textContent = money(subtotal + fee);
}
function checkout() {
  if (!cart.length) return toast("Add a product before checking out.");
  const subtotal = cart.reduce(
      (n, r) => n + products.find((p) => p.id === r.id).price * r.quantity,
      0,
    ),
    fee = checkoutDeliveryFee(subtotal, "Delivery");
  $("#checkout-content").innerHTML =
    `<form id="checkout-form" class="checkout-form" novalidate><p class="eyebrow">ALMOST THERE</p><h2>Complete your order</h2><p class="intro">Your order is secure. Sample checkout — connect a payment provider before launch.</p><div class="form-grid"><label>Full name<input name="name" value="${currentUser?.name || ""}" required autocomplete="name"></label><label>Mobile number<input name="phone" value="${currentUser?.phone || ""}" required type="tel"></label><label>Email address<input name="email" value="${currentUser?.email || ""}" type="email" required></label><label>Barangay<input name="barangay" required></label><label class="full">Complete address<textarea name="address" rows="2" required></textarea></label><label>City / Municipality<input name="city" value="Calbayog City" required></label><label>Province<input name="province" value="Samar" required></label></div><label>Order type</label><div class="option-row"><label><input type="radio" name="orderType" value="Delivery" checked> Delivery</label><label><input type="radio" name="orderType" value="Store Pickup"> Store pickup</label></div><label>Payment method</label><div class="option-row"><label><input type="radio" name="payment" value="Cash on Delivery" checked> Cash on delivery</label><label><input type="radio" name="payment" value="Cash on Pickup"> Cash on pickup</label><label><input type="radio" name="payment" value="GCash"> GCash</label><label><input type="radio" name="payment" value="Bank Transfer"> Bank transfer</label></div><div class="order-box"><p><span>Items</span><b id="checkout-items-subtotal">${money(subtotal)}</b></p><p><span>Delivery fee</span><b id="checkout-delivery-fee">${fee ? money(fee) : "FREE"}</b></p><p><span>Total</span><b id="checkout-total">${money(subtotal + fee)}</b></p></div><button class="btn btn-primary" data-place-order type="button" style="width:100%">Place order securely <span>→</span></button></form>`;
  updateCheckoutTotals();
  closeCart();
  openModal("#checkout-modal");
}
async function submitOrder(e) {
  e.preventDefault();
  if (!supabaseReady || !currentUser?.id)
    return toast("Please log in before placing an order.");
  if (!(await validateCartProducts())) return;
  const form = e.target || e,
    data = Object.fromEntries(new FormData(form));
  const items = cart.map((r) => ({
    product_id: r.id,
    product_name: products.find((p) => p.id === r.id).name,
    quantity: r.quantity,
  }));
  const { data: order, error } = await supabaseClient.rpc("place_order", {
    p_customer_name: data.name,
    p_customer_email: data.email,
    p_customer_phone: data.phone,
    p_delivery_address: {
      barangay: data.barangay,
      address: data.address,
      city: data.city,
      province: data.province,
    },
    p_order_type: data.orderType,
    p_payment_method: data.payment,
    p_items: items,
  });
  if (error) {
    if (error.message.includes("permission denied for function place_order")) {
      toast("Order function is not enabled in Supabase. Run the SQL from supabase-schema.sql in your Supabase SQL editor.");
    } else if (error.message.includes("Insufficient stock"))
      toast("Some items are no longer available. Please review your cart.");
    else if (error.message.includes("is no longer available"))
      toast(error.message);
    else toast(error.message);
    await loadSupabaseData();
    return;
  }
  const subtotal = Number(order.subtotal),
    fee = Number(order.delivery_fee);
  lastOrder = {
    number: order.order_number,
    ...data,
    items: cart.map((r) => ({
      ...r,
      name: products.find((p) => p.id === r.id).name,
      price: products.find((p) => p.id === r.id).price,
      image: products.find((p) => p.id === r.id).image,
    })),
    subtotal,
    fee,
    total: Number(order.total),
    date: new Date(order.created_at).toLocaleDateString("en-PH"),
    status: order.status,
  };
  localStorage.setItem("otop-last-order", JSON.stringify(lastOrder));
  cart = [];
  save();
  await loadSupabaseData();
  $("#checkout-content").innerHTML =
    `<div class="confirmation"><div class="success-icon">✓</div><p class="eyebrow">THANK YOU, ${data.name.split(" ")[0].toUpperCase()}</p><h2>Order successful!</h2><p>Your order has been securely recorded.</p><div class="order-box"><p><span>Order number</span><b>${order.order_number}</b></p><p><span>Order status</span><b>${order.status}</b></p><p><span>Total amount</span><b>${money(Number(order.total))}</b></p><p><span>Method</span><b>${data.orderType}</b></p></div><button class="btn btn-primary" data-track>Track my order →</button></div>`;
  toast("Order successfully placed!");
}
async function validateCartProducts() {
  const cartProducts = cart.map((row) => ({
    row,
    product: products.find((product) => product.id === row.id),
  }));
  const missingNames = cartProducts
    .filter(({ product }) => !product)
    .map(({ row }) => row.id);
  if (missingNames.length) {
    toast("Your cart has outdated products. Remove them and add the products again.");
    return false;
  }

  const localProductNames = new Set(
    seedProducts.map((product) => normalizeProductName(product.name)),
  );
  const names = [...new Set(cartProducts.map(({ product }) => product.name))];
  const { data, error } = await supabaseClient
    .from("products")
    .select(
      "id,name,description,price,stock,image,producer,featured,created_at,categories(slug)",
    )
    .eq("status", "active")
    .in("name", names);
  if (error) {
    console.warn("Could not verify checkout products:", error.message);
    toast("Could not verify product availability. Please try again.");
    return false;
  }

  if (!data || data.length === 0) {
    const hasUnseededLocalProducts = cartProducts.some(({ product }) =>
      localProductNames.has(normalizeProductName(product.name)),
    );
    if (hasUnseededLocalProducts) {
      toast("This sample product is not in Supabase inventory yet. Run the updated supabase-schema.sql in Supabase SQL Editor, then refresh.");
      return false;
    }
    toast("Some items are no longer available. Please review your cart.");
    return false;
  }

  const liveProducts = (data || []).map(dbProduct);
  const unavailable = [];
  const insufficient = [];
  let catalogChanged = false;
  const replacements = new Map();

  for (const { row, product } of cartProducts) {
    const liveProduct = liveProducts.find(
      (candidate) =>
        normalizeProductName(candidate.name) === normalizeProductName(product.name) &&
        candidate.category === product.category,
    );

    if (!liveProduct) {
      unavailable.push(product.name);
      continue;
    }

    if (row.quantity > liveProduct.stock)
      insufficient.push(`${product.name} (${liveProduct.stock} available)`);
    if (
      row.id !== liveProduct.id ||
      product.price !== liveProduct.price ||
      product.stock !== liveProduct.stock
    )
      catalogChanged = true;
    replacements.set(row.id, liveProduct);
  }

  if (unavailable.length) {
    const containsUnseededLocalProduct = cartProducts.some(
      ({ product }) =>
        unavailable.includes(product.name) &&
        localProductNames.has(normalizeProductName(product.name)),
    );
    if (containsUnseededLocalProduct) {
      toast("This sample product is not in Supabase inventory yet. Run the updated supabase-schema.sql in Supabase SQL Editor, then refresh.");
      return false;
    }
    toast(
      `${unavailable.join(", ")} ${unavailable.length === 1 ? "is" : "are"} no longer available. Remove ${unavailable.length === 1 ? "it" : "them"} from your cart.`,
    );
    return false;
  }

  products = products.map((product) => {
    const refreshed = liveProducts.find(
      (candidate) =>
        normalizeProductName(candidate.name) === normalizeProductName(product.name) &&
        candidate.category === product.category,
    );
    return refreshed || product;
  });

  cart = cart.map((row) => {
    const replacement = replacements.get(row.id);
    return replacement ? { ...row, id: replacement.id } : row;
  });
  save();
  renderProducts();
  renderCart();

  if (insufficient.length) {
    toast(
      `Not enough stock for ${insufficient.join(", ")}. Please adjust your cart.`,
    );
    return false;
  }
  if (catalogChanged) {
    updateCheckoutTotals();
    toast("Product details were refreshed. Review the updated order and try again.");
    return false;
  }
  return true;
}
async function renderAdmin() {
  if (!currentUser?.is_admin) {
    toast("Superadmin access required.");
    return;
  }
  let orders = [];
  const result = await supabaseClient
    .from("orders")
    .select("order_number,customer_name,total,status,created_at")
    .order("created_at", { ascending: false })
    .limit(100);
  if (!result.error) orders = result.data;
  $("#admin-content").innerHTML =
    `<p class="eyebrow">PROTECTED MANAGEMENT</p><h2>Superadmin dashboard</h2><p class="muted">Only authorized superadmins can view orders and manage products.</p><div class="admin-stats"><div class="stat"><span>Products</span><b>${products.length}</b></div><div class="stat"><span>Categories</span><b>${categories.length}</b></div><div class="stat"><span>Orders</span><b>${orders.length}</b></div><div class="stat"><span>Low stock</span><b>${products.filter((p) => p.stock < 10).length}</b></div></div><h3>Add product</h3><form id="admin-product-form" class="checkout-form"><div class="form-grid"><label>Product name<input name="name" required></label><label>Category<select name="category">${categories.map((c) => `<option value="${c.id}">${c.name}</option>`).join("")}</select></label><label>Price<input name="price" type="number" min="0" required></label><label>Stock<input name="stock" type="number" min="0" required></label><label>Producer<input name="producer" required></label><label>Description<input name="description" required></label></div><button class="btn btn-primary" type="submit">Save product →</button></form><h3>All customer orders</h3>${orders.length ? `<table class="admin-table"><tr><th>Order</th><th>Customer</th><th>Total</th><th>Status</th></tr>${orders.map((o) => `<tr><td>${o.order_number}</td><td>${o.customer_name}</td><td>${money(Number(o.total))}</td><td><select data-status><option>${o.status}</option><option>Confirmed</option><option>Preparing</option><option>Ready for Pickup</option><option>Out for Delivery</option><option>Completed</option><option>Cancelled</option></select></td></tr>`).join("")}</table>` : "<p class='muted'>No orders yet.</p>"}`;
}
function track() {
  if (!lastOrder) return toast("No order found yet. Place an order first.");
  $("#checkout-content").innerHTML =
    `<div class="confirmation"><p class="eyebrow">ORDER TRACKING</p><h2>${lastOrder.number}</h2><p>Current status: <b>${lastOrder.status}</b></p><div class="tracking">${["Order Placed", "Confirmed", "Preparing", "Out for Delivery", "Completed"].map((s, i) => `<div class="track-step ${i === 0 ? "done" : ""}"><b>${i === 0 ? "✓" : "○"}</b><span>${s}</span></div>`).join("")}</div></div>`;
  openModal("#checkout-modal");
}
document.addEventListener("click", (e) => {
  const target = e.target.closest ? e.target.closest("[data-view]") : e.target;
  const addTarget = e.target.closest ? e.target.closest("[data-add]") : null;
  const addDetailTarget = e.target.closest ? e.target.closest("[data-add-detail]") : null;
  const categoryTarget = e.target.closest ? e.target.closest("[data-category]") : null;
  const cartQtyTarget = e.target.closest ? e.target.closest("[data-cart-qty]") : null;
  const removeTarget = e.target.closest ? e.target.closest("[data-remove]") : null;
  const checkoutTarget = e.target.closest ? e.target.closest("[data-checkout]") : null;
  const closeModalTarget = e.target.closest ? e.target.closest("[data-close-modal]") : null;
  const closeCartTarget = e.target.closest ? e.target.closest("[data-close-cart]") : null;
  const trackTarget = e.target.closest ? e.target.closest("[data-track]") : null;
  const authModeTarget = e.target.closest ? e.target.closest("[data-auth-mode]") : null;
  const orderHistoryTarget = e.target.closest ? e.target.closest("[data-order-history]") : null;
  const ordersBackTarget = e.target.closest ? e.target.closest("[data-orders-back]") : null;
  const cancelOrderTarget = e.target.closest ? e.target.closest("[data-cancel-order]") : null;
  const superadminTarget = e.target.closest ? e.target.closest("[data-superadmin]") : null;
  const logoutTarget = e.target.closest ? e.target.closest("[data-logout]") : null;

  if (target) showProduct(target.dataset.view);
  if (addTarget) add(addTarget.dataset.add);
  if (addDetailTarget) {
    add(addDetailTarget.dataset.addDetail);
    closeModals();
  }
  if (categoryTarget) goToProductsView(categoryTarget.dataset.category);
  if (cartQtyTarget) {
    const r = cart.find((x) => x.id === cartQtyTarget.dataset.id),
      p = products.find((x) => x.id === cartQtyTarget.dataset.id);
    r.quantity += Number(cartQtyTarget.dataset.cartQty);
    if (r.quantity < 1) cart = cart.filter((x) => x.id !== r.id);
    if (r.quantity > p.stock) r.quantity = p.stock;
    save();
    renderCart();
  }
  if (removeTarget) {
    cart = cart.filter((x) => x.id !== removeTarget.dataset.remove);
    save();
    renderCart();
    toast("Product removed from cart.");
  }
  if (checkoutTarget) checkout();
  if (closeModalTarget) closeModals();
  if (closeCartTarget) closeCart();
  if (trackTarget) {
    closeModals();
    track();
  }
  if (authModeTarget) renderAuth(authModeTarget.dataset.authMode);
  if (orderHistoryTarget) renderOrderHistory();
  if (ordersBackTarget) renderAuth();
  if (cancelOrderTarget)
    cancelCustomerOrder(cancelOrderTarget.dataset.cancelOrder, cancelOrderTarget);
  if (superadminTarget) {
    closeModals();
    renderAdmin();
    openModal("#admin-modal");
  }
  if (logoutTarget) {
    if (supabaseReady) supabaseClient.auth.signOut();
    currentUser = null;
    localStorage.removeItem("otop-current-user");
    closeModals();
    save();
    toast("You have been logged out.");
  }
});
document.addEventListener("click", (e) => {
  const placeOrderTarget = e.target.closest ? e.target.closest("[data-place-order]") : e.target;
  if (placeOrderTarget) {
    const form = $("#checkout-form"),
      required = [...form.querySelectorAll("[required]")];
    const missing = required.find((field) => !field.value.trim());
    if (missing) {
      toast("Please complete the highlighted checkout fields.");
      missing.focus();
      return;
    }
    submitOrder({ preventDefault: () => {}, target: form });
  }
});
document.addEventListener("submit", async (e) => {
  if (e.target.id === "admin-product-form") {
    e.preventDefault();
    if (!currentUser?.is_admin) return toast("Superadmin access required.");
    const d = Object.fromEntries(new FormData(e.target)),
      category = categories.find((c) => c.id === d.category),
      categoryResult = await supabaseClient
        .from("categories")
        .select("id")
        .eq("slug", category?.id)
        .single();
    if (categoryResult.error) return toast(categoryResult.error.message);
    const { error } = await supabaseClient
      .from("products")
      .insert({
        name: d.name,
        slug: `${d.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${Date.now()}`,
        category_id: categoryResult.data.id,
        description: d.description,
        price: Number(d.price),
        stock: Number(d.stock),
        image: "🛍️",
        producer: d.producer,
        featured: false,
        status: "active",
      });
    if (error) return toast(error.message);
    await loadSupabaseData();
    await renderAdmin();
    toast("Product added to Supabase catalog.");
  }
});
document.addEventListener("submit", async (e) => {
  if (e.target.id === "register-form") {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.target));
    if (d.password !== d.confirmPassword)
      return toast("Passwords do not match.");
    if (!supabaseReady)
      return toast("Account service is unavailable. Please try again later.");
    const { data, error } = await supabaseClient.auth.signUp({
      email: d.email,
      password: d.password,
      options: { data: { full_name: d.name, phone: d.phone } },
    });
    if (error) return toast(error.message);
    if (data.user) {
      const { error: profileError } = await supabaseClient
        .from("profiles")
        .upsert({ id: data.user.id, full_name: d.name, phone: d.phone });
      if (profileError) return toast(profileError.message);
    }
    closeModals();
    toast("Account created. Check your email to confirm registration.");
  }
  if (e.target.id === "login-form") {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.target));
    if (!supabaseReady)
      return toast("Account service is unavailable. Please try again later.");
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email: d.email,
      password: d.password,
    });
    if (error) return toast(error.message);
    currentUser = {
      id: data.user.id,
      name: data.user.user_metadata?.full_name || data.user.email,
      email: data.user.email,
      phone: data.user.user_metadata?.phone || "",
    };
    localStorage.setItem("otop-current-user", JSON.stringify(currentUser));
    closeModals();
    save();
    toast(`Welcome back, ${currentUser.name.split(" ")[0]}!`);
  }
});
document.addEventListener("click", (e) => {
  const detailQtyTarget = e.target.closest ? e.target.closest("[data-detail-qty]") : e.target;
  if (detailQtyTarget) {
    const q = $("#detail-qty"),
      p = products.find((x) => x.id === $("#product-modal").dataset.product);
    q.textContent = Math.min(
      p.stock,
      Math.max(1, Number(q.textContent) + Number(detailQtyTarget.dataset.detailQty)),
    );
  }
});
document.addEventListener("submit", (e) => {
  if (e.target.id === "checkout-form") submitOrder(e);
  if (e.target.id === "contact-form") {
    e.preventDefault();
    toast(
      "The contact form is not connected yet. Please call +63 997 884 3842 or email pasalubongcenter75@gmail.com.",
    );
  }
});
document.addEventListener(
  "invalid",
  (e) => {
    if (e.target.form?.id === "checkout-form") {
      e.preventDefault();
      toast("Please complete the highlighted checkout fields.");
      e.target.focus();
    }
  },
  true,
);
$("#search-input").addEventListener("input", renderProducts);
$("#category-filter").addEventListener("change", renderProducts);
$("#sort-select").addEventListener("change", renderProducts);
$("#cart-button").addEventListener("click", openCart);
$("#auth-button").addEventListener("click", () => showAuth());
$("#close-cart").addEventListener("click", closeCart);
$("#overlay").addEventListener("click", closeCart);
$("#menu-toggle").addEventListener("click", () =>
  $("#main-nav").classList.toggle("open"),
);
window.addEventListener("hashchange", () => {
  if (location.hash === "#track") track();
});
renderCategories();
renderProducts();
save();
loadSupabaseSession();
loadSupabaseData();
document.addEventListener("click", (e) => {
  const logoutTarget = e.target.closest ? e.target.closest("[data-logout]") : null;
  if (logoutTarget && supabaseReady) supabaseClient.auth.signOut();
});
document.addEventListener("change", async (e) => {
  const orderTypeTarget = e.target.closest ? e.target.closest('#checkout-form [name="orderType"]') : null;
  if (orderTypeTarget) {
    updateCheckoutTotals();
    return;
  }
  const statusTarget = e.target.closest ? e.target.closest("[data-status]") : null;
  if (!statusTarget || !supabaseReady || !currentUser) return;
  const orderNumber = statusTarget
    .closest("tr")
    ?.querySelector("td")
    ?.textContent.trim();
  const { error } = await supabaseClient
    .from("orders")
    .update({ status: e.target.value })
    .eq("order_number", orderNumber);
  if (error) toast(error.message);
  else toast("Order status updated.");
});
const renderCheckout = checkout;
checkout = function () {
  const previousForm = $("#checkout-form"),
    values = previousForm
      ? Object.fromEntries(new FormData(previousForm).entries())
      : null;
  renderCheckout();
  const nextForm = $("#checkout-form");
  if (!values || !nextForm) return;
  nextForm.querySelectorAll("[name]").forEach((field) => {
    const value = values[field.name];
    if (value === undefined) return;
    if (field.type === "radio" || field.type === "checkbox")
      field.checked = field.value === value;
    else field.value = value;
  });
  updateCheckoutTotals();
};
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-wrap")) closeModals();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && $(".modal-wrap.open")) closeModals();
});
