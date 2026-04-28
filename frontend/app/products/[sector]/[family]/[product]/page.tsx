import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import QuoteForm from "@/components/forms/QuoteForm";
import { sectors, getSectorBySlug, getFamilyBySlug, getProductBySlug } from "@/lib/data/products";

export async function generateStaticParams() {
  const params: { sector: string; family: string; product: string }[] = [];
  for (const sector of sectors) {
    for (const family of sector.families) {
      for (const product of family.products) {
        params.push({ sector: sector.slug, family: family.slug, product: product.slug });
      }
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sector: string; family: string; product: string }>;
}): Promise<Metadata> {
  const { sector: s, family: f, product: p } = await params;
  const product = getProductBySlug(s, f, p);
  if (!product) return { title: "Not Found" };
  return { title: product.name, description: product.summary };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ sector: string; family: string; product: string }>;
}) {
  const { sector: sectorSlug, family: familySlug, product: productSlug } = await params;
  const sector = getSectorBySlug(sectorSlug);
  const family = getFamilyBySlug(sectorSlug, familySlug);
  const product = getProductBySlug(sectorSlug, familySlug, productSlug);
  if (!sector || !family || !product) notFound();

  return (
    <>
      <section className="bg-background pt-[72px] pb-16">
        <Container className="pt-12">
          <Breadcrumb
            items={[
              { label: "Products", href: "/products" },
              { label: sector.name, href: `/products/${sector.slug}` },
              { label: family.name, href: `/products/${sector.slug}/${family.slug}` },
              { label: product.name },
            ]}
            className="mb-8"
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">
                {sector.name} → {family.name}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-5 leading-tight">
                {product.name}
              </h1>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                {product.summary}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {product.origins.map((o) => (
                  <span key={o} className="text-xs bg-surface border border-border text-text-secondary px-3 py-1 rounded-sm">
                    📍 {o}
                  </span>
                ))}
              </div>
            </div>
            {/* Quick facts sidebar */}
            <div className="surface-card p-6 rounded-lg h-fit">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Quick Facts</p>
              <dl className="space-y-3">
                <div>
                  <dt className="text-xs text-text-muted">MOQ</dt>
                  <dd className="text-sm text-text-primary font-medium">{product.moqGuidance}</dd>
                </div>
                <div className="border-t border-border pt-3">
                  <dt className="text-xs text-text-muted">Lead Time</dt>
                  <dd className="text-sm text-text-primary font-medium">{product.leadTime}</dd>
                </div>
                <div className="border-t border-border pt-3">
                  <dt className="text-xs text-text-muted">Incoterms</dt>
                  <dd className="text-sm text-text-primary font-medium">{product.incoterms.join(", ")}</dd>
                </div>
              </dl>
              <Link href="/contact#quote" className="btn-gold w-full justify-center text-sm mt-6">
                Request a Quote
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-pad bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              {/* Specifications */}
              <div>
                <h2 className="text-xl font-bold text-text-primary mb-5">Technical Specifications</h2>
                <div className="surface-card rounded-lg overflow-hidden">
                  <table className="w-full">
                    <tbody>
                      {product.specifications.map((spec, idx) => (
                        <tr key={spec.label} className={idx % 2 === 0 ? "bg-surface" : "bg-surface-elevated"}>
                          <td className="px-4 py-3 text-sm font-medium text-text-secondary w-2/5">{spec.label}</td>
                          <td className="px-4 py-3 text-sm text-text-primary font-semibold">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Applications */}
              <div>
                <h2 className="text-xl font-bold text-text-primary mb-5">Applications & Buyer Fit</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.applications.map((app) => (
                    <div key={app} className="surface-card-elevated px-4 py-3 rounded-lg flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      <span className="text-sm text-text-secondary">{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Origin & Supply */}
              <div>
                <h2 className="text-xl font-bold text-text-primary mb-5">Origin & Supply Options</h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.origins.map((o) => (
                    <span key={o} className="tag-gold">{o}</span>
                  ))}
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  We source {product.name.toLowerCase()} from multiple origins to ensure supply continuity.
                  Origin flexibility allows competitive pricing and protection against single-origin supply disruption.
                </p>
              </div>

              {/* Quality & Compliance */}
              <div>
                <h2 className="text-xl font-bold text-text-primary mb-4">Quality & Compliance</h2>
                <p className="text-sm text-text-secondary leading-relaxed">{product.qualityNotes}</p>
              </div>
            </div>

            {/* Inquiry form */}
            <div>
              <div className="surface-card p-6 rounded-lg sticky top-[88px]">
                <h2 className="text-lg font-bold text-text-primary mb-1">Request a Quote</h2>
                <p className="text-xs text-text-muted mb-5">Our trade desk responds within 24 hours on business days.</p>
                <QuoteForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
