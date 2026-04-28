import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import CTABand from "@/components/layout/CTABand";
import { originMarkets, destinationMarkets, tradeCorridors } from "@/lib/data/markets";

export const metadata: Metadata = {
  title: "Markets & Origins",
  description:
    "Veterra Global operates across origin and destination markets in South America, Black Sea, Africa, Middle East, and Asia.",
};

export default function MarketsHubPage() {
  return (
    <>
      <section className="bg-background pt-[72px] pb-20">
        <Container className="pt-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Markets & Origins</p>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
              Global Coverage.
              <br />
              <span className="text-gold">Corridor-Level</span> Knowledge.
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              We don&apos;t just ship to any port. We understand the origin dynamics, destination compliance
              requirements, and logistics realities of every market we operate in.
            </p>
          </div>
        </Container>
      </section>

      {/* Origin Markets */}
      <section className="section-pad bg-surface">
        <Container>
          <SectionHeader
            eyebrow="Origin Markets"
            title={<>Where We <span className="text-gold">Source</span></>}
            subtitle="Primary sourcing origins across five continents with direct producer relationships."
            className="mb-10"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {originMarkets.map((market) => (
              <Link
                key={market.slug}
                href={`/markets/origins/${market.slug}`}
                className="group surface-card p-5 hover:border-gold/40 hover:bg-gold-muted transition-all duration-200 rounded-lg"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-1">{market.region}</p>
                <h3 className="text-base font-bold text-text-primary group-hover:text-gold transition-colors duration-200 mb-2">
                  {market.name}
                </h3>
                <div className="flex flex-wrap gap-1 mb-3">
                  {market.commodities.slice(0, 3).map((c) => (
                    <span key={c} className="text-xs text-text-muted border border-border px-2 py-0.5 rounded-sm bg-surface">
                      {c}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-text-muted line-clamp-2 leading-relaxed">{market.summary}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Destination Markets */}
      <section className="section-pad bg-background">
        <Container>
          <SectionHeader
            eyebrow="Destination Markets"
            title={<>Where We <span className="text-gold">Deliver</span></>}
            subtitle="Active import corridors across Africa, the Middle East, South Asia, and Southeast Asia."
            className="mb-10"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {destinationMarkets.map((market) => (
              <Link
                key={market.slug}
                href={`/markets/destinations/${market.slug}`}
                className="group surface-card p-6 hover:border-gold/40 hover:bg-gold-muted transition-all duration-200 rounded-lg"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-1">{market.region}</p>
                <h3 className="text-lg font-bold text-text-primary group-hover:text-gold transition-colors duration-200 mb-2">
                  {market.name}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-3">{market.summary}</p>
                <div className="flex flex-wrap gap-1">
                  {market.commodities.slice(0, 3).map((c) => (
                    <span key={c} className="text-xs text-text-muted border border-border px-2 py-0.5 rounded-sm bg-surface-elevated">
                      {c}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Trade Corridors */}
      <section className="section-pad bg-surface">
        <Container>
          <SectionHeader
            eyebrow="Trade Corridors"
            title={<>Active <span className="text-gold">Supply Routes</span></>}
            subtitle="Key origin-to-destination lanes with documented lead times, commodities, and documentation requirements."
            className="mb-10"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tradeCorridors.map((corridor) => (
              <Link
                key={corridor.slug}
                href={`/markets/corridors/${corridor.slug}`}
                className="group surface-card-elevated p-6 hover:border-gold/40 transition-all duration-200 rounded-lg"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                    {corridor.transitDays}
                  </span>
                </div>
                <h3 className="text-base font-bold text-text-primary group-hover:text-gold transition-colors duration-200 mb-2">
                  {corridor.name}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4 line-clamp-2">
                  {corridor.summary}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {corridor.commodities.slice(0, 3).map((c) => (
                    <span key={c} className="text-xs bg-surface border border-border text-text-muted px-2 py-0.5 rounded-sm">
                      {c}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
