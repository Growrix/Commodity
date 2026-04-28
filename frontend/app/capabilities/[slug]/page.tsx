import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import CTABand from "@/components/layout/CTABand";
import { capabilities, getCapabilityBySlug } from "@/lib/data/capabilities";

export async function generateStaticParams() {
  return capabilities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cap = getCapabilityBySlug(slug);
  if (!cap) return { title: "Not Found" };
  return { title: cap.name, description: cap.summary };
}

export default async function CapabilityDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cap = getCapabilityBySlug(slug);
  if (!cap) notFound();

  return (
    <>
      <section className="bg-background pt-[72px] pb-20">
        <Container className="pt-12">
          <Breadcrumb
            items={[{ label: "Capabilities", href: "/capabilities" }, { label: cap.name }]}
            className="mb-8"
          />
          <div className="max-w-3xl">
            <span className="text-4xl mb-4 block">{cap.icon}</span>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Capability</p>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
              {cap.name}
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">{cap.description}</p>
          </div>
        </Container>
      </section>

      <section className="section-pad bg-surface">
        <Container>
          <h2 className="text-xl font-bold text-text-primary mb-8">How It Works in Practice</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {cap.features.map((feature, idx) => (
              <div key={feature.title} className="surface-card-elevated p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-7 h-7 rounded-full border border-gold/40 bg-gold-muted flex items-center justify-center text-xs font-bold text-gold">
                    {idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-text-primary">{feature.title}</h3>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">{feature.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad bg-background">
        <Container className="text-center">
          <h2 className="text-2xl font-bold text-text-primary mb-3">
            Ready to Put Our <span className="text-gold">Capabilities to Work?</span>
          </h2>
          <p className="text-text-secondary mb-8 max-w-md mx-auto">
            Contact our team to discuss how {cap.name.toLowerCase()} fits into your supply programme.
          </p>
          <Link href="/contact" className="btn-gold">Start a Conversation</Link>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
