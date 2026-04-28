import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Package, Factory, Handshake } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SectionHeader from "@/components/sections/SectionHeader";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Partner With Us",
  description: "Whether you are a buyer, supplier, or strategic partner — there is a path designed for your commercial intent.",
};

const paths = [
  {
    icon: Package,
    slug: "buyers",
    title: "For Buyers",
    subtitle: "Source Commodities",
    description:
      "You need consistent, competitively priced commodity supply with compliant documentation and reliable logistics. We are your counterpart.",
    cta: "Request a Quote",
    color: "border-blue-200 bg-blue-50",
    iconBg: "bg-[#0f2040]",
  },
  {
    icon: Factory,
    slug: "suppliers",
    title: "For Suppliers",
    subtitle: "Join Our Network",
    description:
      "You produce or hold commodity stock and need access to international buyers. Register as a verified supplier and connect with our global trading desk.",
    cta: "Register as Supplier",
    color: "border-green-200 bg-green-50",
    iconBg: "bg-green-700",
  },
  {
    icon: Handshake,
    slug: "partners",
    title: "For Partners",
    subtitle: "Strategic Partnership",
    description:
      "You are exploring a structured commercial collaboration, joint venture, or long-term program. Initiate a strategic partnership conversation.",
    cta: "Explore Partnership",
    color: "border-amber-200 bg-amber-50",
    iconBg: "bg-amber-700",
  },
];

export default function PartnerWithUsPage() {
  return (
    <PageLayout>
      <section className="bg-[#0f2040] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Partner With Us" }]} dark />
          <div className="mt-8 max-w-3xl">
            <span className="text-[#c8a84b] text-xs font-bold uppercase tracking-widest mb-4 block">Work With Us</span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              The Right Commercial Path for Your Intent
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Whether you source, supply, or seek to collaborate — we have structured
              onboarding paths for each commercial relationship.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Choose Your Path"
            title="How Would You Like to Engage?"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {paths.map(({ icon: Icon, slug, title, subtitle, description, cta, color, iconBg }) => (
              <div key={slug} className={`rounded-2xl border-2 p-8 ${color} flex flex-col`}>
                <div className={`w-14 h-14 ${iconBg} rounded-xl flex items-center justify-center mb-5`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#6b7280] mb-1">{subtitle}</span>
                <h2 className="text-2xl font-bold text-[#0f2040] mb-3">{title}</h2>
                <p className="text-sm text-[#6b7280] leading-relaxed mb-6 flex-1">{description}</p>
                <Button href={`/partner-with-us/${slug}`} variant="primary">
                  {cta}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f8f9fa]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#0f2040] mb-3">Not sure which path is right?</h2>
          <p className="text-[#6b7280] mb-6">
            Send us a general enquiry and our team will route you to the right commercial contact.
          </p>
          <Button href="/contact" variant="outline">
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>
    </PageLayout>
  );
}
