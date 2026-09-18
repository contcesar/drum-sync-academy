# Drum Sync Academy

Static marketing website for **Drum Sync Academy**, an in-person drum education
facility. Built with [Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com).
Dark theme, fast, no heavy client frameworks — just a little vanilla JS for the
mobile nav and the timed popup.

## Tech stack

- **Astro** (static output to `dist/`)
- **Tailwind CSS v4** via the official `@tailwindcss/vite` plugin. Design tokens
  live in `src/styles/global.css` under the `@theme` block.
- **@astrojs/sitemap** for `sitemap-index.xml`
- Vanilla JS only (mobile nav toggle, timed popup)

## Requirements

- Node.js 20+ (this project is tested on Node 22)
- npm

## Install

```bash
npm install
```

## Local development

```bash
npm run dev
```

Then open the URL Astro prints (default `http://localhost:4321`).

## Build

```bash
npm run build      # outputs static files to dist/
npm run preview    # serve the built site locally
```

## Deploy: GitHub → Netlify

1. Push this repo to GitHub.
2. In Netlify: **Add new site → Import an existing project** and pick the repo.
3. Netlify reads `netlify.toml`:
   - Build command: `astro build`
   - Publish directory: `dist`
4. Deploy. Netlify auto-detects the two forms on build (see below).

> Set your real production URL in `astro.config.mjs` (`SITE`) and in
> `public/robots.txt` so the sitemap and Open Graph URLs are correct.

## Where to paste real content

Everything below is a clearly marked placeholder (search the project for `TODO`).

| What | Where |
|---|---|
| Business name, address, phone, email, hours, social links | `src/data/site.js` |
| Hero video + poster | `public/hero.mp4`, `public/hero-poster.jpg` (see `public/README-media.txt`) |
| Pricing tier names, prices, features | `src/components/PricingCards.astro` (`tiers` array at the top) |
| **Stripe Payment Links** | `src/components/PricingCards.astro` (`stripe:` on each tier) and `src/pages/payment.astro` (`STRIPE_LINK_ASSESSMENT`) |
| Events | `src/data/events.json` |
| PDI details | `src/pages/programs/pdi.astro` |
| Instructor bios / photos | `src/pages/about.astro` |
| FAQ answers | `src/pages/about.astro` |
| Map location | `src/pages/contact.astro` (iframe `src`) |
| Production URL | `astro.config.mjs` and `public/robots.txt` |

### Stripe Payment Links

There is no backend — Stripe hosts checkout. Create **Payment Links** in your
Stripe dashboard, then paste them in:

- `src/components/PricingCards.astro` → replace `STRIPE_LINK_MONTHLY`,
  `STRIPE_LINK_6MONTH`, `STRIPE_LINK_ANNUAL`.
- `src/pages/payment.astro` → replace `STRIPE_LINK_ASSESSMENT`.

### Hero video

Drop your real `hero.mp4` and `hero-poster.jpg` in `public/`. Keep the video
small — **a few MB** is the target (H.264/MP4, muted, ~10–20s loop, 1080p is
plenty). Under `prefers-reduced-motion` the poster image is shown instead of the
video.

## Forms (Netlify)

Two forms use [Netlify Forms](https://docs.netlify.com/forms/setup/):

- **Contact** (`/contact`): name, email, phone, message
- **Assessment** (`/book-assessment`): name, email, phone, program, experience,
  preferred date/time

Both are plain HTML with `data-netlify="true"`, a hidden `form-name` input, and a
honeypot field, and both redirect to `/thank-you` on submit. Because Astro is
static, the markup is present at build time so Netlify can detect the forms
automatically. Submissions appear under **Forms** in the Netlify dashboard.

To let visitors self-schedule the assessment instead, swap the form for a
Calendly embed — see the comment in `src/pages/book-assessment.astro`.

## Timed popup

`src/components/Popup.astro` shows a modal ~6 seconds after load and stores its
dismissal in `localStorage` for 7 days. It is enabled on the Home page via
`popup={true}` on `BaseLayout`. To run it **site-wide**, flip the default in
`src/layouts/BaseLayout.astro` (`popup = false` → `popup = true`) — one line.
Session number, CTA target, delay, and dismissal window are in the config block
at the top of `Popup.astro`.

## Design tokens

Defined in `src/styles/global.css` (`@theme`):

| Token | Value | Use |
|---|---|---|
| `charcoal` | `#0E0E10` | page background |
| `surface` | `#17171A` | cards |
| `elevated` | `#1F1F23` | raised cards, popover |
| `border` | `#2A2A2F` | borders |
| `gray-muted` | `#9A9AA2` | secondary text |
| `gray-light` | `#D4D4D8` | body text |
| `red` | `#E11D2E` | primary accent / CTAs |
| `red-hover` | `#C11827` | CTA hover |
| `white` | `#FAFAFA` | headings / high contrast |

Fonts: **Space Grotesk** (headings) + **Inter** (body), loaded from Google Fonts
with `preconnect` and real fallback stacks.

## Project structure

```
src/
  components/   Button, VideoHero, PricingCards, EventCard, FaqItem, Popup, Nav, Footer
  layouts/      BaseLayout.astro
  data/         site.js, events.json
  pages/        index, programs/*, about, contact, events, payment, book-assessment, thank-you
  styles/       global.css (theme tokens)
public/         favicon, og-image, robots.txt, hero media placeholders
```

## Accessibility & performance notes

- Semantic HTML, alt text, visible focus states, keyboard-navigable nav and popup.
- `prefers-reduced-motion` respected (animations reduced, hero shows poster).
- Below-the-fold images and the map iframe are lazy-loaded.
- JS ships only for the mobile nav and popup; everything else is static.
- Meta + Open Graph tags, favicon, and a generated sitemap are included.
