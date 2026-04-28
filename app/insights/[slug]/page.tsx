import type { Metadata } from "next";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import CTABand from "@/components/sections/CTABand";
import Button from "@/components/ui/Button";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const title = slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  return { title, description: `Market intelligence article: ${title}` };
}

export default async function InsightArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  return (
    <PageLayout>
      <section className="bg-[var(--color-ink)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Insights", href: "/insights" }, { label: title }]} dark />
          <div className="mt-8 max-w-3xl">
            <span className="text-[var(--color-gold)] text-xs font-bold uppercase tracking-widest mb-4 block">Market Intelligence</span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">{title}</h1>
            <div className="flex items-center gap-4 text-white/40 text-sm">
              <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /> April 2026</div>
              <div className="flex items-center gap-1"><Clock className="w-4 h-4" /> 6 min read</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2 prose prose-lg max-w-none">
              <p className="text-[#6b7280] text-lg leading-relaxed mb-6">
                This market intelligence report covers current supply and demand dynamics,
                trade flow patterns, and pricing signals relevant to buyers, suppliers,
                and procurement teams operating in global commodity markets.
              </p>
              <h2 className="text-xl font-bold text-[var(--color-ink)] mt-8 mb-4">Market Overview</h2>
              <p className="text-[#6b7280] leading-relaxed mb-6">
                Global commodity markets continue to be shaped by geopolitical shifts,
                weather patterns, and structural demand growth in emerging economies.
                This analysis draws on trade data, shipping indicators, and our own
                transactional experience across major corridors.
              </p>
              <h2 className="text-xl font-bold text-[var(--color-ink)] mt-8 mb-4">Key Signals</h2>
              <p className="text-[#6b7280] leading-relaxed mb-6">
                Procurement teams should monitor origin market production reports closely
                as we approach the Northern Hemisphere harvest window. Price volatility
                is expected to remain elevated through Q2 2026 before normalising.
              </p>
              <h2 className="text-xl font-bold text-[var(--color-ink)] mt-8 mb-4">Commercial Implications</h2>
              <p className="text-[#6b7280] leading-relaxed">
                Buyers with flexible delivery windows should consider forward price
                agreements to lock in current levels. Speak with our trading desk to
                discuss your specific requirements and timing.
              </p>
            </article>

            <aside className="space-y-4">
              <div className="bg-[var(--color-ink)] rounded-xl p-6 text-white">
                <h3 className="font-bold text-lg mb-3">Related Inquiry</h3>
                <p className="text-white/60 text-sm mb-4">
                  This analysis covers commodities we trade. Contact our desk to discuss pricing.
                </p>
                <Button href="/partner-with-us/buyers" variant="gold" fullWidth>
                  Request a Quote <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
              <div className="bg-[var(--color-surface)] rounded-xl p-6 border border-[#e5e7eb]">
                <h3 className="font-bold text-[var(--color-ink)] mb-3">More Insights</h3>
                <div className="space-y-3">
                  {["Urea Market Dynamics", "Red Sea Routing Strategies", "Palm Oil Outlook 2026"].map((t) => (
                    <Link
                      key={t}
                      href="/insights"
                      className="flex items-center gap-2 text-sm text-[#374151] hover:text-[var(--color-gold)] transition-colors"
                    >
                      <ArrowRight className="w-3 h-3 flex-shrink-0" />
                      {t}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTABand />
    </PageLayout>
  );
}
