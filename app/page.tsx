import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Wheat,
  Fuel,
  FlaskConical,
  Factory,
  Globe,
  Shield,
  BarChart3,
  Truck,
  CheckCircle,
} from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import TrustStrip from "@/components/sections/TrustStrip";
import CTABand from "@/components/sections/CTABand";
import StatStrip from "@/components/sections/StatStrip";
import SectionHeader from "@/components/sections/SectionHeader";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "GlobalTrade Commodities — Trusted International Commodity Trading",
  description:
    "GlobalTrade Commodities is a trusted B2B commodity trading company specialising in Agriculture, Energy, Fertilizers, and Industrial Materials across 60+ countries.",
};

const heroStats = [
  { value: "60+", label: "Countries Served" },
  { value: "20+", label: "Years Trading" },
  { value: "500+", label: "Products Handled" },
  { value: "$2B+", label: "Annual Volume" },
];

const sectors = [
  {
    icon: Wheat,
    title: "Agriculture",
    description: "Grains, oilseeds, pulses, sugar, and soft commodities from leading origin markets.",
    products: ["Wheat", "Corn", "Soybeans", "Rice"],
    href: "/products/agriculture",
    color: "bg-amber-50 border-amber-200",
    iconColor: "text-amber-600",
  },
  {
    icon: Fuel,
    title: "Energy",
    description: "Refined petroleum products, LPG, and energy feedstocks across key corridors.",
    products: ["Diesel", "Gasoline", "LPG", "Jet Fuel"],
    href: "/products/energy",
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600",
  },
  {
    icon: FlaskConical,
    title: "Fertilizers",
    description: "Nitrogen, phosphate, and potassium fertilizers for agricultural supply chains.",
    products: ["Urea", "DAP", "MAP", "MOP"],
    href: "/products/fertilizers",
    color: "bg-green-50 border-green-200",
    iconColor: "text-green-600",
  },
  {
    icon: Factory,
    title: "Industrial Materials",
    description: "Sulfur, metals, chemicals, and industrial inputs for manufacturing sectors.",
    products: ["Sulfur", "Iron Ore", "Steel", "Chemicals"],
    href: "/products/industrial-materials",
    color: "bg-gray-50 border-gray-200",
    iconColor: "text-gray-600",
  },
];

const capabilities = [
  {
    icon: Globe,
    title: "Global Origination",
    description: "Established supplier relationships across 40+ source markets.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Third-party inspection at origin, transit, and destination.",
  },
  {
    icon: Truck,
    title: "Logistics Execution",
    description: "Full-service freight, documentation, and customs support.",
  },
  {
    icon: BarChart3,
    title: "Market Intelligence",
    description: "Pricing intelligence, corridor analysis, and trade flow reporting.",
  },
];

const corridors = [
  { from: "Black Sea", to: "Southeast Asia", commodity: "Wheat, Corn" },
  { from: "West Africa", to: "Europe", commodity: "Crude Oil, Cocoa" },
  { from: "Middle East", to: "South Asia", commodity: "Urea, LPG" },
  { from: "South America", to: "China", commodity: "Soybeans, Iron Ore" },
];

const insights = [
  {
    category: "Market Update",
    title: "Global Wheat Supply Outlook: Q2 2026",
    excerpt: "Analyzing Black Sea production estimates and their impact on trade flows into key importing regions.",
    date: "April 2026",
    href: "/insights/global-wheat-supply-q2-2026",
  },
  {
    category: "Trade Intelligence",
    title: "Urea Market Dynamics: India's Import Tender Season",
    excerpt: "India's fertilizer import cycle creates significant pricing opportunities across Middle East and East European origins.",
    date: "March 2026",
    href: "/insights/urea-india-import-cycle-2026",
  },
  {
    category: "Logistics",
    title: "Red Sea Disruptions: Alternative Routing Strategies",
    excerpt: "How global traders are adapting routing decisions and cost models in response to ongoing corridor pressures.",
    date: "March 2026",
    href: "/insights/red-sea-routing-strategies",
  },
];

