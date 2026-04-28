import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import CTABand from "@/components/sections/CTABand";
import Button from "@/components/ui/Button";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const name = slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  return { title: `${name} — Origin Market`, description: `Commodity sourcing from ${name}.` };
}

export default async function OriginMarketPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const name = slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  return (
    <PageLayout>
      <section className="bg-[var(--color-ink)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Markets", href: "/markets" }, { label: "Origins" }, { label: name }]} dark />
          <div className="mt-8 max-w-3xl">
            <span className="text-[var(--color-gold)] text-xs font-bold uppercase tracking-widest mb-4 block">Origin Market</span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">{name}</h1>
            <p className="text-xl text-white/60 leading-relaxed mb-8">
              Our operations in {name} give us direct access to key commodity producers,
              inspection partners, and logistics infrastructure for reliable supply.
            </p>
            <Button href="/partner-with-us/buyers" variant="gold">
              Source From {name}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-bold text-[var(--color-ink)] mb-6">Our {name} Operations</h2>
          <p className="text-[#6b7280] leading-relaxed mb-8">
            We have established supplier relationships and logistics infrastructure across
            {name} — enabling competitive sourcing, pre-shipment inspection, and
            documentation support on every transaction from this origin.
          </p>
          <Button href="/markets" variant="outline-white">Back to Markets <ArrowRight className="w-4 h-4" /></Button>
        </div>
      </section>
      <CTABand />
    </PageLayout>
  );
}
