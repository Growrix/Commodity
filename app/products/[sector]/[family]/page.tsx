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
      <section className="bg-[#0f2040] text-white py-20">
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
            <span className="text-[#c8a84b] text-xs font-bold uppercase tracking-widest mb-4 block">
              {sectorTitle}
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">{familyTitle}</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              We source and trade {familyTitle} with full documentation, quality
              inspection, and logistics support from major origin markets.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/partner-with-us/buyers" variant="secondary">
                Request a Quote
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/contact" variant="outline">
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
                <h2 className="text-2xl font-bold text-[#0f2040] mb-4">Specifications & Grades</h2>
                <div className="bg-[#f8f9fa] rounded-xl border border-[#e5e7eb] overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-[#0f2040] text-white">
                      <tr>
                        <th className="text-left px-4 py-3">Parameter</th>
                        <th className="text-left px-4 py-3">Typical Range</th>
                        <th className="text-left px-4 py-3">Standard</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#e5e7eb]">
                      {[
                        ["Grade / Purity", "Commercial Standard", "ISO / ASTM"],
                        ["Moisture Content", "As per spec", "Buyer's spec"],
                        ["Packaging", "Bulk / Bag / Container", "Trade standard"],
                        ["Origin", "Multiple origins available", "COA required"],
                        ["Min. Order Quantity", "500 MT+", "Negotiable"],
                      ].map(([param, value, standard]) => (
                        <tr key={param} className="hover:bg-white">
                          <td className="px-4 py-3 font-medium text-[#374151]">{param}</td>
                          <td className="px-4 py-3 text-[#6b7280]">{value}</td>
                          <td className="px-4 py-3 text-[#6b7280]">{standard}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0f2040] mb-4">Trade Documentation</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Bill of Lading",
                    "Certificate of Origin",
                    "Quality Inspection Report",
                    "Phytosanitary Certificate",
                    "Fumigation Certificate",
                    "Packing List & Weight Certificate",
                  ].map((doc) => (
                    <div key={doc} className="flex items-center gap-2 text-sm text-[#374151]">
                      <FileText className="w-4 h-4 text-[#c8a84b]" />
                      {doc}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <div className="bg-[#0f2040] rounded-xl p-6 text-white">
                <h3 className="font-bold text-lg mb-4">Quick Inquiry</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Tell us your requirements and we will respond within one business day.
                </p>
                <Button href="/partner-with-us/buyers" variant="secondary" fullWidth>
                  Request a Quote
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
              <div className="bg-[#f8f9fa] rounded-xl p-6 border border-[#e5e7eb]">
                <h3 className="font-bold text-[#0f2040] mb-4">Why Source With Us</h3>
                <div className="space-y-3">
                  {[
                    { icon: CheckCircle, text: "Verified supplier network" },
                    { icon: Shield, text: "Third-party quality inspection" },
                    { icon: Truck, text: "Full logistics coverage" },
                    { icon: FileText, text: "Compliant documentation" },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-2 text-sm text-[#374151]">
                      <Icon className="w-4 h-4 text-[#c8a84b]" />
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
