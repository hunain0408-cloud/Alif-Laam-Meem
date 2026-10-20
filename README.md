# Alif Laam Meem — Pakistani Luxury Ladies Designer Suits & Custom Stitching Atelier

**Alif Laam Meem (الم)** is a standalone, multi-page luxury e-commerce and bespoke tailoring web application built with **100% pure HTML5, modern CSS3 (with 3D Perspective Physics), and Vanilla JavaScript (ES6+)**. Designed for a premier Karachi-based Pakistani eastern wear atelier located in **Landhi Town, Karachi**, the platform showcases unstitched and custom-stitched ladies designer suits, seasonal collections, bridal couture, and an interactive tailoring studio with nationwide delivery across Pakistan.

---

## Website Architecture Short Note

### 1. How Many Pages & What Are They?

The website is architected as **8 distinct, standalone HTML5 pages** located in the project root directory, all powered by a shared stylesheet (`assets/css/style.css`), a centralized interactive engine (`assets/js/main.js`), and 12 local Pakistani couture photographs (`assets/images/`):

| # | Page File | Page Title & Core Purpose | Key Interactive Components |
| :--- | :--- | :--- | :--- |
| **01** | `index.html` | **Home (Atelier Showcase)** | Cinematic split-screen 3D couture hero with 4-edition switcher, live typewriter text, overlapping Quick Suit & Stitching Finder bar, infinite luxury marquee, animated counter stats, 3D bento category cards, featured 6-suit grid with live Unstitched/Stitched toggle, 4-step orbital workflow, Custom Stitching Builder CTA banner, client testimonials, and 4-card direct contact strip. |
| **02** | `about.html` | **About Us (Brand Heritage)** | Brand story rooted in Landhi Town, Karachi; pure mill-verified fabric standards; artisan zardozi/dabka handwork philosophy; and atelier craftsmanship milestones. |
| **03** | `collections.html` | **Collections (Seasonal & Formal Catalog)** | Complete interactive 14-suit catalog covering **Summer Collection** (Swiss Voile Chikankari Lawn), **Winter Collection** (9000 Micro-Velvet Shawls, Slub Karandi, Khaddar), **Luxury Formals** (Pure Korean Raw Silk), and **Bridal Wear** with instant category filtering, Quick-View modal, and live stitching price switcher. |
| **04** | `wedding.html` | **Wedding & Heavy Bridal Wear** | Dedicated bridal couture lounge for **Barat Lehengas**, **Walima Reception Gowns**, **Nikkah Ensembles**, and **Heavy Formal Party Wear**, paired with a direct bridal consultation booking form. |
| **05** | `stitching.html` | **Stitching Services (Tailoring Studio)** | Transparent 3-tier custom stitching packages (*Signature Seasonal Stitch*, *Luxury Formal & Silk Stitch*, *Bridal Couture Master Fit*), an interactive **Bust/Waist Size Calculator**, and a complete standard Pakistani Kameez/Trouser measurement chart (`XS` to `XL`). |
| **06** | `gallery.html` | **Gallery / Lookbook** | High-resolution editorial portrait archive with category filter tabs (*Bridal*, *Seasonal*, *Zardozi Craft Close-Ups*) where clicking any portrait opens its interactive specification and ordering modal. |
| **07** | `contact.html` | **Contact Us (Karachi Concierge Desk)** | Direct contact channels for the **Landhi Town, Karachi** studio, phone/WhatsApp (`0322-1200965`), email (`info@aliflaammeem.pk`), interactive FAQ accordion, and direct WhatsApp inquiry form. |
| **08** | `cart.html` | **Shopping Bag & Checkout** | Persistent `localStorage` shopping bag supporting item quantity controls, tailoring/size breakdown, delivery fee calculation, and instant order confirmation via **WhatsApp** or **Email** (Cash on Delivery & Bank Transfer across Pakistan). |

---

### 2. How Did You Use CSS?

All styling is centralized inside a single, zero-dependency master stylesheet (`assets/css/style.css`), organized into 13 modular sections:

