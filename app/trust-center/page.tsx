import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, Shield, Award, MessageCircle } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SectionHeader from "@/components/sections/SectionHeader";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Trust Center",
  description: "Certificates, policies, compliance documentation, and governance information for procurement due diligence.",
};

const certificates = [
  { name: "ISO 9001:2015", description: "Quality Management System", issuer: "Bureau Veritas" },
  { name: "AEO Certification", description: "Authorised Economic Operator", issuer: "Swiss Customs" },
  { name: "ISCC Certification", description: "International Sustainability & Carbon", issuer: "ISCC System GmbH" },
];

const policies = [
  { slug: "privacy-policy", title: "Privacy Policy", description: "How we collect, use, and protect personal data." },
  { slug: "anti-bribery-policy", title: "Anti-Bribery & Corruption Policy", description: "Our zero-tolerance stance on bribery." },
  { slug: "supplier-code-of-conduct", title: "Supplier Code of Conduct", description: "Standards we require of our supply chain partners." },
  { slug: "esg-statement", title: "ESG Statement", description: "Our environmental, social, and governance commitments." },
  { slug: "sanctions-policy", title: "Sanctions Compliance Policy", description: "How we screen and comply with international sanctions." },
  { slug: "terms-of-use", title: "Terms of Use", description: "Terms governing use of this website." },
];

const faqs = [
  { q: "What payment terms do you offer?", a: "We typically operate on L/C at sight, D/P, or open account terms depending on counterparty relationship and risk profile." },
  { q: "Do you provide third-party quality inspection?", a: "Yes. We arrange pre-shipment inspection through SGS, Bureau Veritas, or equivalent inspection companies on all transactions." },
  { q: "How do you handle sanctions screening?", a: "We screen all counterparties against OFAC, EU, and UN sanctions lists before onboarding and on an ongoing basis." },
  { q: "Can you provide certificates of origin?", a: "Yes. Certificate of Origin and relevant phytosanitary documentation is provided for all commodity shipments." },
];

export default function TrustCenterPage() {
  return (
    <PageLayout>
      <section className="bg-[var(--color-ink)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Trust Center" }]} dark />
          <div className="mt-8 max-w-3xl">
            <span className="text-[var(--color-gold)] text-xs font-bold uppercase tracking-widest mb-4 block">Compliance & Governance</span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">Trust Center</h1>
            <p className="text-xl text-white/60 leading-relaxed mb-8">
              Your due diligence resource. Certificates, policies, compliance
              documentation, and governance information in one place.
            </p>
            <Button href="/contact" variant="gold">
              Contact Compliance Team
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Formal Credentials" title="Certificates & Registrations" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {certificates.map(({ name, description, issuer }) => (
              <div key={name} className="bg-[var(--color-surface)] border border-[#e5e7eb] rounded-xl p-6 text-center">
                <Award className="w-8 h-8 text-[var(--color-gold)] mx-auto mb-3" />
                <h3 className="font-bold text-[var(--color-ink)] mb-1">{name}</h3>
                <p className="text-sm text-[#6b7280] mb-2">{description}</p>
                <span className="text-xs text-[var(--color-gold)] font-medium">Issued by {issuer}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Library */}
      <section className="py-20 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Governance" title="Policy Library" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {policies.map(({ slug, title, description }) => (
              <Link
                key={slug}
                href={`/trust-center/${slug}`}
                className="flex items-start gap-4 bg-white border border-[#e5e7eb] rounded-xl p-5 hover:shadow-md transition-all hover:-translate-y-0.5 group"
              >
                <FileText className="w-5 h-5 text-[var(--color-gold)] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-[var(--color-ink)] text-sm mb-1 group-hover:text-[var(--color-gold)] transition-colors">{title}</h3>
                  <p className="text-xs text-[#6b7280]">{description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Common Questions" title="Trust & Compliance FAQ" />
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border border-[#e5e7eb] rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-[var(--color-gold)] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-[var(--color-ink)] mb-2">{q}</h3>
                    <p className="text-sm text-[#6b7280] leading-relaxed">{a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-ink)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-10 h-10 text-[var(--color-gold)] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-3">Need More Information?</h2>
          <p className="text-white/60 mb-6">Our compliance team is available to assist procurement and legal reviewers.</p>
          <Button href="/contact" variant="gold">Contact Compliance <ArrowRight className="w-4 h-4" /></Button>
        </div>
      </section>
    </PageLayout>
  );
}
