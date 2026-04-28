import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck, Workflow, FileText } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import CTABand from "@/components/sections/CTABand";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

const HERO_IMAGES: Record<string, string> = {
  origination: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2400&q=80",
  "trade-finance": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=2400&q=80",
  logistics: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=2400&q=80",
  "quality-assurance": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=2400&q=80",
};

const DEFAULT_HERO = "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=2400&q=80";

const PILLARS = [
  { icon: ShieldCheck, title: "Counterparty Discipline", body: "Every counterparty is KYC-screened, sanctions-checked, and monitored across the trade lifecycle." },
  { icon: Workflow, title: "Process Excellence", body: "Standardized SOPs across origination, contracting, execution, and post-trade settlement." },
  { icon: FileText, title: "Documentary Rigor", body: "ICC-aligned documentation: compliant, auditable, and accepted by tier-1 banks worldwide." },
];

const PROCESS_STEPS = [
  { step: "01", title: "Discovery", body: "We map your sourcing or supply requirement against our origin network and execution capabilities." },
  { step: "02", title: "Structuring", body: "Commercial terms, finance instruments, logistics, and inspection are structured into a single offer." },
  { step: "03", title: "Execution", body: "Our operations team manages the trade end-to-end — from contract to documentary delivery." },
  { step: "04", title: "Settlement", body: "Payment, document handover, and post-trade reporting closed within agreed timelines." },
];

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const title = slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  return { title: `${title} Capability`, description: `Our ${title} capability in commodity trading.` };
}

export default async function CapabilityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  const heroImage = HERO_IMAGES[slug] ?? DEFAULT_HERO;

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative bg-[var(--color-ink)] text-white py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={heroImage} alt={title} fill priority className="object-cover object-center opacity-25" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-ink)] via-[var(--color-ink)]/85 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Capabilities", href: "/capabilities" }, { label: title }]} dark />
          <div className="mt-10 max-w-3xl animate-fade-up">
            <span className="text-[var(--color-gold)] text-[11px] font-bold uppercase tracking-[0.18em] mb-4 block">
              Capability Detail
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.08] tracking-tight">{title}</h1>
            <p className="text-lg text-white/60 leading-relaxed mb-10">
              A core operating capability that runs across every transaction we execute — built in-house, owned by accountable teams, and integrated with our finance and compliance functions.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/contact" variant="gold">Discuss Your Program <ArrowRight className="w-4 h-4" /></Button>
              <Button href="/capabilities" variant="outline-white">All Capabilities</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl mb-14">
            <span className="text-[var(--color-gold)] text-[11px] font-bold uppercase tracking-[0.18em] mb-3 block">How It Works</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-ink)] tracking-tight">
              Three pillars behind every {title.toLowerCase()} engagement
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {PILLARS.map(({ icon: Icon, title: t, body }, i) => (
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

      {/* Process */}
      <section className="py-20 bg-[var(--color-ink)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl mb-14">
            <span className="text-[var(--color-gold)] text-[11px] font-bold uppercase tracking-[0.18em] mb-3 block">Our Process</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">From inquiry to settlement, structured</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-[var(--radius-lg)] overflow-hidden">
            {PROCESS_STEPS.map(({ step, title: t, body }, i) => (
              <AnimatedSection key={step} delay={i * 80} className="bg-[var(--color-ink)] p-7 hover:bg-[var(--color-ink-soft)] transition-colors">
                <div className="text-[var(--color-gold)] text-xs font-bold tracking-widest mb-3">{step}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{t}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{body}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 bg-[var(--color-surface-off)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[var(--color-gold)] text-[11px] font-bold uppercase tracking-[0.18em] mb-3 block">What You Get</span>
              <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-6 tracking-tight">Outcomes our clients rely on</h2>
              <ul className="space-y-3">
                {[
                  "Single accountable counterparty across the trade",
                  "Documentary compliance accepted by tier-1 banks",
                  "Risk transfer aligned with Incoterms 2020",
                  "Quarterly performance reviews against KPIs",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-gold)] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-[var(--color-text-secondary)]">{line}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="/partner-with-us/buyers" variant="primary">Start a Conversation <ArrowRight className="w-4 h-4" /></Button>
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-[var(--radius-lg)] overflow-hidden">
              <Image src={heroImage} alt={`${title} in action`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTABand />
    </PageLayout>
  );
}
