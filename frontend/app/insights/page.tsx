import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import CTABand from "@/components/layout/CTABand";
import NewsletterForm from "@/components/forms/NewsletterForm";
import { insights } from "@/lib/data/insights";
import { caseStudies } from "@/lib/data/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Commodity market updates, trade intelligence, logistics analysis, and case studies from Veterra Global.",
};

const categoryLabels: Record<string, string> = {
  "market-update": "Market Update",
  "commodity-intelligence": "Commodity Intelligence",
  logistics: "Logistics",
  regulatory: "Regulatory",
  "case-study": "Case Study",
};

export default function InsightsHubPage() {
  return (
    <>
      <section className="bg-background pt-[72px] pb-20">
        <Container className="pt-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Market Intelligence</p>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
              Insights From
              <br />
              <span className="text-gold">Active Traders.</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              We publish market updates, commodity intelligence, and trade analysis drawn from our
              day-to-day trading activity — not generic desk research.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-pad bg-surface">
        <Container>
          <SectionHeader
            eyebrow="Latest Articles"
            title="Market Updates & Intelligence"
            className="mb-10"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {insights.map((article) => (
              <Link
                key={article.slug}
                href={`/insights/${article.slug}`}
                className="group surface-card p-6 hover:border-gold/40 transition-all duration-200 rounded-lg flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="neutral">{categoryLabels[article.category]}</Badge>
                  <span className="text-xs text-text-muted">{article.readTime} min read</span>
                </div>
                <h3 className="text-base font-bold text-text-primary mb-3 group-hover:text-gold transition-colors duration-200 leading-snug line-clamp-3">
                  {article.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed flex-1 line-clamp-3">
                  {article.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5 mb-3">
                  {article.topics.slice(0, 3).map((t) => (
                    <span key={t} className="text-xs text-text-muted border border-border px-2 py-0.5 rounded-sm">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-text-muted">
                    {new Date(article.publishedAt).toLocaleDateString("en-GB", {
                      day: "numeric", month: "short", year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-semibold text-gold">
                    Read
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Case Studies */}
      <section className="section-pad bg-background">
        <Container>
          <SectionHeader
            eyebrow="Proof of Execution"
            title={<>Case <span className="text-gold">Studies</span></>}
            subtitle="Anonymised examples of how we solve supply challenges in practice."
            className="mb-10"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {caseStudies.map((cs) => (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className="group surface-card p-6 hover:border-gold/40 transition-all duration-200 rounded-lg flex flex-col"
              >
                <Badge variant="gold" className="mb-4 self-start">{cs.sector}</Badge>
                <h3 className="text-base font-bold text-text-primary mb-3 group-hover:text-gold transition-colors duration-200 leading-snug">
                  {cs.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed flex-1">
                  {cs.summary}
                </p>
                <span className="flex items-center gap-1 text-xs font-semibold text-gold mt-5">
                  Read case study
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Newsletter */}
      <section className="section-pad bg-surface">
        <Container>
          <div className="max-w-xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Subscribe</p>
            <h2 className="text-2xl font-bold text-text-primary mb-3">
              Get Commodity Intelligence <span className="text-gold">by Sector</span>
            </h2>
            <p className="text-sm text-text-secondary mb-8">
              Market updates and trade analysis delivered to your inbox. Select your sectors of interest.
            </p>
            <NewsletterForm />
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
