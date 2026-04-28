import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import CTABand from "@/components/layout/CTABand";
import { legalDocuments, trustDocuments } from "@/lib/data/siteContent";

export const metadata: Metadata = {
  title: "Trust Center",
  description:
    "Veterra Global's Trust Center: certifications, compliance policies, documentation standards, and FAQ.",
};

const certifications = [
  { name: "ISO 9001:2015", scope: "Quality Management System", issuer: "Bureau Veritas" },
  { name: "GAFTA Member", scope: "Grain and Feed Trade Association", issuer: "GAFTA" },
  { name: "FOSFA Member", scope: "Federation of Oils, Seeds and Fats Associations", issuer: "FOSFA" },
  { name: "Company Registration", scope: "Registered in England & Wales", issuer: "Companies House" },
];

const faqs = [
  {
    q: "What payment terms do you offer?",
    a: "We support TT advance, DP, DA, and documentary letter of credit (LC) terms under UCP 600. Terms are agreed on a case-by-case basis and reflect the trade size, buyer credit profile, and country risk.",
  },
  {
    q: "What incoterms do you trade under?",
    a: "We trade under FOB, CFR, CIF, and DAP incoterms, depending on the commodity and buyer preference. We are flexible and can discuss the incoterm that best fits your logistics setup.",
  },
  {
    q: "How do you handle quality disputes?",
    a: "Independent inspection is conducted at load port on all cargoes. Our standard contract terms reference GAFTA or FOSFA arbitration. We maintain comprehensive inspection documentation to support dispute resolution.",
  },
  {
    q: "Do you supply to government procurement programmes?",
    a: "Yes. We have supplied WFP-aligned and government-to-government tenders. Contact our commercial team to discuss compliance documentation and tender requirements.",
  },
  {
    q: "What certification is provided with each shipment?",
    a: "A standard certificate pack includes: Certificate of Analysis (CoA), Weight Certificate, Certificate of Origin, Phytosanitary Certificate (where applicable), Bill of Lading, and Commercial Invoice.",
  },
  {
    q: "How do you screen suppliers and counterparties?",
    a: "All suppliers and buyers are screened against OFAC, EU, UN, and UK sanctions lists before any commercial engagement. We also conduct KYC verification and quality credential review as part of onboarding.",
  },
];

const docStandards = [
  { doc: "Certificate of Analysis (CoA)", requirement: "SGS, Bureau Veritas, or Cotecna; issued at load port" },
  { doc: "Phytosanitary Certificate", requirement: "Required for all agricultural shipments; issued by government authority" },
  { doc: "Certificate of Origin", requirement: "Issued by chamber of commerce or equivalent in origin country" },
  { doc: "Bill of Lading", requirement: "Original master or house BL; 3/3 originals standard" },
  { doc: "Weight Certificate", requirement: "Draft survey by independent surveyor at load port" },
  { doc: "Commercial Invoice", requirement: "Issued by Veterra Global with full trade terms, commodity, and payment reference" },
];

const policyCards = [
  ...trustDocuments.map((document) => ({
    href: `/trust-center/${document.slug}`,
    name: document.title,
    summary: document.summary,
  })),
  ...legalDocuments.map((document) => ({
    href: `/${document.route}`,
    name: document.title,
    summary: document.summary,
  })),
];

export default function TrustCenterPage() {
  return (
    <>
      <section className="bg-background pt-[72px] pb-20">
        <Container className="pt-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Trust Center</p>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
              Compliance. Proof.
              <br />
              <span className="text-gold">Transparency.</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              Everything you need for due diligence — certifications, policies, documentation standards,
              and answers to common compliance questions.
            </p>
          </div>
        </Container>
      </section>

      {/* Certifications */}
      <section className="section-pad bg-surface">
        <Container>
          <SectionHeader eyebrow="Certifications" title="Registrations & Memberships" className="mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert) => (
              <div key={cert.name} className="surface-card-elevated p-5 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-gold-muted border border-gold/30 flex items-center justify-center mb-3">
                  <span className="text-gold text-sm font-bold">✓</span>
                </div>
                <h3 className="text-sm font-bold text-text-primary mb-1">{cert.name}</h3>
                <p className="text-xs text-text-secondary mb-1">{cert.scope}</p>
                <p className="text-xs text-text-muted">Issued by: {cert.issuer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Policies */}
      <section className="section-pad bg-background">
        <Container>
          <SectionHeader eyebrow="Policies" title="Our Governance Documents" subtitle="A mix of trust-center material and public legal pages that support buyer, supplier, and compliance review." className="mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {policyCards.map((policy) => (
              <Link
                key={policy.href}
                href={policy.href}
                className="group surface-card p-5 hover:border-gold/40 transition-all duration-200 rounded-lg flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded bg-gold-muted border border-gold/30 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-text-primary group-hover:text-gold transition-colors duration-200 mb-1">
                    {policy.name}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed">{policy.summary}</p>
                </div>
                <svg className="w-4 h-4 text-text-muted group-hover:text-gold transition-colors shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
                </svg>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Documentation Standards */}
      <section className="section-pad bg-surface">
        <Container>
          <SectionHeader eyebrow="Documentation" title="Standard Certificate Pack" subtitle="Every commercial shipment from Veterra Global is accompanied by the following documentation." className="mb-8" />
          <div className="surface-card rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-surface-elevated border-b border-border">
                  <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gold">Document</th>
                  <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gold">Standard / Requirement</th>
                </tr>
              </thead>
              <tbody>
                {docStandards.map((row, idx) => (
                  <tr key={row.doc} className={`border-b border-border ${idx % 2 === 0 ? "bg-surface" : "bg-surface-elevated"}`}>
                    <td className="px-5 py-3 text-sm font-medium text-text-primary">{row.doc}</td>
                    <td className="px-5 py-3 text-sm text-text-secondary">{row.requirement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-background">
        <Container>
          <SectionHeader eyebrow="FAQ" title={<>Frequently <span className="text-gold">Asked Questions</span></>} className="mb-10" />
          <div className="max-w-3xl space-y-0">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group border-b border-border py-5">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="text-base font-semibold text-text-primary group-open:text-gold transition-colors duration-200">
                    {faq.q}
                  </span>
                  <svg className="w-5 h-5 text-text-muted group-open:rotate-180 transition-transform duration-200 shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
