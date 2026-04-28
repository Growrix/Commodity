import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, UtensilsCrossed, Cog, Zap, Leaf, Building2, Ship } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import CTABand from "@/components/sections/CTABand";
import SectionHeader from "@/components/sections/SectionHeader";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Industries Served",
  description: "How GlobalTrade Commodities serves Food & Beverage, Manufacturing, Energy, and Agriculture sectors.",
};

const industries = [
  {
    icon: UtensilsCrossed,
    slug: "food-beverage",
    title: "Food & Beverage",
    description:
      "Supplying grains, sugar, oilseeds, and food-grade ingredients to processors, millers, and food manufacturers globally.",
    commodities: ["Wheat", "Sugar", "Soybeans", "Rice", "Corn"],
  },
  {
    icon: Cog,
    slug: "manufacturing",
    title: "Manufacturing",
    description:
      "Industrial inputs including sulfur, chemicals, metals, and minerals for manufacturers across Asia and Europe.",
    commodities: ["Sulfur", "Caustic Soda", "Iron Ore", "Alumina"],
  },
  {
    icon: Zap,
    slug: "energy-power",
    title: "Energy & Power",
    description:
      "Refined petroleum, LPG, and energy feedstocks for power generators, energy distributors, and oil marketers.",
    commodities: ["Diesel", "LPG", "Jet Fuel", "Fuel Oil"],
  },
  {
    icon: Leaf,
    slug: "agriculture",
    title: "Agriculture",
    description:
      "Fertilizers and agricultural inputs for cooperatives, distributors, and farming operations across emerging markets.",
    commodities: ["Urea", "DAP", "MOP", "Ammonia"],
  },
  {
    icon: Building2,
    slug: "construction",
    title: "Construction & Infrastructure",
    description:
      "Steel, minerals, and construction-grade commodities for infrastructure developers and building materials suppliers.",
    commodities: ["Steel Billets", "Iron Ore", "Cement Clinker", "Copper"],
  },
  {
    icon: Ship,
    slug: "logistics-distribution",
    title: "Logistics & Distribution",
    description:
      "Supplying bunker fuels, lubricants, and maritime products to shipping operators and logistics providers.",
    commodities: ["Bunker Fuel", "Marine Diesel", "Lubricants"],
  },
];

export default function IndustriesPage() {
  return (
    <PageLayout>
      <section className="bg-[#0f2040] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Industries" }]} dark />
          <div className="mt-8 max-w-3xl">
            <span className="text-[#c8a84b] text-xs font-bold uppercase tracking-widest mb-4 block">
              Sectors We Serve
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Commodity Solutions Tailored by Industry
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              We understand that commodity requirements vary by industry. Our teams
              specialise in the specific procurement, logistics, and compliance needs
              of each sector we serve.
            </p>
            <Button href="/contact" variant="secondary">
              Discuss Your Sector
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Industry Coverage"
            title="Sectors We Serve"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map(({ icon: Icon, slug, title, description, commodities }) => (
              <Link
                key={slug}
                href={`/industries/${slug}`}
                className="block bg-[#f8f9fa] border border-[#e5e7eb] rounded-xl p-6 hover:shadow-md transition-all hover:-translate-y-0.5 group"
              >
                <div className="w-12 h-12 bg-[#0f2040] rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#c8a84b]" />
                </div>
                <h3 className="font-bold text-[#0f2040] text-lg mb-2 group-hover:text-[#c8a84b] transition-colors">
                  {title}
                </h3>
                <p className="text-sm text-[#6b7280] leading-relaxed mb-4">{description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {commodities.map((c) => (
                    <span
                      key={c}
                      className="text-xs bg-white border border-[#e5e7eb] text-[#374151] px-2 py-0.5 rounded-full"
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-sm font-medium text-[#0f2040] group-hover:text-[#c8a84b] transition-colors">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
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
