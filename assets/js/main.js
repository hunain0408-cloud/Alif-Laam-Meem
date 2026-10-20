/* ==========================================================================
   ALIF LAAM MEEM — Master Interactive Couture Engine v3.0
   100% Authentic Pakistani Designer Catalog, Custom Vector SVG System,
   True 3D Perspective Tilt Physics, GoBaku-Inspired Header & Combinations
   ========================================================================== */

const BRAND_CONFIG = {
  name: 'Alif Laam Meem',
  phoneDisplay: '0322-1200965',
  phoneRaw: '923221200965',
  email: 'info@aliflaammeem.pk',
  address: 'Landhi Town, Karachi, Pakistan',
  stitchingFee: 3500,
  deliveryFee: 350
};

/* Crisp Vector SVG Library (Strictly Zero Emojis) */
const SVG_ICONS = {
  bag: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>`,
  eye: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`,
  whatsapp: `<svg class="icon-svg" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12.031 2c-5.516 0-9.969 4.453-9.969 9.969 0 1.766.469 3.484 1.359 4.984L2 22l5.188-1.359c1.453.797 3.109 1.219 4.843 1.219 5.516 0 9.969-4.453 9.969-9.969S17.547 2 12.031 2zm5.828 14.125c-.25.703-1.438 1.344-2.016 1.422-.531.078-1.203.109-1.953-.125-.453-.141-1.047-.344-1.797-.672-3.156-1.359-5.219-4.547-5.375-4.75-.156-.203-1.281-1.703-1.281-3.25s.813-2.313 1.109-2.625c.297-.313.641-.391.859-.391.219 0 .422.016.609.016.188 0 .453-.078.703.531.25.609.859 2.094.938 2.25.078.156.125.344.016.547-.109.203-.156.328-.313.516-.156.188-.328.406-.469.547-.156.156-.313.328-.141.625.172.297.766 1.266 1.641 2.047 1.125 1.016 2.078 1.328 2.375 1.484.297.156.469.125.641-.078.172-.203.75-.875.953-1.172.203-.297.406-.25.672-.156.266.094 1.703.813 1.984.953.281.141.469.219.547.344.078.125.078.734-.172 1.438z"/></svg>`,
  mail: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
  phone: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
  scissors: `<svg class="icon-svg" viewBox="0 0 24 24"><circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line></svg>`,
  close: `<svg class="icon-svg" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
  sparkles: `<svg class="icon-svg" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
  crown: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"></path></svg>`,
  shield: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>`,
  truck: `<svg class="icon-svg" viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>`,
  checkCircle: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
  location: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
  ruler: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"></path><path d="m14.5 12.5 2-2"></path><path d="m11.5 9.5 2-2"></path><path d="m8.5 6.5 2-2"></path><path d="m17.5 15.5 2-2"></path></svg>`,
  grid: `<svg class="icon-svg" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`,
  arrowUp: `<svg class="icon-svg" viewBox="0 0 24 24"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>`,
  arrowRight: `<svg class="icon-svg" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`,
  sun: `<svg class="icon-svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line></svg>`,
  snowflake: `<svg class="icon-svg" viewBox="0 0 24 24"><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line><path d="m20 16-4-4 4-4"></path><path d="m4 8 4 4-4 4"></path><path d="m16 4-4 4-4-4"></path><path d="m8 20 4-4 4 4"></path></svg>`
};

/* Interactive Hero Showcase Slides (100% Authentic Pakistani Suits) */
const HERO_EDITIONS = [
  {
    id: 'alm-wed-01',
    pill: '01. Barat Bridal Couture',
    eyebrow: 'Karachi Heritage Atelier • All-Pakistan Insured Delivery',
    title: 'Royal Pakistani <span>Barat &amp; Bridal</span> Handwork',
    desc: 'Heirloom deep crimson velvet and pure silk bridal lehengas, meticulously hand-embellished on wooden addas with antique zardozi, dabka, and tilla—tailored to your exact measurements.',
    image: 'assets/images/pak-barat-bridal.jpg',
    cardTitle: 'Aangan-e-Ishq Barat Lehenga',
    cardMeta: '450+ Hours Hand Zardozi • PKR 145,000',
    chip1Title: 'Custom Fit Verified',
    chip1Sub: 'Inch-by-inch Karachi tailoring',
    chip2Title: '450+ Hrs Zardozi',
    chip2Sub: 'Master Adda Craftsmanship'
  },
  {
    id: 'alm-win-01',
    pill: '02. Winter 9000 Velvet',
    eyebrow: 'Autumn / Winter Luxury Edition • Micro-Velvet 9000',
    title: 'Imperial Emerald &amp; Plum <span>Velvet Shawl</span> Suits',
    desc: 'Experience plush 9000 micro-velvet and Kashmiri slub karandi three-piece ensembles paired with heavy antique gold zari pallu shawls.',
    image: 'assets/images/pak-winter-velvet.jpg',
    cardTitle: 'Gul-e-Bakht Velvet Shawl Suit',
    cardMeta: '3-Piece Micro-Velvet 9000 • PKR 18,500',
    chip1Title: 'Plush 9000 Velvet',
    chip1Sub: 'Heavy Zari Pallu Shawls',
    chip2Title: 'Unstitched & Stitched',
    chip2Sub: 'Ready in 7 Working Days'
  },
  {
    id: 'alm-for-01',
    pill: '03. Raw Silk Formals',
    eyebrow: 'Festive & Evening Pret • Pure Korean Raw Silk',
    title: 'Champagne Gold <span>Pure Raw Silk</span> Ensembles',
    desc: 'Sophisticated Pakistani long kameez silhouettes crafted from pure Korean raw silk with kora-dabka neckline embroidery and kiran-bordered tissue organza dupattas.',
    image: 'assets/images/pak-formal-silk.jpg',
    cardTitle: 'Roshanara Raw Silk Ensemble',
    cardMeta: 'Pure Raw Silk & Organza • PKR 24,500',
    chip1Title: 'Pure Silk Lining',
    chip1Sub: 'Hand-finished kiran borders',
    chip2Title: 'Bespoke Sizing',
    chip2Sub: 'XS to XL or Custom Fit'
  },
  {
    id: 'alm-sum-01',
    pill: '04. Summer Chikankari Lawn',
    eyebrow: 'Spring / Summer Catalog • 100% Pure Swiss Voile',
    title: 'Breathable Swiss Voile &amp; <span>Chikankari Lawn</span>',
    desc: 'Designed for Pakistani summers—100% pure cotton Swiss voile lawn adorned with delicate resham chikankari and scalloped organza dupattas.',
    image: 'assets/images/pak-summer-mint.jpg',
    cardTitle: 'Zarine Mint & Gold Lawn',
    cardMeta: '3-Piece Luxury Lawn • PKR 9,400',
    chip1Title: '100% Swiss Voile',
    chip1Sub: 'Pre-shrunk & colorfast',
    chip2Title: 'Nationwide COD',
    chip2Sub: 'Delivered across Pakistan'
  }
];