export default function HomePage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-[#0f2040] text-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-[#c8a84b] text-xs font-bold uppercase tracking-widest mb-4">
              Trusted Global Commodity Trading
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Commodity Trading Built for{" "}
              <span className="text-[#c8a84b]">Commercial Scale</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              GlobalTrade Commodities connects buyers and suppliers across Agriculture,
              Energy, Fertilizers, and Industrial Materials — with structured logistics,
              compliant documentation, and verified quality at every step.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button href="/partner-with-us/buyers" variant="secondary" size="lg">
                Request a Quote
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button href="/products" variant="outline" size="lg">
                Explore Products
              </Button>
            </div>
          </div>
          <div className="mt-16 pt-12 border-t border-white/10">
            <StatStrip stats={heroStats} dark />
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustStrip />

      {/* Sector Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Product Sectors"
            title="Four Core Trading Sectors"
            description="We source and trade across four major commodity sectors, bringing execution depth and market intelligence to every transaction."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map(({ icon: Icon, title, description, products, href, color, iconColor }) => (
              <Link
                key={title}
                href={href}
                className={`block rounded-lg border p-6 ${color} hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 group`}
              >
                <Icon className={`w-8 h-8 ${iconColor} mb-4`} />
                <h3 className="font-bold text-[#0f2040] text-lg mb-2 group-hover:text-[#c8a84b] transition-colors">
                  {title}
                </h3>
                <p className="text-sm text-[#6b7280] mb-4 leading-relaxed">
                  {description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {products.map((p) => (
                    <span
                      key={p}
                      className="text-xs bg-white/70 text-[#374151] px-2 py-0.5 rounded-full border border-white"
                    >
                      {p}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-[#0f2040] group-hover:text-[#c8a84b] transition-colors">
                  Explore sector
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#c8a84b] text-xs font-bold uppercase tracking-widest mb-3 block">
                Why GlobalTrade
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2040] mb-6 leading-tight">
                Execution Depth, Not Just Market Access
              </h2>
              <p className="text-[#6b7280] mb-8 leading-relaxed">
                We operate as a structured trading counterpart — managing quality,
                logistics, documentation, and commercial risk so your procurement
                team can focus on outcomes, not process.
              </p>
              <div className="space-y-4">
                {[
                  "Supplier-verified quality at point of origin",
                  "Full trade finance and payment structure support",
                  "Customs documentation and compliance in 60+ markets",
                  "Dedicated account management for repeat programs",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8a84b] flex-shrink-0 mt-0.5" />
                    <span className="text-[#374151] text-sm">{point}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button href="/capabilities" variant="primary">
                  See Our Capabilities
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {capabilities.map(({ icon: Icon, title, description }) => (
                <Card key={title} className="hover:shadow-md transition-shadow">
                  <Icon className="w-6 h-6 text-[#0f2040] mb-3" />
                  <h3 className="font-semibold text-[#0f2040] text-sm mb-1">{title}</h3>
                  <p className="text-xs text-[#6b7280] leading-relaxed">{description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trade Corridor Snapshot */}
      <section className="py-20 bg-[#0f2040] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Global Reach"
            title="Key Trade Corridors"
            description="We operate across established trade routes connecting origin supply with destination demand."
            dark
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {corridors.map(({ from, to, commodity }) => (
              <div
                key={`${from}-${to}`}
                className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm font-semibold text-white">{from}</span>
                  <ArrowRight className="w-4 h-4 text-[#c8a84b] flex-shrink-0" />
                  <span className="text-sm font-semibold text-white">{to}</span>
                </div>
                <p className="text-xs text-[#c8a84b] font-medium">{commodity}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button href="/markets" variant="outline">
              Explore All Markets
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Insights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <SectionHeader
              eyebrow="Market Intelligence"
              title="Latest Insights"
              align="left"
              className="mb-0"
            />
            <Button href="/insights" variant="ghost" className="hidden sm:flex">
              View all insights
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {insights.map(({ category, title, excerpt, date, href }) => (
              <Link
                key={href}
                href={href}
                className="group block bg-[#f8f9fa] rounded-lg p-6 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 border border-transparent hover:border-[#e5e7eb]"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wide text-[#c8a84b]">
                    {category}
                  </span>
                  <span className="text-xs text-[#6b7280]">· {date}</span>
                </div>
                <h3 className="font-bold text-[#0f2040] text-base mb-2 leading-snug group-hover:text-[#c8a84b] transition-colors">
                  {title}
                </h3>
                <p className="text-sm text-[#6b7280] leading-relaxed">{excerpt}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-[#0f2040] group-hover:text-[#c8a84b] transition-colors">
                  Read more
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Button href="/insights" variant="outline">
              View all insights
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CTABand />
    </PageLayout>
  );
}
