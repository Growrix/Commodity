import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import PartnershipForm from "@/components/forms/PartnershipForm";

export const metadata: Metadata = {
  title: "Strategic Partnerships",
  description:
    "Explore logistics, finance, distribution, and market development partnership opportunities with Veterra Global.",
};

const partnerTypes = [
  {
    title: "Logistics & Freight",
    body: "Vessel operators, freight forwarders, port agents, and last-mile logistics providers active in our trading corridors.",
  },
  {
    title: "Trade Finance",
    body: "Banks, credit insurers, and alternative finance providers with commodity trade finance expertise.",
  },
  {
    title: "Storage & Warehousing",
    body: "Terminal and warehouse operators in major origin and destination ports relevant to our commodity portfolio.",
  },
  {
    title: "Market Development",
    body: "Distributors, agents, and joint-venture partners with established commercial relationships in target markets.",
  },
  {
    title: "Technology & Data",
    body: "Supply chain technology, trade documentation platforms, or commodity price data providers.",
  },
  {
    title: "Joint Ventures",
    body: "Organisations seeking to co-invest in origination, processing, or distribution infrastructure.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <section className="bg-background pt-[72px] pb-16">
        <Container className="pt-12">
          <Breadcrumb
            items={[{ label: "Partner With Us", href: "/partner-with-us" }, { label: "Partnerships" }]}
            className="mb-8"
          />
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">For Partners</p>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-5 leading-tight">
              Build Something
              <br />
              <span className="text-gold">Together.</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              We are open to commercial partnerships that create mutual value — logistics, finance,
              market development, or joint venture structures aligned with our core commodity operations.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-pad bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-text-primary mb-6">Partnership Types We Explore</h2>
              <div className="space-y-4">
                {partnerTypes.map((pt) => (
                  <div key={pt.title} className="surface-card-elevated p-4 rounded-lg">
                    <h3 className="text-sm font-bold text-gold mb-1">{pt.title}</h3>
                    <p className="text-xs text-text-secondary leading-relaxed">{pt.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-3">
              <h2 className="text-xl font-bold text-text-primary mb-5">Partnership Enquiry</h2>
              <PartnershipForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