1. **CSS Custom Properties (Design Tokens):**
   - Defines a royal Pakistani couture palette using `:root` variables—combining deep dark surfaces (`--maroon-obsidian: #140306`, `--maroon-primary: #58111C`, `--emerald-deep: #062119`) with antique gold accents (`--gold-primary: #C99E52`, `--gold-bright: #E8C170`) and warm editorial ivory backgrounds (`--ivory-bg: #FAF6F0`, `--ivory-warm: #F2EAE0`).
   - Pairs **Cormorant Garamond** (for regal serif headings) with **Plus Jakarta Sans** (for clean, high-legibility UI controls, pricing, and tables).

2. **True 3D Perspective Animations & Interactive 3D Depth:**
   - **3D Hero Visual Stage:** Uses `perspective: 1200px` and `transform-style: preserve-3d` on `.hero-arch-frame`. The Mughal-arched portrait continuously floats in 3D space (`@keyframes float3DStage`), framed by two 3D tilted orbital filigree rings (`@keyframes orbit3DRing1` and `orbit3DRing2` using `rotateX(68deg) rotateY(12deg) rotateZ(...)`) and three floating glassmorphic depth chips positioned at `transform: translateZ(55px)`.
   - **Interactive 3D Card Tilt & Radial Spotlight (`.tilt-3d`):** Every product, category, feature, package, and testimonial card uses `transform-style: preserve-3d`. As the user moves their cursor across a card, CSS custom properties (`--mx`, `--my`) render a live cursor-tracking radial gold spotlight (`radial-gradient(420px circle at var(--mx) var(--my), ...)`), while inner badges and icons pop forward at `transform: translateZ(25px)`.
   - **3D Scroll-Reveal Unfolding (`.reveal`):** Elements enter the viewport with a 3D perspective unfold (`perspective(1000px) translate3d(0, 38px, 0) rotateX(8deg)` transitioning to `rotateX(0deg)`) with staggered `data-delay` intervals.

3. **Layout Combinations, Glassmorphism & Strict Baseline Alignment:**
   - **Atmospheric Layers:** Combines blurred drifting ambient orbs (`.orb.o1`, `.o2`, `.o3`), radial-masked architectural grid lines (`.grid-lines`), and twinkling gold-dust particles (`.stars`) in hero headers.
   - **Strict Equal-Height Grid Alignment:** Product grids (`.products-grid`), bento grids (`.category-grid`), and package grids (`.packages-grid`) use CSS Grid (`repeat(3, 1fr)` / `repeat(4, 1fr)`) while individual cards use `display: flex; flex-direction: column; height: 100%` with `margin-top: auto` on card footers so prices, stitching toggles, and action buttons align on the exact same horizontal baseline across every row.

4. **Responsive Multi-Device Architecture:**
   - Media queries at `1380px`, `1120px`, and `720px` smoothly adapt 4-column and 3-column desktop grids into 2-column tablet layouts and 1-column mobile stacks without horizontal overflow.

---

### 3. How Does Navigation Work?

Navigation is engineered as a unified, multi-layered system managed by `assets/css/style.css` and `assets/js/main.js` (`upgradeGlobalHeaderAndDock()`) so all 8 pages remain 100% synchronized:

1. **Unified Sticky Header & Collapsing Topbar (`.site-header` & `.top-bar`):**
   - At the top of every page sits the announcement `.top-bar` (displaying Pakistan-wide delivery info, phone `0322-1200965`, WhatsApp link, and official email) followed by the sticky `.site-header` (`backdrop-filter: blur(18px)`).
   - **Strict 3-Zone Flex Alignment:** Inside `.header-inner`, the Brand Emblem & Title sit on the left (`.brand-logo`), primary navigation links sit centered in a single non-wrapping row (`.main-nav`), and quick-action vector buttons (WhatsApp, Couture Bag with live item badge `.cart-count-badge`, and the **Custom Stitch** pill CTA) sit on the right (`.header-actions`).
   - On scroll (`window.scrollY > 32`), `.site-header.scrolled` smoothly compacts the header height from `78px` to `68px` and adds a deeper elevation shadow, while a top `.scroll-progress` bar tracks page reading progress.

2. **Centered Glassmorphic Dropdown Sub-Menus with Hover Bridge:**
   - To prevent top-level link wrapping, sub-categories are grouped into three centered dropdown menus (**Collections**, **Bridal & Heavy Wear**, and **Atelier & More**).
   - Each `.dropdown-menu` is positioned at `left: 50%; transform: translate(-50%, 12px)` and animates to `translate(-50%, 0)` on hover, featuring an invisible `::before` hover bridge (`top: -16px; height: 16px`) so diagonal cursor movement never closes the menu prematurely. Every dropdown item includes a custom vector SVG icon badge, title, and subtitle.

