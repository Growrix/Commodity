export interface NavigationItem {
  label: string;
  href: string;
}

interface NavigationGroup {
  heading: string;
  href: string;
  items: NavigationItem[];
}

interface NavigationLink {
  label: string;
  href: string;
  mega?: boolean;
  items?: NavigationItem[];
  groups?: NavigationGroup[];
}

export const navLinks: NavigationLink[] = [
  {
    label: "Products",
    href: "/products",
    mega: true,
    groups: [
      {
        heading: "Agriculture",
        href: "/products/agriculture",
        items: [
          { label: "Grains", href: "/products/agriculture/grains" },
          { label: "Oilseeds", href: "/products/agriculture/oilseeds" },
          { label: "Pulses", href: "/products/agriculture/pulses" },
          { label: "Sugar", href: "/products/agriculture/sugar" },
          { label: "Feed Ingredients", href: "/products/agriculture/feed-ingredients" },
        ],
      },
      {
        heading: "Energy",
        href: "/products/energy",
        items: [
          { label: "Refined Products", href: "/products/energy/refined-products" },
          { label: "Solid Fuels", href: "/products/energy/solid-fuels" },
          { label: "Bioenergy Feedstocks", href: "/products/energy/bioenergy" },
        ],
      },
      {
        heading: "Fertilizers",
        href: "/products/fertilizers",
        items: [
          { label: "Nitrogen", href: "/products/fertilizers/nitrogen" },
          { label: "Phosphates", href: "/products/fertilizers/phosphates" },
          { label: "Potash", href: "/products/fertilizers/potash" },
          { label: "Specialty Blends", href: "/products/fertilizers/specialty-blends" },
        ],
      },
      {
        heading: "Industrial Materials",
        href: "/products/industrial-materials",
        items: [
          { label: "Metals & Alloys", href: "/products/industrial-materials/metals-alloys" },
          { label: "Minerals", href: "/products/industrial-materials/minerals" },
          { label: "Chemical Inputs", href: "/products/industrial-materials/chemical-inputs" },
        ],
      },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    mega: false,
    items: [
      { label: "Food & Feed", href: "/industries/food-and-feed" },
      { label: "Energy & Utilities", href: "/industries/energy-and-utilities" },
      { label: "Agriculture Inputs", href: "/industries/agriculture-inputs" },
      { label: "Manufacturing & Industrial", href: "/industries/manufacturing-industrial" },
    ],
  },
  {
    label: "Capabilities",
    href: "/capabilities",
    mega: false,
    items: [
      { label: "Sourcing & Origination", href: "/capabilities/sourcing-origination" },
      { label: "Trade Finance", href: "/capabilities/trade-finance" },
      { label: "Logistics & Supply Chain", href: "/capabilities/logistics-supply-chain" },
      { label: "Quality Assurance", href: "/capabilities/quality-assurance" },
      { label: "Risk Management", href: "/capabilities/risk-management" },
      { label: "Market Intelligence", href: "/capabilities/market-intelligence" },
    ],
  },
  {
    label: "Markets",
    href: "/markets",
    mega: false,
    items: [
      { label: "Origin Markets", href: "/markets" },
      { label: "Destination Markets", href: "/markets" },
      { label: "Trade Corridors", href: "/markets" },
    ],
  },
  {
    label: "Insights",
    href: "/insights",
    mega: false,
    items: [
      { label: "Market Updates", href: "/insights" },
      { label: "Commodity Intelligence", href: "/insights" },
      { label: "Case Studies", href: "/insights" },
      { label: "Resource Library", href: "/insights" },
    ],
  },
  {
    label: "About",
    href: "/about",
    mega: false,
    items: [
      { label: "Company Overview", href: "/about" },
      { label: "Global Network", href: "/about#network" },
      { label: "Trust Center", href: "/trust-center" },
      { label: "Careers", href: "/careers" },
    ],
  },
];

export const footerLinks: Record<"company" | "products" | "services" | "legal", NavigationItem[]> = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Leadership", href: "/about#leadership" },
    { label: "Global Network", href: "/about#network" },
    { label: "Compliance & Ethics", href: "/about#compliance" },
    { label: "Sustainability", href: "/about#sustainability" },
    { label: "Careers", href: "/careers" },
  ],
  products: [
    { label: "Agriculture", href: "/products/agriculture" },
    { label: "Energy", href: "/products/energy" },
    { label: "Fertilizers", href: "/products/fertilizers" },
    { label: "Industrial Materials", href: "/products/industrial-materials" },
    { label: "All Products", href: "/products" },
  ],
  services: [
    { label: "Sourcing & Origination", href: "/capabilities/sourcing-origination" },
    { label: "Trade Finance", href: "/capabilities/trade-finance" },
    { label: "Logistics", href: "/capabilities/logistics-supply-chain" },
    { label: "Quality Assurance", href: "/capabilities/quality-assurance" },
    { label: "Market Intelligence", href: "/capabilities/market-intelligence" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Cookie Policy", href: "/cookie-policy" },
    { label: "Trust Center", href: "/trust-center" },
  ],
};
