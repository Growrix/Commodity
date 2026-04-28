import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import CTABand from "@/components/sections/CTABand";
import SectionHeader from "@/components/sections/SectionHeader";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Market Insights",
  description: "Commodity market intelligence, trade updates, and supply chain analysis from GlobalTrade's expert team.",
};

const articles = [
  {
    slug: "global-wheat-supply-q2-2026",
    category: "Market Update",
    title: "Global Wheat Supply Outlook: Q2 2026",
    excerpt: "Analyzing Black Sea production estimates and their impact on trade flows into key importing regions.",
    date: "April 2026",
    readTime: "5 min read",
  },
  {
    slug: "urea-india-import-cycle-2026",
    category: "Trade Intelligence",
    title: "Urea Market Dynamics: India's Import Tender Season",
    excerpt: "India's fertilizer import cycle creates significant pricing opportunities across Middle East and East European origins.",
    date: "March 2026",
    readTime: "7 min read",
  },
  {
    slug: "red-sea-routing-strategies",
    category: "Logistics",
    title: "Red Sea Disruptions: Alternative Routing Strategies",
    excerpt: "How global traders are adapting routing decisions and cost models in response to ongoing corridor pressures.",
    date: "March 2026",
    readTime: "6 min read",
  },
  {
    slug: "palm-oil-southeast-asia-2026",
    category: "Market Update",
    title: "Palm Oil Supply in Southeast Asia: 2026 Outlook",
    excerpt: "Production forecasts, trade flows, and buyer positioning as seasonal supply patterns shift.",
    date: "February 2026",
    readTime: "5 min read",
  },
  {
    slug: "lpg-emerging-markets",
    category: "Trade Intelligence",
    title: "LPG Demand Growth in Emerging Markets",
    excerpt: "Sub-Saharan Africa and South Asia are driving structural demand for LPG as household energy policy evolves.",
    date: "February 2026",
    readTime: "8 min read",
  },
  {
    slug: "sanctions-compliance-trade",
    category: "Compliance",
    title: "Sanctions Compliance in Commodity Trade: 2026 Update",
    excerpt: "What commodity traders need to know about evolving sanctions regimes and documentation requirements.",
    date: "January 2026",
    readTime: "10 min read",
  },
];

const topics = ["All", "Market Update", "Trade Intelligence", "Logistics", "Compliance", "Agriculture", "Energy"];

export default function InsightsPage() {
  return (
    <PageLayout>
      <section className="bg-[#0f2040] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Insights" }]} dark />
          <div className="mt-8 max-w-3xl">
            <span className="text-[#c8a84b] text-xs font-bold uppercase tracking-widest mb-4 block">
              Market Intelligence
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Commodity Market Insights
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Pricing intelligence, trade flow analysis, and supply chain updates from
              our global trading team — published to support procurement decisions.
            </p>
            <Button href="/contact" variant="secondary">
              Subscribe for Updates
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Topic Filters */}
      <section className="bg-[#f8f9fa] border-b border-[#e5e7eb] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {topics.map((topic, i) => (
              <button
                key={topic}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  i === 0
                    ? "bg-[#0f2040] text-white"
                    : "bg-white border border-[#e5e7eb] text-[#374151] hover:border-[#0f2040] hover:text-[#0f2040]"
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Latest Articles"
            title="Market Intelligence Archive"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map(({ slug, category, title, excerpt, date, readTime }) => (
              <Link
                key={slug}
                href={`/insights/${slug}`}
                className="group block bg-[#f8f9fa] border border-[#e5e7eb] rounded-xl p-6 hover:shadow-md transition-all hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wide text-[#c8a84b]">{category}</span>
                  <span className="text-xs text-[#6b7280]">· {date}</span>
                </div>
                <h3 className="font-bold text-[#0f2040] text-base mb-2 leading-snug group-hover:text-[#c8a84b] transition-colors">
                  {title}
                </h3>
                <p className="text-sm text-[#6b7280] leading-relaxed mb-4">{excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#6b7280]">{readTime}</span>
                  <div className="flex items-center gap-1 text-sm font-medium text-[#0f2040] group-hover:text-[#c8a84b]">
                    Read
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-[#f8f9fa]">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="w-10 h-10 text-[#0f2040] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-[#0f2040] mb-3">Stay Ahead of the Market</h2>
          <p className="text-[#6b7280] mb-6">
            Subscribe for weekly commodity market updates, pricing signals, and trade intelligence.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your work email"
              className="flex-1 px-4 py-3 border border-[#e5e7eb] rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#0f2040]"
            />
            <Button href="/contact" variant="primary">Subscribe</Button>
          </div>
          <p className="text-xs text-[#6b7280] mt-3">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      <CTABand />
    </PageLayout>
  );
}
