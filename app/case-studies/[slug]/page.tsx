import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import CTABand from "@/components/sections/CTABand";
import Button from "@/components/ui/Button";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const title = slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  return { title: `Case Study: ${title}`, description: `Read how GlobalTrade executed this trade program.` };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  return (
    <PageLayout>
      <section className="bg-[var(--color-ink)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Insights", href: "/insights" }, { label: "Case Study" }]} dark />
          <div className="mt-8 max-w-3xl">
            <span className="text-[var(--color-gold)] text-xs font-bold uppercase tracking-widest mb-4 block">Case Study</span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">{title}</h1>
            <p className="text-xl text-white/60 leading-relaxed">
              How GlobalTrade Commodities structured and executed this trade program
              for a buyer facing sourcing, logistics, and compliance constraints.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-4 mb-10">
            {["Commodity", "Volume", "Corridor"].map((label) => (
              <div key={label} className="bg-[var(--color-surface)] rounded-lg p-4 text-center border border-[#e5e7eb]">
                <p className="text-xs text-[#6b7280] mb-1">{label}</p>
                <p className="font-bold text-[var(--color-ink)]">—</p>
              </div>
            ))}
          </div>
          <h2 className="text-xl font-bold text-[var(--color-ink)] mb-4">The Challenge</h2>
          <p className="text-[#6b7280] leading-relaxed mb-6">
            The client faced a combination of origin market disruption, tight delivery
            windows, and documentation requirements that required a responsive and
            experienced trading counterpart.
          </p>
          <h2 className="text-xl font-bold text-[var(--color-ink)] mb-4">Our Approach</h2>
          <p className="text-[#6b7280] leading-relaxed mb-6">
            We sourced from alternative origins, coordinated logistics across multiple
            ports, and ensured all documentation met the buyer's LC requirements on time.
          </p>
          <h2 className="text-xl font-bold text-[var(--color-ink)] mb-4">Result</h2>
          <p className="text-[#6b7280] leading-relaxed mb-8">
            Delivery was completed on schedule, within agreed pricing parameters,
            with full third-party quality certification — exceeding the client's
            supply program requirements.
          </p>
          <Button href="/partner-with-us/buyers" variant="primary">
            Start Your Inquiry
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      <CTABand />
    </PageLayout>
  );
}
