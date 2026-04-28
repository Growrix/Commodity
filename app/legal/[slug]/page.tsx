import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const title = slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  return { title, description: `GlobalTrade Commodities ${title}` };
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  return (
    <PageLayout>
      <section className="bg-[var(--color-ink)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Legal" }, { label: title }]} dark />
          <div className="mt-8">
            <h1 className="text-4xl font-bold mb-3">{title}</h1>
            <p className="text-white/60">Last updated: April 2026</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-[#6b7280] text-lg leading-relaxed mb-6">
              This {title} governs your use of the GlobalTrade Commodities website
              and related services. Please read it carefully.
            </p>
            <h2 className="text-xl font-bold text-[var(--color-ink)] mt-8 mb-4">Overview</h2>
            <p className="text-[#6b7280] leading-relaxed mb-6">
              GlobalTrade Commodities Ltd ("the Company") is committed to responsible
              data practices, transparent commercial conduct, and compliance with
              applicable law in all jurisdictions where we operate.
            </p>
            <h2 className="text-xl font-bold text-[var(--color-ink)] mt-8 mb-4">Contact</h2>
            <p className="text-[#6b7280] leading-relaxed mb-8">
              If you have questions about this {title}, please contact{" "}
              <span className="text-[var(--color-ink)] font-medium">legal@globaltrade.com</span>
            </p>
          </div>
          <Button href="/trust-center" variant="outline-white">
            Trust Center
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>
    </PageLayout>
  );
}
