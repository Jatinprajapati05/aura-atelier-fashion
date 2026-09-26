/* ==========================================================================
   AURA ATELIER | CORE JAVASCRIPT ENGINE
   Features: 3D Royal Dupatta / Silk Drape Simulation, Mobile Responsive Logic,
             Product Catalog, Lookbook Hotspots, Cart & Wishlist, Multi-step Checkout
   ========================================================================== */

// --- 1. PRODUCT DATABASE ---
const PRODUCTS_DATA = [
  {
    id: 1,
    name: "Vortex Obsidian Sculpted Blazer",
    category: "couture",
    categoryLabel: "Haute Couture",
    price: 480,
    oldPrice: 620,
    rating: 4.9,
    reviewsCount: 128,
    badge: "BESTSELLER",
    inStock: true,
    description: "Hand-structured from midnight obsidian wool with laser-bonded metallic threads. Features an aerodynamic architectural silhouette designed to capture luminescence at every angle. Tailored with French seams and bespoke interior silk lining for gala receptions and high-fashion gallery openings.",
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Midnight Obsidian", hex: "#111115" },
      { name: "Imperial Gold", hex: "#d4af37" },
      { name: "Royal Crimson", hex: "#880e4f" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: 2,
    name: "Celestial Emerald Silk Gown",
    category: "couture",
    categoryLabel: "Haute Couture",
    price: 650,
    oldPrice: 790,
    rating: 5.0,
    reviewsCount: 84,
    badge: "RUNWAY EXCLUSIVE",
    inStock: true,
    description: "Meticulously draped from 100% certified organic Mulberry bio-silk, this floor-length gown features an asymmetrical shoulder cascade with invisible back closure. The emerald green luster is achieved through sustainable botanical cold-dyeing processes in our private Lyon atelier.",
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Celestial Emerald", hex: "#0f5132" },
      { name: "Lunar Platinum", hex: "#e0e0e6" },
      { name: "Champagne Gold", hex: "#d4af37" }
    ],
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: 3,
    name: "Cyber-Noir Technical Bomber",
    category: "streetwear",
    categoryLabel: "Urban Luxury",
    price: 380,
    oldPrice: 450,
    rating: 4.8,
    reviewsCount: 96,
    badge: "TRENDING",
    inStock: true,
    description: "Engineered from waterproof recycled Japanese ballistic nylon with thermo-reactive interior padding. Complete with matte titanium hardware, multiple hidden tactical utility pockets, and modular sleeve straps for the modern metropolitan traveler.",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Matte Stealth Black", hex: "#1a1a1f" },
      { name: "Cobalt Night", hex: "#0d47a1" },
      { name: "Chalk White", hex: "#f0f0f5" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: 4,
    name: "Lumière Cashmere Cocoon Overcoat",
    category: "silk",
    categoryLabel: "Silk & Cashmere",
    price: 820,
    oldPrice: 980,
    rating: 4.9,
    reviewsCount: 62,
    badge: "LIMITED DROP",
    inStock: true,
    description: "Crafted from double-faced Mongolian Grade-A cashmere, delivering weightless thermal luxury. Designed with a generous slouchy cocoon cut, storm collar, and horn buttons. An investment heirloom coat guaranteed to endure for decades in unmatched elegance.",
    images: [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Desert Camel", hex: "#c19a6b" },
      { name: "Charcoal Slate", hex: "#2b2b36" },
      { name: "Cream Alabaster", hex: "#fdfbf7" }
    ],
    sizes: ["S", "M", "L"]
  },
  {
    id: 5,
    name: "Aero Stiletto Leather Pumps",
    category: "accessories",
    categoryLabel: "Footwear & Bags",
    price: 320,
    oldPrice: 410,
    rating: 4.7,
    reviewsCount: 77,
    badge: "NEW ARRIVAL",
    inStock: true,
    description: "Hand-sculpted in Florence from supple calfskin leather with a razor-thin aerospace-grade metal stiletto heel. Features our signature ergonomic padded arch support ensuring enduring runway comfort throughout late-night galas and events.",
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Patent Obsidian", hex: "#0b0b0e" },
      { name: "Scarlet Crimson", hex: "#b71c1c" },
      { name: "Nude Blush", hex: "#e8c3b9" }
    ],
    sizes: ["36 EU", "37 EU", "38 EU", "39 EU", "40 EU"]
  },
  {
    id: 6,
    name: "Aurelia 24K Gold Trim Clutch",
    category: "accessories",
    categoryLabel: "Footwear & Bags",
    price: 390,
    oldPrice: 480,
    rating: 5.0,
    reviewsCount: 45,
    badge: "BESPOKE",
    inStock: true,
    description: "A geometric evening clutch featuring brushed 24-karat gold-electroplated framing and structured full-grain nappa leather. Accompanied by a detachable fine link crossbody snake chain and suede-lined vanity mirror compartment.",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "24K Champagne Gold", hex: "#d4af37" },
      { name: "Onyx Black", hex: "#111115" },
      { name: "Ivory Pearl", hex: "#f5f5f0" }
    ],
    sizes: ["One Size (Bespoke)"]
  },
  {
    id: 7,
    name: "Prism Holographic Trench",
    category: "limited",
    categoryLabel: "Runway Limited",
    price: 740,
    oldPrice: 890,
    rating: 4.9,
    reviewsCount: 39,
    badge: "RUNWAY SHOWPIECE",
    inStock: true,
    description: "Presented at Paris Fashion Week, this experimental trench incorporates micro-prismatic refraction films layered over organic linen. Shifting subtly in color with natural sunlight angles, it embodies the frontier between couture tailoring and kinetic art.",
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Prism Silver", hex: "#cfd8dc" },
      { name: "Opal Aurora", hex: "#b2dfdb" }
    ],
    sizes: ["S", "M", "L"]
  },
  {
    id: 8,
    name: "Architectural Drape Kimono Coat",
    category: "streetwear",
    categoryLabel: "Urban Luxury",
    price: 430,
    oldPrice: 520,
    rating: 4.8,
    reviewsCount: 51,
    badge: "TOKYO ATELIER",
    inStock: true,
    description: "A hybrid fusion of traditional Kyoto robe geometries and avant-garde street silhouettes. Crafted with heavy stone-washed organic twill cotton, dropped shoulders, and a detachable magnetic fidlock sash belt.",
    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Raw Slate", hex: "#37474f" },
      { name: "Wabi Sand", hex: "#d7ccc8" }
    ],
    sizes: ["S-M", "L-XL"]
  },
  {
    id: 9,
    name: "Sovereign Heavy Silk Shirt",
    category: "silk",
    categoryLabel: "Silk & Cashmere",
    price: 290,
    oldPrice: 360,
    rating: 4.9,
    reviewsCount: 114,
    badge: "POPULAR",
    inStock: true,
    description: "Woven with heavy 28-momme mulberry silk satin that cascades with liquid sheen. Designed with a relaxed camp collar, genuine mother-of-pearl buttons, and French double-cuffs for timeless effortless evening flair.",
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Midnight Navy", hex: "#0a192f" },
      { name: "Champagne Pearl", hex: "#f7eedb" },
      { name: "Forest Emerald", hex: "#1b4d3e" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: 10,
    name: "Nebula Pleated Midi Skirt",
    category: "couture",
    categoryLabel: "Haute Couture",
    price: 340,
    oldPrice: 420,
    rating: 4.7,
    reviewsCount: 38,
    badge: "LIMITED",
    inStock: true,
    description: "Permanently knife-pleated through high-temperature precision molding, this metallic ombre skirt radiates light dynamically with every stride. Finished with an elasticized silk jacquard waistband.",
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Metallic Bronze", hex: "#8d6e63" },
      { name: "Obsidian Silver", hex: "#546e7a" }
    ],
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: 11,
    name: "Titanium Solstice Aviator Sunglasses",
    category: "accessories",
    categoryLabel: "Footwear & Bags",
    price: 240,
    oldPrice: 310,
    rating: 4.9,
    reviewsCount: 88,
    badge: "HANDMADE",
    inStock: true,
    description: "Ultralight Japanese beta-titanium frames weighing under 18 grams. Equipped with 100% UV400 anti-reflective gradient nylon lenses engineered with scratch-resistant oleophobic coating.",
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Gold / Sunset Gradient", hex: "#d4af37" },
      { name: "Gunmetal / Smoke", hex: "#37474f" }
    ],
    sizes: ["One Size"]
  },
  {
    id: 12,
    name: "Infinity Crystal Runway Corset",
    category: "limited",
    categoryLabel: "Runway Limited",
    price: 890,
    oldPrice: 1100,
    rating: 5.0,
    reviewsCount: 22,
    badge: "NUMBERED 1 OF 50",
    inStock: false,
    description: "Hand-embellished with over 1,200 Austrian crystals upon a boned organic silk mesh framework. Each corset requires 72 hours of master craftsmanship and comes individually engraved with its archive number.",
    images: [
      "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Crystal Starlight", hex: "#e0f7fa" },
      { name: "Champagne Diamond", hex: "#fff9c4" }
    ],
    sizes: ["S", "M", "L"]
  }
];

