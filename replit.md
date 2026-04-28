# GlobalTrade Commodities — Frontend

## Project Overview

A B2B commodity trading company website built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4. This is a Phase 1 frontend-only implementation — backend, CMS, and data integrations are queued for later phases.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with PostCSS
- **Icons**: lucide-react
- **Port**: 5000 (development and production)

## Architecture

### App Structure

```
app/
├── page.tsx                          # Homepage
├── layout.tsx                        # Root HTML layout
├── not-found.tsx                     # 404 page
├── about/page.tsx                    # About page
├── products/
│   ├── page.tsx                      # Products hub
│   ├── [sector]/page.tsx             # Sector template (Agriculture, Energy, etc.)
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
│   ├── page.tsx                      # Partner hub
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
│   ├── Header.tsx      # Sticky nav with mega-menu and mobile toggle
│   ├── Footer.tsx      # Multi-column footer with office info
│   ├── PageLayout.tsx  # Wraps pages with Header + Footer
│   └── Breadcrumb.tsx  # Breadcrumb navigation component
├── sections/
│   ├── TrustStrip.tsx  # Certification/credential strip
│   ├── CTABand.tsx     # Segmented buyer/supplier/partner CTA
│   ├── StatStrip.tsx   # Key metrics strip
│   └── SectionHeader.tsx # Eyebrow + title + description block
└── ui/
    ├── Button.tsx      # Multi-variant button with href support
    ├── Badge.tsx       # Status/category badge
    └── Card.tsx        # Content card with hover state
```

## Design System

- **Primary**: `#0f2040` (Navy)
- **Accent**: `#c8a84b` (Gold)
- **Background**: `#f8f9fa` (Off-white)
- **Border**: `#e5e7eb`
- **Text**: `#374151` (Slate), `#6b7280` (Muted)

Tokens defined via Tailwind v4 `@theme {}` block in `app/globals.css`.

## Development

```bash
npm run dev     # Start dev server on port 5000
npm run build   # Build for production
npm start       # Start production server
```

## Phase 1 Scope (Frontend Only)

All pages use static/mock data. No backend, CMS, API, or database integration yet.

### Queued for Later Phases

- Sanity CMS integration (content management)
- Supabase backend (form submissions, inquiries)
- Resend email notifications
- Analytics and tracking
- Search (full-text)
- Admin dashboard
- Authentication

## Routes

All 30+ pages from the project plan are implemented:
- Marketing shell: home, about, capabilities, industries, trust center, contact
- Product shell: sector, family, product detail templates
- Market shell: origins, destinations, trade corridors
- Insights: hub, article template, case study template
- Conversion: partner hub, quote request, supplier registration, sourcing request, strategic partnership
- Utility: search, careers, legal template, 404
