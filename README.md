# Drum Sync Academy

Static marketing website for **Drum Sync Academy (DSA)**, a 100% drums-only
studio. Its single conversion goal is **Request a Studio Tour**. Built with [Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com).
Dark theme, fast, no heavy client frameworks — just a little vanilla JS.

## Tech stack

- **Astro** (static output to `dist/`)
- **Tailwind CSS v4** via the official `@tailwindcss/vite` plugin. Design tokens
  live in `src/styles/global.css` under the `@theme` block.
- **@astrojs/sitemap** for `sitemap-index.xml`
- Vanilla JS only (mobile nav, accordion, forms, lightbox)

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
4. Deploy. Netlify auto-detects the forms on build (see below).

> Set your real production URL in `astro.config.mjs` (`SITE`) and in
> `public/robots.txt` so the sitemap and Open Graph URLs are correct.

## The one conversion goal: Request a Studio Tour

The site is informational, not an enrollment platform. Every primary CTA
("Request a Studio Tour", "Request a Tour", "Get Started", ...) links to the
same page, set once in `src/data/site.js`:

```js
export const TOUR_URL = '/studio-tour';
```

Old URLs (`/book-assessment`, `/payment`, `/programs/classes|pdi|tuition`)
301-redirect in `netlify.toml`.

## Open placeholders (grep for these)

```bash
grep -rn "TODO(DSA-" src
```

| Tag | Meaning |
|---|---|
| `TODO(DSA-confirm)` | Unconfirmed fact: prices, pack name, savings, Practice Lab terms, brand spelling, form fields |
| `TODO(DSA-media)` | Photo/video slot waiting on real footage (comment describes the shot) |
| `TODO(DSA-form-endpoint)` | Form submission setup (`src/scripts/forms.ts`) |
| `TODO(DSA-email-endpoint)` | Events email signup → mailing list |

## Where to edit content

| What | Where |
|---|---|
| Business name, address, phone, email, hours, social, nav links, tour URL, feature flags | `src/data/site.js` |
| Program names, blurbs, tiers, tuition table, `[PRICE TBD]` placeholders | `src/data/programs.js` |
| Studio Tour form fields, labels, and option values | `src/data/tourForm.js` |
| FAQs (also generate FAQPage JSON-LD) | `src/data/faqs.js` |
| Upcoming events | `src/data/events.json` |
| Past events / gallery | `src/data/gallery.json` |
| Hero video + poster | `public/dsa.mp4`, `public/hero-poster.jpg` (see `public/README-media.txt`) |
| Map location | `src/pages/contact.astro` (iframe `src`) |
| Production URL | `astro.config.mjs` and `public/robots.txt` |

### Events

`src/data/events.json` is an array. Past dates drop off automatically and an
empty list shows a friendly empty state. Example entry:

```json
{ "date": "2027-03-14", "time": "6:30 PM", "title": "Student Concert",
  "description": "Short blurb.", "cta": { "label": "Details", "href": "/events" } }
```

### Media slots

`src/components/MediaSlot.astro` renders a fixed-aspect, lazy-loaded image or
video (with poster). With no `src` it shows a labeled "coming soon" placeholder.
Each slot has a `TODO(DSA-media)` comment describing the footage that belongs there.

## Forms (Netlify)

All forms use [Netlify Forms](https://docs.netlify.com/forms/setup/) (static
markup with `data-netlify="true"`, a hidden `form-name`, and a honeypot):

- **studio-tour** (`/studio-tour`): the main conversion form. Client-side
  validation, inline success message, no calendar/auto-booking by design.
- **event-updates** (`/events`): email + optional first name.
- **contact** (`/contact`): general questions.

JS submissions go through one function, `submitForm` in
`src/scripts/forms.ts`. To switch providers (Formspree, a CRM webhook, ...),
change it there. Without JS, forms post normally and land on `/thank-you`.

**After deploying:** in Netlify → Forms, enable notifications for
`studio-tour` so Kyle and Karina get each request by email.

## How It Works

`src/components/HowItWorks.astro` (homepage + Programs). Pass `expanded` to
show every step fully open instead of as an accordion.

## Timed popup

`src/components/Popup.astro` is **off** via `features.popup` in
`src/data/site.js`. Flip it to `true` to bring it back (Home already opts in
with `popup={true}`). Copy, CTA, delay, and dismissal window are at the top of
`Popup.astro`.

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
  components/   Button, VideoHero, HowItWorks, MediaSlot, CtaBand, TourForm,
                GalleryTile, EventCard, FaqItem, Popup, Nav, Footer
  layouts/      BaseLayout.astro
  data/         site.js, programs.js, tourForm.js, faqs.js, events.json, gallery.json
  scripts/      forms.ts (single form-submission integration point)
  pages/        index, programs/index, studio-tour, about, events, contact, thank-you
  styles/       global.css (theme tokens)
public/         favicon, og-image, robots.txt, hero media placeholders
```

## Accessibility & performance notes

- Semantic HTML, alt text, visible focus states, keyboard-navigable nav and popup.
- `prefers-reduced-motion` respected (animations reduced, hero shows poster).
- Below-the-fold images and the map iframe are lazy-loaded.
- JS ships only for the mobile nav, How It Works accordion, forms, and the events lightbox.
- Meta + Open Graph tags, favicon, and a generated sitemap are included.
