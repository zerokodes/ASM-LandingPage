<!-- title: ChatSeller Landing Page — Architecture & Roadmap -->

# ChatSeller Landing Page — Architecture & Roadmap

Built from the `ChatSeller Landing Page.html` design in the **AI Chat and Sales Bot** claude.ai/design project, converted to a modular React app matching the stack and design tokens already established by that project's `react-components/` dashboard (React 18 + Vite + Tailwind, dark stone palette, brand blue / AI violet accents).

## Stack

| Layer | Choice |
|---|---|
| Framework | React 18 + Vite 5 |
| Styling | Tailwind CSS 3 (utility classes) + a component-layer stylesheet for landing-specific effects (marquee, chat mockup, row-lists, pricing cards) that don't exist yet in the shared dashboard library |
| Fonts | Inter (body) + Space Grotesk (display/headings), loaded via Google Fonts |
| Path alias | `@/` → `src/` (matches the dashboard app's convention) |
| Icons | Inline SVG via a small `Icon` primitive — no icon package dependency |

No state management library, no router, no CMS — this is a single static marketing page. Adding any of those would be premature for what exists today.

## File structure

```
├── index.html                  # Vite entry, fonts, meta/OG tags
├── vite.config.js              # @/ alias → src/
├── tailwind.config.js          # brand/ai colors, radii, shadows, custom keyframes
├── postcss.config.js
├── public/
│   ├── favicon.svg
│   ├── catalog-preview.png     # dashboard screenshot, pulled from design project
│   └── knowledge-preview.png   # dashboard screenshot, pulled from design project
└── src/
    ├── main.jsx                 # ReactDOM root
    ├── App.jsx                  # Section composition root
    ├── index.css                 # Tailwind directives + all custom component CSS
    ├── lib/
    │   └── utils.js              # cn(), hexToRgb()
    ├── data/                     # Content as plain data — no copy hardcoded in JSX
    │   ├── nav.js                 # Nav links, WhatsApp URLs
    │   ├── features.js            # FEATURES (8), PAIN_POINTS (6)
    │   ├── steps.js               # STEPS (3), DASHBOARD_HIGHLIGHTS (4)
    │   ├── testimonials.js        # REVIEWS (6)
    │   ├── faqs.js                # FAQS (8)
    │   └── chatScript.js          # Hero chat mockup script
    └── components/
        ├── ui/
        │   └── Icon.jsx           # Generic stroke-SVG wrapper (accepts path or path[])
        └── sections/              # One component per landing-page section
            ├── Nav.jsx             # Sticky nav, scroll-aware, mobile hamburger + panel
            ├── Hero.jsx            # Headline, CTAs, live metrics, mounts ChatMockup + DemoModal
            ├── ChatMockup.jsx      # Self-looping typed conversation animation
            ├── DemoModal.jsx       # YouTube embed modal, Escape/backdrop close
            ├── Problem.jsx         # 6-item pain-point row list
            ├── Features.jsx        # 8-item feature row list
            ├── HowItWorks.jsx      # 3-step onboarding flow
            ├── Dashboard.jsx       # Two dashboard screenshots + highlight cards
            ├── Testimonials.jsx    # Infinite-scroll marquee + trust strip
            ├── Pricing.jsx         # 3-tier plan cards (Starter/Growth/Enterprise)
            ├── FAQ.jsx             # Accordion, single-open
            ├── CTA.jsx             # Final conversion panel
            └── Footer.jsx          # Site links, status indicator
```

**Why data files are separate from components:** every section that repeats a shape (features, pain points, reviews, FAQs, pricing tiers) reads from a plain `.js` array in `src/data/`. Copy changes — a new testimonial, a price update, a reworded FAQ — touch one array, never JSX or CSS. This mirrors how the design's original inline `<script>` block held the same arrays.

## Design fidelity

The build is a 1:1 port of the source HTML/CSS/JS: every custom class (`.hero-h1`, `.row-item`, `.testi-card`, `.price-card`, `.faq-item`, etc.) was carried over into `src/index.css` under `@layer components`, and every interactive behavior was reimplemented as React state instead of vanilla DOM manipulation:

- Nav scroll shadow + mobile menu → `useState` + `useEffect` scroll listener
- Hero chat mockup typed sequence → `useEffect` async loop with cleanup-safe cancellation (guards against React StrictMode's double-invoke in dev)
- FAQ accordion (single-open) → `useState<number|null>`
- Demo modal → `useState` + `useEffect` for Escape-key/backdrop close and body-scroll lock
- Testimonials marquee → pure CSS `animation`, content duplicated once in the array render for seamless looping

## Verified

- `npm run build` — clean, no errors, 27.9 KB CSS / 184 KB JS (58 KB gzipped)
- Browser-driven pass (headless Chromium) across desktop (1440×900) and mobile (390×844) viewports: hero, problem, features, how-it-works, dashboard, testimonials, pricing, FAQ, CTA, footer, and the mobile hamburger panel all render correctly with **zero console errors**
- Two real bugs found and fixed during verification:
  1. `.fade-up`/`.marquee-track` referenced Tailwind-config-only `@keyframes` that were never emitted (Tailwind only generates keyframes for scanned `animate-*` utility classes, not names referenced from hand-written CSS) — fixed by declaring `@keyframes fadeUp` and `marquee` directly in plain CSS.
  2. `ChatMockup`'s animation loop double-ran under React StrictMode (shared `useRef` flag raced across the dev double-invoke) — fixed by scoping the "is this run still active" flag inside each effect invocation.

## Not yet done / explicit non-goals for this pass

- **Routing** — footer links to About/Privacy/Terms point to `/about`, `/privacy`, `/terms`, but those pages don't exist yet (the design project has `About.html`, `Privacy Policy.html`, `Terms of Service.html` as separate static pages).
- **Real signup flow** — `#get-started` and `#pricing` CTAs anchor-scroll to the CTA section; there's no actual signup form, checkout, or backend wiring yet.
- **Demo video** — the "Watch Demo" modal currently embeds a Rick Astley placeholder (carried over unchanged from the source design's YouTube ID) — swap for a real product demo before shipping.
- **WhatsApp number** — nav, CTA, and FAQ all link to a placeholder `+2348100000000` WhatsApp number from the source design.
- **SEO/OG tags** — only a basic `<title>` and meta description are wired; no Open Graph image, Twitter card, or structured data yet.
- **Analytics** — no tracking pixel/script hooked up.

## Suggested roadmap

1. **Wire the real CTA target.** Decide whether `#get-started` should scroll-anchor (current behavior) or route to an actual signup page/app. This is the highest-leverage next step since every primary CTA on the page points here.
2. **Build About / Privacy / Terms as routes.** Small, mechanical — port the three sibling HTML files from the design project the same way this page was ported, or add a lightweight router (React Router) once there's more than one route.
3. **Replace placeholders.** Real WhatsApp number, real demo video, real OG image.
4. **Connect analytics** (e.g. Plausible/GA) once the CTA destination is real, so conversion tracking has something to measure.
5. **Content review pass.** Testimonials, pricing figures, and metrics ("500+ businesses," "98% retention") are the same placeholder marketing figures as the source design — confirm with the business owner (Apt-Intel) which are real vs. illustrative before this goes live.