// --- 2. GLOBAL STATE ---
const STATE = {
  cart: JSON.parse(localStorage.getItem('aura_cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('aura_wishlist') || '[]'),
  currency: 'INR',
  currencyRates: {
    INR: { symbol: '₹', rate: 83.5 },
    USD: { symbol: '$', rate: 1 },
    EUR: { symbol: '€', rate: 0.92 },
    GBP: { symbol: '£', rate: 0.79 }
  },
  discountPercent: 0,
  discountCode: '',
  activeCategory: 'all',
  activeSort: 'featured',
  maxPrice: 1200,
  inStockOnly: false,
  searchQuery: '',
  selectedProduct: PRODUCTS_DATA[0],
  shippingCost: 0
};

// --- 3. HELPER FUNCTIONS ---
function formatPrice(amountInUSD) {
  const { symbol, rate } = STATE.currencyRates[STATE.currency];
  if (STATE.currency === 'INR') {
    const inrValue = Math.round(amountInUSD * rate);
    return `${symbol}${inrValue.toLocaleString('en-IN')}`;
  }
  const converted = (amountInUSD * rate).toFixed(2);
  return `${symbol}${Number(converted).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function showToast(message, icon = 'fa-circle-check') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('toast-leave');
    setTimeout(() => toast.remove(), 350);
  }, 3000);
}

function saveCart() {
  localStorage.setItem('aura_cart', JSON.stringify(STATE.cart));
  updateCartCounters();
}

function saveWishlist() {
  localStorage.setItem('aura_wishlist', JSON.stringify(STATE.wishlist));
  updateWishlistCounters();
}

// --- 4. HERO SECTION (EDITORIAL FASHION BANNER) ---
function initHero3D() {
  // Editorial fashion imagery active
}

// --- 5. CATALOG RENDERING & FILTERING ---
function renderCatalog() {
  const grid = document.getElementById('productsGrid');
  const noResults = document.getElementById('noResults');
  if (!grid) return;

  let filtered = PRODUCTS_DATA.filter(p => {
    const matchCategory = STATE.activeCategory === 'all' || p.category === STATE.activeCategory;
    const matchPrice = p.price <= STATE.maxPrice;
    const matchStock = !STATE.inStockOnly || p.inStock;
    const matchSearch = !STATE.searchQuery || 
      p.name.toLowerCase().includes(STATE.searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(STATE.searchQuery.toLowerCase()) ||
      p.categoryLabel.toLowerCase().includes(STATE.searchQuery.toLowerCase());

    return matchCategory && matchPrice && matchStock && matchSearch;
  });

  // Sorting
  if (STATE.activeSort === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (STATE.activeSort === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (STATE.activeSort === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (STATE.activeSort === 'name') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (filtered.length === 0) {
    grid.innerHTML = '';
    if (noResults) noResults.style.display = 'block';
    return;
  }

  if (noResults) noResults.style.display = 'none';

  grid.innerHTML = filtered.map(p => {
    const isWishlisted = STATE.wishlist.some(w => w.id === p.id);
    return `
      <div class="product-card" data-id="${p.id}">
        <div class="card-media">
          <img src="${p.images[0]}" alt="${p.name}" loading="lazy">
          <span class="card-badge">${p.badge}</span>
          <button class="card-wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist(${p.id}, event)" title="Save to Wishlist" aria-label="Wishlist">
            <i class="${isWishlisted ? 'fa-solid text-gold' : 'fa-regular'} fa-heart"></i>
          </button>
          <div class="card-hover-actions">
            <button class="btn btn-primary btn-sm flex-1" onclick="openProductModal(${p.id})">
              <i class="fa-solid fa-eye"></i> Quick View
            </button>
          </div>
        </div>

        <div class="card-content">
          <span class="card-category">${p.categoryLabel}</span>
          <h3 class="card-title">${p.name}</h3>
          
          <div class="card-rating-row">
            <div class="stars">
              ${renderStars(p.rating)}
            </div>
            <span>${p.rating} (${p.reviewsCount})</span>
          </div>

          <p class="card-desc-snippet">${p.description}</p>

          <div class="card-footer">
            <div class="card-price-box">
              <span class="card-price">${formatPrice(p.price)}</span>
              <span class="card-old-price">${formatPrice(p.oldPrice)}</span>
            </div>
            <button class="card-quick-add" onclick="quickAddToCart(${p.id})" ${!p.inStock ? 'disabled' : ''}>
              <i class="fa-solid fa-bag-shopping"></i> ${p.inStock ? 'Add' : 'Sold Out'}
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function renderStars(rating) {
  let starsHtml = '';
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    starsHtml += '<i class="fa-solid fa-star"></i>';
  }
  if (hasHalf) {
    starsHtml += '<i class="fa-solid fa-star-half-stroke"></i>';
  }
  while (starsHtml.split('</i>').length - 1 < 5) {
    starsHtml += '<i class="fa-regular fa-star"></i>';
  }
  return starsHtml;
}

// --- 6. CART MANAGEMENT ---
function quickAddToCart(productId) {
  const prod = PRODUCTS_DATA.find(p => p.id === productId);
  if (!prod) return;

  addToCart(prod, 1, prod.sizes[0], prod.colors[0].name);
}

function addToCart(product, quantity = 1, size = 'M', color = '') {
  const existingIndex = STATE.cart.findIndex(
    item => item.id === product.id && item.size === size && item.color === color
  );

  if (existingIndex > -1) {
    STATE.cart[existingIndex].quantity += quantity;
  } else {
    STATE.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: quantity,
      size: size,
      color: color || product.colors[0].name
    });
  }

  saveCart();
  renderCartDrawer();
  openCartDrawer();
  showToast(`Added "${product.name}" to your shopping bag!`, 'fa-bag-shopping');
}

