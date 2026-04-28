import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, ArrowRightLeft, Ship, Clock, BarChart3 } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import CTABand from "@/components/sections/CTABand";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

const HERO_IMAGES: Record<string, string> = {
  "black-sea-asia": "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=2400&q=80",
  "americas-europe": "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=2400&q=80",
  "africa-asia": "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=2400&q=80",
};

const DEFAULT_HERO = "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=2400&q=80";

const STATS = [
  { icon: Ship, label: "Vessels Booked", value: "200+" },
  { icon: Clock, label: "Avg Transit Time", value: "Tracked" },
  { icon: BarChart3, label: "Annual Volume", value: "Major" },
];

const ROUTE_PROPS = [
  { title: "Verified Carriers", body: "Established relationships with bulk and container carriers serving this corridor." },
  { title: "Port Pair Coverage", body: "Operational presence at origin and destination ports across the route." },
  { title: "Compliance Mapping", body: "Documentation requirements mapped for both ends of the corridor — pre-cleared, not last-minute." },
];

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const name = slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  return { title: `${name} — Trade Corridor`, description: `Trade corridor analysis and logistics for ${name}.` };
}

export default async function TradeCorridorPage({ params }: { params: Promise<{ slug: string }> }) {
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
          <Breadcrumb items={[{ label: "Markets", href: "/markets" }, { label: "Corridors" }, { label: name }]} dark />
          <div className="mt-10 max-w-3xl animate-fade-up">
            <span className="text-[var(--color-gold)] text-[11px] font-bold uppercase tracking-[0.18em] mb-4 block flex items-center gap-2">
              <ArrowRightLeft className="w-3.5 h-3.5" /> Trade Corridor
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.08] tracking-tight">
              The {name} Corridor
            </h1>
            <p className="text-lg text-white/60 leading-relaxed mb-10">
              A high-volume route we operate every week — established freight, verified port access, and documented compliance on both ends.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/partner-with-us/buyers" variant="gold">Source via this Corridor <ArrowRight className="w-4 h-4" /></Button>
              <Button href="/markets" variant="outline-white">All Corridors</Button>
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
            <span className="text-[var(--color-gold)] text-[11px] font-bold uppercase tracking-[0.18em] mb-3 block">Operational Coverage</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-ink)] tracking-tight">
              How we run the {name} corridor
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {ROUTE_PROPS.map(({ title, body }, i) => (
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
