export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Sector {
  slug: string;
  name: string;
  summary: string;
  icon: string;
  families: CommodityFamily[];
}

export interface CommodityFamily {
  slug: string;
  name: string;
  sectorSlug: string;
  summary: string;
  products: Product[];
}

export interface Product {
  slug: string;
  name: string;
  familySlug: string;
  sectorSlug: string;
  summary: string;
  applications: string[];
  specifications: { label: string; value: string }[];
  origins: string[];
  incoterms: string[];
  moqGuidance: string;
  leadTime: string;
  qualityNotes: string;
  relatedSlugs: string[];
}

export interface Industry {
  slug: string;
  name: string;
  summary: string;
  description: string;
  commodities: string[];
  capabilities: string[];
  ctaLabel: string;
}

export interface Capability {
  slug: string;
  name: string;
  summary: string;
  description: string;
  features: { title: string; body: string }[];
  icon: string;
}

export interface OriginMarket {
  slug: string;
  name: string;
  region: string;
  summary: string;
  commodities: string[];
  ports: string[];
  seasonalNotes: string;
}

export interface DestinationMarket {
  slug: string;
  name: string;
  region: string;
  summary: string;
  commodities: string[];
  ports: string[];
  importNotes: string;
}

export interface TradeCorridor {
  slug: string;
  name: string;
  origin: string;
  destination: string;
  summary: string;
  commodities: string[];
  transitDays: string;
  documentation: string[];
}

export interface InsightArticle {
  slug: string;
  title: string;
  category: "market-update" | "commodity-intelligence" | "logistics" | "regulatory" | "case-study";
  summary: string;
  publishedAt: string;
  readTime: number;
  topics: string[];
  body?: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  summary: string;
  sector: string;
  challenge: string;
  solution: string;
  outcome: string;
  publishedAt: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface OfficeLocation {
  city: string;
  country: string;
  address: string;
  phone?: string;
  email?: string;
}

export interface TeamMember {
  name: string;
  title: string;
  bio: string;
}
