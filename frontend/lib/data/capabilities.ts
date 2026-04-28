import type { Capability } from "@/lib/types";

export const capabilities: Capability[] = [
  {
    slug: "sourcing-origination",
    name: "Sourcing & Origination",
    summary: "Direct supplier relationships across 30+ origin countries with year-round supply continuity.",
    icon: "🌍",
    description:
      "Our origination network spans major agricultural, energy, and industrial producing regions. We maintain direct relationships with producers, exporters, and port facilities — enabling us to source competitively, reliably, and at specification.",
    features: [
      {
        title: "Producer Relationships",
        body: "Long-term agreements with certified producers across 30+ countries reduce supply risk and ensure origin diversity.",
      },
      {
        title: "Spot and Forward Sourcing",
        body: "We purchase on both spot and forward basis, enabling price and supply flexibility for buyers on different procurement cycles.",
      },
      {
        title: "Origin Diversification",
        body: "No over-reliance on single origins. We maintain active alternatives for every major commodity family we trade.",
      },
      {
        title: "Supplier Due Diligence",
        body: "All supply partners are screened against sanctions lists, compliance frameworks, and quality credentials before onboarding.",
      },
    ],
  },
  {
    slug: "trade-finance",
    name: "Trade Finance",
    summary: "Letter of credit handling, payment term flexibility, and financing support for large-volume trades.",
    icon: "💼",
    description:
      "We work with buyers across different credit profiles and market environments, structuring payment terms that reflect commercial reality without compromising counterparty risk management.",
    features: [
      {
        title: "LC Handling",
        body: "Full experience with irrevocable and confirmed letters of credit under UCP 600 terms, with compliant document preparation.",
      },
      {
        title: "Payment Flexibility",
        body: "TT advance, DP, DA, and LC structures available depending on buyer profile, trade size, and country risk.",
      },
      {
        title: "Pre-Finance Options",
        body: "We can structure pre-finance arrangements for qualified strategic buyers with strong volume commitments.",
      },
      {
        title: "Banking Relationships",
        body: "Active relationships with commodity trade finance desks at leading international banks across Europe, Asia, and the Middle East.",
      },
    ],
  },
  {
    slug: "logistics-supply-chain",
    name: "Logistics & Supply Chain",
    summary: "End-to-end shipment coordination from origin loading to last-mile delivery in 40+ countries.",
    icon: "🚢",
    description:
      "Logistics is where trade execution either succeeds or fails. Our team handles vessel chartering, port agency, freight forwarding, customs coordination, and in-country delivery so buyers don't need to manage complex multi-leg supply chains.",
    features: [
      {
        title: "Vessel Chartering",
        body: "Access to a network of spot and period charter vessels across handysize, supramax, panamax, and cape-size classes.",
      },
      {
        title: "Freight Forwarding",
        body: "Container, breakbulk, and bulk freight managed through our global freight network with real-time visibility.",
      },
      {
        title: "Port Access",
        body: "Active port relationships across 40+ countries — including key agricultural, energy, and industrial terminals.",
      },
      {
        title: "Last-Mile Delivery",
        body: "Road, rail, and barge logistics to inland destinations available in major agricultural and industrial corridors.",
      },
    ],
  },
  {
    slug: "quality-assurance",
    name: "Quality Assurance",
    summary: "Independent inspection, specification compliance, and claims prevention from loading to delivery.",
    icon: "✅",
    description:
      "We do not accept quality as assumed. Every shipment is managed against published specifications, with independent inspection at load port and, where required, at the destination. Our documentation pack is built to support buyer QA teams and regulatory review.",
    features: [
      {
        title: "Load-Port Inspection",
        body: "SGS, Bureau Veritas, Cotecna, or equivalent independent inspection at origin for every commercial cargo.",
      },
      {
        title: "Specification Compliance",
        body: "Shipments are measured against buyer-agreed specifications — not generic industry averages.",
      },
      {
        title: "Certificate Package",
        body: "Standard pack includes CoA, weight certificate, phytosanitary cert (if applicable), certificate of origin, and bill of lading.",
      },
      {
        title: "Claims Handling",
        body: "Structured claims process with documentation trail. We treat quality disputes as operational issues, not disputes to be deferred.",
      },
    ],
  },
  {
    slug: "risk-management",
    name: "Risk Management",
    summary: "Price risk management, contract discipline, and supply continuity planning for volatile markets.",
    icon: "📊",
    description:
      "Commodity markets can move sharply. Our risk management approach protects buyers and the company through disciplined contract structures, hedging awareness, and supply contingency planning.",
    features: [
      {
        title: "Contract Discipline",
        body: "All trades are governed by standard commodity contracts (GAFTA, FOSFA, ISDA-aligned terms) with clear force majeure and dispute resolution clauses.",
      },
      {
        title: "Price Risk Options",
        body: "Fixed-price, index-linked, and provisional pricing structures available depending on commodity and buyer requirement.",
      },
      {
        title: "Supply Contingency",
        body: "For strategic buyers, we maintain contingency origin plans to minimise disruption from crop failures, sanctions events, or port congestion.",
      },
      {
        title: "Market Intelligence",
        body: "Buyers receive timely market context to support procurement timing decisions on volatile commodities.",
      },
    ],
  },
  {
    slug: "market-intelligence",
    name: "Market Intelligence",
    summary: "Sector analysis, price context, and trade intelligence shared with buyers and partners.",
    icon: "📡",
    description:
      "We trade in markets every day. That gives us price transparency, supply intelligence, and trade-route understanding that we share with clients as a commercial value-add — not as a separate consulting service.",
    features: [
      {
        title: "Market Updates",
        body: "Regular reports on commodity price trends, crop forecasts, freight rates, and regulatory changes across our traded sectors.",
      },
      {
        title: "Origin Intelligence",
        body: "Seasonal crop outlooks, export pace data, and regional production risk updated through our origination network.",
      },
      {
        title: "Trade-Route Analysis",
        body: "Freight availability, congestion alerts, and corridor-specific logistics intelligence for buyers managing supply timing.",
      },
      {
        title: "Custom Research",
        body: "For strategic partners and institutional buyers, we can prepare tailored commodity intelligence briefs on request.",
      },
    ],
  },
];

export function getCapabilityBySlug(slug: string): Capability | undefined {
  return capabilities.find((c) => c.slug === slug);
}
