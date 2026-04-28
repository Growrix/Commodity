import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Container from "@/components/ui/Container";

interface DocumentSection {
  heading: string;
  paragraphs: string[];
}

interface DocumentLink {
  label: string;
  href: string;
}

interface DocumentTemplateProps {
  eyebrow: string;
  title: string;
  summary: string;
  owner: string;
  effectiveDate: string;
  reviewedAt?: string;
  breadcrumbs: { label: string; href?: string }[];
  sections: DocumentSection[];
  relatedLinks: DocumentLink[];
  primaryCta: DocumentLink;
  secondaryCta: DocumentLink;
}

function toId(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function DocumentTemplate({
  eyebrow,
  title,
  summary,
  owner,
  effectiveDate,
  reviewedAt,
  breadcrumbs,
  sections,
  relatedLinks,
  primaryCta,
  secondaryCta,
}: DocumentTemplateProps) {
  const sectionAnchors = sections.map((section) => ({
    ...section,
    id: toId(section.heading),
  }));

  return (
    <>
      <section className="bg-background pt-[72px] pb-16">
        <Container className="pt-12">
          <Breadcrumb items={breadcrumbs} className="mb-8" />
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">{eyebrow}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-5 leading-tight">{title}</h1>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">{summary}</p>
            <div className="flex flex-wrap gap-3 text-xs text-text-muted">
              <span className="surface-card px-3 py-2 rounded-full border border-border-light">Owner: {owner}</span>
              <span className="surface-card px-3 py-2 rounded-full border border-border-light">Effective: {effectiveDate}</span>
              {reviewedAt ? (
                <span className="surface-card px-3 py-2 rounded-full border border-border-light">Reviewed: {reviewedAt}</span>
              ) : null}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-pad bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)] gap-10 items-start">
            <aside className="surface-card p-6 rounded-lg lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">On This Page</p>
              <nav className="space-y-2">
                {sectionAnchors.map((section) => (
                  <Link
                    key={section.id}
                    href={`#${section.id}`}
                    className="block text-sm text-text-secondary hover:text-gold transition-colors duration-200"
                  >
                    {section.heading}
                  </Link>
                ))}
              </nav>
            </aside>

            <div className="space-y-8">
              {sectionAnchors.map((section) => (
                <article key={section.id} id={section.id} className="surface-card-elevated p-7 rounded-lg scroll-mt-28">
                  <h2 className="text-2xl font-bold text-text-primary mb-4">{section.heading}</h2>
                  <div className="space-y-4 text-sm text-text-secondary leading-relaxed">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-pad bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Related Links</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="surface-card p-5 rounded-lg text-sm text-text-secondary hover:text-text-primary hover:border-gold/40 transition-all duration-200"
                  >
                    <span className="block font-semibold text-text-primary mb-1">{link.label}</span>
                    Continue to the related route or document.
                  </Link>
                ))}
              </div>
            </div>
            <div className="surface-card-elevated p-6 rounded-lg">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Need Help?</p>
              <h2 className="text-2xl font-bold text-text-primary mb-3">Speak with the responsible team</h2>
              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                If you need more detail, our team can route your request to commercial, compliance, or operations contacts.
              </p>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                <Link href={primaryCta.href} className="btn-gold justify-center text-sm">
                  {primaryCta.label}
                </Link>
                <Link href={secondaryCta.href} className="btn-outline-gold justify-center text-sm">
                  {secondaryCta.label}
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}