/* 100% Authentic Pakistani Designer Suit Catalog */
const PRODUCT_CATALOG = [
  // SUMMER COLLECTION
  {
    id: 'alm-sum-01',
    title: 'Noor-e-Sahar Chikankari Lawn',
    category: 'summer',
    categoryLabel: 'Summer Collection',
    fabric: '3-Piece Pure Swiss Voile Lawn with Scalloped Organza Dupatta',
    price: 8950,
    badge: 'Bestseller',
    badgeType: 'badge-gold',
    image: 'assets/images/pak-summer-lawn.jpg',
    description: 'Intricate warm ivory and blush-rose chikankari threadwork kameez with full modest sleeves, straight cambric trousers, and a kiran-finished silk-organza dupatta.'
  },
  {
    id: 'alm-sum-02',
    title: 'Zarine Sage Mint & Gold Jacquard',
    category: 'summer',
    categoryLabel: 'Summer Collection',
    fabric: '3-Piece Self-Jacquard Lawn with Embroidered Organza Dupatta',
    price: 9400,
    badge: 'New Arrival',
    badgeType: 'badge-emerald',
    image: 'assets/images/pak-summer-mint.jpg',
    description: 'Refreshing sage-pistachio self-jacquard kameez adorned with delicate tilla and resham neckline motifs, paired with straight trousers and a scalloped organza dupatta.'
  },
  {
    id: 'alm-sum-03',
    title: 'Marjaan Festive Embroidered Suit',
    category: 'summer',
    categoryLabel: 'Summer Collection',
    fabric: '3-Piece Luxury Embroidered Lawn with Zari Shawl Dupatta',
    price: 10500,
    badge: 'Festive Lawn',
    badgeType: 'badge-maroon',
    image: 'assets/images/pak-summer-coral.jpg',
    description: 'Rich jewel-toned festive summer ensemble featuring antique zari borders, modest full sleeves, and a contrasting embroidered dupatta.'
  },

  // WINTER COLLECTION
  {
    id: 'alm-win-01',
    title: 'Gul-e-Bakht Royal Velvet Shawl Suit',
    category: 'winter',
    categoryLabel: 'Winter Collection',
    fabric: '3-Piece Emerald Karandi with Plum 9000 Micro-Velvet Zari Shawl',
    price: 18500,
    badge: 'Winter Bestseller',
    badgeType: 'badge-maroon',
    image: 'assets/images/pak-winter-velvet.jpg',
    description: 'Imperial emerald green kameez paired with a deep plum 9000 micro-velvet pallu shawl heavily embroidered with antique gold marori, tilla, and dabka.'
  },
  {
    id: 'alm-win-02',
    title: 'Sheesh Mahal Emerald Slub Karandi',
    category: 'winter',
    categoryLabel: 'Winter Collection',
    fabric: '3-Piece Pure Slub Karandi with Embroidered Velvet Stole',
    price: 14200,
    badge: 'Artisan Pick',
    badgeType: 'badge-emerald',
    image: 'assets/images/pak-winter-karandi.jpg',
    description: 'Warm winter slub karandi crafted with traditional Kashmiri neckline embroidery and a plush velvet-bordered shawl for effortless winter sophistication.'
  },
  {
    id: 'alm-win-03',
    title: 'Mehr-un-Nisa Spiced Plum Khaddar',
    category: 'winter',
    categoryLabel: 'Winter Collection',
    fabric: '3-Piece Fine Woven Khaddar with Heavy Zari Shawl',
    price: 12500,
    badge: 'Classic Winter',
    badgeType: 'badge-gold',
    image: 'assets/images/pak-winter-khaddar.jpg',
    description: 'Deep spiced-maroon winter khaddar accentuated with bronze zari borders, full sleeves, and a matching embroidered shawl.'
  },

  // LUXURY FORMALS
  {
    id: 'alm-for-01',
    title: 'Roshanara Champagne Raw Silk',
    category: 'formal',
    categoryLabel: 'Luxury Formals',
    fabric: '3-Piece Pure Korean Raw Silk with Kiran Organza Dupatta',
    price: 24500,
    badge: 'Signature Formal',
    badgeType: 'badge-gold',
    image: 'assets/images/pak-formal-silk.jpg',
    description: 'Regal champagne gold pure raw silk long kameez embellished with hand-worked kora, dabka, and crystal motifs, paired with raw silk straight pants and a kiran-bordered tissue dupatta.'
  },
  {
    id: 'alm-for-02',
    title: 'Layla Royal Velvet & Silk Formal',
    category: 'formal',
    categoryLabel: 'Luxury Formals',
    fabric: '3-Piece Pure Silk Suit with Hand-Embellished Velvet Dupatta',
    price: 27900,
    badge: 'Evening Couture',
    badgeType: 'badge-maroon',
    image: 'assets/images/pak-formal-kalidaar.jpg',
    description: 'Designed for winter weddings and formal dinners—deep jewel-toned silk kameez paired with an heirloom zardozi-bordered velvet shawl.'
  },

  // WEDDING / HEAVY BRIDAL WEAR (Barat, Walima, Party)
  {
    id: 'alm-wed-01',
    title: 'Aangan-e-Ishq Crimson Barat Lehenga',
    category: 'barat',
    categoryLabel: 'Barat Bridal Couture',
    fabric: 'Hand-Embellished Velvet & Pure Silk Lehenga Choli with Bridal Dupatta',
    price: 145000,
    badge: 'Barat Masterpiece',
    badgeType: 'badge-maroon',
    image: 'assets/images/pak-barat-bridal.jpg',
    description: 'Heirloom deep crimson Barat bridal lehenga meticulously hand-embellished over 450 artisan hours with antique dabka, nakshi, resham, and scalloped zardozi dupatta borders.'
  },
  {
    id: 'alm-wed-02',
    title: 'Noor-e-Jahan Pearl Ivory Walima Ensemble',
    category: 'walima',
    categoryLabel: 'Walima Bridal Couture',
    fabric: 'Pure Raw Silk & Tissue Organza Bridal Suit with Kiran Veil',
    price: 98000,
    badge: 'Walima Exclusive',
    badgeType: 'badge-gold',
    image: 'assets/images/pak-walima-couture.jpg',
    description: 'Ethereal pearl-champagne Walima reception ensemble adorned with silver-gold zardozi, pearls, cut-dana, and a regal kiran-edged bridal dupatta.'
  },
  {
    id: 'alm-wed-03',
    title: 'Shahzadi Ruby Zardozi Bridal Lehenga',
    category: 'barat',
    categoryLabel: 'Barat & Nikkah Couture',
    fabric: 'Pure Velvet Lehenga with Full-Sleeved Handworked Choli & Bridal Pouch',
    price: 128000,
    badge: 'Heritage Bridal',
    badgeType: 'badge-maroon',
    image: 'assets/images/pak-bridal-detail.jpg',
    description: 'Traditional Mughlai ruby-red bridal ensemble featuring heavy arch-motif lehenga panels, modest full sleeves, and a matching hand-embellished bridal potli.'
  },
  {
    id: 'alm-wed-04',
    title: 'Parijaan Pistachio Mist Nikkah Jora',
    category: 'walima',
    categoryLabel: 'Walima & Nikkah Couture',
    fabric: 'Pure Tissue Silk Kameez with Straight Izhaar & Organza Dupatta',
    price: 76000,
    badge: 'Nikkah Favorite',
    badgeType: 'badge-emerald',
    image: 'assets/images/pak-summer-mint.jpg',
    description: 'Soft pistachio-celadon tissue silk Nikkah and Walima ensemble encrusted with pearls, silver tilla, and resham embroidery.'
  },
  {
    id: 'alm-wed-05',
    title: 'Mahpara Emerald Velvet Heavy Formal',
    category: 'party',
    categoryLabel: 'Heavy Formal Event Wear',
    fabric: 'Pure Silk Kameez with Heavy Zardozi Velvet Shawl',
    price: 42500,
    badge: 'Heavy Party Wear',
    badgeType: 'badge-emerald',
    image: 'assets/images/pak-winter-velvet.jpg',
    description: 'Crafted for sisters of the bride and wedding guests—emerald jewel-toned ensemble with heavy adda work and a regal velvet shawl.'
  },
  {
    id: 'alm-wed-06',
    title: 'Zeb-un-Nisa Gold Kora Heavy Formal',
    category: 'party',
    categoryLabel: 'Heavy Formal Event Wear',
    fabric: 'Pure Raw Silk Heavy Formal with Embellished Sleeves & Kiran Dupatta',
    price: 38500,
    badge: 'Festive Couture',
    badgeType: 'badge-gold',
    image: 'assets/images/pak-stitching-atelier.jpg',
    description: 'Close-up artisan craftsmanship featuring heavy kora-dabka cuffs, daman borders, and a hand-finished kiran organza dupatta.'
  }
];

