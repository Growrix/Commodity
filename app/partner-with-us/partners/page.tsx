import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Strategic Partnership",
  description: "Initiate a strategic partnership or commercial collaboration with GlobalTrade Commodities.",
};

export default function PartnersPage() {
  return (
    <PageLayout>
      <section className="bg-[var(--color-ink)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Partner With Us", href: "/partner-with-us" }, { label: "Strategic Partnership" }]} dark />
          <div className="mt-8 max-w-3xl">
            <span className="text-[var(--color-gold)] text-xs font-bold uppercase tracking-widest mb-4 block">Strategic Partnerships</span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Partner With Us Strategically</h1>
            <p className="text-xl text-white/60 leading-relaxed">
              If you are exploring a long-term commercial collaboration, joint venture,
              or structured supply program, initiate a conversation here.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[var(--color-ink)] mb-6">Partnership Inquiry</h2>
          <form className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-[#374151] mb-1.5">Your Name <span className="text-red-500">*</span></label>
                <input type="text" className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-ink)]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#374151] mb-1.5">Organisation <span className="text-red-500">*</span></label>
                <input type="text" className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-ink)]" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#374151] mb-1.5">Email <span className="text-red-500">*</span></label>
              <input type="email" className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-ink)]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#374151] mb-1.5">Partnership Type</label>
              <select className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-ink)] bg-white">
                <option value="">Select partnership type</option>
                <option>Long-term Supply Program</option>
                <option>Joint Venture</option>
                <option>Market Entry Partnership</option>
                <option>Distribution & Logistics</option>
                <option>Technology & Innovation</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#374151] mb-1.5">Partnership Overview <span className="text-red-500">*</span></label>
              <textarea rows={5} className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-ink)]" placeholder="Describe your partnership proposal, goals, and timeline..." />
            </div>
            <Button type="submit" variant="primary" size="lg">
              Submit Partnership Inquiry
              <ArrowRight className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </section>
    </PageLayout>
  );
}
