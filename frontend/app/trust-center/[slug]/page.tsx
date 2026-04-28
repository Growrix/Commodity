import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DocumentTemplate from "@/components/content/DocumentTemplate";
import { getTrustDocumentBySlug, trustDocuments } from "@/lib/data/siteContent";

export async function generateStaticParams() {
  return trustDocuments.map((document) => ({ slug: document.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const document = getTrustDocumentBySlug(slug);

  if (!document) {
    return { title: "Not Found" };
  }

  return {
    title: document.title,
    description: document.summary,
  };
}

export default async function TrustDocumentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const document = getTrustDocumentBySlug(slug);

  if (!document) {
    notFound();
  }

  return (
    <DocumentTemplate
      eyebrow={document.documentType}
      title={document.title}
      summary={document.summary}
      owner={document.owner}
      effectiveDate={document.effectiveDate}
      reviewedAt={document.reviewedAt}
      breadcrumbs={[{ label: "Trust Center", href: "/trust-center" }, { label: document.title }]}
      sections={document.sections}
      relatedLinks={document.relatedLinks}
      primaryCta={{ label: "Contact Our Team", href: "/contact" }}
      secondaryCta={{ label: "Return To Trust Center", href: "/trust-center" }}
    />
  );
}