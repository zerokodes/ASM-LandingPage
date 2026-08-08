# ChatSeller — Landing Page

Marketing site for **ChatSeller**, by **Apt-Intel** — an AI sales agent businesses embed as a shareable chat widget. Customers chat via a link, no WhatsApp or app install required; the AI answers from the business's own catalog and knowledge base, takes orders, and hands off to staff when needed.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite 5 |
| Styling | Tailwind CSS v3 + custom CSS |
| Animation | GSAP + ScrollTrigger |
| Routing | React Router v6 |
| Node | 20.17.0 |

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Sticky nav with mobile menu
│   ├── Hero.jsx            # Hero section with animated chat mockup
│   ├── Features.jsx        # Feature cards marquee
│   ├── Problem.jsx         # Pain-point cards marquee (split-panel cards)
│   ├── Testimonials.jsx    # Testimonial cards marquee (trapezoid cards)
│   ├── Dashboard.jsx       # Dashboard screenshot showcase
│   ├── HowItWorks.jsx      # Step-by-step flow
│   ├── Pricing.jsx         # Three-tier pricing cards
│   ├── FAQ.jsx             # Accordion FAQ
│   ├── CTA.jsx             # Final call-to-action section
│   ├── Footer.jsx          # Footer with links
│   ├── MarqueeRow.jsx      # Reusable infinite horizontal scroll row
│   └── PremiumCard.jsx     # Feature card with chamfered polygon shape
├── pages/
│   ├── About.jsx           # About page
│   ├── PrivacyPolicy.jsx   # Privacy Policy
│   └── TermsOfService.jsx  # Terms of Service
├── App.jsx                 # Route definitions
├── main.jsx                # Entry point with BrowserRouter
└── index.css                # Global styles, Tailwind layers, responsive breakpoints
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Key Features

- **Animated chat mockup** — typewriter sequence loops automatically; adapts between desktop (floating badges) and mobile (compact inline layout)
- **Infinite marquee rows** — `MarqueeRow` uses `requestAnimationFrame` for smooth, GPU-accelerated scrolling; pauses on hover
- **Unique card shapes** — Features use chamfered polygon cut, Problem uses horizontal split-panel, Testimonials use angled trapezoid bottom edge
- **GSAP entrance animations** — ScrollTrigger-based fade/slide-up on every section
- **Fully responsive** — CSS breakpoints at 480 / 560 / 640 / 767 / 900px covering all sections including marquee, hero grid, footer, and legal pages

---

## Pages & Routes

| Route | Component |
|---|---|
| `/` | Full landing page (all sections) |
| `/about` | About ChatSeller |
| `/privacy-policy` | Privacy Policy |
| `/terms-of-service` | Terms of Service |

---

## Notes

- ChatSeller has no WhatsApp/Meta dependency — the product is a channel-agnostic chat widget with a shareable link. Marketing copy should describe it that way; avoid reintroducing WhatsApp-specific claims into hero/feature copy.
- Vite 8 is incompatible with Node 20.17.0 — stay on Vite 5
- All images and media should be served via Cloudinary (no binaries in the repo)
- Tailwind responsive variants (`md:`, `lg:`) do not override inline `style` props — all responsive overrides live in `index.css` using standard media queries