/* ==========================================================================
   CART STATE MANAGEMENT (localStorage)
   ========================================================================== */
const CART_STORAGE_KEY = 'alm_luxury_cart_v2';

function getCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  updateCartBadges();
}

function formatPKR(amount) {
  return 'PKR ' + Number(amount).toLocaleString('en-PK');
}

function updateCartBadges() {
  const cart = getCart();
  const totalCount = cart.reduce((acc, item) => acc + item.qty, 0);
  document.querySelectorAll('.cart-count-badge').forEach(badge => {
    badge.textContent = totalCount;
  });
}

function addToCart(productId, stitchingType = 'Unstitched Fabric', size = 'Standard', customPrice = null, customTitle = null) {
  const cart = getCart();
  const product = PRODUCT_CATALOG.find(p => p.id === productId) || {
    id: productId,
    title: customTitle || 'Custom Tailoring Package',
    price: customPrice || 3500,
    image: 'assets/images/pak-stitching-atelier.jpg',
    categoryLabel: 'Bespoke Stitching'
  };

  const isStitched = stitchingType.includes('Custom Stitched');
  const unitPrice = product.price + (isStitched ? BRAND_CONFIG.stitchingFee : 0);
  const cartKey = `${product.id}__${stitchingType}__${size}`;

  const existing = cart.find(item => item.cartKey === cartKey);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      cartKey,
      id: product.id,
      title: product.title,
      categoryLabel: product.categoryLabel,
      image: product.image,
      stitchingType,
      size,
      unitPrice,
      qty: 1
    });
  }

  saveCart(cart);
  showToast(`Added "${product.title}" (${stitchingType}) to your Couture Bag.`);
}

/* ==========================================================================
   TOAST NOTIFICATION ENGINE
   ========================================================================== */
