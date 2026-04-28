import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Button from "@/components/ui/Button";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const title = slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  return { title, description: `GlobalTrade Commodities ${title}` };
}

export default async function TrustDocumentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  return (
    <PageLayout>
      <section className="bg-[var(--color-ink)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Trust Center", href: "/trust-center" }, { label: title }]} dark />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-white/60">Last updated: April 2026</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-[#6b7280] text-lg leading-relaxed mb-6">
              This document sets out GlobalTrade Commodities Ltd's policy and position
              regarding {title.toLowerCase()}. It applies to all personnel, agents,
              and third parties acting on behalf of the company.
            </p>
            <h2 className="text-xl font-bold text-[var(--color-ink)] mt-8 mb-4">Scope</h2>
            <p className="text-[#6b7280] leading-relaxed mb-6">
              This policy applies globally across all operations, jurisdictions, and
              commercial relationships in which GlobalTrade Commodities participates
              or has oversight.
            </p>
            <h2 className="text-xl font-bold text-[var(--color-ink)] mt-8 mb-4">Policy Statement</h2>
            <p className="text-[#6b7280] leading-relaxed mb-6">
              GlobalTrade Commodities is committed to the highest standards of
              commercial conduct, regulatory compliance, and ethical behaviour. This
              commitment extends to all our trading relationships and counterparties.
            </p>
            <h2 className="text-xl font-bold text-[var(--color-ink)] mt-8 mb-4">Contact</h2>
            <p className="text-[#6b7280] leading-relaxed mb-8">
              For questions about this document, please contact our compliance team at{" "}
              <span className="text-[var(--color-ink)] font-medium">compliance@globaltrade.com</span>
            </p>
          </div>
          <Button href="/trust-center" variant="outline-white">
            Back to Trust Center
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>
    </PageLayout>
  );
}
