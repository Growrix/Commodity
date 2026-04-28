import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import CTABand from "@/components/layout/CTABand";
import { industries, getIndustryBySlug } from "@/lib/data/industries";

export async function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return { title: "Not Found" };
  return { title: industry.name, description: industry.summary };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  return (
    <>
      <section className="bg-background pt-[72px] pb-20">
        <Container className="pt-12">
          <Breadcrumb
            items={[{ label: "Industries", href: "/industries" }, { label: industry.name }]}
            className="mb-8"
          />
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Industry</p>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
              {industry.name}
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">{industry.description}</p>
            <Link href="/contact#quote" className="btn-gold">{industry.ctaLabel}</Link>
          </div>
        </Container>
      </section>

      <section className="section-pad bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl font-bold text-text-primary mb-5">Commodities We Supply</h2>
              <div className="flex flex-wrap gap-2">
                {industry.commodities.map((c) => (
                  <span key={c} className="tag-gold">{c}</span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-text-primary mb-5">Our Capabilities for Your Sector</h2>
              <ul className="space-y-3">
                {industry.capabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-3 text-sm text-text-secondary">
                    <span className="text-gold mt-0.5 shrink-0">✓</span>
                    {cap}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-pad bg-background">
        <Container className="text-center">
          <h2 className="text-2xl font-bold text-text-primary mb-3">
            Discuss Your <span className="text-gold">Supply Requirements</span>
          </h2>
          <p className="text-text-secondary mb-8 max-w-lg mx-auto">
            Tell us what you need and we will respond with options, pricing, and a supply timeline within 24 hours.
          </p>
          <Link href="/contact#quote" className="btn-gold">{industry.ctaLabel}</Link>
        </Container>
      </section>

      <CTABand excludeAudience="Buyers" />
    </>
  );
}