function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-msg';
  toast.innerHTML = `
    <span style="color: var(--gold-bright); display:flex;">${SVG_ICONS.bag}</span>
    <div>
      <strong style="display:block; font-size: 0.74rem; text-transform:uppercase; letter-spacing:1.2px; color:var(--gold-bright);">Alif Laam Meem Couture Bag</strong>
      <span>${message}</span>
    </div>
    <a href="cart.html" style="margin-left:8px; color:var(--gold-bright); text-decoration:underline; font-weight:700; font-size:0.76rem; white-space:nowrap;">View Bag</a>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(12px)';
    toast.style.transition = '0.3s ease';
    setTimeout(() => toast.remove(), 320);
  }, 4200);
}

/* ==========================================================================
   RE-ENGINEERED 3D LUXURY PRODUCT CARD WITH LIVE STITCHING SWITCHER
   ========================================================================== */
function createProductCardHTML(product, idx = 0) {
  const waMsg = encodeURIComponent(`Assalam-o-Alaikum Alif Laam Meem! I want to inquire about "${product.title}" (${formatPKR(product.price)}).`);
  const delayAttr = idx % 3;
  return `
    <article class="product-card tilt-3d reveal visible" data-delay="${delayAttr}" data-category="${product.category}" id="card-${product.id}" data-selected-stitch="Unstitched Fabric">
      <div class="product-media">
        <div class="product-badges">
          <span class="badge ${product.badgeType}">${product.badge}</span>
        </div>
        <div class="product-quick-icons">
          <button type="button" class="card-icon-circle" onclick="openQuickView('${product.id}')" title="Quick View & Size Selection" aria-label="Quick View">
            ${SVG_ICONS.eye}
          </button>
          <a href="https://wa.me/${BRAND_CONFIG.phoneRaw}?text=${waMsg}" target="_blank" rel="noopener" class="card-icon-circle" title="Inquire on WhatsApp" aria-label="WhatsApp Inquiry">
            ${SVG_ICONS.whatsapp}
          </a>
        </div>
        <img src="${product.image}" alt="${product.title}" loading="lazy" onclick="openQuickView('${product.id}')" style="cursor:pointer;">
      </div>

      <div class="product-body">
        <div class="product-meta-row">
          <span class="product-category">${product.categoryLabel}</span>
          <span class="product-stock-pill">● In Stock</span>
        </div>
        <h3 class="product-title" onclick="openQuickView('${product.id}')" style="cursor:pointer;">${product.title}</h3>
        <p class="product-fabric">${product.fabric}</p>

        <!-- Interactive Unstitched / Stitched Switcher Directly on Card -->
        <div class="card-stitch-switcher" role="group" aria-label="Select Tailoring Option">
          <button type="button" class="stitch-pill-btn active" onclick="toggleCardStitch('${product.id}', false, ${product.price}, this)">
            Unstitched Suit
          </button>
          <button type="button" class="stitch-pill-btn" onclick="toggleCardStitch('${product.id}', true, ${product.price}, this)">
            Stitched (+3,500)
          </button>
        </div>

        <div class="product-footer">
          <div class="product-price" id="price-${product.id}">
            ${formatPKR(product.price)}
            <small id="sub-${product.id}">3-Piece Unstitched</small>
          </div>
          <div style="display: flex; gap: 6px;">
            <button type="button" class="btn btn-primary btn-sm" onclick="addCardItemToCart('${product.id}')">
              ${SVG_ICONS.bag} <span>Add to Bag</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  `;
}

function toggleCardStitch(productId, isStitched, basePrice, btnEl) {
  const card = document.getElementById(`card-${productId}`);
  const priceEl = document.getElementById(`price-${productId}`);
  if (!card || !priceEl) return;

  card.querySelectorAll('.stitch-pill-btn').forEach(b => b.classList.remove('active'));
  btnEl.classList.add('active');

  const newPrice = isStitched ? basePrice + BRAND_CONFIG.stitchingFee : basePrice;
  const label = isStitched ? 'Custom Stitched (+PKR 3,500)' : 'Unstitched Fabric';
  const subLabel = isStitched ? 'Custom Tailored to Fit' : '3-Piece Unstitched';

  card.setAttribute('data-selected-stitch', label);
  priceEl.innerHTML = `${formatPKR(newPrice)}<small id="sub-${productId}">${subLabel}</small>`;
}

function addCardItemToCart(productId) {
  const card = document.getElementById(`card-${productId}`);
  const stitchType = card ? card.getAttribute('data-selected-stitch') : 'Unstitched Fabric';
  const defaultSize = stitchType.includes('Stitched') ? 'Medium (M)' : 'Standard';
  addToCart(productId, stitchType, defaultSize);
}

/* ==========================================================================
   QUICK VIEW & CUSTOM MEASUREMENT MODAL
   ========================================================================== */
function openQuickView(productId) {
  const product = PRODUCT_CATALOG.find(p => p.id === productId);
  if (!product) return;

  let modal = document.getElementById('quickViewModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'quickViewModal';
    modal.className = 'modal-backdrop';
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="modal-box">
      <button type="button" class="modal-close" onclick="closeQuickView()" aria-label="Close Modal">${SVG_ICONS.close}</button>
      <div class="modal-grid">
        <div>
          <img src="${product.image}" alt="${product.title}" class="modal-img">
        </div>
        <div class="modal-content">
          <span class="product-category">${product.categoryLabel}</span>
          <h2 class="serif-heading" style="font-size: 2rem; margin: 6px 0 10px; color: var(--maroon-deep);">${product.title}</h2>
          <p style="font-family: var(--font-heading); font-size: 1.75rem; font-weight: 700; color: var(--maroon-primary); margin-bottom: 12px;" id="modalDynamicPrice">
            ${formatPKR(product.price)}
          </p>
          <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 16px;">${product.description}</p>
          <p style="font-size: 0.82rem; color: var(--maroon-deep); background: var(--ivory-warm); padding: 10px 14px; border-radius: 10px; margin-bottom: 18px; border-left: 3px solid var(--gold-primary);">
            <strong>Textile Specification:</strong> ${product.fabric}
          </p>

          <div class="form-group">
            <label class="form-label" for="modalStitchSelect">Select Tailoring Preference</label>
            <select id="modalStitchSelect" class="form-control" onchange="updateModalPrice(${product.price})">
              <option value="Unstitched Fabric">Unstitched 3-Piece Ensemble (Standard Price)</option>
              <option value="Custom Stitched (+PKR 3,500)">Custom Stitched by Our Karachi Master Tailors (+PKR 3,500)</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label" for="modalSizeSelect">Select Size (For Stitched Orders)</label>
            <select id="modalSizeSelect" class="form-control">
              <option value="Medium (M)">Medium (M) — Chest 20" | Length 42"</option>
              <option value="Small (S)">Small (S) — Chest 18.5" | Length 40"</option>
              <option value="Large (L)">Large (L) — Chest 21.5" | Length 43"</option>
              <option value="Extra Large (XL)">Extra Large (XL) — Chest 23" | Length 44"</option>
              <option value="Custom Measurements">Custom Measurements (Share on WhatsApp/Checkout)</option>
            </select>
          </div>

          <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 22px;">
            <button type="button" class="btn btn-primary" style="flex: 1;" onclick="submitModalAddToCart('${product.id}')">
              ${SVG_ICONS.bag} <span>Add to Couture Bag</span>
            </button>
            <a href="https://wa.me/${BRAND_CONFIG.phoneRaw}?text=${encodeURIComponent('Assalam-o-Alaikum Alif Laam Meem! I want to order: ' + product.title + ' (' + formatPKR(product.price) + ')')}" target="_blank" rel="noopener" class="btn btn-whatsapp">
              ${SVG_ICONS.whatsapp} <span>Order on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('open');
  document.body.classList.add('modal-open');
  modal.onclick = (e) => {
    if (e.target === modal) closeQuickView();
  };
}

function updateModalPrice(basePrice) {
  const select = document.getElementById('modalStitchSelect');
  const priceEl = document.getElementById('modalDynamicPrice');
  if (!select || !priceEl) return;
  const total = select.value.includes('Custom Stitched') ? basePrice + BRAND_CONFIG.stitchingFee : basePrice;
  priceEl.textContent = formatPKR(total);
}

function submitModalAddToCart(productId) {
  const stitch = document.getElementById('modalStitchSelect')?.value || 'Unstitched Fabric';
  const size = document.getElementById('modalSizeSelect')?.value || 'Standard';
  addToCart(productId, stitch, size);
  closeQuickView();
}

function closeQuickView() {
  const modal = document.getElementById('quickViewModal');
  if (modal) modal.classList.remove('open');
  document.body.classList.remove('modal-open');
}

/* ==========================================================================
   INTERACTIVE SPLIT-SCREEN 3D COUTURE HERO ENGINE
   ========================================================================== */
function initInteractiveHero() {
  const pills = document.querySelectorAll('[data-hero-edition]');
  if (!pills.length) return;

  const imgEl = document.getElementById('heroShowcaseImage');
  const eyebrowTextEl = document.getElementById('heroEyebrowText');
  const titleEl = document.getElementById('heroMainTitle');
  const descEl = document.getElementById('heroMainDesc');
  const cardTitleEl = document.getElementById('heroCardTitle');
  const cardMetaEl = document.getElementById('heroCardMeta');
  const chip1TitleEl = document.getElementById('heroChip1Title');
  const chip1SubEl = document.getElementById('heroChip1Sub');
  const chip2TitleEl = document.getElementById('heroChip2Title');
  const chip2SubEl = document.getElementById('heroChip2Sub');
  const quickBtn = document.getElementById('heroQuickViewBtn');

  let activeIndex = 0;

  const activateEdition = (idx) => {
    const edition = HERO_EDITIONS[idx];
    if (!edition) return;
    activeIndex = idx;

    pills.forEach((p, i) => p.classList.toggle('active', i === idx));

    if (imgEl) {
      imgEl.style.opacity = '0.25';
      setTimeout(() => {
        imgEl.src = edition.image;
        imgEl.style.opacity = '1';
      }, 220);
    }
    if (eyebrowTextEl) eyebrowTextEl.textContent = edition.eyebrow;
    if (titleEl) titleEl.innerHTML = edition.title;
    if (descEl) descEl.textContent = edition.desc;
    if (cardTitleEl) cardTitleEl.textContent = edition.cardTitle;
    if (cardMetaEl) cardMetaEl.textContent = edition.cardMeta;
    if (chip1TitleEl) chip1TitleEl.textContent = edition.chip1Title;
    if (chip1SubEl) chip1SubEl.textContent = edition.chip1Sub;
    if (chip2TitleEl) chip2TitleEl.textContent = edition.chip2Title;
    if (chip2SubEl) chip2SubEl.textContent = edition.chip2Sub;
    if (quickBtn) quickBtn.setAttribute('onclick', `openQuickView('${edition.id}')`);
  };

  pills.forEach((pill, i) => {
    pill.addEventListener('click', () => activateEdition(i));
  });

  setInterval(() => {
    activateEdition((activeIndex + 1) % HERO_EDITIONS.length);
  }, 6000);
}

/* ==========================================================================
   TRUE 3D PERSPECTIVE TILT & CURSOR SPOTLIGHT ENGINE (GoBaku + 3D Depth)
   ========================================================================== */
function initTilt3D() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.matchMedia('(hover: none)').matches) {
    return;
  }

  // Mark all interactive cards with .tilt-3d automatically
  const selectors = [
    '.product-card',
    '.category-card',
    '.feature-item',
    '.package-card',
    '.testimonial-card',
    '.contact-strip-card',
    '.stat-card',
    '.gallery-item',
    '.hero-arch-frame'
  ];
  document.querySelectorAll(selectors.join(',')).forEach(el => {
    el.classList.add('tilt-3d');
  });

  document.addEventListener('mousemove', (e) => {
    const card = e.target.closest && e.target.closest('.tilt-3d');
    document.querySelectorAll('.tilt-3d.is-tilting').forEach(c => {
      if (c !== card) {
        c.classList.remove('is-tilting');
        c.style.transform = '';
      }
    });

    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    const maxDeg = card.classList.contains('hero-arch-frame') ? 10 : 8;
    card.classList.add('is-tilting');
    card.style.transform = `perspective(950px) rotateY(${(x * maxDeg).toFixed(2)}deg) rotateX(${(-y * maxDeg).toFixed(2)}deg) translate3d(0, -6px, 0)`;
    card.style.setProperty('--mx', `${((x + 0.5) * 100).toFixed(1)}%`);
    card.style.setProperty('--my', `${((y + 0.5) * 100).toFixed(1)}%`);
  });
}

/* ==========================================================================
   TWINKLING STARS, TYPEWRITER & ANIMATED COUNTERS (GoBaku Style)
   ========================================================================== */
function initStars() {
  document.querySelectorAll('[data-stars]').forEach(el => {
    const count = parseInt(el.getAttribute('data-stars') || '60', 10);
    let html = '';
    for (let i = 0; i < count; i++) {
      const left = (Math.random() * 100).toFixed(2);
      const top = (Math.random() * 100).toFixed(2);
      const delay = (Math.random() * 4).toFixed(2);
      const size = (Math.random() * 2.2 + 1).toFixed(1);
      html += `<i style="left:${left}%;top:${top}%;animation-delay:${delay}s;--s:${size}px"></i>`;
    }
    el.innerHTML = html;
  });
}

function initTyped() {
  document.querySelectorAll('[data-typed]').forEach(el => {
    const words = el.getAttribute('data-typed').split('|');
    if (!words.length) return;
    let wi = 0, ci = 0, deleting = false;

    const tick = () => {
      const word = words[wi];
      ci += deleting ? -1 : 1;
      el.textContent = word.slice(0, ci);
      let delay = deleting ? 32 : 65;
      if (!deleting && ci === word.length) {
        deleting = true;
        delay = 1700;
      } else if (deleting && ci === 0) {
        deleting = false;
        wi = (wi + 1) % words.length;
        delay = 280;
      }
      setTimeout(tick, delay);
    };
    tick();
  });
}

function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      observer.unobserve(el);
      const target = parseInt(el.getAttribute('data-count'), 10);
      const suffix = el.getAttribute('data-suffix') || '';
      const start = performance.now();
      const duration = 1400;

      const step = (now) => {
        const progress = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }, { threshold: 0.4 });

  counters.forEach(c => observer.observe(c));
}

function initQuickFinder() {
  const form = document.getElementById('quickFinderForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const category = document.getElementById('qfCategory')?.value || 'all';
    if (['barat', 'walima', 'party'].includes(category)) {
      window.location.href = `wedding.html?filter=${category}`;
    } else if (category === 'stitching') {
      window.location.href = 'stitching.html';
    } else {
      window.location.href = `collections.html?filter=${category}`;
    }
  });
}

/* ==========================================================================
   SHARED HEADER, LEFT RAIL, SCROLL BAR & FLOATING STACK INJECTOR
   ========================================================================== */
function upgradeGlobalHeaderAndDock() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  // 1. Upgrade Top Bar Icons (Zero Emojis + Flag Tag)
  const topLinks = document.querySelector('.top-bar-links');
  if (topLinks) {
    topLinks.innerHTML = `
      <a href="tel:03221200965"><span class="tb-flag">PK</span> ${SVG_ICONS.phone} <span>0322-1200965</span></a>
      <a href="https://wa.me/923221200965?text=Assalam-o-Alaikum%20Alif%20Laam%20Meem!%20I%20would%20like%20to%20inquire%20about%20your%20Pakistani%20designer%20suits." target="_blank" rel="noopener">${SVG_ICONS.whatsapp} <span>WhatsApp Concierge</span></a>
      <a href="mailto:info@aliflaammeem.pk">${SVG_ICONS.mail} <span>info@aliflaammeem.pk</span></a>
    `;
  }

  // 2. Upgrade Header Navigation with Flawless 3-Zone Alignment & Icon Dropdowns
  const headerInner = document.querySelector('.header-inner');
  if (headerInner) {
    const isHome = currentPage === 'index.html' || currentPage === '';
    const isCollections = currentPage === 'collections.html';
    const isWedding = currentPage === 'wedding.html';
    const isStitching = currentPage === 'stitching.html';
    const isExplore = ['about.html', 'gallery.html', 'contact.html'].includes(currentPage);

    const chevronSVG = `<svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="6 9 12 15 18 9"></polyline></svg>`;

    headerInner.innerHTML = `
      <a href="index.html" class="brand-logo" aria-label="Alif Laam Meem Home">
        <div class="logo-emblem">الم</div>
        <div class="logo-text">
          <span class="logo-title">Alif Laam Meem</span>
          <span class="logo-tagline">Pakistani Couture &amp; Tailoring</span>
        </div>
      </a>

      <nav class="main-nav" id="mainNav" aria-label="Primary Navigation">
        <div class="nav-item">
          <a href="index.html" class="nav-link ${isHome ? 'active' : ''}">Home</a>
        </div>

        <!-- Dropdown 1: Collections -->
        <div class="nav-item">
          <a href="collections.html" class="nav-link ${isCollections ? 'active' : ''}">
            <span>Collections</span> ${chevronSVG}
          </a>
          <div class="dropdown-menu">
            <a href="collections.html?filter=summer" class="dropdown-item">
              <span class="dropdown-icon-box">${SVG_ICONS.sun}</span>
              <div>
                <span class="dropdown-item-title">Summer Lawn &amp; Chikankari</span>
                <span class="dropdown-item-sub">Swiss Voile, Jacquard &amp; Organza Dupattas</span>
              </div>
            </a>
            <a href="collections.html?filter=winter" class="dropdown-item">
              <span class="dropdown-icon-box">${SVG_ICONS.snowflake}</span>
              <div>
                <span class="dropdown-item-title">Winter Velvet &amp; Karandi</span>
                <span class="dropdown-item-sub">9000 Micro-Velvet Shawls &amp; Slub Karandi</span>
              </div>
            </a>
            <a href="collections.html?filter=formal" class="dropdown-item">
              <span class="dropdown-icon-box">${SVG_ICONS.sparkles}</span>
              <div>
                <span class="dropdown-item-title">Luxury Raw Silk Formals</span>
                <span class="dropdown-item-sub">Handworked Kora-Dabka &amp; Kiran Dupattas</span>
              </div>
            </a>
            <a href="wedding.html" class="dropdown-item">
              <span class="dropdown-icon-box">${SVG_ICONS.crown}</span>
              <div>
                <span class="dropdown-item-title">Bridal &amp; Heavy Wedding Wear</span>
                <span class="dropdown-item-sub">Barat Lehengas, Walima &amp; Nikkah Couture</span>
              </div>
            </a>
          </div>
        </div>

        <!-- Dropdown 2: Bridal & Heavy Wear -->
        <div class="nav-item">
          <a href="wedding.html" class="nav-link ${isWedding ? 'active' : ''}">
            <span>Bridal &amp; Heavy Wear</span> ${chevronSVG}
          </a>
          <div class="dropdown-menu">
            <a href="wedding.html?filter=barat" class="dropdown-item">
              <span class="dropdown-icon-box">${SVG_ICONS.crown}</span>
              <div>
                <span class="dropdown-item-title">Barat Bridal Couture</span>
                <span class="dropdown-item-sub">Crimson Velvet &amp; Pure Silk Zardozi Lehengas</span>
              </div>
            </a>
            <a href="wedding.html?filter=walima" class="dropdown-item">
              <span class="dropdown-icon-box">${SVG_ICONS.sparkles}</span>
              <div>
                <span class="dropdown-item-title">Walima &amp; Nikkah Ensembles</span>
                <span class="dropdown-item-sub">Pearl Ivory, Pistachio &amp; Silver Adda Work</span>
              </div>
            </a>
            <a href="wedding.html?filter=party" class="dropdown-item">
              <span class="dropdown-icon-box">${SVG_ICONS.shield}</span>
              <div>
                <span class="dropdown-item-title">Heavy Formal Event Wear</span>
                <span class="dropdown-item-sub">Couture Outfits for Wedding Guests &amp; Family</span>
              </div>
            </a>
          </div>
        </div>

        <div class="nav-item">
          <a href="stitching.html" class="nav-link ${isStitching ? 'active' : ''}">Stitching Studio</a>
        </div>

        <!-- Dropdown 3: Explore (Lookbook, About, Contact) -->
        <div class="nav-item">
          <a href="about.html" class="nav-link ${isExplore ? 'active' : ''}">
            <span>Atelier &amp; More</span> ${chevronSVG}
          </a>
          <div class="dropdown-menu">
            <a href="gallery.html" class="dropdown-item">
              <span class="dropdown-icon-box">${SVG_ICONS.grid}</span>
              <div>
                <span class="dropdown-item-title">Editorial Lookbook &amp; Gallery</span>
                <span class="dropdown-item-sub">High-Resolution Pakistani Couture Portraits</span>
              </div>
            </a>
            <a href="about.html" class="dropdown-item">
              <span class="dropdown-icon-box">${SVG_ICONS.shield}</span>
              <div>
                <span class="dropdown-item-title">About Alif Laam Meem</span>
                <span class="dropdown-item-sub">Our Karachi Heritage &amp; Master Karigars</span>
              </div>
            </a>
            <a href="contact.html" class="dropdown-item">
              <span class="dropdown-icon-box">${SVG_ICONS.location}</span>
              <div>
                <span class="dropdown-item-title">Contact &amp; Karachi Studio</span>
                <span class="dropdown-item-sub">Landhi Town, Karachi • 0322-1200965</span>
              </div>
            </a>
          </div>
        </div>
      </nav>

      <div class="header-actions">
        <a href="https://wa.me/923221200965?text=Assalam-o-Alaikum%20Alif%20Laam%20Meem!" target="_blank" rel="noopener" class="header-icon-btn" title="WhatsApp Studio: 0322-1200965" aria-label="WhatsApp">
          ${SVG_ICONS.whatsapp}
        </a>
        <a href="cart.html" class="header-icon-btn" title="Couture Shopping Bag" aria-label="Shopping Bag">
          ${SVG_ICONS.bag}
          <span class="cart-count-badge">0</span>
        </a>
        <a href="stitching.html" class="btn btn-gold header-cta-btn">
          ${SVG_ICONS.scissors} <span>Custom Stitch</span>
        </a>
        <button type="button" class="mobile-menu-toggle" id="mobileMenuBtn" aria-label="Toggle Menu">☰</button>
      </div>
    `;
  }

  // 3. Inject Top Scroll Progress Bar
  if (!document.querySelector('.scroll-progress')) {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
  }

  // 4. Inject Left Quick-Access Rail (GoBaku Social Rail Style)
  if (!document.querySelector('.social-rail')) {
    const rail = document.createElement('div');
    rail.className = 'social-rail';
    rail.setAttribute('aria-label', 'Quick Atelier Links');
    rail.innerHTML = `
      <a href="https://wa.me/923221200965" target="_blank" rel="noopener" class="rail-icon" title="WhatsApp Concierge">${SVG_ICONS.whatsapp}</a>
      <a href="collections.html" class="rail-icon" title="Explore Suit Catalog">${SVG_ICONS.grid}</a>
      <a href="wedding.html" class="rail-icon" title="Bridal & Heavy Couture">${SVG_ICONS.crown}</a>
      <a href="stitching.html" class="rail-icon" title="Custom Stitching Studio">${SVG_ICONS.scissors}</a>
      <a href="cart.html" class="rail-icon" title="Couture Shopping Bag">${SVG_ICONS.bag}</a>
    `;
    document.body.appendChild(rail);
  }

  // 5. Upgrade Right-Side Floating Action Stack (GoBaku FAB Stack with Tooltips & Pulsing Rings)
  let dock = document.querySelector('.floating-dock');
  if (!dock) {
    dock = document.createElement('div');
    dock.className = 'floating-dock';
    document.body.appendChild(dock);
  }
  dock.innerHTML = `
    <button type="button" class="fab fab-top" id="fabBackToTop" aria-label="Back to top">
      ${SVG_ICONS.arrowUp}
      <span class="fab-tip">Back to Top</span>
    </button>
    <a href="mailto:info@aliflaammeem.pk?subject=Couture%20%26%20Stitching%20Inquiry%20-%20Alif%20Laam%20Meem" class="fab fab-mail" aria-label="Email Us">
      ${SVG_ICONS.mail}
      <span class="fab-tip">Email: info@aliflaammeem.pk</span>
    </a>
    <a href="tel:03221200965" class="fab fab-call" aria-label="Call Us">
      ${SVG_ICONS.phone}
      <span class="fab-tip">Call 0322-1200965</span>
    </a>
    <a href="https://wa.me/923221200965?text=Assalam-o-Alaikum%20Alif%20Laam%20Meem!%20I%20would%20like%20to%20inquire%20about%20a%20suit%20or%20custom%20stitching." target="_blank" rel="noopener" class="fab fab-wa" aria-label="Chat on WhatsApp">
      ${SVG_ICONS.whatsapp}
      <span class="fab-tip">WhatsApp • 0322-1200965</span>
    </a>
  `;

  const backTopBtn = document.getElementById('fabBackToTop');
  if (backTopBtn) {
    backTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ==========================================================================
   PAGE INITIALIZERS (Home, Collections, Wedding, Cart, Stitching)
   ========================================================================== */
function initProductGrids() {
  const urlParams = new URLSearchParams(window.location.search);
  const urlFilter = urlParams.get('filter');

  // 1. Home Featured Grid
  const homeGrid = document.getElementById('homeFeaturedGrid');
  if (homeGrid) {
    const featured = [
      PRODUCT_CATALOG[8], // Barat Crimson Lehenga
      PRODUCT_CATALOG[3], // Winter Velvet Shawl Suit
      PRODUCT_CATALOG[6], // Champagne Raw Silk Formal
      PRODUCT_CATALOG[0], // Summer Chikankari Lawn
      PRODUCT_CATALOG[9], // Walima Pearl Ivory
      PRODUCT_CATALOG[1]  // Zarine Mint Jacquard
    ];
    homeGrid.innerHTML = featured.map((p, i) => createProductCardHTML(p, i)).join('');
  }

  // 2. Collections Catalog Grid
  const collectionsGrid = document.getElementById('collectionsCatalogGrid');
  if (collectionsGrid) {
    const renderCollections = (filter = 'all') => {
      const items = filter === 'all'
        ? PRODUCT_CATALOG
        : PRODUCT_CATALOG.filter(p => p.category === filter || (filter === 'wedding' && ['barat', 'walima', 'party'].includes(p.category)));
      collectionsGrid.innerHTML = items.map((p, i) => createProductCardHTML(p, i)).join('');
    };

    const initial = urlFilter || 'all';
    renderCollections(initial);

    document.querySelectorAll('[data-collection-filter]').forEach(btn => {
      if (btn.getAttribute('data-collection-filter') === initial) {
        document.querySelectorAll('[data-collection-filter]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      }
      btn.addEventListener('click', () => {
        document.querySelectorAll('[data-collection-filter]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderCollections(btn.getAttribute('data-collection-filter'));
      });
    });
  }

  // 3. Wedding / Heavy Wear Grid
  const weddingGrid = document.getElementById('weddingCatalogGrid');
  if (weddingGrid) {
    const bridalItems = PRODUCT_CATALOG.filter(p => ['barat', 'walima', 'party'].includes(p.category));
    const renderWedding = (filter = 'all') => {
      const items = filter === 'all'
        ? bridalItems
        : bridalItems.filter(p => p.category === filter);
      weddingGrid.innerHTML = items.map((p, i) => createProductCardHTML(p, i)).join('');
    };

    const initial = urlFilter || 'all';
    renderWedding(initial);

    document.querySelectorAll('[data-wedding-filter]').forEach(btn => {
      if (btn.getAttribute('data-wedding-filter') === initial) {
        document.querySelectorAll('[data-wedding-filter]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      }
      btn.addEventListener('click', () => {
        document.querySelectorAll('[data-wedding-filter]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderWedding(btn.getAttribute('data-wedding-filter'));
      });
    });
  }
}

/* ==========================================================================
   CART PAGE RENDERER & CHECKOUT HANDLER
   ========================================================================== */
function renderCartPage() {
  const cartContainer = document.getElementById('cartItemsContainer');
  const subtotalEl = document.getElementById('cartSubtotal');
  const totalEl = document.getElementById('cartGrandTotal');
  if (!cartContainer) return;

  const cart = getCart();
  if (cart.length === 0) {
    cartContainer.innerHTML = `
      <div style="text-align: center; padding: 48px 20px;">
        <p style="font-family: var(--font-heading); font-size: 1.85rem; color: var(--maroon-deep); margin-bottom: 10px;">Your Couture Bag is Empty</p>
        <p style="color: var(--text-secondary); margin-bottom: 24px;">Explore our Pakistani Summer, Winter, and Bridal Couture collections or book a Custom Stitching package.</p>
        <div style="display: flex; justify-content: center; gap: 14px; flex-wrap: wrap;">
          <a href="collections.html" class="btn btn-primary">Explore Collections</a>
          <a href="wedding.html" class="btn btn-gold">View Bridal Couture</a>
        </div>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = 'PKR 0';
    if (totalEl) totalEl.textContent = 'PKR 0';
    return;
  }

  let subtotal = 0;
  cartContainer.innerHTML = cart.map((item, idx) => {
    const lineTotal = item.unitPrice * item.qty;
    subtotal += lineTotal;
    return `
      <div class="cart-item-row">
        <img src="${item.image}" alt="${item.title}" class="cart-item-img">
        <div>
          <span style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1.5px; color: var(--gold-primary); font-weight: 700;">${item.categoryLabel}</span>
          <h4 style="font-size: 1.25rem; color: var(--maroon-deep); margin-bottom: 4px;">${item.title}</h4>
          <p style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 8px;">
            Tailoring: <strong>${item.stitchingType}</strong> | Size: <strong>${item.size}</strong>
          </p>
          <div style="display: flex; align-items: center; gap: 14px;">
            <div class="qty-control">
              <button type="button" class="qty-btn" onclick="changeCartQty(${idx}, -1)">−</button>
              <span class="qty-val">${item.qty}</span>
              <button type="button" class="qty-btn" onclick="changeCartQty(${idx}, 1)">+</button>
            </div>
            <button type="button" onclick="removeCartItem(${idx})" style="font-size: 0.76rem; color: #b91c1c; text-decoration: underline; font-weight:600;">Remove</button>
          </div>
        </div>
        <div style="text-align: right;">
          <strong style="font-family: var(--font-heading); font-size: 1.35rem; color: var(--maroon-primary);">${formatPKR(lineTotal)}</strong>
          <small style="display: block; font-size: 0.72rem; color: var(--text-muted);">${formatPKR(item.unitPrice)} each</small>
        </div>
      </div>
    `;
  }).join('');

  if (subtotalEl) subtotalEl.textContent = formatPKR(subtotal);
  if (totalEl) totalEl.textContent = formatPKR(subtotal + BRAND_CONFIG.deliveryFee);
}

