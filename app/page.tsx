import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowRight,
  Globe,
  Shield,
  Zap,
  TrendingUp,
  MapPin,
  ChevronRight,
} from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import TrustStrip from "@/components/sections/TrustStrip";
import CTABand from "@/components/sections/CTABand";
import AnimatedSection from "@/components/ui/AnimatedSection";

const stats = [
  { value: "$2B+", label: "Annual Trade Volume", detail: "Across all sectors" },
  { value: "60+", label: "Countries Served", detail: "On 6 continents" },
  { value: "40+", label: "Origin Markets", detail: "Verified supply chains" },
  { value: "20+", label: "Years of Expertise", detail: "Since 2003" },
];

const sectors = [
  {
    title: "Agriculture",
    description: "Wheat, corn, soy, rice, sunflower oil, and over 120 agricultural commodities sourced globally.",
    href: "/products/agriculture",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Energy",
    description: "Refined petroleum, diesel, jet fuel, LPG, and petrochemical feedstocks across major trade routes.",
    href: "/products/energy",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Fertilizers",
    description: "Urea, DAP, MAP, NPK blends, potash, and nitrogen solutions for global agriculture inputs.",
    href: "/products/fertilizers",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Industrial",
    description: "Sulphur, caustic soda, industrial chemicals, base metals, and specialty materials for manufacturing.",
    href: "/products/industrial-materials",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80",
  },
];

const capabilities = [
  {
    icon: Globe,
    title: "Global Origination",
    description: "40+ verified source markets across Black Sea, LATAM, SEA, and Sub-Saharan Africa.",
    href: "/capabilities/origination",
  },
  {
    icon: Shield,
    title: "Compliant Documentation",
    description: "SGS-inspected, L/C-ready, and aligned with GAFTA, FOSFA, and ISCC standards.",
    href: "/capabilities/quality-assurance",
  },
  {
    icon: Zap,
    title: "Trade Finance",
    description: "Structured payment terms: L/C, D/A, D/P, CAD, and deferred payment programs.",
    href: "/capabilities/trade-finance",
  },
  {
    icon: TrendingUp,
    title: "End-to-End Logistics",
    description: "Door-to-port, CIF, FOB, and multimodal freight solutions with real-time tracking.",
    href: "/capabilities/logistics",
  },
];

const corridors = [
  {
    route: "Black Sea → Asia",
    description: "Wheat, corn, and sunflower oil from Ukraine, Romania, and Russia to Southeast Asian markets.",
    volume: "1.2M MT / year",
    href: "/markets/corridors/black-sea-asia",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80",
  },
  {
    route: "LATAM → MENA",
    description: "Soybeans, corn, and sugar from Brazil and Argentina to North Africa and Gulf markets.",
    volume: "800K MT / year",
    href: "/markets/corridors/latam-mena",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
  },
  {
    route: "Oceania → Asia",
    description: "Premium grain, cotton, and meat exports from Australia and New Zealand into Asia-Pacific.",
    volume: "600K MT / year",
    href: "/markets/corridors/oceania-asia",
    image: "https://images.unsplash.com/photo-1494522358652-f30e61a60313?auto=format&fit=crop&w=600&q=80",
  },
];

const insights = [
  {
    category: "Market Intelligence",
    title: "Black Sea Grain Corridor: 2025 Volume Outlook and Risk Assessment",
    date: "Apr 2025",
    read: "8 min",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    href: "/insights/black-sea-grain-corridor-outlook",
  },
  {
    category: "Trade Finance",
    title: "Navigating L/C Structures for High-Volume Agri Commodity Trades",
    date: "Mar 2025",
    read: "6 min",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    href: "/insights/lc-structures-agri-commodities",
  },
  {
    category: "Fertilizers",
    title: "Global Urea Price Dynamics: Supply Chain Shifts Post-Conflict",
    date: "Feb 2025",
    read: "5 min",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    href: "/insights/global-urea-price-dynamics",
  },
];

