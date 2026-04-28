import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import CTABand from "@/components/layout/CTABand";
import { originMarkets, getOriginMarketBySlug } from "@/lib/data/markets";

export async function generateStaticParams() {
  return originMarkets.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const market = getOriginMarketBySlug(slug);
  if (!market) return { title: "Not Found" };
  return { title: `${market.name} — Origin Market`, description: market.summary };
}

export default async function OriginMarketPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const market = getOriginMarketBySlug(slug);
  if (!market) notFound();

  return (
    <>
      <section className="bg-background pt-[72px] pb-20">
        <Container className="pt-12">
          <Breadcrumb
            items={[
              { label: "Markets", href: "/markets" },
              { label: "Origins" },
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
            <Link href="/contact#quote" className="btn-gold">Request a Quote from This Origin</Link>
          </div>
        </Container>
      </section>

      <section className="section-pad bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-text-primary mb-4">Commodities Sourced</h2>
                <div className="flex flex-wrap gap-2">
                  {market.commodities.map((c) => (
                    <span key={c} className="tag-gold">{c}</span>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-text-primary mb-4">Key Export Ports</h2>
                <div className="flex flex-wrap gap-2">
                  {market.ports.map((p) => (
                    <span key={p} className="text-sm bg-surface-elevated border border-border-light text-text-secondary px-4 py-2 rounded">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-text-primary mb-4">Seasonal Notes</h2>
                <p className="text-sm text-text-secondary leading-relaxed">{market.seasonalNotes}</p>
              </div>
            </div>
            <div className="surface-card p-6 rounded-lg h-fit">
              <h3 className="text-base font-bold text-text-primary mb-4">Discuss This Origin</h3>
              <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                Our origination team has active relationships in {market.name}. Contact us to discuss supply availability, pricing, and timing.
              </p>
              <Link href="/contact#quote" className="btn-gold w-full justify-center text-sm">
                Get in Touch
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
