import type { Metadata } from "next";
import DocumentTemplate from "@/components/content/DocumentTemplate";
import { getLegalDocumentByRoute } from "@/lib/data/siteContent";

const document = getLegalDocumentByRoute("cookie-policy");

export const metadata: Metadata = {
  title: document?.title ?? "Cookie Policy",
  description: document?.summary,
};

export default function CookiePolicyPage() {
  if (!document) {
    return null;
  }

  return (
    <DocumentTemplate
      eyebrow="Legal"
      title={document.title}
      summary={document.summary}
      owner={document.owner}
      effectiveDate={document.effectiveDate}
      breadcrumbs={[{ label: document.title }]}
      sections={document.sections}
      relatedLinks={document.relatedLinks}
      primaryCta={{ label: "Return To Main Site", href: "/" }}
      secondaryCta={{ label: "Contact Responsible Team", href: "/contact" }}
    />
  );
}