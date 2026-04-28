import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import CTABand from "@/components/layout/CTABand";
import { industries } from "@/lib/data/industries";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Veterra Global supplies commodity raw materials to Food & Feed, Energy, Agriculture Inputs, and Manufacturing industries.",
};

export default function IndustriesHubPage() {
  return (
    <>
      <section className="bg-background pt-[72px] pb-20">
        <Container className="pt-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Industries</p>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
              The Industries
              <br />
              <span className="text-gold">We Supply.</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              Our commodities serve buyers across four industry verticals — from food manufacturers and
              feed compounders to power utilities, fertilizer distributors, and industrial processors.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-pad bg-surface">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group surface-card p-8 hover:border-gold/40 transition-all duration-200 rounded-lg"
              >
                <h2 className="text-xl font-bold text-text-primary group-hover:text-gold transition-colors duration-200 mb-2">
                  {industry.name}
                </h2>
                <p className="text-sm text-text-secondary leading-relaxed mb-5">
                  {industry.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {industry.commodities.slice(0, 4).map((c) => (
                    <span key={c} className="text-xs bg-background border border-border text-text-muted px-2.5 py-1 rounded-sm">
                      {c}
                    </span>
                  ))}
                  {industry.commodities.length > 4 && (
                    <span className="text-xs text-text-muted px-2.5 py-1">+{industry.commodities.length - 4} more</span>
                  )}
                </div>
                <span className="flex items-center gap-1.5 text-sm font-semibold text-gold">
                  {industry.ctaLabel}
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
            eyebrow="Not Sure Where to Start?"
            title={<>Talk to Our <span className="text-gold">Trade Desk</span></>}
            subtitle="Tell us what you need, where you need it delivered, and we will find the right supply solution."
            centered
            className="mb-8"
          />
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact#quote" className="btn-gold">Request a Quote</Link>
            <Link href="/products" className="btn-outline-gold">Browse Products</Link>
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
