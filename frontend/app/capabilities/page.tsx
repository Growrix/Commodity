import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import CTABand from "@/components/layout/CTABand";
import { capabilities } from "@/lib/data/capabilities";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "End-to-end commodity trade capabilities: sourcing, trade finance, logistics, quality assurance, risk management, and market intelligence.",
};

export default function CapabilitiesHubPage() {
  return (
    <>
      <section className="bg-background pt-[72px] pb-20">
        <Container className="pt-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Capabilities</p>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
              Full-Service
              <br />
              <span className="text-gold">Trade Execution.</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              We manage every stage of the commercial journey — from origin sourcing to destination delivery.
              Here is what that means in practice.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-pad bg-surface">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((cap) => (
              <Link
                key={cap.slug}
                href={`/capabilities/${cap.slug}`}
                className="group surface-card p-6 hover:border-gold/40 hover:bg-gold-muted transition-all duration-200 rounded-lg"
              >
                <div className="text-3xl mb-4">{cap.icon}</div>
                <h2 className="text-lg font-bold text-text-primary group-hover:text-gold transition-colors duration-200 mb-2">
                  {cap.name}
                </h2>
                <p className="text-sm text-text-secondary leading-relaxed mb-5">{cap.summary}</p>
                <span className="flex items-center gap-1.5 text-xs font-semibold text-gold uppercase tracking-wider">
                  Learn more
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad bg-background">
        <Container>
          <SectionHeader
            eyebrow="What Sets Us Apart"
            title={<>Not a Broker. <span className="text-gold">An Execution Partner.</span></>}
            subtitle="We take ownership of physical goods and manage every step. Our clients don't need to orchestrate a supply chain — we do it for them."
            centered
            className="mb-10"
          />
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-gold">Discuss a Supply Programme</Link>
            <Link href="/products" className="btn-outline-gold">Browse Products</Link>
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