3. **URL Query-Parameter Deep Linking & Instant Filtering:**
   - Dropdown links and the homepage **Quick Suit & Stitching Finder** pass URL parameters such as `collections.html?filter=summer`, `collections.html?filter=winter`, `wedding.html?filter=barat`, or `wedding.html?filter=walima`.
   - When the target page loads, `initProductGrids()` reads `new URLSearchParams(window.location.search)`, automatically activates the matching filter pill, and renders the filtered suits without requiring a backend server.

4. **Mobile Slide-Down Drawer & Floating Quick-Access Docks:**
   - On screens `<= 1120px`, the desktop navigation transforms into a touch-friendly slide-down drawer toggled by `#mobileMenuBtn`, with sub-menus expanding cleanly as vertical accordions.
   - Across all viewports, users also have instant navigation via the **Left Quick-Access Rail (`.social-rail`)** on desktop and the **Right Floating Action Stack (`.floating-dock`)** featuring Back-to-Top, Email, Shake-Call, and Double-Ring Pulsing WhatsApp buttons with slide-out tooltips.

---

## Project Folder Structure

```text
Alif-Laam-Meem/
├── index.html                  # 01. Home — 3D Couture Hero, Quick Finder, Featured Suits & Workflow
├── about.html                  # 02. About Us — Karachi Heritage, Pure Fabrics & Artisan Craftsmanship
├── collections.html            # 03. Collections — Filterable Summer, Winter & Luxury Formal Catalog
├── wedding.html                # 04. Wedding & Heavy Wear — Barat, Walima, Nikkah & Party Couture
├── stitching.html              # 05. Stitching Studio — Tailoring Packages, Size Chart & Calculator
├── gallery.html                # 06. Lookbook & Gallery — Editorial Portraits with Quick-View Modal
├── contact.html                # 07. Contact Us — Landhi Town Karachi Studio, FAQ & Inquiry Form
├── cart.html                   # 08. Couture Bag & Checkout — Persistent Cart & WhatsApp/Email Order
├── README.md                   # Complete Website Architecture Short Note & Deployment Guide
├── README.pdf                  # Printable PDF Edition of the Website Architecture Documentation
└── assets/
    ├── css/
    │   └── style.css           # Master Stylesheet (Tokens, 3D Animations, Header & Responsive Grid)
    ├── js/
    │   └── main.js             # Shared Catalog, 3D Tilt Engine, SVG Icons, Cart & Filter Logic
    └── images/                 # 12 Local Authentic Pakistani Designer & Bridal Couture Photographs
```

---

## Deployment Guide (GitHub & Hostinger Hosting)

### Step 1: Upload Code to GitHub
1. Create a new repository on GitHub (e.g., `alif-laam-meem-couture`).
2. Run the following Git commands inside the project folder:
   ```bash
   git init
   git add .
   git commit -m "Initial release: Alif Laam Meem 8-page luxury Pakistani couture website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```

### Step 2: Deploy on Hostinger (2 Easy Options)

#### Option A: Direct Upload via Hostinger File Manager (Fastest — 1 Minute)
1. Log in to your **Hostinger hPanel** (`hpanel.hostinger.com`) and select your domain/hosting plan.
2. Open **Files -> File Manager** and navigate inside the **`public_html`** folder.
3. Delete any default `default.php` file inside `public_html`.
4. Upload `Alif_Laam_Meem_Hostinger_Deploy.zip` into `public_html`, right-click it, and click **Extract** into `.` (current directory) so that `index.html`, the other 7 `.html` files, and the `assets/` folder sit directly inside `public_html/`.
5. Visit your domain — your website is immediately live with SSL!

#### Option B: Automatic Deployment via Hostinger Git Integration
1. In **Hostinger hPanel**, go to **Advanced -> Git**.
2. Paste your GitHub Repository URL (`https://github.com/<your-username>/<your-repo-name>.git`) and set the branch to `main`.
3. Leave the install path empty (so it deploys directly to `public_html`) and click **Create** / **Deploy**.
4. Enable **Auto-Deployment** via the provided Webhook URL so every future `git push` updates your live Hostinger domain automatically.
