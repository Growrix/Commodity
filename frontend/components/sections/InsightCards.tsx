import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import { insights } from "@/lib/data/insights";

const categoryLabels: Record<string, string> = {
  "market-update": "Market Update",
  "commodity-intelligence": "Commodity Intelligence",
  logistics: "Logistics",
  regulatory: "Regulatory",
  "case-study": "Case Study",
};

interface InsightCardsProps {
  limit?: number;
  showHeader?: boolean;
}

export default function InsightCards({ limit = 3, showHeader = true }: InsightCardsProps) {
  const displayed = insights.slice(0, limit);

  return (
    <section className="section-pad bg-background">
      <Container>
        {showHeader && (
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <SectionHeader
              eyebrow="Market Intelligence"
              title={<>Latest <span className="text-gold">Insights</span></>}
            />
            <Link
              href="/insights"
              className="flex items-center gap-1.5 text-sm font-medium text-gold hover:text-gold-light transition-colors duration-200 shrink-0"
            >
              All insights
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayed.map((article) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="group surface-card p-6 hover:border-gold/40 transition-all duration-200 rounded-lg flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <Badge variant="neutral">{categoryLabels[article.category]}</Badge>
                <span className="text-xs text-text-muted">{article.readTime} min read</span>
              </div>
              <h3 className="text-base font-bold text-text-primary mb-3 leading-snug group-hover:text-gold transition-colors duration-200 line-clamp-2">
                {article.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed flex-1 line-clamp-3">
                {article.summary}
              </p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs text-text-muted">
                  {new Date(article.publishedAt).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1 text-xs font-semibold text-gold">
                  Read
                  <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
