# Clovity Federal (Next.js)

The Clovity Federal site, moved from static HTML (`../clovity-federal`) to the Next.js App Router. Markup, Tailwind classes,
`site.css`, fonts, icons and the GSAP/Lenis animations are carried over unchanged.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production
npm run preview  # production build on http://localhost:3001, can run next to `npm run dev`
```

`npm run dev` compiles each page on its first visit and does not prefetch links, so moving between pages is slower
there than on the live site. To judge real speed, use `npm run preview`. Production builds go to `.next-build/`
(dev uses `.next/`), so building never breaks a running dev server.

Needs a Node server (`next start` or a host such as Vercel) because images go through the Next image optimizer.

## Where things live

| Path | What it is |
|---|---|
| `app/<route>/page.jsx` | One file per page: title/description and the list of sections |
| `app/layout.jsx` | `<html>`, Manrope font, header, footer, CSS order |
| `app/styles/site.css` | The site's custom CSS and color palette (CSS variables) |
| `app/styles/tailwind.css` | Tailwind layers, loaded after `site.css` as the CDN did |
| `tailwind.config.js` | Same theme as the old `tw-config.js` |
| `components/sections/<page>/` | Each page's sections, one component per section |
| `components/sections/shared/CtaBanner.jsx` | The closing call-to-action used on every page |
| `components/layout/Header.jsx` | Header, dropdowns, mobile menu, current-page highlight |
| `components/layout/Footer.jsx` | Footer and wordmark |
| `components/layout/PageScripts.jsx` | Starts the page behavior and animations, cleans them up on navigation |
| `components/ui/Icon.jsx` | `<Icon name="...">`: brand line icons (`lib/icons.js`) or Lucide 0.453.0 |
| `lib/site-init.js` | Old `main.js`: tabs, sectors, carousel, WebGL slider, video, contact form |
| `lib/animations.js` | Old `animations.js`: ScrollTrigger effects and Lenis smooth scrolling |
| `public/assets/` | Images and videos, same paths as before (`/assets/...`) |

## Performance

- Tailwind is compiled at build time (the static site generated it in the browser from the CDN).
- Every page is prerendered as static HTML.
- Photos use `next/image`: resized per screen, served as AVIF/WebP, lazy below the fold.
- CSS background photos and video posters go through the same optimizer (`lib/media.js`).
- Manrope is self-hosted with `next/font` (no request to Google at page load).
- Only the 11 Lucide glyphs in use are bundled.

## Adding a page

1. Create `app/<route>/page.jsx` with `metadata` and `<PageScripts />` followed by `<main id="main">…</main>`.
2. Put its sections in `components/sections/<route>/`.
3. Add it to `MENUS` in `components/layout/Header.jsx` and to the footer if needed.

Animations hook onto the same data attributes as before (`data-tilt`, `data-slide`, `data-clip`, `data-statement`,
`data-timeline`, `data-spot`, `data-rows`, `data-track`, `data-gains`), so new sections animate by adding them.
