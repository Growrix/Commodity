import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Badge from "@/components/ui/Badge";
import CTABand from "@/components/layout/CTABand";
import InsightCards from "@/components/sections/InsightCards";
import { insights, getInsightBySlug } from "@/lib/data/insights";

export async function generateStaticParams() {
  return insights.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsightBySlug(slug);
  if (!article) return { title: "Not Found" };
  return { title: article.title, description: article.summary };
}

const categoryLabels: Record<string, string> = {
  "market-update": "Market Update",
  "commodity-intelligence": "Commodity Intelligence",
  logistics: "Logistics",
  regulatory: "Regulatory",
  "case-study": "Case Study",
};

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getInsightBySlug(slug);
  if (!article) notFound();

  return (
    <>
      <section className="bg-background pt-[72px] pb-16">
        <Container className="pt-12" narrow>
          <Breadcrumb
            items={[{ label: "Insights", href: "/insights" }, { label: "Article" }]}
            className="mb-8"
          />
          <Badge variant="neutral" className="mb-5">
            {categoryLabels[article.category]}
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-5 leading-tight">
            {article.title}
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed mb-6">{article.summary}</p>
          <div className="flex items-center gap-4 text-xs text-text-muted border-t border-border pt-5">
            <span>
              {new Date(article.publishedAt).toLocaleDateString("en-GB", {
                day: "numeric", month: "long", year: "numeric",
              })}
            </span>
            <span>·</span>
            <span>{article.readTime} min read</span>
            <span>·</span>
            <div className="flex gap-1.5">
              {article.topics.map((t) => (
                <span key={t} className="text-xs border border-border px-2 py-0.5 rounded-sm text-text-muted">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container narrow>
          {article.body ? (
            <div className="prose-content text-text-secondary leading-relaxed space-y-4">
              {article.body.split("\n\n").map((para, idx) => {
                if (para.startsWith("**")) {
                  const withoutAsterisks = para.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
                  return (
                    <p
                      key={idx}
                      className="text-base leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: withoutAsterisks }}
                    />
                  );
                }
                return (
                  <p key={idx} className="text-base leading-relaxed text-text-secondary">
                    {para}
                  </p>
                );
              })}
            </div>
          ) : (
            <div className="surface-card p-8 rounded-lg text-center">
              <p className="text-text-secondary">Full article content will be managed through the CMS.</p>
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Related Topics</p>
            <div className="flex flex-wrap gap-2">
              {article.topics.map((t) => (
                <span key={t} className="tag-gold">{t}</span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 surface-card-elevated p-6 rounded-lg">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-2">Discuss with Our Trade Desk</p>
            <p className="text-base font-bold text-text-primary mb-2">
              Want to act on this intelligence?
            </p>
            <p className="text-sm text-text-secondary mb-4">
              Our team trades the markets we write about. Get in touch to discuss supply options or pricing.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact#quote" className="btn-gold text-sm">Request a Quote</Link>
              <Link href="/insights" className="btn-ghost text-sm">More Insights</Link>
            </div>
          </div>
        </Container>
      </section>

      <InsightCards limit={3} showHeader={false} />
      <CTABand />
    </>
  );
}
