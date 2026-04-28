import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import CTABand from "@/components/sections/CTABand";
import Button from "@/components/ui/Button";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const title = slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  return { title: `${title} Capability`, description: `Our ${title} capability in commodity trading.` };
}

export default async function CapabilityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title = slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  return (
    <PageLayout>
      <section className="bg-[#0f2040] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: "Capabilities", href: "/capabilities" }, { label: title }]}
            dark
          />
          <div className="mt-8 max-w-3xl">
            <span className="text-[#c8a84b] text-xs font-bold uppercase tracking-widest mb-4 block">
              Capability Detail
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">{title}</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Our {title} capability is built on industry expertise, technology, and
              long-term relationships — delivering consistent execution for commodity
              buyers and suppliers worldwide.
            </p>
            <Button href="/contact" variant="secondary">
              Discuss Your Program
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-bold text-[#0f2040] mb-6">How We Approach {title}</h2>
          <p className="text-[#6b7280] leading-relaxed mb-6">
            Our {title} function is a core part of every trade we execute. We do not
            outsource the critical elements of the commercial process — we build the
            capability in-house so our clients benefit from consistent quality, speed,
            and accountability.
          </p>
          <p className="text-[#6b7280] leading-relaxed mb-8">
            Whether you are a first-time buyer or a long-term program client, you will
            work with a dedicated team that understands your sector, your compliance
            requirements, and your logistics constraints.
          </p>
          <Button href="/capabilities" variant="outline">
            See All Capabilities
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      <CTABand />
    </PageLayout>
  );
}
