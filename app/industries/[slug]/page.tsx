import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Package, Globe2, ShieldCheck } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import CTABand from "@/components/sections/CTABand";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

const HERO_IMAGES: Record<string, string> = {
  "food-beverage": "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=2400&q=80",
  manufacturing: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=2400&q=80",
  "energy-power": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2400&q=80",
  agriculture: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2400&q=80",
};

const DEFAULT_HERO = "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=2400&q=80";

const VALUE_PROPS = [
  { icon: Package, title: "Sector-Specific Sourcing", body: "We map your input requirements to the right origin markets and supplier tier." },
  { icon: Globe2, title: "Multi-Origin Resilience", body: "Diversified sourcing reduces dependency on any single corridor or supplier." },
  { icon: ShieldCheck, title: "Compliance by Default", body: "Documentation, sanctions screening, and quality inspection on every shipment." },
];

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const title = slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  return { title: `${title} Industry`, description: `Commodity solutions for the ${title} sector.` };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  const heroImage = HERO_IMAGES[slug] ?? DEFAULT_HERO;

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative bg-[var(--color-ink)] text-white py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={heroImage} alt={title} fill priority className="object-cover object-center opacity-25" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-ink)] via-[var(--color-ink)]/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Industries", href: "/industries" }, { label: title }]} dark />
          <div className="mt-10 max-w-3xl animate-fade-up">
            <span className="text-[var(--color-gold)] text-[11px] font-bold uppercase tracking-[0.18em] mb-4 block">Industry Focus</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.08] tracking-tight">
              Commodity programs built for {title}
            </h1>
            <p className="text-lg text-white/60 leading-relaxed mb-10">
              Tailored sourcing, logistics, and documentation for procurement teams operating across international {title.toLowerCase()} supply chains.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/partner-with-us/buyers" variant="gold">Request a Quote <ArrowRight className="w-4 h-4" /></Button>
              <Button href="/products" variant="outline-white">Browse Products</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="py-20 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl mb-14">
            <span className="text-[var(--color-gold)] text-[11px] font-bold uppercase tracking-[0.18em] mb-3 block">Why Buyers Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-ink)] tracking-tight">
              Procurement leaders use us as a structured commodity counterpart
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {VALUE_PROPS.map(({ icon: Icon, title: t, body }, i) => (
              <AnimatedSection
                key={t}
                delay={i * 100}
                className="bg-white border border-[var(--color-border)] rounded-[var(--radius-lg)] p-7 hover:border-[var(--color-gold)]/40 hover:shadow-[var(--shadow-card-hover)] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-[var(--radius-md)] bg-[var(--color-ink)] flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-[var(--color-gold)]" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-[var(--color-ink)] mb-2">{t}</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{body}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 bg-[var(--color-surface-off)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/5] rounded-[var(--radius-lg)] overflow-hidden order-2 md:order-1">
              <Image src={heroImage} alt={`${title} sector operations`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="order-1 md:order-2">
              <span className="text-[var(--color-gold)] text-[11px] font-bold uppercase tracking-[0.18em] mb-3 block">Operating Model</span>
              <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-6 tracking-tight">How we serve the {title} sector</h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                We act as a principal counterpart — taking on logistics, quality, and regulatory responsibility so your operations team can focus on production and delivery.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Programmatic sourcing across multiple origins",
                  "Trade finance instruments tailored to your treasury",
                  "Pre-shipment inspection by accredited third parties",
                  "Documentary control end-to-end",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-gold)] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-[var(--color-text-secondary)]">{line}</span>
                  </li>
                ))}
              </ul>
              <Button href="/capabilities" variant="primary">See Our Capabilities <ArrowRight className="w-4 h-4" /></Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTABand />
    </PageLayout>
  );
}
