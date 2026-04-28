import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import CTABand from "@/components/sections/CTABand";
import Button from "@/components/ui/Button";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const name = slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  return { title: `${name} — Destination Market`, description: `Commodity delivery and market coverage in ${name}.` };
}

export default async function DestinationMarketPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const name = slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  return (
    <PageLayout>
      <section className="bg-[var(--color-ink)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Markets", href: "/markets" }, { label: "Destinations" }, { label: name }]} dark />
          <div className="mt-8 max-w-3xl">
            <span className="text-[var(--color-gold)] text-xs font-bold uppercase tracking-widest mb-4 block">Destination Market</span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">{name}</h1>
            <p className="text-xl text-white/60 leading-relaxed mb-8">
              We deliver commodities to buyers across {name} with full logistics,
              documentation, and compliance support.
            </p>
            <Button href="/contact" variant="gold">
              Contact Regional Team
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-bold text-[var(--color-ink)] mb-6">Serving {name}</h2>
          <p className="text-[#6b7280] leading-relaxed mb-8">
            Our {name} presence includes established import relationships, port
            coordination, and a regional team capable of handling complex delivery
            programs with short turnaround times.
          </p>
          <Button href="/markets" variant="outline-white">Back to Markets <ArrowRight className="w-4 h-4" /></Button>
        </div>
      </section>
      <CTABand />
    </PageLayout>
  );
}
