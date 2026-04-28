import type { Metadata } from "next";
import { ArrowRight, CheckCircle, FileText, Truck, Shield } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import CTABand from "@/components/sections/CTABand";
import Button from "@/components/ui/Button";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sector: string; family: string }>;
}): Promise<Metadata> {
  const { sector, family } = await params;
  const title = family
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  return {
    title: `${title} — ${sector.charAt(0).toUpperCase() + sector.slice(1)}`,
    description: `Trade specifications, origins, and logistics for ${title}.`,
  };
}

export default async function FamilyPage({
  params,
}: {
  params: Promise<{ sector: string; family: string }>;
}) {
  const { sector, family } = await params;
  const familyTitle = family
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  const sectorTitle = sector
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <PageLayout>
      <section className="bg-[var(--color-ink)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Products", href: "/products" },
              { label: sectorTitle, href: `/products/${sector}` },
              { label: familyTitle },
            ]}
            dark
          />
          <div className="mt-8 max-w-3xl">
            <span className="text-[var(--color-gold)] text-xs font-bold uppercase tracking-widest mb-4 block">
              {sectorTitle}
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">{familyTitle}</h1>
            <p className="text-xl text-white/60 leading-relaxed mb-8">
              We source and trade {familyTitle} with full documentation, quality
              inspection, and logistics support from major origin markets.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/partner-with-us/buyers" variant="gold">
                Request a Quote
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/contact" variant="outline-white">
                Discuss Requirements
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[var(--color-ink)] mb-4">Specifications & Grades</h2>
                <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-[var(--color-ink)] text-white">
                      <tr>
                        <th className="text-left px-4 py-3">Parameter</th>
                        <th className="text-left px-4 py-3">Typical Range</th>
                        <th className="text-left px-4 py-3">Standard</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[var(--color-border)]">
                      {[
                        ["Grade / Purity", "Commercial Standard", "ISO / ASTM"],
                        ["Moisture Content", "As per spec", "Buyer's spec"],
                        ["Packaging", "Bulk / Bag / Container", "Trade standard"],
                        ["Origin", "Multiple origins available", "COA required"],
                        ["Min. Order Quantity", "500 MT+", "Negotiable"],
                      ].map(([param, value, standard]) => (
                        <tr key={param} className="hover:bg-white">
                          <td className="px-4 py-3 font-medium text-[var(--color-text-secondary)]">{param}</td>
                          <td className="px-4 py-3 text-[var(--color-text-muted)]">{value}</td>
                          <td className="px-4 py-3 text-[var(--color-text-muted)]">{standard}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[var(--color-ink)] mb-4">Trade Documentation</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Bill of Lading",
                    "Certificate of Origin",
                    "Quality Inspection Report",
                    "Phytosanitary Certificate",
                    "Fumigation Certificate",
                    "Packing List & Weight Certificate",
                  ].map((doc) => (
                    <div key={doc} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                      <FileText className="w-4 h-4 text-[var(--color-gold)]" />
                      {doc}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <div className="bg-[var(--color-ink)] rounded-xl p-6 text-white">
                <h3 className="font-bold text-lg mb-4">Quick Inquiry</h3>
                <p className="text-white/60 text-sm mb-4">
                  Tell us your requirements and we will respond within one business day.
                </p>
                <Button href="/partner-with-us/buyers" variant="gold" fullWidth>
                  Request a Quote
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
              <div className="bg-[var(--color-surface)] rounded-xl p-6 border border-[var(--color-border)]">
                <h3 className="font-bold text-[var(--color-ink)] mb-4">Why Source With Us</h3>
                <div className="space-y-3">
                  {[
                    { icon: CheckCircle, text: "Verified supplier network" },
                    { icon: Shield, text: "Third-party quality inspection" },
                    { icon: Truck, text: "Full logistics coverage" },
                    { icon: FileText, text: "Compliant documentation" },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                      <Icon className="w-4 h-4 text-[var(--color-gold)]" />
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </PageLayout>
  );
}
