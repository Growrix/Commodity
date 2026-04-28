import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Package, Factory, Handshake } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Partner With Us",
  description: "Whether you are a buyer, supplier, or strategic partner — there is a path designed for your commercial intent.",
};

const paths = [
  {
    icon: Package,
    slug: "buyers",
    tag: "Source Commodities",
    title: "For Buyers",
    description:
      "You need consistent, competitively priced commodity supply with compliant documentation and reliable logistics. We are your counterpart.",
    cta: "Request a Quote",
    accent: true,
  },
  {
    icon: Factory,
    slug: "suppliers",
    tag: "Join Our Network",
    title: "For Suppliers",
    description:
      "You produce or hold commodity stock and need access to international buyers. Register as a verified supplier and connect with our global trading desk.",
    cta: "Register as Supplier",
    accent: false,
  },
  {
    icon: Handshake,
    slug: "partners",
    tag: "Strategic Partnership",
    title: "For Partners",
    description:
      "You are exploring a structured commercial collaboration, joint venture, or long-term program. Initiate a strategic partnership conversation.",
    cta: "Explore Partnership",
    accent: false,
  },
];

export default function PartnerWithUsPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative bg-[var(--color-ink)] text-white py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2400&q=80"
            alt="Business partnership and trading"
            fill
            className="object-cover object-center opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-ink)] via-[var(--color-ink)]/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Partner With Us" }]} dark />
          <div className="mt-10 max-w-2xl animate-fade-up">
            <span className="text-[var(--color-gold)] text-[11px] font-bold uppercase tracking-[0.18em] mb-4 block">
              Work With Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.08] tracking-tight">
              The Right Commercial Path for Your Intent
            </h1>
            <p className="text-lg text-white/55 leading-relaxed">
              Whether you source, supply, or seek to collaborate — we have structured onboarding paths for each commercial relationship.
            </p>
          </div>
        </div>
      </section>

      {/* Paths */}
      <section className="py-24 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-[var(--color-gold)] text-[11px] font-bold uppercase tracking-[0.18em] mb-3 block">
              Choose Your Path
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[var(--color-ink)] leading-[1.1] tracking-tight">
              How Would You Like to Engage?
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {paths.map(({ icon: Icon, slug, tag, title, description, cta, accent }, i) => (
              <AnimatedSection key={slug} delay={i * 80}>
                <div
                  className={`relative rounded-[var(--radius-xl)] p-8 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 ${
                    accent
                      ? "bg-[var(--color-gold)] text-[var(--color-ink)]"
                      : "bg-[var(--color-ink)] text-white border border-white/0 hover:border-[var(--color-gold)]/20"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-[var(--radius-sm)] flex items-center justify-center mb-6 ${
                      accent ? "bg-[var(--color-ink)]/15" : "bg-[var(--color-gold)]/15 border border-[var(--color-gold)]/20"
                    }`}
                  >
                    <Icon className={`w-6 h-6 ${accent ? "text-[var(--color-ink)]" : "text-[var(--color-gold)]"}`} />
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest mb-3 ${accent ? "text-[var(--color-ink)]/60" : "text-[var(--color-gold)]"}`}>
                    {tag}
                  </span>
                  <h2 className={`text-2xl font-bold mb-3 leading-snug ${accent ? "text-[var(--color-ink)]" : "text-white"}`}>
                    {title}
                  </h2>
                  <p className={`text-sm leading-relaxed mb-8 flex-1 ${accent ? "text-[var(--color-ink)]/65" : "text-white/45"}`}>
                    {description}
                  </p>
                  <Link
                    href={`/partner-with-us/${slug}`}
                    className={`inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 group/cta ${
                      accent ? "text-[var(--color-ink)]" : "text-[var(--color-gold)] hover:text-[var(--color-gold-light)]"
                    }`}
                  >
                    {cta}
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* General enquiry */}
      <section className="py-16 bg-[var(--color-surface-off)] border-t border-[var(--color-border)]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[var(--color-ink)] mb-3">Not sure which path is right?</h2>
          <p className="text-[var(--color-text-muted)] mb-6">
            Send us a general enquiry and our team will route you to the right commercial contact.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[var(--color-ink)] text-white font-medium px-6 py-3 rounded hover:bg-[var(--color-ink-muted)] transition-all duration-200"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
