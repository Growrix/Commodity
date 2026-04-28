import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Button from "@/components/ui/Button";

const HERO_IMAGE = "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2400&q=80";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const title = slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  return { title, description: `GlobalTrade Commodities ${title}` };
}

export default async function TrustDocumentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  return (
    <PageLayout>
      <section className="relative bg-[var(--color-ink)] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={HERO_IMAGE} alt="" fill priority className="object-cover object-center opacity-15" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-ink)] via-[var(--color-ink)]/85 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Trust Center", href: "/trust-center" }, { label: title }]} dark />
          <div className="mt-8 flex items-start gap-4 max-w-3xl">
            <div className="w-12 h-12 rounded-[var(--radius-md)] bg-[var(--color-gold)] flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5 text-[var(--color-ink)]" strokeWidth={2} />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">{title}</h1>
              <p className="text-white/55">Last updated: April 2026</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-surface)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-8">
              This document sets out GlobalTrade Commodities Ltd&apos;s policy and position regarding {title.toLowerCase()}. It applies to all personnel, agents, and third parties acting on behalf of the company.
            </p>
            <h2 className="text-xl font-bold text-[var(--color-ink)] mt-10 mb-4">Scope</h2>
            <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
              This policy applies globally across all operations, jurisdictions, and commercial relationships in which GlobalTrade Commodities participates or has oversight.
            </p>
            <h2 className="text-xl font-bold text-[var(--color-ink)] mt-10 mb-4">Policy Statement</h2>
            <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
              GlobalTrade Commodities is committed to the highest standards of commercial conduct, regulatory compliance, and ethical behaviour. This commitment extends to all our trading relationships and counterparties.
            </p>
            <h2 className="text-xl font-bold text-[var(--color-ink)] mt-10 mb-4">Implementation</h2>
            <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
              Implementation is overseen by our Compliance Committee and reviewed annually. Training, monitoring, and corrective action procedures are documented and audited as part of our internal control framework.
            </p>
            <h2 className="text-xl font-bold text-[var(--color-ink)] mt-10 mb-4">Reporting Concerns</h2>
            <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
              Concerns or potential breaches can be reported confidentially through our whistleblower channel. All reports are investigated and the reporter is protected against retaliation.
            </p>
            <h2 className="text-xl font-bold text-[var(--color-ink)] mt-10 mb-4">Contact</h2>
            <p className="text-[var(--color-text-muted)] leading-relaxed mb-10">
              For questions about this document, please contact our compliance team at{" "}
              <span className="text-[var(--color-ink)] font-medium">compliance@globaltrade.com</span>
            </p>
          </div>
          <Button href="/trust-center" variant="outline">Back to Trust Center <ArrowRight className="w-4 h-4" /></Button>
        </div>
      </section>
    </PageLayout>
  );
}
