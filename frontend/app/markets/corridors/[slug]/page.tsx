import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import CTABand from "@/components/layout/CTABand";
import { tradeCorridors, getTradeCorridorBySlug } from "@/lib/data/markets";

export async function generateStaticParams() {
  return tradeCorridors.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const corridor = getTradeCorridorBySlug(slug);
  if (!corridor) return { title: "Not Found" };
  return { title: corridor.name, description: corridor.summary };
}

export default async function TradeCorridorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const corridor = getTradeCorridorBySlug(slug);
  if (!corridor) notFound();

  return (
    <>
      <section className="bg-background pt-[72px] pb-20">
        <Container className="pt-12">
          <Breadcrumb
            items={[
              { label: "Markets", href: "/markets" },
              { label: "Trade Corridors" },
              { label: corridor.name },
            ]}
            className="mb-8"
          />
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Trade Corridor</p>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
              {corridor.name}
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">{corridor.summary}</p>
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="surface-card px-4 py-2 rounded-lg flex items-center gap-2">
                <span className="text-xs text-text-muted">Origin:</span>
                <span className="text-sm font-medium text-text-primary">{corridor.origin}</span>
              </div>
              <div className="surface-card px-4 py-2 rounded-lg flex items-center gap-2">
                <span className="text-xs text-text-muted">Destination:</span>
                <span className="text-sm font-medium text-text-primary">{corridor.destination}</span>
              </div>
              <div className="surface-card px-4 py-2 rounded-lg flex items-center gap-2">
                <span className="text-xs text-text-muted">Transit:</span>
                <span className="text-sm font-medium text-gold">{corridor.transitDays}</span>
              </div>
            </div>
            <Link href="/contact#quote" className="btn-gold">Discuss This Corridor</Link>
          </div>
        </Container>
      </section>

      <section className="section-pad bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-xl font-bold text-text-primary mb-5">Commodities Traded</h2>
              <div className="flex flex-wrap gap-2 mb-8">
                {corridor.commodities.map((c) => (
                  <span key={c} className="tag-gold">{c}</span>
                ))}
              </div>
              <h2 className="text-xl font-bold text-text-primary mb-4">Standard Documentation</h2>
              <ul className="space-y-2">
                {corridor.documentation.map((doc) => (
                  <li key={doc} className="flex items-start gap-3 text-sm text-text-secondary">
                    <span className="text-gold mt-0.5 shrink-0">✓</span>
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
            <div className="surface-card-elevated p-6 rounded-lg">
              <h3 className="text-base font-bold text-text-primary mb-4">Ready to Move Cargo?</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                We have active operations on the {corridor.name} corridor. Contact us with your commodity,
                volume, and timing requirements.
              </p>
              <Link href="/contact#quote" className="btn-gold w-full justify-center text-sm mb-3">
                Request a Quote
              </Link>
              <Link href="/contact#sourcing" className="btn-outline-gold w-full justify-center text-sm">
                Submit Sourcing Request
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
