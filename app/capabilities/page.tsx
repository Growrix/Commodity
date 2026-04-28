import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe, DollarSign, Truck, ShieldCheck, TrendingUp, BarChart3 } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import CTABand from "@/components/sections/CTABand";
import SectionHeader from "@/components/sections/SectionHeader";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Capabilities",
  description: "End-to-end commodity trading capabilities: origination, trade finance, logistics, QA, and risk management.",
};

const capabilities = [
  {
    icon: Globe,
    slug: "origination",
    title: "Global Origination",
    description:
      "Established supplier relationships across 40+ source markets. We verify counterparties, assess origin risk, and maintain multi-origin sourcing for every major product family.",
    metrics: ["40+ Source Markets", "500+ Vetted Suppliers", "100% KYC Compliant"],
  },
  {
    icon: DollarSign,
    slug: "trade-finance",
    title: "Trade Finance",
    description:
      "We structure transactions using Letters of Credit, Documentary Collections, and open account terms. Our finance desk works with tier-1 banking counterparties to ensure payment security.",
    metrics: ["L/C & D/C Structured", "MT700 / MT760 Capable", "Multi-currency Settlement"],
  },
  {
    icon: Truck,
    slug: "logistics",
    title: "Logistics & Freight",
    description:
      "Full freight brokerage, vessel chartering, container booking, and port coordination across 60+ destination markets. We manage freight from loading port to final destination.",
    metrics: ["Bulk & Container", "60+ Ports Covered", "Real-time Tracking"],
  },
  {
    icon: ShieldCheck,
    slug: "quality-assurance",
    title: "Quality Assurance",
    description:
      "Third-party inspection at origin, transit, and destination. We partner with SGS, Bureau Veritas, and equivalent inspection companies to provide independent quality verification.",
    metrics: ["SGS / BV Inspection", "Pre-shipment Sampling", "COA & Lab Reports"],
  },
  {
    icon: TrendingUp,
    slug: "risk-management",
    title: "Risk Management",
    description:
      "Structured approach to price, counterparty, logistics, and regulatory risk. We use hedging strategies and supplier diversification to protect transaction integrity.",
    metrics: ["Price Hedging Available", "Counterparty Screening", "Force Majeure Protocols"],
  },
  {
    icon: BarChart3,
    slug: "market-intelligence",
    title: "Market Intelligence",
    description:
      "Proprietary pricing data, corridor analysis, and trade flow reporting. Our market intelligence supports procurement decisions and supply chain planning for major buyers.",
    metrics: ["Weekly Price Reports", "Corridor Analysis", "Regulatory Monitoring"],
  },
];

const processSteps = [
  { step: "01", label: "Requirements", description: "Define commodity, grade, volume, origin, and delivery window" },
  { step: "02", label: "Sourcing", description: "Identify and verify best-fit suppliers across origin markets" },
  { step: "03", label: "Pricing", description: "Structure competitive pricing with transparent cost breakdowns" },
  { step: "04", label: "Finance", description: "Agree payment structure and documentary requirements" },
  { step: "05", label: "Logistics", description: "Book freight, coordinate loading, and manage documentation" },
  { step: "06", label: "Quality", description: "Conduct pre-shipment inspection and issue certificates" },
  { step: "07", label: "Delivery", description: "Coordinate port arrival, customs clearance, and final delivery" },
];

export default function CapabilitiesPage() {
  return (
    <PageLayout>
      <section className="bg-[#0f2040] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Capabilities" }]} dark />
          <div className="mt-8 max-w-3xl">
            <span className="text-[#c8a84b] text-xs font-bold uppercase tracking-widest mb-4 block">
              What We Do
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              End-to-End Trading Capabilities
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              We are more than a commodity trader. Our capabilities span sourcing,
              finance, logistics, quality, and intelligence — giving you a single
              counterpart for the full trade lifecycle.
            </p>
            <Button href="/contact" variant="secondary">
              Discuss Your Supply Program
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Capabilities"
            title="Structured for Commercial Execution"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map(({ icon: Icon, slug, title, description, metrics }) => (
              <Link
                key={slug}
                href={`/capabilities/${slug}`}
                className="block bg-[#f8f9fa] border border-[#e5e7eb] rounded-xl p-6 hover:shadow-md transition-all hover:-translate-y-0.5 group"
              >
                <div className="w-12 h-12 bg-[#0f2040] rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#c8a84b]" />
                </div>
                <h3 className="font-bold text-[#0f2040] text-lg mb-2 group-hover:text-[#c8a84b] transition-colors">
                  {title}
                </h3>
                <p className="text-sm text-[#6b7280] leading-relaxed mb-4">{description}</p>
                <div className="space-y-1.5">
                  {metrics.map((m) => (
                    <div key={m} className="flex items-center gap-2 text-xs text-[#374151]">
                      <div className="w-1.5 h-1.5 bg-[#c8a84b] rounded-full flex-shrink-0" />
                      {m}
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-[#0f2040] group-hover:text-[#c8a84b]">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-[#0f2040]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Trade Lifecycle"
            title="From Sourcing to Delivery"
            description="Our commercial process is designed to reduce your risk and administration at every stage."
            dark
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {processSteps.map(({ step, label, description }) => (
              <div key={step} className="bg-white/5 border border-white/10 rounded-lg p-5">
                <div className="text-[#c8a84b] font-bold text-2xl mb-2">{step}</div>
                <h3 className="font-bold text-white mb-2">{label}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </PageLayout>
  );
}
