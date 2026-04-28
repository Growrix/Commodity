import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import CTABand from "@/components/layout/CTABand";
import { sectors, getSectorBySlug } from "@/lib/data/products";

export async function generateStaticParams() {
  return sectors.map((s) => ({ sector: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sector: string }>;
}): Promise<Metadata> {
  const { sector: sectorSlug } = await params;
  const sector = getSectorBySlug(sectorSlug);
  if (!sector) return { title: "Not Found" };
  return {
    title: sector.name,
    description: sector.summary,
  };
}

export default async function SectorPage({
  params,
}: {
  params: Promise<{ sector: string }>;
}) {
  const { sector: sectorSlug } = await params;
  const sector = getSectorBySlug(sectorSlug);
  if (!sector) notFound();

  return (
    <>
      <section className="bg-background pt-[72px] pb-20">
        <Container className="pt-12">
          <Breadcrumb
            items={[{ label: "Products", href: "/products" }, { label: sector.name }]}
            className="mb-8"
          />
          <div className="max-w-3xl">
            <span className="text-4xl mb-4 block">{sector.icon}</span>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Sector</p>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
              {sector.name}
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mb-8">
              {sector.summary}
            </p>
            <Link href="/contact#quote" className="btn-gold">
              Request a Quote
            </Link>
          </div>
        </Container>
      </section>

      <section className="section-pad bg-surface">
        <Container>
          <div className="space-y-10">
            {sector.families.map((family) => (
              <div key={family.slug}>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-text-primary">{family.name}</h2>
                    <p className="text-sm text-text-secondary mt-1 max-w-lg">{family.summary}</p>
                  </div>
                  <Link
                    href={`/products/${sector.slug}/${family.slug}`}
                    className="btn-outline-gold text-sm shrink-0"
                  >
                    View Family
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                  {family.products.map((product) => (
                    <Link
                      key={product.slug}
                      href={`/products/${sector.slug}/${family.slug}/${product.slug}`}
                      className="group surface-card p-5 hover:border-gold/40 hover:bg-gold-muted transition-all duration-200 rounded-lg"
                    >
                      <h3 className="text-sm font-bold text-text-primary group-hover:text-gold transition-colors duration-200 mb-2">
                        {product.name}
                      </h3>
                      <p className="text-xs text-text-muted leading-relaxed line-clamp-2">
                        {product.summary}
                      </p>
                      <span className="flex items-center gap-1 text-xs font-semibold text-gold mt-3 uppercase tracking-wider">
                        View product
                        <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