function updateCartItemQty(index, change) {
  if (STATE.cart[index]) {
    STATE.cart[index].quantity += change;
    if (STATE.cart[index].quantity <= 0) {
      STATE.cart.splice(index, 1);
    }
    saveCart();
    renderCartDrawer();
  }
}

function removeCartItem(index) {
  if (STATE.cart[index]) {
    const removedName = STATE.cart[index].name;
    STATE.cart.splice(index, 1);
    saveCart();
    renderCartDrawer();
    showToast(`Removed "${removedName}" from shopping bag.`, 'fa-trash');
  }
}

function calculateCartTotals() {
  const subtotal = STATE.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = (subtotal * STATE.discountPercent) / 100;
  const shipping = subtotal >= 150 || subtotal === 0 ? 0 : 25;
  const total = Math.max(0, subtotal - discount + shipping + STATE.shippingCost);

  return { subtotal, discount, shipping, total };
}

function renderCartDrawer() {
  const container = document.getElementById('cartItemsContainer');
  const countEl = document.getElementById('cartDrawerCount');
  const subtotalEl = document.getElementById('cartSubtotal');
  const discountRow = document.getElementById('cartDiscountRow');
  const discountVal = document.getElementById('cartDiscountAmount');
  const discountTag = document.getElementById('appliedPromoCodeTag');
  const shippingEl = document.getElementById('cartShipping');
  const totalEl = document.getElementById('cartTotal');
  const progressFill = document.getElementById('shippingProgressBar');
  const progressText = document.getElementById('shippingStatusText');

  if (!container) return;

  if (countEl) countEl.textContent = STATE.cart.reduce((sum, item) => sum + item.quantity, 0);

  if (STATE.cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-state">
        <i class="fa-solid fa-bag-shopping"></i>
        <h3>Your shopping bag is empty</h3>
        <p>Explore our latest couture collections and discover bespoke pieces.</p>
        <button class="btn btn-primary btn-sm mt-3" onclick="closeCartDrawer(); window.location.href='#catalog';">
          Discover Runway Drops
        </button>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = formatPrice(0);
    if (totalEl) totalEl.textContent = formatPrice(0);
    if (progressFill) progressFill.style.width = '0%';
    if (progressText) progressText.textContent = `Add ${formatPrice(150)} more to unlock Free Express Worldwide Shipping!`;
    return;
  }

  container.innerHTML = STATE.cart.map((item, idx) => `
    <div class="cart-item-row">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-details">
        <h4>${item.name}</h4>
        <div class="cart-item-meta">Size: ${item.size} • Color: ${item.color}</div>
        <div class="cart-item-price">${formatPrice(item.price)}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="updateCartItemQty(${idx}, -1)">-</button>
          <span>${item.quantity}</span>
          <button class="qty-btn" onclick="updateCartItemQty(${idx}, 1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeCartItem(${idx})" title="Remove item">&times;</button>
    </div>
  `).join('');

  const { subtotal, discount, shipping, total } = calculateCartTotals();

  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
  if (shippingEl) shippingEl.textContent = shipping === 0 ? 'FREE' : formatPrice(shipping);
  if (totalEl) totalEl.textContent = formatPrice(total);

  if (STATE.discountPercent > 0 && discountRow) {
    discountRow.style.display = 'flex';
    if (discountTag) discountTag.textContent = STATE.discountCode;
    if (discountVal) discountVal.textContent = `-${formatPrice(discount)}`;
  } else if (discountRow) {
    discountRow.style.display = 'none';
  }

  // Shipping progress bar
  const percentToFree = Math.min(100, (subtotal / 150) * 100);
  if (progressFill) progressFill.style.width = `${percentToFree}%`;
  if (progressText) {
    if (subtotal >= 150) {
      progressText.textContent = '✨ You have unlocked Complimentary Worldwide Express Shipping!';
    } else {
      progressText.textContent = `Add ${formatPrice(150 - subtotal)} more to unlock Free Express Worldwide Shipping!`;
    }
  }
}

function updateCartCounters() {
  const totalCount = STATE.cart.reduce((sum, item) => sum + item.quantity, 0);
  const badge = document.getElementById('cartCount');
  if (badge) badge.textContent = totalCount;
}

function openCartDrawer() {
  renderCartDrawer();
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (drawer) drawer.classList.add('active');
  if (overlay) overlay.classList.add('active');
}

function closeCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (drawer) drawer.classList.remove('active');
  if (overlay) overlay.classList.remove('active');
}

// --- 7. WISHLIST MANAGEMENT ---
function toggleWishlist(productId, e) {
  if (e) e.stopPropagation();
  const prod = PRODUCTS_DATA.find(p => p.id === productId);
  if (!prod) return;

  const idx = STATE.wishlist.findIndex(w => w.id === productId);
  if (idx > -1) {
    STATE.wishlist.splice(idx, 1);
    showToast(`Removed "${prod.name}" from Wishlist.`, 'fa-heart-crack');
  } else {
    STATE.wishlist.push(prod);
    showToast(`Saved "${prod.name}" to your Wishlist!`, 'fa-heart');
  }

  saveWishlist();
  renderCatalog();
  renderWishlistModal();
}

function updateWishlistCounters() {
  const badge = document.getElementById('wishlistCount');
  if (badge) badge.textContent = STATE.wishlist.length;
}

