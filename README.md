# Darshan Resin Art & Gifts — Website

A premium, production-ready website for **Darshan Resin Art & Gifts**, a handcrafted resin art and gifting studio in Villianur, Puducherry, India.

Built with **React 19 + TypeScript + Vite + Tailwind CSS + React Router + Framer Motion**, styled in a gold/white/purple glassmorphism theme, fully responsive, with dark mode, and ready to deploy on **GitHub Pages**.

> **About the images:** every image in `public/images/` (hero banners, product photos, gallery art, offer banners, icons, logo) is an **original, procedurally generated SVG graphic** — abstract resin-pour art, gradients and icon illustrations. Nothing is scraped or copied from Instagram, Google Images, or anywhere else, so the site is safe to publish as-is. Swap them out for real product photography whenever you're ready (instructions below).

---

## 1. Quick Start

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`) in your browser.

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

---

## 2. Project Structure

```
darshan-resin-art-gifts/
├── .github/workflows/deploy.yml   # GitHub Actions → GitHub Pages deployment
├── public/
│   ├── images/
│   │   ├── hero/          # 5 full-screen hero banners
│   │   ├── products/      # 30 product images (product-01.svg … product-30.svg)
│   │   ├── gallery/       # 20 gallery artworks
│   │   ├── offers/        # 8 offer banners
│   │   ├── backgrounds/   # decorative textures (waves, floral corners, gold lines…)
│   │   ├── icons/         # 11 custom SVG icons
│   │   ├── logo/          # logo.svg, favicon.svg, app-icon.svg
│   │   └── testimonials/  # customer avatar illustrations
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── manifest.json
│   └── 404.html           # GitHub Pages SPA routing fallback
├── src/
│   ├── data/               # ← EDIT THESE FILES to update site content
│   │   ├── business.ts     # name, phone, WhatsApp, social links, hours
│   │   ├── products.ts     # all 30 products
│   │   ├── offers.ts       # offers + countdown durations
│   │   ├── testimonials.ts # customer reviews
│   │   ├── faq.ts          # FAQ accordion content
│   │   ├── gallery.ts      # gallery images
│   │   └── videos.ts       # YouTube video/short IDs
│   ├── components/         # reusable UI (Header, Footer, ProductCard, etc.)
│   ├── pages/               # one file per route (Home, About, Products, …)
│   ├── hooks/                # useTheme (dark mode) + ThemeContext
│   ├── App.tsx               # route definitions
│   ├── main.tsx               # app entry point
│   └── index.css               # Tailwind + custom design tokens
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

---

## 3. Editing Content (No React Knowledge Required)

Everything the business owner needs to change lives inside **`src/data/`**. You never need to touch a `.tsx` component file to update text, prices, or contact info.

### Business name, phone, social links → `src/data/business.ts`
```ts
export const business = {
  name: "Darshan Resin Art & Gifts",
  contact: {
    whatsappNumber: "919566555389", // digits only, country code first, no + or spaces
    ...
  },
  social: {
    instagram: "https://www.instagram.com/pondy_resin_art_gifts/",
    youtube: "https://www.youtube.com/@pondyresinart",
  },
  ...
};
```

### Products → `src/data/products.ts`
Each product is a plain object:
```ts
{
  id: "product-31",
  slug: "my-new-product",
  name: "New Resin Piece",
  category: "Home Decor",       // must match an entry in PRODUCT_CATEGORIES
  description: "...",
  price: 1499,
  image: "/images/products/product-31.svg", // or product-31.jpg once you add a real photo
  featured: true,
  isNew: true,
}
```
Add, remove, or reorder items in the `products` array — the Products page, homepage "Featured Products", and category filters update automatically.

### Offers → `src/data/offers.ts`
Set `endsInDays` on any offer to control its live countdown timer.

### Reviews → `src/data/testimonials.ts`
### FAQ → `src/data/faq.ts`
### Gallery → `src/data/gallery.ts`
### YouTube videos → `src/data/videos.ts` (replace the placeholder `youtubeId` values with your real video IDs from `youtube.com/watch?v=THIS_PART`)

---

## 4. Replacing Placeholder Images With Real Photos

1. Add your photo to the matching folder in `public/images/...` — e.g. `public/images/products/product-01.jpg`.
2. Update the `image` field for that item in the relevant `src/data/*.ts` file to point at the new filename.
3. Recommended: compress photos and use `.webp` for the smallest file size (e.g. via [squoosh.app](https://squoosh.app)).
4. Keep the existing SVGs as a safe fallback/backup if you like — unused files don't affect the build.

The **logo** (`public/images/logo/logo.svg`), **favicon**, and **app icon** can be replaced the same way; just keep the filenames the same, or update the references in `index.html` / `public/manifest.json`.

---

## 5. Deploying to GitHub Pages

### One-time setup
1. Create a new GitHub repository (e.g. `darshan-resin-art-gifts`).
2. Push this project to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
3. In your repository, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
4. **Important:** open `vite.config.ts` and set `base` to match your repository name exactly:
   ```ts
   base: '/<your-repo-name>/',
   ```
   Also update the `basename` prop in `src/main.tsx` to the same value, and the canonical/OG URLs in `index.html` and `public/sitemap.xml` / `public/robots.txt` if your repo name differs from `darshan-resin-art-gifts`.

### Ongoing deploys
Every push to `main` automatically triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. No manual steps needed after the first setup.

Your live site will be available at:
```
https://<your-username>.github.io/<your-repo-name>/
```

### Manual deploy (alternative)
```bash
npm run deploy
```
This uses `gh-pages` to push the `dist/` folder to a `gh-pages` branch (make sure Pages source is set to that branch if you use this method instead of GitHub Actions).

---

## 6. Tech Stack

| Layer          | Choice                                   |
|-----------------|-------------------------------------------|
| Framework       | React 19 + TypeScript                    |
| Build tool      | Vite 6                                   |
| Styling         | Tailwind CSS 3 (custom gold/purple theme, glassmorphism, dark mode) |
| Routing         | React Router 6                           |
| Animation       | Framer Motion                            |
| Icons           | lucide-react + react-icons               |
| Deployment      | GitHub Pages via GitHub Actions          |
| SEO             | Native React 19 head-tag hoisting (no extra library), JSON-LD structured data, sitemap.xml, robots.txt |

---

## 7. Accessibility & Performance Notes

- Semantic HTML landmarks (`header`, `nav`, `main`, `footer`), skip-to-content link, ARIA labels on icon-only buttons, keyboard-navigable accordion/lightbox/menus, visible focus rings, `prefers-reduced-motion` respected.
- Images use `loading="lazy"` (except the active hero slide) and explicit width/height where practical to reduce layout shift.
- JS is code-split by route/vendor via Vite's `manualChunks` for faster first load.
- All graphics are lightweight SVGs (no large raster downloads) which keeps Lighthouse performance scores high out of the box.

---

## 8. Support

This project was generated as a complete, ready-to-run starter. For further customisation (new pages, payment integration, a real backend for the contact form or newsletter, etc.), a React/TypeScript developer can extend it using the same patterns found in `src/pages/` and `src/components/`.
