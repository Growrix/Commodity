import type { Metadata } from "next";
import Link from "next/link";
import { Wheat, Fuel, FlaskConical, Factory, ArrowRight, Package } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import CTABand from "@/components/sections/CTABand";
import SectionHeader from "@/components/sections/SectionHeader";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse GlobalTrade's full commodity catalog across Agriculture, Energy, Fertilizers, and Industrial Materials.",
};

const sectors = [
  {
    icon: Wheat,
    slug: "agriculture",
    title: "Agriculture",
    description:
      "Grains, oilseeds, pulses, sugar, and soft commodities sourced from leading agricultural origins including Black Sea, South America, and Australia.",
    families: ["Grains & Cereals", "Oilseeds", "Pulses & Legumes", "Sugar & Sweeteners", "Soft Commodities"],
    color: "border-amber-300 bg-amber-50",
    iconColor: "text-amber-600 bg-amber-100",
  },
  {
    icon: Fuel,
    slug: "energy",
    title: "Energy",
    description:
      "Refined petroleum products, LPG, and energy feedstocks across key trade corridors from Middle East, West Africa, and FSU origins.",
    families: ["Refined Petroleum", "LPG & LNG", "Jet Fuel", "Fuel Oil & Bunkers"],
    color: "border-blue-300 bg-blue-50",
    iconColor: "text-blue-600 bg-blue-100",
  },
  {
    icon: FlaskConical,
    slug: "fertilizers",
    title: "Fertilizers",
    description:
      "Nitrogen, phosphate, and potassium fertilizers for agricultural supply chains. We source from top producers across FSU, Middle East, and North Africa.",
    families: ["Nitrogen Fertilizers", "Phosphate Fertilizers", "Potassium Fertilizers", "Compound NPK"],
    color: "border-green-300 bg-green-50",
    iconColor: "text-green-600 bg-green-100",
  },
  {
    icon: Factory,
    slug: "industrial-materials",
    title: "Industrial Materials",
    description:
      "Sulfur, metals, chemicals, and industrial inputs for manufacturing sectors across Asia, Europe, and the Americas.",
    families: ["Sulfur & Sulfuric Acid", "Iron & Steel", "Industrial Chemicals", "Minerals & Ores"],
    color: "border-gray-300 bg-gray-50",
    iconColor: "text-gray-600 bg-gray-100",
  },
];

export default function ProductsPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-[#0f2040] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Products" }]} dark />
          <div className="mt-8 max-w-3xl">
            <span className="text-[#c8a84b] text-xs font-bold uppercase tracking-widest mb-4 block">
              Product Catalog
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              A Full-Spectrum Commodity Catalog
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Four core sectors. Hundreds of product families. One trusted counterpart
              for sourcing, logistics, and documentation.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/partner-with-us/buyers" variant="secondary">
                Request a Quote
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/partner-with-us" variant="outline">
                Browse by Need
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How to Evaluate */}
      <section className="py-12 bg-[#f8f9fa] border-b border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 text-center">
            {["Grade & Specification", "Origin Country", "Packaging Format", "Application", "Logistics Mode"].map((label) => (
              <div key={label}>
                <div className="w-8 h-8 bg-[#0f2040] rounded mx-auto mb-2 flex items-center justify-center">
                  <Package className="w-4 h-4 text-[#c8a84b]" />
                </div>
                <span className="text-xs font-semibold text-[#374151]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Navigator */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Browse by Sector"
            title="Four Core Trading Sectors"
          />
          <div className="space-y-6">
            {sectors.map(({ icon: Icon, slug, title, description, families, color, iconColor }) => (
              <Link
                key={slug}
                href={`/products/${slug}`}
                className={`flex flex-col sm:flex-row gap-6 rounded-xl border-2 p-6 sm:p-8 ${color} hover:shadow-lg transition-all duration-200 group`}
              >
                <div className={`w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 ${iconColor}`}>
                  <Icon className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-[#0f2040] mb-2 group-hover:text-[#c8a84b] transition-colors">
                    {title}
                  </h2>
                  <p className="text-sm text-[#6b7280] mb-4 max-w-xl leading-relaxed">{description}</p>
                  <div className="flex flex-wrap gap-2">
                    {families.map((f) => (
                      <span
                        key={f}
                        className="text-xs bg-white text-[#374151] px-3 py-1 rounded-full border border-[#e5e7eb]"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center sm:items-start">
                  <div className="flex items-center gap-1 text-sm font-semibold text-[#0f2040] group-hover:text-[#c8a84b] transition-colors whitespace-nowrap mt-1">
                    Browse sector
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </PageLayout>
  );
}