function changeCartQty(index, delta) {
  const cart = getCart();
  if (!cart[index]) return;
  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  saveCart(cart);
  renderCartPage();
}

function removeCartItem(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  renderCartPage();
}

/* ==========================================================================
   SIZING CALCULATOR, GALLERY FILTER & FORMS
   ========================================================================== */
function initSizeCalculator() {
  const calcBtn = document.getElementById('calculateSizeBtn');
  if (!calcBtn) return;

  calcBtn.addEventListener('click', () => {
    const bust = parseFloat(document.getElementById('calcBust')?.value || '0');
    const waist = parseFloat(document.getElementById('calcWaist')?.value || '0');
    const resultBox = document.getElementById('sizeCalcResult');
    if (!resultBox) return;

    if (!bust || bust < 28 || bust > 56) {
      resultBox.style.display = 'block';
      resultBox.innerHTML = `<span style="color: var(--maroon-primary); font-weight: 600;">Please enter a valid bust measurement between 28 and 56 inches.</span>`;
      return;
    }

    let recSize = 'Medium (M)';
    let chestFlat = (bust / 2 + 1).toFixed(1);
    if (bust <= 34) recSize = 'Extra Small (XS)';
    else if (bust <= 36) recSize = 'Small (S)';
    else if (bust <= 39) recSize = 'Medium (M)';
    else if (bust <= 42) recSize = 'Large (L)';
    else if (bust <= 45) recSize = 'Extra Large (XL)';
    else recSize = 'Bespoke Custom Tailoring (Recommended)';

    resultBox.style.display = 'block';
    resultBox.innerHTML = `
      <strong style="color: var(--maroon-deep); display: block; font-size: 1.05rem; margin-bottom: 4px;">
        Recommended Alif Laam Meem Size: <span style="color: var(--maroon-primary);">${recSize}</span>
      </strong>
      <span style="font-size: 0.86rem; color: var(--text-secondary);">
        Estimated Flat Kameez Chest: <strong>${chestFlat} inches</strong> ${waist ? `| Waist: <strong>${waist} inches</strong>` : ''}. Our Landhi Town master tailors also craft exact bespoke fits.
      </span>
    `;
  });
}

