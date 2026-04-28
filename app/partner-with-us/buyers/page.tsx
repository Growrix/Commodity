import type { Metadata } from "next";
import { ArrowRight, CheckCircle } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Request a Quote",
  description: "Submit a commodity sourcing inquiry. We respond within one business day.",
};

export default function BuyersPage() {
  return (
    <PageLayout>
      <section className="bg-[var(--color-ink)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: "Partner With Us", href: "/partner-with-us" }, { label: "Request a Quote" }]}
            dark
          />
          <div className="mt-8 max-w-3xl">
            <span className="text-[var(--color-gold)] text-xs font-bold uppercase tracking-widest mb-4 block">For Buyers</span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Request a Quote</h1>
            <p className="text-xl text-white/60 leading-relaxed">
              Tell us what you need and we will respond with pricing, origin options,
              and logistics terms within one business day.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-[var(--color-ink)] mb-6">Sourcing Inquiry</h2>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[#374151] mb-1.5">Full Name <span className="text-red-500">*</span></label>
                    <input type="text" className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-ink)]" placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#374151] mb-1.5">Company <span className="text-red-500">*</span></label>
                    <input type="text" className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-ink)]" placeholder="Your company name" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[#374151] mb-1.5">Work Email <span className="text-red-500">*</span></label>
                    <input type="email" className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-ink)]" placeholder="you@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#374151] mb-1.5">Country / Region <span className="text-red-500">*</span></label>
                    <input type="text" className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-ink)]" placeholder="Your country" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#374151] mb-1.5">Commodity Required <span className="text-red-500">*</span></label>
                  <select className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-ink)] bg-white">
                    <option value="">Select commodity category</option>
                    <option>Agriculture — Grains</option>
                    <option>Agriculture — Oilseeds</option>
                    <option>Agriculture — Sugar</option>
                    <option>Energy — Petroleum Products</option>
                    <option>Energy — LPG</option>
                    <option>Fertilizers — Nitrogen</option>
                    <option>Fertilizers — Phosphate</option>
                    <option>Industrial Materials — Sulfur</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[#374151] mb-1.5">Volume Required</label>
                    <input type="text" className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-ink)]" placeholder="e.g. 5,000 MT" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#374151] mb-1.5">Required Delivery Date</label>
                    <input type="text" className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-ink)]" placeholder="e.g. June 2026" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#374151] mb-1.5">Additional Requirements</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-ink)]" placeholder="Specification, grade, port of destination, payment terms, or other notes..." />
                </div>
                <Button type="submit" variant="primary" size="lg">
                  Submit Inquiry
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            </div>

            <div className="space-y-4">
              <div className="bg-[var(--color-surface)] rounded-xl p-6 border border-[#e5e7eb]">
                <h3 className="font-bold text-[var(--color-ink)] mb-4">What Happens Next</h3>
                <div className="space-y-3">
                  {[
                    "We review your inquiry and match it to our product catalog",
                    "We respond within 1 business day with pricing and origin options",
                    "We provide full specification, logistics, and payment terms",
                    "You confirm requirements and we prepare the commercial offer",
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-[var(--color-gold)] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold text-[var(--color-ink)]">
                        {i + 1}
                      </div>
                      <p className="text-sm text-[#374151]">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[var(--color-ink)] rounded-xl p-6 text-white">
                <h3 className="font-bold mb-2">Confidentiality Assured</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  All inquiries are treated with full confidentiality. We do not share
                  your commercial requirements with third parties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
