import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import CTABand from "@/components/layout/CTABand";
import { sectors, getSectorBySlug, getFamilyBySlug } from "@/lib/data/products";

export async function generateStaticParams() {
  const params: { sector: string; family: string }[] = [];
  for (const sector of sectors) {
    for (const family of sector.families) {
      params.push({ sector: sector.slug, family: family.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sector: string; family: string }>;
}): Promise<Metadata> {
  const { sector: sectorSlug, family: familySlug } = await params;
  const family = getFamilyBySlug(sectorSlug, familySlug);
  if (!family) return { title: "Not Found" };
  return { title: family.name, description: family.summary };
}

export default async function FamilyPage({
  params,
}: {
  params: Promise<{ sector: string; family: string }>;
}) {
  const { sector: sectorSlug, family: familySlug } = await params;
  const sector = getSectorBySlug(sectorSlug);
  const family = getFamilyBySlug(sectorSlug, familySlug);
  if (!sector || !family) notFound();

  return (
    <>
      <section className="bg-background pt-[72px] pb-20">
        <Container className="pt-12">
          <Breadcrumb
            items={[
              { label: "Products", href: "/products" },
              { label: sector.name, href: `/products/${sector.slug}` },
              { label: family.name },
            ]}
            className="mb-8"
          />
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">
              {sector.name}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
              {family.name}
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mb-8">
              {family.summary}
            </p>
            <Link href="/contact#quote" className="btn-gold">
              Request a Quote
            </Link>
          </div>
        </Container>
      </section>

      <section className="section-pad bg-surface">
        <Container>
          <h2 className="text-xl font-bold text-text-primary mb-8">
            Products in {family.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {family.products.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${sector.slug}/${family.slug}/${product.slug}`}
                className="group surface-card p-6 hover:border-gold/40 hover:bg-gold-muted transition-all duration-200 rounded-lg"
              >
                <h3 className="text-base font-bold text-text-primary group-hover:text-gold transition-colors duration-200 mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {product.summary}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {product.origins.slice(0, 3).map((o) => (
                    <span key={o} className="text-xs bg-surface border border-border text-text-muted px-2 py-0.5 rounded-sm">
                      {o}
                    </span>
                  ))}
                </div>
                <span className="flex items-center gap-1.5 text-xs font-semibold text-gold uppercase tracking-wider">
                  View product
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
