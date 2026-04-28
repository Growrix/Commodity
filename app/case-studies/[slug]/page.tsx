import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Quote } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import CTABand from "@/components/sections/CTABand";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

const HERO_IMAGE = "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=2400&q=80";

const METRICS = [
  { label: "Commodity", value: "Multi-product" },
  { label: "Volume", value: "50,000 MT" },
  { label: "Corridor", value: "Multi-origin" },
  { label: "Lead Time", value: "On schedule" },
];

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const title = slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  return { title: `Case Study: ${title}`, description: `Read how GlobalTrade executed this trade program.` };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative bg-[var(--color-ink)] text-white py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={HERO_IMAGE} alt={title} fill priority className="object-cover object-center opacity-25" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-ink)] via-[var(--color-ink)]/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Insights", href: "/insights" }, { label: "Case Study" }]} dark />
          <div className="mt-10 max-w-3xl animate-fade-up">
            <span className="text-[var(--color-gold)] text-[11px] font-bold uppercase tracking-[0.18em] mb-4 block">Case Study</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.08] tracking-tight">{title}</h1>
            <p className="text-lg text-white/60 leading-relaxed">
              How GlobalTrade Commodities structured and executed a complex trade program for a buyer facing sourcing, logistics, and compliance constraints.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics strip */}
      <section className="py-10 bg-[var(--color-ink-soft)] border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {METRICS.map(({ label, value }) => (
            <div key={label} className="text-center">
              <div className="text-xs uppercase tracking-widest text-white/40 mb-2">{label}</div>
              <div className="text-lg font-bold text-white">{value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Body */}
      <section className="py-20 bg-[var(--color-surface)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-[var(--color-ink)] mb-4">The Challenge</h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-10">
              The client faced a combination of origin market disruption, tight delivery windows, and documentation requirements that demanded a responsive, principal counterpart with end-to-end accountability.
            </p>

            <h2 className="text-2xl font-bold text-[var(--color-ink)] mb-4">Our Approach</h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
              We sourced from alternative origins, coordinated freight across multiple ports, and ensured every documentary deliverable met the buyer&apos;s LC requirements within agreed timelines.
            </p>
            <ul className="space-y-2 mb-10 text-[var(--color-text-secondary)]">
              <li>• Re-routed sourcing to a secondary origin within five working days</li>
              <li>• Structured an LC-compatible payment instrument with the buyer&apos;s bank</li>
              <li>• Coordinated independent inspection at load and discharge ports</li>
              <li>• Delivered full documentation pack within contractual deadlines</li>
            </ul>

            <h2 className="text-2xl font-bold text-[var(--color-ink)] mb-4">Result</h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-10">
              Delivery was completed on schedule, within agreed pricing parameters, with full third-party quality certification — exceeding the client&apos;s supply program requirements and earning a multi-year follow-on contract.
            </p>
          </AnimatedSection>

          {/* Pull-quote */}
          <AnimatedSection className="bg-[var(--color-surface-off)] border-l-4 border-[var(--color-gold)] p-8 my-12 rounded-r-[var(--radius-lg)]">
            <Quote className="w-8 h-8 text-[var(--color-gold)] mb-4" strokeWidth={1.5} />
            <p className="text-xl text-[var(--color-ink)] font-medium leading-relaxed mb-4">
              They acted like a principal — owning the problem from origin to discharge. That is what we needed and that is what we got.
            </p>
            <p className="text-sm text-[var(--color-text-muted)]">— Head of Procurement, anonymized buyer</p>
          </AnimatedSection>

          <Button href="/partner-with-us/buyers" variant="primary">Start Your Inquiry <ArrowRight className="w-4 h-4" /></Button>
        </div>
      </section>

      <CTABand />
    </PageLayout>
  );
}
