# Kalaa by Bindu

A premium, minimalist storefront for hand-painted fabric couture — kurtas, shirts,
t-shirts and sarees. Built with React, TypeScript, Vite, Tailwind CSS v4 and
Framer Motion.

## Running it

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

```bash
npm run build     # production build to dist/
npm run preview   # preview the production build locally
```

## What's here

- **Home** (`/`) — parallax hero, category showcase, signature pieces, artist
  teaser, process strip, newsletter signup.
- **Shop** (`/shop`, `/shop/:category`) — filterable product grid across
  Frocks, Kurtas, Men's Kurtas, Sarees, Dupattas and Tote Bags.
- **Product detail** (`/product/:id`) — size selection, add to bag, related pieces.
- **The Artist** (`/about`) — Bindu's bio, milestones, and a photo gallery of the collection.
- **Contact** (`/contact`) — a client-side contact form (no backend wired up yet).
- A persistent cart drawer (localStorage-backed) with a "Proceed to Checkout"
  stub — no payment gateway is connected yet by design.

## Adding products or photos

Each product lives in `src/data/products.ts` and has an `images: string[]`
array of real photos. Import the photo from `src/assets/products/` and list
it in `images` — the first entry is the default view; add more for a
thumbnail-swappable gallery on the product page.

If a product has no `images` yet, it automatically falls back to a generated
fabric-pattern placeholder (`src/components/ui/FabricSwatch.tsx`) so you can
list a product before its photography is ready. Everything that shows a
product photo — `ProductCard`, `ProductDetail`, `CategoryShowcase`,
`CartDrawer`, the About page gallery — goes through
`src/components/ui/ProductMedia.tsx`, which handles that fallback automatically.

New photos should be reasonably compressed JPEGs (a few hundred KB, not
multiple MB) — large source photos should be resized/compressed before
dropping them into `src/assets/products/`.

## Adding more products or categories

- Products live in `src/data/products.ts` — copy an existing entry and change
  the fields. `sizes` should be `["Free Size"]` for sarees, `["S","M","L","XL","XXL"]`
  for stitched apparel, or an age range for frocks.
- Categories live in `src/data/categories.ts`. Add a new entry there and the
  navbar, shop filters and footer will pick it up automatically. A category
  with no products yet (like Dupattas right now) shows a "Coming Soon" state
  instead of breaking.

## Brand

Colours and fonts are defined as design tokens in `src/index.css`
(`@theme` block) — deep plum (`plum-*`), gold foil (`gold-*`), and warm ivory
(`ivory-*`), paired with Cormorant Garamond (display) and Jost (body/UI).
