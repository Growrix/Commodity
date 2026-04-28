import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, MapPin, Truck, Ship, FileCheck } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import CTABand from "@/components/sections/CTABand";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

const HERO_IMAGES: Record<string, string> = {
  "southeast-asia": "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=2400&q=80",
  europe: "https://images.unsplash.com/photo-1552432552-06c0b0a94dda?auto=format&fit=crop&w=2400&q=80",
  "middle-east": "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=2400&q=80",
  africa: "https://images.unsplash.com/photo-1568454537842-d933259bb258?auto=format&fit=crop&w=2400&q=80",
};

const DEFAULT_HERO = "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=2400&q=80";

const STATS = [
  { icon: Ship, label: "Major Ports", value: "12+" },
  { icon: Truck, label: "Inland Routes", value: "Active" },
  { icon: FileCheck, label: "Customs Clearance", value: "In-house" },
];

const PILLARS = [
  { title: "Regional Team", body: "On-the-ground commercial team handling buyer onboarding, contracting, and post-trade support." },
  { title: "Port Coordination", body: "Established relationships with port operators and clearing agents at every major destination port." },
  { title: "Documentary Compliance", body: "Local regulatory documentation prepared in accordance with destination customs requirements." },
];

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const name = slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  return { title: `${name} — Destination Market`, description: `Commodity delivery and market coverage in ${name}.` };
}

export default async function DestinationMarketPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const name = slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  const heroImage = HERO_IMAGES[slug] ?? DEFAULT_HERO;

  return (
    <PageLayout>
      <section className="relative bg-[var(--color-ink)] text-white py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={heroImage} alt={name} fill priority className="object-cover object-center opacity-30" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-ink)] via-[var(--color-ink)]/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Markets", href: "/markets" }, { label: "Destinations" }, { label: name }]} dark />
          <div className="mt-10 max-w-3xl animate-fade-up">
            <span className="text-[var(--color-gold)] text-[11px] font-bold uppercase tracking-[0.18em] mb-4 block flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" /> Destination Market
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.08] tracking-tight">
              Delivering across {name}
            </h1>
            <p className="text-lg text-white/60 leading-relaxed mb-10">
              Full logistics, documentation, and compliance support for buyers receiving commodities into {name} markets.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/contact" variant="gold">Contact Regional Team <ArrowRight className="w-4 h-4" /></Button>
              <Button href="/markets" variant="outline-white">All Markets</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[var(--color-ink-soft)] border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-3 gap-8 text-center">
          {STATS.map(({ icon: Icon, label, value }) => (
            <div key={label}>
              <Icon className="w-5 h-5 text-[var(--color-gold)] mx-auto mb-3" strokeWidth={2} />
              <div className="text-3xl font-bold text-white mb-1">{value}</div>
              <div className="text-xs uppercase tracking-widest text-white/40">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl mb-14">
            <span className="text-[var(--color-gold)] text-[11px] font-bold uppercase tracking-[0.18em] mb-3 block">Capabilities at Destination</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-ink)] tracking-tight">
              Operational presence across {name}
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {PILLARS.map(({ title, body }, i) => (
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
