import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Badge from "@/components/ui/Badge";
import CTABand from "@/components/layout/CTABand";
import { caseStudies, getCaseStudyBySlug } from "@/lib/data/insights";

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) return { title: "Not Found" };
  return { title: cs.title, description: cs.summary };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) notFound();

  return (
    <>
      <section className="bg-background pt-[72px] pb-16">
        <Container className="pt-12" narrow>
          <Breadcrumb
            items={[
              { label: "Insights", href: "/insights" },
              { label: "Case Studies" },
            ]}
            className="mb-8"
          />
          <Badge variant="gold" className="mb-5">{cs.sector}</Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-5 leading-tight">
            {cs.title}
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">{cs.summary}</p>
        </Container>
      </section>

      <section className="pb-20">
        <Container narrow>
          <div className="space-y-8">
            {[
              { label: "The Challenge", content: cs.challenge },
              { label: "Our Solution", content: cs.solution },
              { label: "The Outcome", content: cs.outcome },
            ].map((section) => (
              <div key={section.label} className="surface-card p-6 rounded-lg">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">
                  {section.label}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 surface-card-elevated p-6 rounded-lg">
            <p className="text-base font-bold text-text-primary mb-2">
              Facing a Similar Challenge?
            </p>
            <p className="text-sm text-text-secondary mb-4">
              Our commercial team can discuss how we can structure a supply solution for your requirements.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact#quote" className="btn-gold text-sm">Request a Quote</Link>
              <Link href="/contact#sourcing" className="btn-outline-gold text-sm">Submit Sourcing Request</Link>
            </div>
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
