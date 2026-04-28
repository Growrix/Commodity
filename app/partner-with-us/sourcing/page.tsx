import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Sourcing Request",
  description: "Submit a detailed commodity sourcing request to GlobalTrade's trading desk.",
};

export default function SourcingRequestPage() {
  return (
    <PageLayout>
      <section className="bg-[#0f2040] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Partner With Us", href: "/partner-with-us" }, { label: "Sourcing Request" }]} dark />
          <div className="mt-8 max-w-3xl">
            <span className="text-[#c8a84b] text-xs font-bold uppercase tracking-widest mb-4 block">Sourcing</span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Sourcing Request</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Submit your sourcing requirements and our trading desk will respond
              with matching origin options, pricing, and logistics proposals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0f2040] mb-6">Your Sourcing Requirements</h2>
          <form className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-[#374151] mb-1.5">Name <span className="text-red-500">*</span></label>
                <input type="text" className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0f2040]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#374151] mb-1.5">Company <span className="text-red-500">*</span></label>
                <input type="text" className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0f2040]" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#374151] mb-1.5">Email <span className="text-red-500">*</span></label>
              <input type="email" className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0f2040]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#374151] mb-1.5">Commodity & Specification <span className="text-red-500">*</span></label>
              <textarea rows={3} className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0f2040]" placeholder="e.g. Urea 46% granular, 5,000 MT, port of destination Colombo..." />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-[#374151] mb-1.5">Volume Required</label>
                <input type="text" className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0f2040]" placeholder="e.g. 10,000 MT" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#374151] mb-1.5">Delivery Window</label>
                <input type="text" className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0f2040]" placeholder="e.g. July - August 2026" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#374151] mb-1.5">Payment Terms Preference</label>
              <select className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0f2040] bg-white">
                <option value="">Select payment preference</option>
                <option>L/C at sight</option>
                <option>D/P</option>
                <option>Open account — 30 days</option>
                <option>Open account — 60 days</option>
                <option>To be discussed</option>
              </select>
            </div>
            <Button type="submit" variant="primary" size="lg">
              Submit Sourcing Request
              <ArrowRight className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </section>
    </PageLayout>
  );
}
