import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Wheat, Fuel, FlaskConical, Factory } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import CTABand from "@/components/sections/CTABand";
import SectionHeader from "@/components/sections/SectionHeader";
import Button from "@/components/ui/Button";

const sectorData: Record<
  string,
  {
    title: string;
    description: string;
    fullDescription: string;
    icon: React.ComponentType<{ className?: string }>;
    families: { slug: string; name: string; products: string[] }[];
    origins: string[];
    logistics: string[];
  }
> = {
  agriculture: {
    title: "Agriculture",
    icon: Wheat,
    description: "Grains, oilseeds, pulses, and soft commodities from leading origins.",
    fullDescription:
      "Our Agriculture division trades the full spectrum of soft commodities with deep origin relationships in the Black Sea, South America, Australia, and Southeast Asia. We combine physical trading expertise with logistics and quality infrastructure.",
    families: [
      { slug: "wheat", name: "Wheat", products: ["Milling Wheat", "Feed Wheat", "Durum Wheat"] },
      { slug: "corn", name: "Corn & Maize", products: ["Yellow Corn", "White Corn", "High-Moisture Corn"] },
      { slug: "soybeans", name: "Soybeans & Oilseeds", products: ["Soybeans", "Soybean Meal", "Sunflower Seeds"] },
      { slug: "rice", name: "Rice", products: ["Long-Grain White Rice", "Parboiled Rice", "Broken Rice"] },
    ],
    origins: ["Ukraine", "Russia", "Argentina", "Brazil", "Australia", "USA"],
    logistics: ["Bulk vessel", "Container", "Breakbulk"],
  },
  energy: {
    title: "Energy",
    icon: Fuel,
    description: "Refined petroleum products, LPG, and energy feedstocks.",
    fullDescription:
      "Our Energy trading desk operates across refined products and LPG, serving buyers in emerging markets with reliable supply from Middle East, West Africa, and FSU producers.",
    families: [
      { slug: "diesel", name: "Diesel & Gasoil", products: ["EN590 10ppm", "EN590 50ppm", "ULSD"] },
      { slug: "gasoline", name: "Gasoline", products: ["RON 92", "RON 95", "RON 98"] },
      { slug: "lpg", name: "LPG", products: ["Propane", "Butane", "LPG Mix"] },
      { slug: "jet-fuel", name: "Jet Fuel", products: ["Jet A-1", "JP-8"] },
    ],
    origins: ["Saudi Arabia", "UAE", "Nigeria", "Kazakhstan", "Russia"],
    logistics: ["Product tanker", "Coastal vessel", "Pipeline access"],
  },
  fertilizers: {
    title: "Fertilizers",
    icon: FlaskConical,
    description: "Nitrogen, phosphate, and potassium products for agricultural supply chains.",
    fullDescription:
      "We supply fertilizer products to agricultural importers, distributors, and cooperatives across Asia, Africa, and South America — with reliable logistics from major production hubs.",
    families: [
      { slug: "urea", name: "Urea", products: ["Prilled Urea", "Granular Urea", "UAN Solution"] },
      { slug: "dap-map", name: "DAP & MAP", products: ["DAP 18-46-0", "MAP 12-52-0"] },
      { slug: "mop", name: "MOP & SOP", products: ["MOP Standard", "MOP Granular", "SOP"] },
      { slug: "npk", name: "Compound NPK", products: ["NPK 15-15-15", "NPK 20-10-10", "Custom Blends"] },
    ],
    origins: ["Russia", "Middle East", "Morocco", "China", "Belarus"],
    logistics: ["Bulk vessel", "Bagged cargo", "Container"],
  },
  "industrial-materials": {
    title: "Industrial Materials",
    icon: Factory,
    description: "Sulfur, metals, chemicals, and industrial inputs.",
    fullDescription:
      "Our Industrial Materials division serves manufacturers and processors across Asia, Europe, and the Americas with consistent supply of industrial inputs.",
    families: [
      { slug: "sulfur", name: "Sulfur", products: ["Granular Sulfur", "Liquid Sulfur", "Sulfuric Acid"] },
      { slug: "iron-ore", name: "Iron Ore & Steel", products: ["Iron Ore Fines", "Iron Ore Pellets", "Steel Billets"] },
      { slug: "chemicals", name: "Industrial Chemicals", products: ["Caustic Soda", "Soda Ash", "Chlorine"] },
      { slug: "minerals", name: "Minerals & Ores", products: ["Bauxite", "Alumina", "Copper Concentrate"] },
    ],
    origins: ["Middle East", "Australia", "South Africa", "Peru", "Chile"],
    logistics: ["Bulk vessel", "Breakbulk", "Container", "ISO tank"],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sector: string }>;
}): Promise<Metadata> {
  const { sector } = await params;
  const data = sectorData[sector];
  if (!data) return { title: "Not Found" };
  return {
    title: `${data.title} Commodities`,
    description: data.description,
  };
}

export default async function SectorPage({
  params,
}: {
  params: Promise<{ sector: string }>;
}) {
  const { sector } = await params;
  const data = sectorData[sector];
  if (!data) notFound();

  const Icon = data.icon;

  return (
    <PageLayout>
      <section className="bg-[var(--color-ink)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: "Products", href: "/products" }, { label: data.title }]}
            dark
          />
          <div className="mt-8 max-w-3xl">
            <Icon className="w-10 h-10 text-[var(--color-gold)] mb-4" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">{data.title}</h1>
            <p className="text-xl text-white/60 leading-relaxed mb-8">
              {data.fullDescription}
            </p>
            <Button href="/partner-with-us/buyers" variant="gold">
              Request a Quote
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Product Families" title={`${data.title} Families`} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.families.map(({ slug, name, products }) => (
              <Link
                key={slug}
                href={`/products/${sector}/${slug}`}
                className="block bg-[var(--color-surface)] border border-[#e5e7eb] rounded-xl p-6 hover:shadow-md transition-all hover:-translate-y-0.5 group"
              >
                <h3 className="font-bold text-[var(--color-ink)] text-lg mb-2 group-hover:text-[var(--color-gold)] transition-colors">
                  {name}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {products.map((p) => (
                    <span
                      key={p}
                      className="text-xs bg-white border border-[#e5e7eb] text-[#374151] px-2 py-0.5 rounded-full"
                    >
                      {p}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-sm font-medium text-[var(--color-ink)] group-hover:text-[var(--color-gold)]">
                  View family
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-[var(--color-ink)] mb-3">Key Origins</h3>
              <div className="flex flex-wrap gap-2">
                {data.origins.map((o) => (
                  <span
                    key={o}
                    className="text-sm bg-white border border-[#e5e7eb] text-[#374151] px-3 py-1 rounded-full"
                  >
                    {o}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-[var(--color-ink)] mb-3">Logistics Modes</h3>
              <div className="flex flex-wrap gap-2">
                {data.logistics.map((l) => (
                  <span
                    key={l}
                    className="text-sm bg-white border border-[#e5e7eb] text-[#374151] px-3 py-1 rounded-full"
                  >
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </PageLayout>
  );
}
