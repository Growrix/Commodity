import type { Metadata } from "next";
import { CheckCircle, Globe, Users, Award, Scale } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import CTABand from "@/components/sections/CTABand";
import SectionHeader from "@/components/sections/SectionHeader";
import Button from "@/components/ui/Button";
import { ArrowRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "GlobalTrade Commodities — who we are, how we operate, and why the world's commodity buyers and suppliers trust us.",
};

const leadership = [
  { name: "Marcus Heider", role: "Chief Executive Officer", location: "Geneva" },
  { name: "Amara Osei-Bonsu", role: "Chief Commercial Officer", location: "Dubai" },
  { name: "Lena Kowalska", role: "Head of Operations", location: "Warsaw" },
  { name: "Rafael Montoya", role: "Regional Director, Americas", location: "São Paulo" },
];

const offices = [
  { city: "Geneva", country: "Switzerland", role: "Global Headquarters" },
  { city: "Dubai", country: "UAE", role: "Middle East & Africa Hub" },
  { city: "Singapore", country: "Singapore", role: "Asia Pacific Hub" },
  { city: "São Paulo", country: "Brazil", role: "Americas Hub" },
];

const milestones = [
  { year: "2004", event: "Founded with focus on East European grain markets" },
  { year: "2008", event: "Expanded into fertilizer and energy trading" },
  { year: "2012", event: "Opened Singapore office; entered Southeast Asia" },
  { year: "2016", event: "Surpassed $500M annual trade volume" },
  { year: "2019", event: "Launched industrial materials division" },
  { year: "2023", event: "Reached $2B+ annual volume across 60+ countries" },
];

export default function AboutPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-[#0f2040] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: "About Us" }]}
            dark
          />
          <div className="mt-8 max-w-3xl">
            <span className="text-[#c8a84b] text-xs font-bold uppercase tracking-widest mb-4 block">
              Our Company
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              A Trusted Partner in Global Commodity Trade
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Since 2004, GlobalTrade Commodities has built structured trading
              operations across Agriculture, Energy, Fertilizers, and Industrial
              Materials — connecting supply with demand across more than 60 countries.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/contact" variant="secondary">
                Speak With Our Team
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/trust-center" variant="outline">
                Download Company Profile
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeader
                eyebrow="How We Operate"
                title="Structure, Discipline, and Commercial Clarity"
                align="left"
              />
              <p className="text-[#6b7280] mb-6 leading-relaxed">
                We operate as a principal trading company — sourcing, structuring,
                and delivering commodity transactions with full operational responsibility.
                Our clients engage us for consistent supply, compliant documentation,
                and market insight, not just brokerage.
              </p>
              <p className="text-[#6b7280] mb-8 leading-relaxed">
                Our trading philosophy is built on long-term relationships, transparent
                pricing structures, and a disciplined approach to counterparty risk
                and logistics execution.
              </p>
              <div className="space-y-3">
                {[
                  "Principal-to-principal trading structure",
                  "Verified supplier and buyer onboarding",
                  "Full KYC and AML compliance",
                  "Third-party quality inspection at all stages",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#c8a84b] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#374151]">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Globe, label: "60+ Countries", sub: "Active trading presence" },
                { icon: Award, label: "ISO 9001", sub: "Quality management certified" },
                { icon: Users, label: "200+ Team", sub: "Global professionals" },
                { icon: Scale, label: "Zero Sanctions", sub: "Clean compliance record" },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="bg-[#f8f9fa] rounded-lg p-5 border border-[#e5e7eb]">
                  <Icon className="w-6 h-6 text-[#0f2040] mb-2" />
                  <div className="font-bold text-[#0f2040]">{label}</div>
                  <div className="text-sm text-[#6b7280]">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Leadership"
            title="Accountable, Experienced Leadership"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map(({ name, role, location }) => (
              <div key={name} className="bg-white rounded-lg p-6 border border-[#e5e7eb] text-center">
                <div className="w-16 h-16 bg-[#0f2040] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-bold text-[#0f2040] mb-1">{name}</h3>
                <p className="text-sm text-[#6b7280] mb-2">{role}</p>
                <div className="flex items-center justify-center gap-1 text-xs text-[#c8a84b]">
                  <MapPin className="w-3 h-3" />
                  {location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Network */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Global Network"
            title="Regional Offices & Presence"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map(({ city, country, role }) => (
              <div key={city} className="text-center">
                <div className="w-12 h-12 bg-[#0f2040] rounded-full mx-auto mb-3 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-[#c8a84b]" />
                </div>
                <h3 className="font-bold text-[#0f2040]">{city}</h3>
                <p className="text-sm text-[#6b7280]">{country}</p>
                <span className="inline-block mt-1 text-xs font-medium text-[#c8a84b] bg-amber-50 px-2 py-0.5 rounded-full">
                  {role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-[#0f2040]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Journey"
            title="Two Decades of Trading Excellence"
            dark
          />
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-white/20 hidden md:block" />
            <div className="space-y-6">
              {milestones.map(({ year, event }) => (
                <div key={year} className="flex gap-6 items-start md:pl-12 relative">
                  <div className="hidden md:flex absolute left-0 w-8 h-8 bg-[#c8a84b] rounded-full items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg px-5 py-4 flex items-center gap-4 flex-1">
                    <span className="text-[#c8a84b] font-bold text-lg w-12 flex-shrink-0">
                      {year}
                    </span>
                    <span className="text-gray-200 text-sm">{event}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </PageLayout>
  );
}
