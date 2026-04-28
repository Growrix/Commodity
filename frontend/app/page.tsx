import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/layout/TrustStrip";
import SectorGrid from "@/components/sections/SectorGrid";
import CapabilityCards from "@/components/sections/CapabilityCards";
import InsightCards from "@/components/sections/InsightCards";
import CTABand from "@/components/layout/CTABand";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";
import { tradeCorridors } from "@/lib/data/markets";

export const metadata: Metadata = {
  title: "Veterra Global Commodities — Reliable Supply. Global Reach.",
  description:
    "Global commodity trading in Agriculture, Energy, Fertilizers, and Industrial Materials. Trusted supply across 40+ destination markets.",
};

const whyItems = [
  {
    icon: "🌍",
    title: "Origination Depth",
    body: "Direct producer relationships across 30+ origin countries — not broker-sourced at spot.",
  },
  {
    icon: "📜",
    title: "Documentation Discipline",
    body: "Full certificate packs on every cargo. No shortcuts on inspection, phytosanitary, or compliance documentation.",
  },
  {
    icon: "🚢",
    title: "End-to-End Logistics",
    body: "We manage freight, customs, port agency, and last-mile delivery — not just the sale.",
  },
  {
    icon: "📊",
    title: "Market Intelligence",
    body: "We trade every day. Our clients get the market context that only comes from being active in the market.",
  },
  {
    icon: "💼",
    title: "Flexible Finance",
    body: "LC, DA, DP, and structured payment terms. We work with buyers across credit environments.",
  },
  {
    icon: "✅",
    title: "Quality Guaranteed",
    body: "Independent inspection at origin. Specification compliance is not negotiated away after the contract is signed.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <SectorGrid />

      {/* Why Work With Us */}
      <section className="section-pad bg-surface">
        <Container>
          <SectionHeader
            eyebrow="Why Veterra Global"
            title={<>More Than a Broker. <span className="text-gold">A Trade Partner.</span></>}
            subtitle="Six operational strengths that translate directly into supply reliability for our clients."
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyItems.map((item) => (
              <div key={item.title} className="surface-card-elevated p-6 rounded-lg">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="text-base font-bold text-text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Trade Corridors */}
      <section className="section-pad bg-background">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <SectionHeader
              eyebrow="Global Coverage"
              title={<>Active <span className="text-gold">Trade Corridors</span></>}
            />
            <Link
              href="/markets"
              className="flex items-center gap-1.5 text-sm font-medium text-gold hover:text-gold-light transition-colors duration-200 shrink-0"
            >
              All markets
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tradeCorridors.slice(0, 3).map((corridor) => (
              <Link
                key={corridor.slug}
                href={`/markets/corridors/${corridor.slug}`}
                className="group surface-card p-5 hover:border-gold/40 transition-all duration-200 rounded-lg"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                    {corridor.transitDays}
                  </span>
                </div>
                <h3 className="text-base font-bold text-text-primary mb-1 group-hover:text-gold transition-colors duration-200">
                  {corridor.name}
                </h3>
                <p className="text-sm text-text-secondary mb-4 line-clamp-2">
                  {corridor.summary}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {corridor.commodities.slice(0, 3).map((c) => (
                    <span key={c} className="text-xs bg-surface-elevated border border-border-light text-text-muted px-2 py-0.5 rounded-sm">
                      {c}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CapabilityCards />
      <InsightCards limit={3} showHeader />
      <CTABand />
    </>
  );
}
