import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import CTABand from "@/components/layout/CTABand";
import { destinationMarkets, getDestinationMarketBySlug } from "@/lib/data/markets";

export async function generateStaticParams() {
  return destinationMarkets.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const market = getDestinationMarketBySlug(slug);
  if (!market) return { title: "Not Found" };
  return { title: `${market.name} — Destination Market`, description: market.summary };
}

export default async function DestinationMarketPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const market = getDestinationMarketBySlug(slug);
  if (!market) notFound();

  return (
    <>
      <section className="bg-background pt-[72px] pb-20">
        <Container className="pt-12">
          <Breadcrumb
            items={[
              { label: "Markets", href: "/markets" },
              { label: "Destinations" },
              { label: market.name },
            ]}
            className="mb-8"
          />
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">{market.region}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
              {market.name}
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">{market.summary}</p>
            <Link href="/contact#quote" className="btn-gold">Discuss Supply to {market.name}</Link>
          </div>
        </Container>
      </section>

      <section className="section-pad bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-text-primary mb-4">Commodities We Deliver Here</h2>
                <div className="flex flex-wrap gap-2">
                  {market.commodities.map((c) => (
                    <span key={c} className="tag-gold">{c}</span>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-text-primary mb-4">Key Import Ports</h2>
                <div className="flex flex-wrap gap-2">
                  {market.ports.map((p) => (
                    <span key={p} className="text-sm bg-surface-elevated border border-border-light text-text-secondary px-4 py-2 rounded">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-text-primary mb-4">Import & Compliance Notes</h2>
                <p className="text-sm text-text-secondary leading-relaxed">{market.importNotes}</p>
              </div>
            </div>
            <div className="surface-card p-6 rounded-lg h-fit">
              <h3 className="text-base font-bold text-text-primary mb-4">Supply to {market.name}</h3>
              <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                We have active trade flows to {market.name}. Get in touch with your commodity, volume, and delivery timeline.
              </p>
              <Link href="/contact#quote" className="btn-gold w-full justify-center text-sm">
                Request a Quote
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
