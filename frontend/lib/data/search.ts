import { capabilities } from "@/lib/data/capabilities";
import { industries } from "@/lib/data/industries";
import { caseStudies, insights } from "@/lib/data/insights";
import { destinationMarkets, originMarkets, tradeCorridors } from "@/lib/data/markets";
import { sectors } from "@/lib/data/products";
import { legalDocuments, trustDocuments } from "@/lib/data/siteContent";

export type SearchScope = "all" | "products" | "insights" | "markets" | "trust" | "capabilities";

export interface SearchResult {
  title: string;
  summary: string;
  href: string;
  type: string;
  category: SearchScope | "industries";
  keywords: string[];
}

const productResults: SearchResult[] = sectors.flatMap((sector) => {
  const sectorRecord: SearchResult = {
    title: sector.name,
    summary: sector.summary,
    href: `/products/${sector.slug}`,
    type: "Sector",
    category: "products",
    keywords: [sector.name, sector.slug, sector.summary],
  };

  const familyRecords = sector.families.map((family) => ({
    title: family.name,
    summary: family.summary,
    href: `/products/${sector.slug}/${family.slug}`,
    type: "Product Family",
    category: "products" as const,
    keywords: [sector.name, family.name, family.slug, family.summary],
  }));

  const productRecords = sector.families.flatMap((family) =>
    family.products.map((product) => ({
      title: product.name,
      summary: product.summary,
      href: `/products/${sector.slug}/${family.slug}/${product.slug}`,
      type: "Product",
      category: "products" as const,
      keywords: [
        sector.name,
        family.name,
        product.name,
        product.slug,
        product.summary,
        ...product.origins,
        ...product.applications,
      ],
    })),
  );

  return [sectorRecord, ...familyRecords, ...productRecords];
});

const capabilityResults: SearchResult[] = capabilities.map((capability) => ({
  title: capability.name,
  summary: capability.summary,
  href: `/capabilities/${capability.slug}`,
  type: "Capability",
  category: "capabilities",
  keywords: [capability.name, capability.slug, capability.summary, capability.description],
}));

const industryResults: SearchResult[] = industries.map((industry) => ({
  title: industry.name,
  summary: industry.summary,
  href: `/industries/${industry.slug}`,
  type: "Industry",
  category: "industries",
  keywords: [industry.name, industry.slug, industry.summary, industry.description, ...industry.commodities],
}));

const insightResults: SearchResult[] = [
  ...insights.map((article) => ({
    title: article.title,
    summary: article.summary,
    href: `/insights/${article.slug}`,
    type: "Insight",
    category: "insights" as const,
    keywords: [article.title, article.summary, article.category, ...article.topics],
  })),
  ...caseStudies.map((study) => ({
    title: study.title,
    summary: study.summary,
    href: `/case-studies/${study.slug}`,
    type: "Case Study",
    category: "insights" as const,
    keywords: [study.title, study.summary, study.sector, study.challenge, study.solution, study.outcome],
  })),
];

const marketResults: SearchResult[] = [
  ...originMarkets.map((market) => ({
    title: market.name,
    summary: market.summary,
    href: `/markets/origins/${market.slug}`,
    type: "Origin Market",
    category: "markets" as const,
    keywords: [market.name, market.region, market.summary, ...market.commodities, ...market.ports],
  })),
  ...destinationMarkets.map((market) => ({
    title: market.name,
    summary: market.summary,
    href: `/markets/destinations/${market.slug}`,
    type: "Destination Market",
    category: "markets" as const,
    keywords: [market.name, market.region, market.summary, ...market.commodities, ...market.ports],
  })),
  ...tradeCorridors.map((corridor) => ({
    title: corridor.name,
    summary: corridor.summary,
    href: `/markets/corridors/${corridor.slug}`,
    type: "Trade Corridor",
    category: "markets" as const,
    keywords: [corridor.name, corridor.origin, corridor.destination, corridor.summary, ...corridor.commodities],
  })),
];

const trustResults: SearchResult[] = [
  ...trustDocuments.map((document) => ({
    title: document.title,
    summary: document.summary,
    href: `/trust-center/${document.slug}`,
    type: "Trust Document",
    category: "trust" as const,
    keywords: [
      document.title,
      document.documentType,
      document.summary,
      ...document.sections.flatMap((section) => [section.heading, ...section.paragraphs]),
    ],
  })),
  ...legalDocuments.map((document) => ({
    title: document.title,
    summary: document.summary,
    href: `/${document.route}`,
    type: "Legal Document",
    category: "trust" as const,
    keywords: [document.title, document.summary, ...document.sections.flatMap((section) => [section.heading, ...section.paragraphs])],
  })),
];

const searchIndex: SearchResult[] = [
  ...productResults,
  ...capabilityResults,
  ...industryResults,
  ...insightResults,
  ...marketResults,
  ...trustResults,
];

export function searchSite(query: string, scope: SearchScope = "all") {
  const normalizedQuery = query.trim().toLowerCase();
  const scopedResults =
    scope === "all" ? searchIndex : searchIndex.filter((result) => result.category === scope);

  if (!normalizedQuery) {
    return scopedResults.slice(0, 18);
  }

  return scopedResults
    .filter((result) => {
      const haystack = [result.title, result.summary, ...result.keywords].join(" ").toLowerCase();
      return haystack.includes(normalizedQuery);
    })
    .slice(0, 24);
}

export function getFeaturedSearchResults() {
  return searchIndex.slice(0, 10);
}