function initGalleryFilters() {
  const filterBtns = document.querySelectorAll('[data-gallery-filter]');
  const items = document.querySelectorAll('.gallery-item');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-gallery-filter');
      items.forEach(item => {
        const match = cat === 'all' || item.getAttribute('data-category') === cat;
        item.style.display = match ? 'block' : 'none';
      });
    });
  });
}

function initForms() {
  const checkoutForm = document.getElementById('checkoutOrderForm');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(checkoutForm);
      const name = formData.get('fullName') || 'Valued Client';
      const phone = formData.get('phone') || '';
      const city = formData.get('city') || 'Karachi';
      const address = formData.get('address') || '';
      const stitchingNotes = formData.get('notes') || 'Standard instructions';
      const payment = formData.get('paymentMethod') || 'Cash on Delivery (Nationwide Pakistan)';

      const cart = getCart();
      const cartSummary = cart.length
        ? cart.map(i => `• ${i.title} (${i.stitchingType}, Size: ${i.size}) x${i.qty} = ${formatPKR(i.unitPrice * i.qty)}`).join('\n')
        : '• Direct Custom Stitching / Suit Inquiry';

      const subtotal = cart.reduce((acc, i) => acc + i.unitPrice * i.qty, 0);
      const total = cart.length ? formatPKR(subtotal + BRAND_CONFIG.deliveryFee) : 'To Be Confirmed';

      const message = `Assalam-o-Alaikum *Alif Laam Meem*!\n\nNew Order / Booking Request:\n*Customer:* ${name}\n*Phone:* ${phone}\n*City:* ${city}\n*Delivery Address:* ${address}\n*Payment Method:* ${payment}\n\n*Selected Items:*\n${cartSummary}\n\n*Total Payable:* ${total}\n*Custom Stitching / Measurement Notes:* ${stitchingNotes}`;

      const confirmBox = document.getElementById('orderConfirmationBanner');
      if (confirmBox) {
        confirmBox.style.display = 'block';
        confirmBox.innerHTML = `
          <h3 class="serif-heading" style="color: var(--emerald-deep); font-size: 1.65rem; margin-bottom: 6px;">Thank You, ${name}! Your Order Request is Ready.</h3>
          <p style="font-size: 0.92rem; color: var(--text-secondary); margin-bottom: 16px;">
            Our couture team at Landhi Town, Karachi will verify your order and measurements. Click below to send your instant confirmation via WhatsApp or Email:
          </p>
          <div style="display: flex; gap: 12px; flex-wrap: wrap;">
            <a href="https://wa.me/${BRAND_CONFIG.phoneRaw}?text=${encodeURIComponent(message)}" target="_blank" rel="noopener" class="btn btn-whatsapp">
              ${SVG_ICONS.whatsapp} <span>Confirm on WhatsApp (${BRAND_CONFIG.phoneDisplay})</span>
            </a>
            <a href="mailto:${BRAND_CONFIG.email}?subject=${encodeURIComponent('New Order - Alif Laam Meem (' + name + ')')}&body=${encodeURIComponent(message)}" class="btn btn-primary">
              ${SVG_ICONS.mail} <span>Send Order via Email</span>
            </a>
          </div>
        `;
        confirmBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      showToast('Order details prepared! Complete confirmation via WhatsApp or Email.');
    });
  }

  document.querySelectorAll('.js-inquiry-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get('name') || 'Client';
      const phone = data.get('phone') || '';
      const subject = data.get('subject') || 'General & Stitching Inquiry';
      const msg = data.get('message') || '';

      const waText = `Assalam-o-Alaikum *Alif Laam Meem*!\n*Inquiry From:* ${name}\n*Phone:* ${phone}\n*Category:* ${subject}\n*Message:* ${msg}`;
      showToast('Opening WhatsApp to connect you directly with our Karachi studio.');
      setTimeout(() => {
        window.open(`https://wa.me/${BRAND_CONFIG.phoneRaw}?text=${encodeURIComponent(waText)}`, '_blank');
      }, 650);
      form.reset();
    });
  });
}

