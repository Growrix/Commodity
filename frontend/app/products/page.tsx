import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import CTABand from "@/components/layout/CTABand";
import { sectors } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Veterra Global trades agricultural commodities, energy products, fertilizers, and industrial materials across global supply chains.",
};

export default function ProductsHubPage() {
  return (
    <>
      <section className="bg-background pt-[72px] pb-20">
        <Container className="pt-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Products</p>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
              Four Sectors.
              <br />
              <span className="text-gold">Hundreds of Products.</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              We trade physical commodities across Agriculture, Energy, Fertilizers, and Industrial Materials —
              with origin flexibility, specification compliance, and complete trade documentation.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-pad bg-surface">
        <Container>
          <div className="space-y-16">
            {sectors.map((sector) => (
              <div key={sector.slug}>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                  <div>
                    <span className="text-3xl mb-2 block">{sector.icon}</span>
                    <h2 className="text-2xl font-bold text-text-primary">{sector.name}</h2>
                    <p className="text-text-secondary mt-2 max-w-xl text-sm leading-relaxed">{sector.summary}</p>
                  </div>
                  <Link
                    href={`/products/${sector.slug}`}
                    className="btn-outline-gold text-sm shrink-0"
                  >
                    View All {sector.name}
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
                  {sector.families.map((family) => (
                    <Link
                      key={family.slug}
                      href={`/products/${sector.slug}/${family.slug}`}
                      className="group surface-card p-4 hover:border-gold/40 hover:bg-gold-muted transition-all duration-200 rounded-lg"
                    >
                      <h3 className="text-sm font-bold text-text-primary group-hover:text-gold transition-colors duration-200 mb-2">
                        {family.name}
                      </h3>
                      <p className="text-xs text-text-muted leading-relaxed line-clamp-2">
                        {family.products.length} product{family.products.length !== 1 ? "s" : ""}
                      </p>
                    </Link>
                  ))}
                </div>
                <div className="mt-3 border-b border-border" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad bg-background">
        <Container>
          <SectionHeader
            eyebrow="How to Enquire"
            title={<>Ready to <span className="text-gold">Start a Conversation?</span></>}
            subtitle="Submit a quote request with your commodity, volume, destination, and timeline. Our trade desk responds within 24 hours."
            centered
            className="mb-10"
          />
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact#quote" className="btn-gold">Request a Quote</Link>
            <Link href="/contact#sourcing" className="btn-outline-gold">Submit Sourcing Request</Link>
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