export default function HomePage() {
  return (
    <PageLayout padTop={false}>
      {/* ======================================================
          HERO — full viewport, image-heavy
      ====================================================== */}
      <section className="relative min-h-screen flex flex-col justify-end bg-[var(--color-ink)] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2400&q=80"
            alt="Global commodity trading port"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/10 to-transparent" />
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 z-[1] opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 pt-36">
          <div className="max-w-3xl">
            <div className="animate-fade-up flex items-center gap-3 mb-8">
              <div className="h-px w-10 bg-[var(--color-gold)]" />
              <span className="text-[var(--color-gold)] text-[11px] font-bold uppercase tracking-[0.22em]">
                Global Commodity Trading
              </span>
            </div>

            <h1 className="font-bold leading-[1.06] tracking-[-0.02em] text-white mb-7">
              <span className="block text-5xl sm:text-6xl lg:text-7xl animate-fade-up delay-100">
                Trade Built
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl animate-fade-up delay-200">
                for{" "}
                <span className="text-gold-gradient">Commercial Scale.</span>
              </span>
            </h1>

            <p className="animate-fade-up delay-300 text-lg sm:text-xl text-white/55 leading-relaxed mb-10 max-w-xl">
              We connect buyers and suppliers across Agriculture, Energy, Fertilizers, and Industrial Materials — with structured logistics, compliant documentation, and verified quality at every touchpoint.
            </p>

            <div className="animate-fade-up delay-400 flex flex-wrap gap-4">
              <Link
                href="/partner-with-us/buyers"
                className="inline-flex items-center gap-2 bg-[var(--color-gold)] text-[var(--color-ink)] font-semibold px-7 py-3.5 rounded text-sm hover:bg-[var(--color-gold-bright)] transition-all duration-200 hover:shadow-[var(--shadow-gold)] active:scale-[0.98]"
              >
                Request a Quote <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-white/20 text-white font-medium px-7 py-3.5 rounded text-sm hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-all duration-200"
              >
                Learn About Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Quick stats */}
            <div className="animate-fade-up delay-500 flex flex-wrap gap-x-10 gap-y-4 mt-16 pt-16 border-t border-white/8">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <div className="text-2xl font-bold text-white">{value}</div>
                  <div className="text-xs text-white/35 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 z-10 animate-float hidden lg:flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-[var(--color-gold)]/50" />
          <div className="w-1.5 h-1.5 bg-[var(--color-gold)] rounded-full" />
        </div>
      </section>

      {/* Trust ticker */}
      <TrustStrip />

      {/* ======================================================
          SECTORS — image grid
      ====================================================== */}
      <section className="py-28 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <span className="text-[var(--color-gold)] text-[11px] font-bold uppercase tracking-[0.18em] mb-3 block">
              Product Sectors
            </span>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <h2 className="text-4xl sm:text-5xl font-bold text-[var(--color-ink)] leading-[1.1] tracking-tight max-w-md">
                Four sectors.<br />One counterpart.
              </h2>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-ink)] hover:text-[var(--color-gold)] transition-colors group"
              >
                View full catalog
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sectors.map(({ title, description, href, image }, i) => (
              <AnimatedSection key={title} delay={i * 80}>
                <Link
                  href={href}
                  className="group relative flex flex-col rounded-[var(--radius-xl)] overflow-hidden bg-[var(--color-ink)]"
                  style={{ aspectRatio: "3/4" }}
                >
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-4 line-clamp-2">{description}</p>
                    <div className="flex items-center gap-1 text-[var(--color-gold)] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                      Explore sector <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          CAPABILITIES — dark section with image
      ====================================================== */}
      <section className="py-28 bg-[var(--color-ink)] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1564182842519-8a3b2af3e228?auto=format&fit=crop&w=2400&q=80"
            alt="Logistics and shipping"
            fill
            className="object-cover object-center opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-ink)] via-transparent to-[var(--color-ink)]" />
        </div>

        <div className="relative z-[2] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[var(--color-gold)] text-[11px] font-bold uppercase tracking-[0.18em] mb-3 block">
              What We Do
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-[1.1] tracking-tight">
              End-to-end trading capabilities.
            </h2>
            <p className="mt-4 text-lg text-white/40 max-w-xl mx-auto">
              From sourcing to delivery — one partner for the full trade lifecycle.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilities.map(({ icon: Icon, title, description, href }, i) => (
              <AnimatedSection key={title} delay={i * 100}>
                <Link
                  href={href}
                  className="group flex flex-col p-7 rounded-[var(--radius-xl)] bg-white/4 border border-white/8 hover:border-[var(--color-gold)]/40 hover:bg-white/7 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-[var(--radius-sm)] bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/20 flex items-center justify-center mb-6 group-hover:bg-[var(--color-gold)]/20 transition-colors">
                    <Icon className="w-5 h-5 text-[var(--color-gold)]" />
                  </div>
                  <h3 className="text-white font-semibold text-base mb-2.5">{title}</h3>
                  <p className="text-white/35 text-sm leading-relaxed flex-1">{description}</p>
                  <div className="mt-6 flex items-center gap-1 text-[var(--color-gold)]/50 text-sm font-medium group-hover:text-[var(--color-gold)] transition-colors">
                    Learn more <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          CORRIDORS — bento image grid
      ====================================================== */}
      <section className="py-28 bg-[var(--color-surface-off)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <span className="text-[var(--color-gold)] text-[11px] font-bold uppercase tracking-[0.18em] mb-3 block">
              Trade Corridors
            </span>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <h2 className="text-4xl sm:text-5xl font-bold text-[var(--color-ink)] leading-[1.1] tracking-tight max-w-lg">
                The routes that move<br />global trade.
              </h2>
              <Link
                href="/markets"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-ink)] hover:text-[var(--color-gold)] transition-colors group"
              >
                All market corridors
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {corridors.map(({ route, description, volume, href, image }, i) => (
              <AnimatedSection key={route} delay={i * 100}>
                <Link
                  href={href}
                  className="group relative flex flex-col rounded-[var(--radius-xl)] overflow-hidden bg-[var(--color-ink)]"
                  style={{ aspectRatio: "5/6" }}
                >
                  <Image
                    src={image}
                    alt={route}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                      <span className="text-[var(--color-gold)] text-xs font-bold uppercase tracking-wider">{volume}</span>
                    </div>
                    <h3 className="text-white font-bold text-xl mb-2">{route}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{description}</p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          STATS — full bleed dark image section
      ====================================================== */}
      <section className="relative py-32 overflow-hidden bg-[var(--color-ink)]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=2400&q=80"
            alt="Global shipping containers"
            fill
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 to-[#0a0a0a]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-12 gap-x-8">
            {stats.map(({ value, label, detail }, i) => (
              <AnimatedSection key={label} delay={i * 80} className="text-center">
                <div className="text-5xl sm:text-6xl font-bold text-[var(--color-gold)] tracking-tight mb-2">{value}</div>
                <div className="text-white font-semibold text-sm mb-1">{label}</div>
                <div className="text-white/30 text-xs">{detail}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          INSIGHTS — editorial card row
      ====================================================== */}
      <section className="py-28 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <span className="text-[var(--color-gold)] text-[11px] font-bold uppercase tracking-[0.18em] mb-3 block">
                Insights
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-[var(--color-ink)] leading-[1.1] tracking-tight">
                Market intelligence<br />from the front line.
              </h2>
            </div>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-ink)] hover:text-[var(--color-gold)] transition-colors group"
            >
              All insights{" "}
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {insights.map(({ category, title, date, read, image, href }, i) => (
              <AnimatedSection key={href} delay={i * 80}>
                <Link
                  href={href}
                  className="group flex flex-col h-full rounded-[var(--radius-xl)] overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-gold)]/30 hover:shadow-[var(--shadow-card-hover)] transition-all duration-300"
                >
                  <div className="relative overflow-hidden bg-[var(--color-ink)]" style={{ aspectRatio: "16/9" }}>
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[var(--color-ink)]/80 backdrop-blur-sm text-[var(--color-gold)] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                        {category}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <h3 className="font-bold text-[var(--color-ink)] text-base leading-snug mb-4 group-hover:text-[var(--color-gold)] transition-colors">
                      {title}
                    </h3>
                    <div className="mt-auto flex items-center gap-3 text-xs text-[var(--color-text-muted)]">
                      <span>{date}</span>
                      <span className="w-1 h-1 bg-[var(--color-border)] rounded-full" />
                      <span>{read} read</span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CTABand />

      {/* ======================================================
          TRUST CLOSING
      ====================================================== */}
      <section className="py-16 bg-[var(--color-ink-soft)] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <p className="text-white/25 text-xs font-bold uppercase tracking-widest mb-8">
              Certified and trusted by operators across 60+ countries
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
              {["ISO 9001:2015", "GAFTA Member", "FOSFA Certified", "SGS Inspected", "ISCC Certified"].map((cert) => (
                <div
                  key={cert}
                  className="text-white/15 text-sm font-semibold tracking-wide hover:text-white/40 transition-colors cursor-default"
                >
                  {cert}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
}
