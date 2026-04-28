import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Supplier Registration",
  description: "Register as a verified commodity supplier and connect with GlobalTrade's global buying network.",
};

export default function SuppliersPage() {
  return (
    <PageLayout>
      <section className="bg-[var(--color-ink)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Partner With Us", href: "/partner-with-us" }, { label: "Supplier Registration" }]} dark />
          <div className="mt-8 max-w-3xl">
            <span className="text-[var(--color-gold)] text-xs font-bold uppercase tracking-widest mb-4 block">For Suppliers</span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Supplier Registration</h1>
            <p className="text-xl text-white/60 leading-relaxed">
              Join our verified supplier network and gain access to international buying programs.
              We review all registrations and respond within 3 business days.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[var(--color-ink)] mb-6">Supplier Registration Form</h2>
          <form className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-[#374151] mb-1.5">Company Name <span className="text-red-500">*</span></label>
                <input type="text" className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-ink)]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#374151] mb-1.5">Country of Registration <span className="text-red-500">*</span></label>
                <input type="text" className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-ink)]" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-[#374151] mb-1.5">Contact Name <span className="text-red-500">*</span></label>
                <input type="text" className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-ink)]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#374151] mb-1.5">Work Email <span className="text-red-500">*</span></label>
                <input type="email" className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-ink)]" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#374151] mb-1.5">Commodity Categories <span className="text-red-500">*</span></label>
              <select className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-ink)] bg-white">
                <option value="">Select primary commodity category</option>
                <option>Agriculture</option>
                <option>Energy & Petroleum Products</option>
                <option>Fertilizers</option>
                <option>Industrial Materials</option>
                <option>Multiple Categories</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#374151] mb-1.5">Annual Supply Capacity</label>
              <input type="text" className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-ink)]" placeholder="e.g. 50,000 MT/year" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#374151] mb-1.5">Additional Information</label>
              <textarea rows={4} className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-ink)]" placeholder="Certifications, existing customers, production locations, or export experience..." />
            </div>
            <Button type="submit" variant="primary" size="lg">
              Submit Registration
              <ArrowRight className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </section>
    </PageLayout>
  );
}
