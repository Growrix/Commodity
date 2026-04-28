import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, MapPin, Ship, Package, ShieldCheck } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import CTABand from "@/components/sections/CTABand";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

const HERO_IMAGES: Record<string, string> = {
  "west-africa": "https://images.unsplash.com/photo-1568454537842-d933259bb258?auto=format&fit=crop&w=2400&q=80",
  "black-sea": "https://images.unsplash.com/photo-1559126017-5d4d3a234fc9?auto=format&fit=crop&w=2400&q=80",
  "south-america": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2400&q=80",
  "southeast-asia": "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=2400&q=80",
};

const DEFAULT_HERO = "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=2400&q=80";

const HIGHLIGHTS = [
  { icon: Package, label: "Vetted Suppliers", value: "20+" },
  { icon: Ship, label: "Active Ports", value: "8" },
  { icon: ShieldCheck, label: "Inspection Partners", value: "Tier-1" },
];

const SUPPLIER_PILLARS = [
  { title: "Direct Producer Access", body: "Long-term offtake relationships with mills, refineries, and primary producers — not intermediated sourcing." },
  { title: "Origin-Side Inspection", body: "Pre-shipment quality verification by accredited inspection houses in country." },
  { title: "Documentary Control", body: "Origin-side documentation prepared, verified, and delivered to your bank — accepted by tier-1 institutions." },
];

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const name = slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  return { title: `${name} — Origin Market`, description: `Commodity sourcing from ${name}.` };
}

export default async function OriginMarketPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const name = slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  const heroImage = HERO_IMAGES[slug] ?? DEFAULT_HERO;

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative bg-[var(--color-ink)] text-white py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={heroImage} alt={name} fill priority className="object-cover object-center opacity-30" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-ink)] via-[var(--color-ink)]/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Markets", href: "/markets" }, { label: "Origins" }, { label: name }]} dark />
          <div className="mt-10 max-w-3xl animate-fade-up">
            <span className="text-[var(--color-gold)] text-[11px] font-bold uppercase tracking-[0.18em] mb-4 block flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" /> Origin Market
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.08] tracking-tight">
              Sourcing from {name}
            </h1>
            <p className="text-lg text-white/60 leading-relaxed mb-10">
              Direct access to verified suppliers, inspection partners, and logistics infrastructure — turning {name} into a reliable origin for your supply program.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/partner-with-us/buyers" variant="gold">Source From {name} <ArrowRight className="w-4 h-4" /></Button>
              <Button href="/markets" variant="outline-white">All Markets</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-12 bg-[var(--color-ink-soft)] border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-3 gap-8 text-center">
          {HIGHLIGHTS.map(({ icon: Icon, label, value }) => (
            <div key={label}>
              <Icon className="w-5 h-5 text-[var(--color-gold)] mx-auto mb-3" strokeWidth={2} />
              <div className="text-3xl font-bold text-white mb-1">{value}</div>
              <div className="text-xs uppercase tracking-widest text-white/40">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl mb-14">
            <span className="text-[var(--color-gold)] text-[11px] font-bold uppercase tracking-[0.18em] mb-3 block">What Origin-Side Means</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-ink)] tracking-tight">
              Our {name} operations, structured for buyers
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {SUPPLIER_PILLARS.map(({ title, body }, i) => (
              <AnimatedSection
                key={title}
                delay={i * 100}
                className="bg-white border border-[var(--color-border)] rounded-[var(--radius-lg)] p-7 hover:border-[var(--color-gold)]/40 hover:shadow-[var(--shadow-card-hover)] transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-[var(--color-ink)] mb-3">{title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{body}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </PageLayout>
  );
}
