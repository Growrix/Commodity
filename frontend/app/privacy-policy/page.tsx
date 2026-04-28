import type { Metadata } from "next";
import DocumentTemplate from "@/components/content/DocumentTemplate";
import { getLegalDocumentByRoute } from "@/lib/data/siteContent";

const document = getLegalDocumentByRoute("privacy-policy");

export const metadata: Metadata = {
  title: document?.title ?? "Privacy Policy",
  description: document?.summary,
};

export default function PrivacyPolicyPage() {
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