import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import CTABand from "@/components/sections/CTABand";
import Button from "@/components/ui/Button";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const name = slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  return { title: `${name} — Trade Corridor`, description: `Trade corridor analysis and logistics for ${name}.` };
}

export default async function TradeCorridorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const name = slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  return (
    <PageLayout>
      <section className="bg-[#0f2040] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Markets", href: "/markets" }, { label: "Corridors" }, { label: name }]} dark />
          <div className="mt-8 max-w-3xl">
            <span className="text-[#c8a84b] text-xs font-bold uppercase tracking-widest mb-4 block">Trade Corridor</span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">{name} Corridor</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              A high-volume commodity trade route with established logistics, verified
              port access, and documented compliance requirements.
            </p>
            <Button href="/partner-with-us/buyers" variant="secondary">
              Source via this Corridor
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-bold text-[#0f2040] mb-6">Corridor Overview</h2>
          <p className="text-[#6b7280] leading-relaxed mb-8">
            We have executed commodity transactions across this corridor with multiple
            buyers and suppliers — managing freight booking, port coordination, customs
            clearance, and document verification on every shipment.
          </p>
          <Button href="/markets" variant="outline">Back to Markets <ArrowRight className="w-4 h-4" /></Button>
        </div>
      </section>
      <CTABand />
    </PageLayout>
  );
}