/* ==========================================================================
   INITIALIZATION ON DOM CONTENT LOADED
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  upgradeGlobalHeaderAndDock();
  updateCartBadges();
  initInteractiveHero();
  initProductGrids();
  renderCartPage();
  initSizeCalculator();
  initGalleryFilters();
  initForms();
  initStars();
  initTyped();
  initCounters();
  initQuickFinder();
  initTilt3D();

  // Mobile Menu Toggle (bound after header upgrade)
  const menuBtn = document.getElementById('mobileMenuBtn');
  const mainNav = document.getElementById('mainNav');
  if (menuBtn && mainNav) {
    menuBtn.addEventListener('click', () => {
      mainNav.classList.toggle('open');
      menuBtn.textContent = mainNav.classList.contains('open') ? '✕' : '☰';
    });
  }

  // Unified Scroll Handler: Sticky Header, Scroll Progress Bar, and Back-to-Top FAB
  const header = document.querySelector('.site-header');
  const progressBar = document.querySelector('.scroll-progress');
  const fabTop = document.getElementById('fabBackToTop');

  const onScroll = () => {
    const y = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (header) header.classList.toggle('scrolled', y > 32);
    if (progressBar) progressBar.style.transform = `scaleX(${maxScroll > 0 ? y / maxScroll : 0})`;
    if (fabTop) fabTop.classList.toggle('show', y > 500);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // FAQ Accordion
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.closest('.faq-item');
      if (parent) parent.classList.toggle('open');
    });
  });

  // IntersectionObserver for 3D Scroll Reveal Animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
