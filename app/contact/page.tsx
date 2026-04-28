import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Mail, Phone, MapPin, Clock } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Button from "@/components/ui/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with GlobalTrade Commodities. We respond to all inquiries within one business day.",
};

const contactPaths = [
  { title: "Request a Quote", description: "Source commodities with competitive pricing.", href: "/partner-with-us/buyers", cta: "Start Inquiry" },
  { title: "Supplier Enquiry", description: "Register or connect as a commodity supplier.", href: "/partner-with-us/suppliers", cta: "Register Now" },
  { title: "Partnership Inquiry", description: "Explore strategic commercial collaboration.", href: "/partner-with-us/partners", cta: "Get in Touch" },
  { title: "General Contact", description: "Any other enquiry — we will route to the right team.", href: "#general-form", cta: "Use Form Below" },
];

const offices = [
  { city: "Geneva", country: "Switzerland", role: "Global HQ", email: "trade@globaltrade.com", phone: "+41 22 000 0000", tz: "CET (UTC+1)" },
  { city: "Dubai", country: "UAE", role: "MEA Hub", email: "mea@globaltrade.com", phone: "+971 4 000 0000", tz: "GST (UTC+4)" },
  { city: "Singapore", country: "Singapore", role: "APAC Hub", email: "apac@globaltrade.com", phone: "+65 6000 0000", tz: "SGT (UTC+8)" },
];

export default function ContactPage() {
  return (
    <PageLayout>
      <section className="relative bg-[var(--color-ink)] text-white py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=80"
            alt="Modern office and business team"
            fill
            className="object-cover object-center opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-ink)] via-[var(--color-ink)]/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Contact" }]} dark />
          <div className="mt-10 max-w-2xl animate-fade-up">
            <span className="text-[var(--color-gold)] text-[11px] font-bold uppercase tracking-[0.18em] mb-4 block">Get in Touch</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.08] tracking-tight">
              Contact Our Team
            </h1>
            <p className="text-lg text-white/55 leading-relaxed">
              We respond to all inquiries within one business day. Use a specific form for faster routing to the right commercial contact.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Path Selector */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[var(--color-ink)] mb-8 text-center">What Can We Help You With?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactPaths.map(({ title, description, href, cta }) => (
              <div key={title} className="bg-[var(--color-surface)] border border-[#e5e7eb] rounded-xl p-5 text-center">
                <h3 className="font-bold text-[var(--color-ink)] mb-2">{title}</h3>
                <p className="text-sm text-[#6b7280] mb-4 leading-relaxed">{description}</p>
                <Button href={href} variant="outline" size="sm">
                  {cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Form */}
      <section id="general-form" className="py-20 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[var(--color-ink)] mb-6">General Inquiry</h2>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#374151] mb-1.5">Name <span className="text-red-500">*</span></label>
                    <input type="text" className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-ink)] bg-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#374151] mb-1.5">Company <span className="text-red-500">*</span></label>
                    <input type="text" className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-ink)] bg-white" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#374151] mb-1.5">Email <span className="text-red-500">*</span></label>
                  <input type="email" className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-ink)] bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#374151] mb-1.5">Topic</label>
                  <select className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-ink)] bg-white">
                    <option>Trading Inquiry</option>
                    <option>Logistics Question</option>
                    <option>Compliance & Documentation</option>
                    <option>Media & Press</option>
                    <option>Careers</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#374151] mb-1.5">Message <span className="text-red-500">*</span></label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-ink)] bg-white" placeholder="How can we help?" />
                </div>
                <Button type="submit" variant="primary">
                  Send Message
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--color-ink)] mb-6">Regional Offices</h2>
              <div className="space-y-4">
                {offices.map(({ city, country, role, email, phone, tz }) => (
                  <div key={city} className="bg-white border border-[#e5e7eb] rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-4 h-4 text-[var(--color-gold)]" />
                      <h3 className="font-bold text-[var(--color-ink)]">{city}, {country}</h3>
                      <span className="text-xs text-[var(--color-gold)] bg-amber-50 px-2 py-0.5 rounded-full ml-auto">{role}</span>
                    </div>
                    <div className="space-y-1.5 text-sm text-[#6b7280]">
                      <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-[var(--color-ink)]" />{email}</div>
                      <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-[var(--color-ink)]" />{phone}</div>
                      <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-[var(--color-ink)]" />{tz}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
