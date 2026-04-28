import type { Metadata } from "next";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import CTABand from "@/components/sections/CTABand";
import SectionHeader from "@/components/sections/SectionHeader";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the GlobalTrade Commodities team. Explore current opportunities in trading, logistics, and operations.",
};

const openings = [
  { title: "Junior Commodities Trader — Agriculture", location: "Geneva", type: "Full-time", team: "Trading" },
  { title: "Trade Finance Analyst", location: "Dubai", type: "Full-time", team: "Finance" },
  { title: "Logistics Coordinator — APAC", location: "Singapore", type: "Full-time", team: "Operations" },
  { title: "Market Intelligence Analyst", location: "Geneva / Remote", type: "Full-time", team: "Research" },
  { title: "Compliance Officer — AML/KYC", location: "Geneva", type: "Full-time", team: "Compliance" },
];

export default function CareersPage() {
  return (
    <PageLayout>
      <section className="bg-[#0f2040] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Careers" }]} dark />
          <div className="mt-8 max-w-3xl">
            <span className="text-[#c8a84b] text-xs font-bold uppercase tracking-widest mb-4 block">Join Our Team</span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">Careers at GlobalTrade</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              We are building a world-class commodity trading operation and hiring
              across trading, finance, logistics, and operations.
            </p>
            <Button href="/contact" variant="secondary">
              Send Open Application
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Open Positions" title="Current Opportunities" />
          <div className="space-y-4">
            {openings.map(({ title, location, type, team }) => (
              <div
                key={title}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#f8f9fa] border border-[#e5e7eb] rounded-xl px-6 py-5 hover:shadow-md transition-all"
              >
                <div>
                  <h3 className="font-bold text-[#0f2040] mb-1">{title}</h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-[#6b7280]">
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{location}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{type}</span>
                    <span className="text-xs bg-[#0f2040] text-white px-2 py-0.5 rounded-full">{team}</span>
                  </div>
                </div>
                <Button href="/contact" variant="outline" size="sm">
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </PageLayout>
  );
}