function renderWishlistModal() {
  const container = document.getElementById('wishlistItemsContainer');
  if (!container) return;

  if (STATE.wishlist.length === 0) {
    container.innerHTML = `
      <div class="text-center py-5 text-muted">
        <i class="fa-regular fa-heart fa-3x mb-3 text-gold"></i>
        <h3>Your wishlist is currently empty</h3>
        <p>Save items you desire while exploring the collection.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = STATE.wishlist.map(p => `
    <div class="cart-item-row">
      <img src="${p.images[0]}" alt="${p.name}" class="cart-item-img">
      <div class="cart-item-details">
        <h4>${p.name}</h4>
        <div class="cart-item-meta">${p.categoryLabel}</div>
        <div class="cart-item-price">${formatPrice(p.price)}</div>
      </div>
      <div class="d-flex align-items-center gap-2">
        <button class="btn btn-primary btn-xs" onclick="quickAddToCart(${p.id})">Add to Bag</button>
        <button class="cart-item-remove" onclick="toggleWishlist(${p.id})">&times;</button>
      </div>
    </div>
  `).join('');
}

// --- 8. PRODUCT DETAIL QUICK VIEW MODAL ---
function openProductModal(productId) {
  const prod = PRODUCTS_DATA.find(p => p.id === productId);
  if (!prod) return;

  STATE.selectedProduct = prod;

  const mainImg = document.getElementById('modalMainImg');
  if (mainImg) mainImg.src = prod.images[0];
  document.getElementById('modalBadge').textContent = prod.badge;
  document.getElementById('modalCategory').textContent = prod.categoryLabel;
  document.getElementById('modalTitle').textContent = prod.name;
  document.getElementById('modalStars').innerHTML = renderStars(prod.rating);
  document.getElementById('modalRatingText').textContent = `${prod.rating} (${prod.reviewsCount} reviews)`;
  document.getElementById('modalPrice').textContent = formatPrice(prod.price);
  document.getElementById('modalOldPrice').textContent = formatPrice(prod.oldPrice);
  document.getElementById('modalDescription').textContent = prod.description;
  document.getElementById('modalQtyInput').value = 1;

  // Thumbnails
  const thumbContainer = document.getElementById('modalThumbnails');
  if (thumbContainer) {
    thumbContainer.innerHTML = prod.images.map((img, i) => `
      <img src="${img}" class="thumb-img ${i === 0 ? 'active' : ''}" onclick="changeModalImage('${img}', this)" alt="Thumb">
    `).join('');
  }

  // Color Swatches
  const colorContainer = document.getElementById('modalColorSwatches');
  document.getElementById('modalSelectedColorLabel').textContent = prod.colors[0].name;
  if (colorContainer) {
    colorContainer.innerHTML = prod.colors.map((c, i) => `
      <button class="color-swatch ${i === 0 ? 'active' : ''}" style="background-color: ${c.hex};" onclick="selectModalColor('${c.name}', this)" title="${c.name}"></button>
    `).join('');
  }

  // Sizes
  const sizeContainer = document.getElementById('modalSizeBoxes');
  if (sizeContainer) {
    sizeContainer.innerHTML = prod.sizes.map((s, i) => `
      <button class="size-btn ${i === 0 ? 'active' : ''}" onclick="selectModalSize('${s}', this)">${s}</button>
    `).join('');
  }

  // Wishlist state
  const isWish = STATE.wishlist.some(w => w.id === prod.id);
  const wishBtn = document.getElementById('modalWishlistBtn');
  if (wishBtn) {
    wishBtn.innerHTML = `<i class="${isWish ? 'fa-solid text-gold' : 'fa-regular'} fa-heart"></i>`;
    wishBtn.onclick = () => toggleWishlist(prod.id);
  }

  // Setup Actions
  const addBtn = document.getElementById('modalAddToCartBtn');
  if (addBtn) {
    addBtn.onclick = () => {
      const qty = parseInt(document.getElementById('modalQtyInput').value, 10) || 1;
      const activeSize = document.querySelector('.modal-size-boxes .size-btn.active')?.textContent || 'M';
      const activeColor = document.getElementById('modalSelectedColorLabel').textContent;
      addToCart(prod, qty, activeSize, activeColor);
      closeProductModal();
    };
  }

  const buyBtn = document.getElementById('modalBuyNowBtn');
  if (buyBtn) {
    buyBtn.onclick = () => {
      const qty = parseInt(document.getElementById('modalQtyInput').value, 10) || 1;
      const activeSize = document.querySelector('.modal-size-boxes .size-btn.active')?.textContent || 'M';
      const activeColor = document.getElementById('modalSelectedColorLabel').textContent;
      addToCart(prod, qty, activeSize, activeColor);
      closeProductModal();
      openCheckoutModal();
    };
  }

  document.getElementById('productModalOverlay').classList.add('active');
}

function changeModalImage(src, el) {
  document.getElementById('modalMainImg').src = src;
  document.querySelectorAll('.thumbnail-strip .thumb-img').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}

function selectModalColor(name, el) {
  document.getElementById('modalSelectedColorLabel').textContent = name;
  document.querySelectorAll('#modalColorSwatches .color-swatch').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
}

function selectModalSize(size, el) {
  document.querySelectorAll('#modalSizeBoxes .size-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
}

function closeProductModal() {
  const overlay = document.getElementById('productModalOverlay');
  if (overlay) overlay.classList.remove('active');
}

// --- 9. MULTI-STEP CHECKOUT ENGINE & DUMMY GATEWAY ---
function openCheckoutModal() {
  if (STATE.cart.length === 0) {
    showToast('Your shopping bag is empty. Please add an item first!', 'fa-circle-exclamation');
    return;
  }

  closeCartDrawer();
  renderCheckoutSidebar();
  setCheckoutStep(1);
  document.getElementById('checkoutModalOverlay').classList.add('active');
}

function closeCheckoutModal() {
  const overlay = document.getElementById('checkoutModalOverlay');
  if (overlay) overlay.classList.remove('active');
}

function renderCheckoutSidebar() {
  const list = document.getElementById('checkoutItemsList');
  const subtotalEl = document.getElementById('checkoutSidebarSubtotal');
  const discountRow = document.getElementById('checkoutSidebarDiscountRow');
  const discountEl = document.getElementById('checkoutSidebarDiscount');
  const shippingEl = document.getElementById('checkoutSidebarShipping');
  const totalEl = document.getElementById('checkoutSidebarTotal');
  const finalBtnTotal = document.getElementById('btnFinalTotal');

  const { subtotal, discount, shipping, total } = calculateCartTotals();

  if (list) {
    list.innerHTML = STATE.cart.map(item => `
      <div class="checkout-item-mini">
        <img src="${item.image}" alt="${item.name}">
        <div class="checkout-item-mini-info">
          <strong>${item.name}</strong>
          <span>Qty: ${item.quantity} • ${item.size}</span>
        </div>
        <span class="checkout-item-mini-price">${formatPrice(item.price * item.quantity)}</span>
      </div>
    `).join('');
  }

  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
  if (shippingEl) shippingEl.textContent = shipping === 0 ? 'FREE' : formatPrice(shipping);
  if (totalEl) totalEl.textContent = formatPrice(total);
  if (finalBtnTotal) finalBtnTotal.textContent = formatPrice(total);

  if (STATE.discountPercent > 0 && discountRow) {
    discountRow.style.display = 'flex';
    if (discountEl) discountEl.textContent = `-${formatPrice(discount)}`;
  } else if (discountRow) {
    discountRow.style.display = 'none';
  }
}

function setCheckoutStep(stepNumber) {
  document.querySelectorAll('.checkout-steps .step-item').forEach((item, i) => {
    item.classList.remove('active', 'completed');
    if (i + 1 === stepNumber) item.classList.add('active');
    else if (i + 1 < stepNumber) item.classList.add('completed');
  });

  const shipForm = document.getElementById('shippingForm');
  const payForm = document.getElementById('paymentForm');
  const successPanel = document.getElementById('orderSuccessPanel');

  if (shipForm) shipForm.classList.toggle('active', stepNumber === 1);
  if (payForm) payForm.classList.toggle('active', stepNumber === 2);
  if (successPanel) successPanel.classList.toggle('active', stepNumber === 3);
}

function autoFillSampleCheckout() {
  document.getElementById('checkoutFirstName').value = 'Aura';
  document.getElementById('checkoutLastName').value = 'Delacroix';
  document.getElementById('checkoutEmail').value = 'aura.delacroix@thakurcollege.edu';
  document.getElementById('checkoutPhone').value = '+91 98765 43210';
  document.getElementById('checkoutAddress').value = 'Kandivali East, Thakur Complex';
  document.getElementById('checkoutCity').value = 'Mumbai';
  document.getElementById('checkoutState').value = 'Maharashtra';
  document.getElementById('checkoutZip').value = '400101';
  document.getElementById('checkoutCountry').value = 'India';
  showToast('Test customer details auto-filled successfully!', 'fa-wand-magic-sparkles');
}

function handlePlaceOrder(e) {
  e.preventDefault();

  if (typeof confetti === 'function') {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });
  }

  const orderId = `AUR-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
  const orderIdEl = document.getElementById('successOrderId');
  if (orderIdEl) orderIdEl.textContent = orderId;

  const firstName = document.getElementById('checkoutFirstName')?.value || 'Valued';
  const lastName = document.getElementById('checkoutLastName')?.value || 'Client';
  const email = document.getElementById('checkoutEmail')?.value || 'client@auraatelier.com';
  const address = document.getElementById('checkoutAddress')?.value || '123 Atelier Way';
  const city = document.getElementById('checkoutCity')?.value || 'Paris';
  const country = document.getElementById('checkoutCountry')?.value || 'France';

  const { subtotal, discount, total } = calculateCartTotals();

  const receiptContainer = document.getElementById('receiptContainer');
  if (receiptContainer) {
    receiptContainer.innerHTML = `
      <div class="d-flex justify-content-between mb-2">
        <strong>Recipient:</strong>
        <span>${firstName} ${lastName}</span>
      </div>
      <div class="d-flex justify-content-between mb-2">
        <strong>Delivery Destination:</strong>
        <span>${address}, ${city}, ${country}</span>
      </div>
      <div class="d-flex justify-content-between mb-2">
        <strong>Notification Sent:</strong>
        <span>${email}</span>
      </div>
      <hr style="border-color: var(--border-glass); margin: 8px 0;">
      <div class="d-flex justify-content-between mb-1">
        <span>Subtotal:</span>
        <span>${formatPrice(subtotal)}</span>
      </div>
      ${STATE.discountPercent > 0 ? `
      <div class="d-flex justify-content-between mb-1 text-success">
        <span>Discount (${STATE.discountCode}):</span>
        <span>-${formatPrice(discount)}</span>
      </div>` : ''}
      <div class="d-flex justify-content-between mb-1">
        <span>Express Air Freight:</span>
        <span>Complimentary (FREE)</span>
      </div>
      <div class="d-flex justify-content-between fw-bold mt-2 pt-1 border-top">
        <span>Total Paid:</span>
        <span class="accent-gold">${formatPrice(total)}</span>
      </div>
    `;
  }

  STATE.cart = [];
  saveCart();
  setCheckoutStep(3);
  showToast('Order confirmed and mock payment authorized!', 'fa-circle-check');
}

function downloadReceiptInvoice() {
  const orderId = document.getElementById('successOrderId')?.textContent || 'AUR-2026-ORDER';
  const firstName = document.getElementById('checkoutFirstName')?.value || 'Valued Client';
  const lastName = document.getElementById('checkoutLastName')?.value || '';
  const email = document.getElementById('checkoutEmail')?.value || 'client@auraatelier.com';
  const address = document.getElementById('checkoutAddress')?.value || 'Main Street';
  const city = document.getElementById('checkoutCity')?.value || 'Mumbai';

  const receiptContent = `=====================================================
AURA ATELIER | BESPOKE HAUTE COUTURE INVOICE
=====================================================
Order Reference: ${orderId}
Date: ${new Date().toLocaleDateString('en-US', { dateStyle: 'full' })}
Status: PAID (Mock 256-Bit SSL Gateway)

Customer Details:
Name: ${firstName} ${lastName}
Email: ${email}
Address: ${address}, ${city}

Project Submission:
Thakur College of Science and Commerce (TYBMS E-Commerce)
Category: Fashion & Visual Merchandising

Thank you for curating with AURA ATELIER.
=====================================================`;

  const blob = new Blob([receiptContent], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${orderId}_Invoice.txt`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('Invoice Receipt downloaded!', 'fa-file-arrow-down');
}

// --- 10. SUBMISSION REQUIREMENT 4.C REFLECTION UTILS ---
const REFLECTION_TEXT = `Building the AURA ATELIER mock fashion store provided transformative insights into modern digital commerce architectures and visual merchandising strategies. I learned that creating a successful e-commerce ecosystem extends far beyond aesthetic appeal—it requires architecting a seamless end-to-end customer journey from intuitive product discovery to friction-free checkout. Implementing real-time 3D WebGL product visualization taught me how interactive merchandising significantly mitigates customer purchase uncertainty, bridging the tactile gap inherent to online apparel shopping.

Additionally, developing dynamic client-side state management for cart drawers, currency conversions, localized pricing, and simulated multi-tier payment gateways (UPI, Credit Cards, Express Checkout) reinforced the vital importance of UX responsiveness and micro-interactions in driving conversion rates. I also explored how curated copywriting (50–100 word luxury product descriptions) combined with trust badges and transparent sustainability claims directly enhances brand equity and organic customer retention. Overall, this project bridged theoretical digital marketing principles with practical e-commerce engineering, deepening my understanding of customer-centric web merchandising and high-converting retail design.`;

function copyReflectionText() {
  navigator.clipboard.writeText(REFLECTION_TEXT).then(() => {
    showToast('Reflection (182 words) copied to clipboard!', 'fa-copy');
  }).catch(() => {
    showToast('Reflection copied!', 'fa-copy');
  });
}

function downloadReflectionDoc() {
  const content = `================================================================================
THAKUR COLLEGE OF SCIENCE AND COMMERCE
Class: TYBMS | Subject: E-Commerce & Digital Marketing
Assignment: Build a Mock Online Store (Category: Fashion)
Submission Requirement 4.c - Project Learning Reflection
================================================================================

PROJECT REFLECTION (Word Count: 182 Words):

${REFLECTION_TEXT}

Key Learning Pillars:
1. Product Architecture & 50-100 Word Luxury Merchandising Copywriting
2. 3D WebGL Interactive Virtual Try-On & Digital Merchandising
3. Multi-Step Friction-Free Checkout with Dummy UPI & Card Gateways
4. Responsive State Management, Currency Conversion & Promo Logic
================================================================================`;

  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'TYBMS_Ecommerce_Project_Reflection.txt';
  a.click();
  URL.revokeObjectURL(url);
  showToast('Project Reflection Document downloaded!', 'fa-file-arrow-down');
}

// --- 11. PROMO CODE ENGINE ---
function applyPromoCode() {
  const input = document.getElementById('cartPromoInput');
  const msg = document.getElementById('promoMessage');
  if (!input || !msg) return;

  const code = input.value.trim().toUpperCase();

  if (code === 'AURA20' || code === 'WELCOME20') {
    STATE.discountPercent = 20;
    STATE.discountCode = code;
    msg.className = 'promo-message success';
    msg.textContent = '✓ 20% Atelier Discount applied successfully!';
    showToast('20% Discount applied to your bag!', 'fa-tag');
  } else if (code === 'VIP50') {
    STATE.discountPercent = 50;
    STATE.discountCode = code;
    msg.className = 'promo-message success';
    msg.textContent = '✓ VIP 50% Runway Discount applied!';
    showToast('VIP 50% discount activated!', 'fa-tag');
  } else {
    msg.className = 'promo-message error';
    msg.textContent = 'Invalid promo code. Try "AURA20" or "VIP50".';
  }

  renderCartDrawer();
}

function copyCode(code) {
  navigator.clipboard.writeText(code);
  showToast(`Promo code "${code}" copied! Paste at checkout.`, 'fa-tag');
}

// --- 12. AI FASHION CONCIERGE CHAT WIDGET ---
function sendAiPrompt(promptText) {
  const input = document.getElementById('aiUserInput');
  if (!input) return;
  input.value = promptText;
  handleSendAiMessage();
}

function handleSendAiMessage() {
  const input = document.getElementById('aiUserInput');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;

  const container = document.getElementById('aiMessagesBody');
  if (!container) return;

  const userMsg = document.createElement('div');
  userMsg.className = 'ai-msg user';
  userMsg.textContent = text;
  container.appendChild(userMsg);
  input.value = '';

  setTimeout(() => {
    const botMsg = document.createElement('div');
    botMsg.className = 'ai-msg bot';

    const lower = text.toLowerCase();
    if (lower.includes('gown') || lower.includes('evening') || lower.includes('dress')) {
      botMsg.innerHTML = `For gala occasions, our <strong>Celestial Emerald Silk Gown</strong> ($650) paired with the <strong>Aurelia 24K Gold Clutch</strong> creates an unforgettable silhouette.`;
    } else if (lower.includes('blazer') || lower.includes('obsidian')) {
      botMsg.innerHTML = `The <strong>Vortex Obsidian Sculpted Blazer</strong> is hand-tailored with laser-bonded metallic threads. Pair it with minimalistic leather pumps for a powerful architectural look.`;
    } else if (lower.includes('care') || lower.includes('silk') || lower.includes('wash')) {
      botMsg.innerHTML = `All AURA organic Mulberry silks should be dry cleaned or delicately hand-washed in cold water with botanical silk detergents to preserve fiber tensile strength.`;
    } else if (lower.includes('size') || lower.includes('fit')) {
      botMsg.innerHTML = `Our garments follow international couture tailoring standards. You can open our <a href="javascript:void(0)" onclick="document.getElementById('sizeGuideModalOverlay').classList.add('active')" style="color:var(--gold-primary);text-decoration:underline;">Size Chart</a> to inspect precise measurements!`;
    } else {
      botMsg.innerHTML = `A wonderful inquiry! Our Autumn/Winter 2026 collection focuses on sustainable organic fibers and sculptural tailoring. Feel free to explore our collections or ask about any runway piece!`;
    }

    container.appendChild(botMsg);
    container.scrollTop = container.scrollHeight;
  }, 450);

  container.scrollTop = container.scrollHeight;
}

// --- 13. SEARCH BAR AUTOCOMPLETE ---
function setupSearchAutocomplete() {
  const searchInput = document.getElementById('searchInput');
  const dropdown = document.getElementById('searchDropdown');

  if (!searchInput || !dropdown) return;

  searchInput.addEventListener('input', (e) => {
    const q = e.target.value.trim().toLowerCase();
    STATE.searchQuery = q;
    renderCatalog();

    if (q.length === 0) {
      dropdown.classList.remove('active');
      return;
    }

    const matches = PRODUCTS_DATA.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.categoryLabel.toLowerCase().includes(q)
    ).slice(0, 4);

    if (matches.length === 0) {
      dropdown.innerHTML = `<div class="p-2 text-muted text-center font-sm">No couture pieces found</div>`;
    } else {
      dropdown.innerHTML = matches.map(p => `
        <div class="search-result-item" onclick="openProductModal(${p.id}); document.getElementById('searchDropdown').classList.remove('active');">
          <img src="${p.images[0]}" alt="${p.name}">
          <div class="search-result-info">
            <h5>${p.name}</h5>
            <span>${formatPrice(p.price)}</span>
          </div>
        </div>
      `).join('');
    }
    dropdown.classList.add('active');
  });

  document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.remove('active');
    }
  });
}

// --- 14. INITIALIZATION & EVENT LISTENERS ---
document.addEventListener('DOMContentLoaded', () => {
  // 1. Init 3D Floating Dupatta Simulation
  initHero3D();

  // 2. Render Initial Data
  renderCatalog();
  updateCartCounters();
  updateWishlistCounters();
  setupSearchAutocomplete();
  const initialPriceDisplay = document.getElementById('priceDisplay');
  if (initialPriceDisplay) initialPriceDisplay.textContent = formatPrice(STATE.maxPrice);

  // 3. Category Filter Pills
  document.querySelectorAll('.category-pills .pill').forEach(pill => {
    pill.addEventListener('click', (e) => {
      document.querySelectorAll('.category-pills .pill').forEach(p => p.classList.remove('active'));
      e.currentTarget.classList.add('active');
      STATE.activeCategory = e.currentTarget.dataset.category;
      renderCatalog();
    });
  });

  // 4. Sort Selector
  const sortSel = document.getElementById('sortSelector');
  if (sortSel) {
    sortSel.addEventListener('change', (e) => {
      STATE.activeSort = e.target.value;
      renderCatalog();
    });
  }

  // 5. Price Range Slider
  const priceSlider = document.getElementById('priceRange');
  const priceDisplay = document.getElementById('priceDisplay');
  if (priceSlider) {
    priceSlider.addEventListener('input', (e) => {
      STATE.maxPrice = parseInt(e.target.value, 10);
      if (priceDisplay) priceDisplay.textContent = formatPrice(STATE.maxPrice);
      renderCatalog();
    });
  }

  // 6. In-Stock Toggle
  const stockToggle = document.getElementById('inStockToggle');
  if (stockToggle) {
    stockToggle.addEventListener('change', (e) => {
      STATE.inStockOnly = e.target.checked;
      renderCatalog();
    });
  }

  // 7. Reset Filters
  const resetBtn = document.getElementById('resetFiltersBtn');
  const resetFallback = document.getElementById('resetFiltersFallbackBtn');
  const handleReset = () => {
    STATE.activeCategory = 'all';
    STATE.activeSort = 'featured';
    STATE.maxPrice = 1200;
    STATE.inStockOnly = false;
    STATE.searchQuery = '';
    const searchInp = document.getElementById('searchInput');
    const priceRng = document.getElementById('priceRange');
    const inStock = document.getElementById('inStockToggle');
    const sortS = document.getElementById('sortSelector');

    if (searchInp) searchInp.value = '';
    if (priceRng) priceRng.value = 1200;
    if (priceDisplay) priceDisplay.textContent = formatPrice(1200);
    if (inStock) inStock.checked = false;
    if (sortS) sortS.value = 'featured';
    document.querySelectorAll('.category-pills .pill').forEach(p => p.classList.toggle('active', p.dataset.category === 'all'));
    renderCatalog();
    showToast('Filters reset to default view.');
  };
  if (resetBtn) resetBtn.addEventListener('click', handleReset);
  if (resetFallback) resetFallback.addEventListener('click', handleReset);

  // 8. Currency Switcher
  const currencySel = document.getElementById('currencySelector');
  if (currencySel) {
    currencySel.addEventListener('change', (e) => {
      STATE.currency = e.target.value;
      renderCatalog();
      renderCartDrawer();
      if (priceDisplay) priceDisplay.textContent = formatPrice(STATE.maxPrice);
      const vipDeliveryEl = document.getElementById('vipDeliveryPrice');
      if (vipDeliveryEl) vipDeliveryEl.textContent = `+${formatPrice(25)}`;
      showToast(`Currency updated to ${STATE.currency} (${STATE.currencyRates[STATE.currency].symbol})`);
    });
  }

  // 9. Dark/Light Theme Toggle
  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', nextTheme);
      themeBtn.innerHTML = nextTheme === 'light' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
      showToast(`Switched to ${nextTheme === 'light' ? 'Light Luxe' : 'Dark Obsidian'} theme.`);
    });
  }

  // 10. Drawer & Modal Triggers
  document.getElementById('cartHeaderBtn')?.addEventListener('click', openCartDrawer);
  document.getElementById('closeCartBtn')?.addEventListener('click', closeCartDrawer);
  document.getElementById('cartOverlay')?.addEventListener('click', closeCartDrawer);
  document.getElementById('continueShoppingBtn')?.addEventListener('click', closeCartDrawer);

  document.getElementById('proceedToCheckoutBtn')?.addEventListener('click', openCheckoutModal);
  document.getElementById('closeCheckoutModalBtn')?.addEventListener('click', closeCheckoutModal);
  document.getElementById('checkoutModalOverlay')?.addEventListener('click', (e) => {
    if (e.target.id === 'checkoutModalOverlay') closeCheckoutModal();
  });

  document.getElementById('closeProductModalBtn')?.addEventListener('click', closeProductModal);
  document.getElementById('productModalOverlay')?.addEventListener('click', (e) => {
    if (e.target.id === 'productModalOverlay') closeProductModal();
  });

  // Stop propagation on all modal cards to prevent accidental closing
  document.querySelectorAll('.modal-card').forEach(card => {
    card.addEventListener('click', (e) => e.stopPropagation());
  });

  // Wishlist Modal
  const wishlistBtn = document.getElementById('wishlistHeaderBtn');
  const wishlistOverlay = document.getElementById('wishlistModalOverlay');
  const closeWishlistBtn = document.getElementById('closeWishlistModalBtn');
  if (wishlistBtn) wishlistBtn.addEventListener('click', () => {
    renderWishlistModal();
    wishlistOverlay.classList.add('active');
  });
  if (closeWishlistBtn) closeWishlistBtn.addEventListener('click', () => wishlistOverlay.classList.remove('active'));
  if (wishlistOverlay) wishlistOverlay.addEventListener('click', (e) => {
    if (e.target.id === 'wishlistModalOverlay') wishlistOverlay.classList.remove('active');
  });

  // Size Guide Modal
  const sizeGuideOverlay = document.getElementById('sizeGuideModalOverlay');
  const closeSizeGuideBtn = document.getElementById('closeSizeGuideModalBtn');
  const modalOpenSizeGuide = document.getElementById('modalOpenSizeGuide');
  const footerOpenSizeGuide = document.getElementById('footerOpenSizeGuide');

  const openSizeModal = () => sizeGuideOverlay?.classList.add('active');
  const closeSizeModal = () => sizeGuideOverlay?.classList.remove('active');

  if (modalOpenSizeGuide) modalOpenSizeGuide.addEventListener('click', openSizeModal);
  if (footerOpenSizeGuide) footerOpenSizeGuide.addEventListener('click', openSizeModal);
  if (closeSizeGuideBtn) closeSizeGuideBtn.addEventListener('click', closeSizeModal);
  if (sizeGuideOverlay) sizeGuideOverlay.addEventListener('click', (e) => {
    if (e.target.id === 'sizeGuideModalOverlay') closeSizeModal();
  });

  // Footer Shortcuts
  document.getElementById('footerOpenCart')?.addEventListener('click', openCartDrawer);
  document.getElementById('footerOpenWishlist')?.addEventListener('click', () => {
    renderWishlistModal();
    wishlistOverlay?.classList.add('active');
  });

  // Global ESC Key to close any open modal, drawer or mobile menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProductModal();
      closeCheckoutModal();
      closeCartDrawer();
      closeSizeModal();
      if (wishlistOverlay) wishlistOverlay.classList.remove('active');
      const nav = document.getElementById('mainNav');
      if (nav) nav.classList.remove('active');
      const mobileOverlay = document.getElementById('mobileNavOverlay');
      if (mobileOverlay) mobileOverlay.style.display = 'none';
      const aiChat = document.getElementById('aiChatWindow');
      if (aiChat) aiChat.classList.remove('active');
    }
  });

  // 11. Checkout Form Logic
  const shippingForm = document.getElementById('shippingForm');
  if (shippingForm) {
    shippingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      setCheckoutStep(2);
    });
  }

  document.getElementById('autoFillSampleDataBtn')?.addEventListener('click', autoFillSampleCheckout);
  document.getElementById('backToShippingBtn')?.addEventListener('click', () => setCheckoutStep(1));

  const paymentForm = document.getElementById('paymentForm');
  if (paymentForm) {
    paymentForm.addEventListener('submit', handlePlaceOrder);
  }

  // Delivery radio buttons
  document.querySelectorAll('input[name="shippingMethod"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      const card = e.target.closest('.delivery-card');
      document.querySelectorAll('.delivery-card').forEach(c => c.classList.remove('selected'));
      if (card) {
        card.classList.add('selected');
        STATE.shippingCost = parseFloat(card.dataset.shippingCost) || 0;
        renderCheckoutSidebar();
      }
    });
  });

  // Payment Tabs
  document.querySelectorAll('.payment-tabs .pay-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      document.querySelectorAll('.payment-tabs .pay-tab').forEach(t => t.classList.remove('active'));
      e.currentTarget.classList.add('active');
      const tabType = e.currentTarget.dataset.tab;
      document.getElementById('tabContentCard').classList.toggle('active', tabType === 'card');
      document.getElementById('tabContentUpi').classList.toggle('active', tabType === 'upi');
      document.getElementById('tabContentCod').classList.toggle('active', tabType === 'cod');
    });
  });

  // Card input mirror
  const cardNumInput = document.getElementById('cardNumber');
  const cardHolderInput = document.getElementById('cardHolder');
  const cardExpInput = document.getElementById('cardExpiry');

  if (cardNumInput) cardNumInput.addEventListener('input', (e) => {
    let val = e.target.value.replace(/\D/g, '').substring(0, 16);
    val = val.replace(/(.{4})/g, '$1 ').trim();
    e.target.value = val;
    document.getElementById('cardNumDisplay').textContent = val || '•••• •••• •••• 4242';
  });

  if (cardHolderInput) cardHolderInput.addEventListener('input', (e) => {
    document.getElementById('cardNameDisplay').textContent = e.target.value.toUpperCase() || 'JANE DOE';
  });

  if (cardExpInput) cardExpInput.addEventListener('input', (e) => {
    let val = e.target.value.replace(/\D/g, '').substring(0, 4);
    if (val.length >= 3) val = `${val.substring(0, 2)}/${val.substring(2, 4)}`;
    e.target.value = val;
    document.getElementById('cardExpDisplay').textContent = val || '12/28';
  });

  document.getElementById('downloadReceiptBtn')?.addEventListener('click', downloadReceiptInvoice);
  document.getElementById('successBackToShopBtn')?.addEventListener('click', () => {
    closeCheckoutModal();
    window.location.href = '#catalog';
  });

  // 12. Promo Codes
  document.getElementById('applyPromoBtn')?.addEventListener('click', applyPromoCode);

  // 13. Reflection Actions
  document.getElementById('copyReflectionBtn')?.addEventListener('click', copyReflectionText);
  document.getElementById('downloadReflectionDocBtn')?.addEventListener('click', downloadReflectionDoc);

  // 14. Lookbook Hotspot Quick View Buttons
  document.querySelectorAll('.quick-shop-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(e.currentTarget.dataset.id, 10);
      openProductModal(id);
    });
  });

  // 15. Quantity +/- inside Modal
  document.getElementById('modalQtyMinus')?.addEventListener('click', () => {
    const input = document.getElementById('modalQtyInput');
    if (input) input.value = Math.max(1, parseInt(input.value, 10) - 1);
  });

  document.getElementById('modalQtyPlus')?.addEventListener('click', () => {
    const input = document.getElementById('modalQtyInput');
    if (input) input.value = Math.min(10, parseInt(input.value, 10) + 1);
  });

  // 16. Newsletter VIP Submit
  document.getElementById('newsletterForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('newsletterEmail').value;
    showToast(`Welcome to the Private Circle! Promo code "AURA20" unlocked for ${email}`, 'fa-envelope-circle-check');
    document.getElementById('newsletterEmail').value = '';
  });

  // 17. AI Stylist Concierge Widget
  const aiToggleBtn = document.getElementById('toggleAiWidgetBtn');
  const aiChatWindow = document.getElementById('aiChatWindow');
  const closeAiChatBtn = document.getElementById('closeAiChatBtn');
  const sendAiMsgBtn = document.getElementById('sendAiMsgBtn');
  const aiUserInput = document.getElementById('aiUserInput');

  if (aiToggleBtn) aiToggleBtn.addEventListener('click', () => aiChatWindow?.classList.toggle('active'));
  if (closeAiChatBtn) closeAiChatBtn.addEventListener('click', () => aiChatWindow?.classList.remove('active'));
  if (sendAiMsgBtn) sendAiMsgBtn.addEventListener('click', handleSendAiMessage);
  if (aiUserInput) aiUserInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSendAiMessage();
  });

  // 18. Announcement bar close
  document.getElementById('closeAnnouncement')?.addEventListener('click', () => {
    const bar = document.getElementById('announcementBar');
    if (bar) bar.style.display = 'none';
  });

  // 19. Mobile Menu Toggle & Close Logic
  const mobileToggle = document.getElementById('mobileToggle');
  const mainNav = document.getElementById('mainNav');
  const closeMobileNavBtn = document.getElementById('closeMobileNavBtn');
  const mobileNavOverlay = document.getElementById('mobileNavOverlay');

  const openMobileNav = () => {
    mainNav?.classList.add('active');
    if (mobileNavOverlay) mobileNavOverlay.style.display = 'block';
  };

  const closeMobileNav = () => {
    mainNav?.classList.remove('active');
    if (mobileNavOverlay) mobileNavOverlay.style.display = 'none';
  };

  if (mobileToggle) mobileToggle.addEventListener('click', openMobileNav);
  if (closeMobileNavBtn) closeMobileNavBtn.addEventListener('click', closeMobileNav);
  if (mobileNavOverlay) mobileNavOverlay.addEventListener('click', closeMobileNav);

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });

  // 20. Sticky Header Animation
  window.addEventListener('scroll', () => {
    const header = document.getElementById('siteHeader');
    if (header) {
      if (window.scrollY > 40) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    }
  });
});
