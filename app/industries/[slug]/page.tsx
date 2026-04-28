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
  const title = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  return { title: `${title} Industry`, description: `Commodity solutions for the ${title} sector.` };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <PageLayout>
      <section className="bg-[#0f2040] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: "Industries", href: "/industries" }, { label: title }]}
            dark
          />
          <div className="mt-8 max-w-3xl">
            <span className="text-[#c8a84b] text-xs font-bold uppercase tracking-widest mb-4 block">
              Industry Focus
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">{title}</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              We provide tailored commodity sourcing, logistics, and documentation
              solutions for {title} businesses operating across international markets.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/partner-with-us/buyers" variant="secondary">
                Request a Quote
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/products" variant="outline">
                Browse Products
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-[#0f2040] mb-6">
              How We Serve the {title} Sector
            </h2>
            <p className="text-[#6b7280] leading-relaxed mb-6">
              Our {title} clients rely on us for consistent commodity supply, structured
              pricing, and trade documentation that meets their procurement and compliance
              requirements. We act as a principal counterpart — taking on logistics,
              quality, and regulatory responsibility so you can focus on your operations.
            </p>
            <p className="text-[#6b7280] leading-relaxed mb-8">
              With established relationships across origin markets and a disciplined
              approach to documentation, we reduce procurement risk and provide price
              transparency across the full supply chain.
            </p>
            <Button href="/capabilities" variant="primary">
              See Our Capabilities
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      <CTABand />
    </PageLayout>
  );
}
