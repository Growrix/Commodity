# GlobalTrade Commodities — Frontend

## Project Overview

A B2B commodity trading company website built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4. Phase 1 frontend-only implementation — all pages use static/mock data with real Unsplash images.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with PostCSS + CSS custom properties
- **Icons**: lucide-react
- **Images**: Unsplash CDN (configured in next.config.ts)
- **Fonts**: Inter via next/font/google
- **Port**: 5000 (development and production)

## Design System

All colors and design tokens are defined as CSS custom properties in `app/globals.css` using Tailwind v4's `@theme {}` block. **No hardcoded hex values in components** — all values reference CSS variables.

### Color Tokens
- `--color-ink`: `#0a0a0a` (near-black primary)
- `--color-ink-soft`: `#111111`
- `--color-ink-muted`: `#1a1a1a`
- `--color-gold`: `#d4a017` (high-contrast gold accent)
- `--color-gold-bright`: `#f0b429`
- `--color-gold-light`: `#fcd34d`
- `--color-surface`: `#ffffff`
- `--color-surface-off`: `#fafafa`
- `--color-text-primary`: `#0a0a0a`
- `--color-text-muted`: `#6b7280`
- `--color-border`: `#e5e7eb`

### Animation System
- Keyframes defined in globals.css: `fadeUp`, `fadeIn`, `slideInLeft/Right`, `scaleIn`, `float`, `shimmer`, `grain`, `ticker`
- Animation utility classes: `animate-fade-up`, `animate-fade-in`, `animate-float`, `delay-{100-800}`
- Scroll-triggered animations via `.reveal`, `.reveal-left`, `.reveal-right` + `AnimatedSection` component
- Gold text gradient: `.text-gold-gradient` (shimmer animation)
- Trust ticker tape: `.ticker-inner` on TrustStrip component

### Design Style
- **Dark, image-heavy**: All hero sections use full-bleed Unsplash images with dark overlay
- **Typography**: Large, bold headings with tight tracking (`tracking-tight`, `leading-[1.06]`)
- **Cards**: Rounded `--radius-xl` (1.5rem) with hover transitions
- **Buttons**: Gold primary CTA, outline-white for dark contexts

## Architecture

### App Structure

```
app/
├── page.tsx                          # Homepage (image-heavy, full-screen hero)
├── layout.tsx                        # Root HTML layout + Inter font
├── not-found.tsx                     # 404 page
├── about/page.tsx                    # About page
├── products/
│   ├── page.tsx                      # Products hub
│   ├── [sector]/page.tsx             # Sector template
│   └── [sector]/[family]/page.tsx    # Commodity family template
├── industries/
│   ├── page.tsx                      # Industries hub
│   └── [slug]/page.tsx               # Industry detail template
├── capabilities/
│   ├── page.tsx                      # Capabilities hub
│   └── [slug]/page.tsx               # Capability detail template
├── markets/
│   ├── page.tsx                      # Markets hub
│   ├── origins/[slug]/page.tsx       # Origin market template
│   ├── destinations/[slug]/page.tsx  # Destination market template
│   └── corridors/[slug]/page.tsx     # Trade corridor template
├── insights/
│   ├── page.tsx                      # Insights hub
│   └── [slug]/page.tsx               # Article template
├── case-studies/[slug]/page.tsx      # Case study template
├── partner-with-us/
│   ├── page.tsx                      # Partner hub (3-path layout)
│   ├── buyers/page.tsx               # Quote request form
│   ├── suppliers/page.tsx            # Supplier registration form
│   ├── partners/page.tsx             # Strategic partnership form
│   └── sourcing/page.tsx             # Sourcing request form
├── trust-center/
│   ├── page.tsx                      # Trust center hub
│   └── [slug]/page.tsx               # Policy/document template
├── contact/page.tsx                  # Contact page
├── search/page.tsx                   # Search page
├── careers/page.tsx                  # Careers page
└── legal/[slug]/page.tsx             # Legal page template
```

### Component Structure

```
components/
├── layout/
│   ├── Header.tsx      # Sticky transparent-to-dark nav with mega-menu
│   ├── Footer.tsx      # Dark footer with CTA row + multi-column links
│   ├── PageLayout.tsx  # Wraps pages (padTop prop for hero overlap)
│   └── Breadcrumb.tsx  # Gold-on-dark or muted-on-light breadcrumb
├── sections/
│   ├── TrustStrip.tsx  # Auto-scrolling gold ticker tape (dark bg)
│   ├── CTABand.tsx     # 3-card buyer/supplier/partner CTA (dark bg)
│   ├── StatStrip.tsx   # Key metric stats strip
│   └── SectionHeader.tsx # Eyebrow + title + description block
└── ui/
    ├── Button.tsx       # Variants: primary, gold, outline, outline-white, ghost
    ├── Badge.tsx        # Status badge with CSS variable colors
    ├── Card.tsx         # Hover-lift card with dark/light modes
    └── AnimatedSection.tsx # Intersection Observer scroll-reveal wrapper
```

## Key Patterns

### Hero Sections (All Pages)
```tsx
<section className="relative bg-[var(--color-ink)] text-white py-28 overflow-hidden">
  <div className="absolute inset-0 z-0">
    <Image src="https://images.unsplash.com/..." fill className="object-cover opacity-20" />
    <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-ink)] ..." />
  </div>
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    ...
  </div>
</section>
```

### Scroll Animations
```tsx
<AnimatedSection delay={100}>
  <YourContent />
</AnimatedSection>
```

### Stagger Pattern for Hero
```tsx
<h1 className="animate-fade-up delay-100">...</h1>
<p className="animate-fade-up delay-200">...</p>
<div className="animate-fade-up delay-300">...</div>
```

## Development

```bash
npm run dev     # Start dev server on port 5000
npm run build   # Build for production
npm start       # Start production server
```

## Phase 1 Scope (Frontend Only)

All pages use static/mock data and Unsplash images. No backend, CMS, API, or database integration.

### Queued for Later Phases
- Sanity CMS (content management)
- Supabase backend (form submissions)
- Resend email notifications
- Analytics and tracking
- Full-text search
- Admin dashboard
- Authentication
