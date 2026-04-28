import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { sectors } from "@/lib/data/products";

const sectorHighlights: Record<string, string[]> = {
  agriculture: ["Wheat & Grains", "Oilseeds", "Pulses", "Sugar", "Feed Ingredients"],
  energy: ["Diesel & Gas Oil", "Steam Coal", "Wood Pellets", "Petroleum Coke"],
  fertilizers: ["Urea", "DAP & MAP", "Potash", "NPK Blends"],
  "industrial-materials": ["Iron Ore", "Aluminium Ingots", "Barite", "Sulfur"],
};

export default function SectorGrid() {
  return (
    <section className="section-pad bg-background">
      <Container>
        <SectionHeader
          eyebrow="What We Trade"
          title={<>Four Sectors. <span className="text-gold">One Partner.</span></>}
          subtitle="From field to factory floor — we trade commodities that feed, power, and build the global economy."
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {sectors.map((sector) => (
            <Link
              key={sector.slug}
              href={`/products/${sector.slug}`}
              className="group surface-card p-6 hover:border-gold/40 hover:bg-gold-muted transition-all duration-200 rounded-lg"
            >
              <div className="text-3xl mb-4">{sector.icon}</div>
              <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-gold transition-colors duration-200">
                {sector.name}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-5">
                {sector.summary.substring(0, 90)}...
              </p>
              <ul className="space-y-1 mb-6">
                {(sectorHighlights[sector.slug] || []).map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-text-muted">
                    <span className="w-1 h-1 rounded-full bg-gold shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-gold uppercase tracking-wider">
                Explore
                <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
