import type { Industry } from "@/lib/types";

export const industries: Industry[] = [
  {
    slug: "food-and-feed",
    name: "Food & Feed",
    summary: "Supporting food manufacturers and compound feed producers with reliable ingredient supply.",
    description:
      "From cereal grains to protein meals, we supply food manufacturers, feed compounders, and agri-processors with traceable, specification-compliant commodities backed by full documentation.",
    commodities: ["Wheat", "Corn", "Soybeans", "Soybean Meal", "Sugar", "Pulses", "Sunflower Seeds"],
    capabilities: ["Phytosanitary documentation", "GMO segregation", "Lot traceability", "Packaged or bulk delivery"],
    ctaLabel: "Request a Quote",
  },
  {
    slug: "energy-and-utilities",
    name: "Energy & Utilities",
    summary: "Supplying power generators and utilities with thermal coal, petcoke, biomass, and refined fuels.",
    description:
      "We serve power utilities, industrial energy users, and bioenergy operators with solid fuels, refined petroleum products, and bioenergy feedstocks — with logistics managed from origin through delivery.",
    commodities: ["Steam Coal", "Petroleum Coke", "Wood Pellets", "Diesel", "Ethanol"],
    capabilities: ["Vessel chartering", "Port access across 40+ countries", "Quality inspection at loading", "Emissions compliance documentation"],
    ctaLabel: "Discuss Supply Requirements",
  },
  {
    slug: "agriculture-inputs",
    name: "Agriculture Inputs",
    summary: "Fertilizer and agrochemical distributors rely on us for seasonal supply of nitrogen, phosphates, and potash.",
    description:
      "We work with agri-input distributors, farm co-operatives, and government procurement bodies to supply fertilizers with accurate timing, correct specification, and compliant logistics.",
    commodities: ["Urea", "DAP", "MAP", "MOP", "Ammonium Nitrate", "NPK Blends", "Sulfur"],
    capabilities: ["Port-to-farm logistics", "Pre-season booking", "Government tender supply", "Crop-specific blending"],
    ctaLabel: "Discuss Seasonal Supply",
  },
  {
    slug: "manufacturing-industrial",
    name: "Manufacturing & Industrial",
    summary: "Industrial manufacturers and processors sourcing metals, minerals, and chemical inputs.",
    description:
      "Steel mills, cement plants, chemical processors, and industrial manufacturers trust us to supply critical raw materials with consistent quality, origin documentation, and delivery reliability.",
    commodities: ["Iron Ore", "Aluminium Ingots", "Barite", "Sulfur", "Petroleum Coke"],
    capabilities: ["Technical specification compliance", "Long-term offtake contracts", "Origin flexibility", "Quality inspection at loading and destination"],
    ctaLabel: "Start a Sourcing Discussion",
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
