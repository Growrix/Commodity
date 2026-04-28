import Link from "next/link";
import Container from "@/components/ui/Container";

const panels = [
  {
    audience: "Buyers",
    eyebrow: "For Buyers",
    heading: "Source Reliably. Deliver On Time.",
    body: "Request pricing, discuss volume requirements, and build a supply programme that matches your procurement cycle.",
    cta: "Request a Quote",
    href: "/contact#quote",
    primary: true,
  },
  {
    audience: "Suppliers",
    eyebrow: "For Suppliers",
    heading: "Access Global Offtake Markets.",
    body: "Register your products and capacity. We are actively seeking quality suppliers across all commodity sectors we trade.",
    cta: "Become a Supplier",
    href: "/partner-with-us/suppliers",
    primary: false,
  },
  {
    audience: "Partners",
    eyebrow: "For Partners",
    heading: "Grow With a Trade Execution Partner.",
    body: "Logistics, finance, distribution, and market development partnerships. Discuss how we can structure a joint commercial model.",
    cta: "Explore Partnerships",
    href: "/partner-with-us/partners",
    primary: false,
  },
];

interface CTABandProps {
  excludeAudience?: string;
}

export default function CTABand({ excludeAudience }: CTABandProps) {
  const filteredPanels = excludeAudience
    ? panels.filter((p) => p.audience !== excludeAudience)
    : panels;

  return (
    <section className="bg-surface border-y border-border">
      <Container className="py-0">
        <div className={`grid grid-cols-1 md:grid-cols-${filteredPanels.length} divide-y md:divide-y-0 md:divide-x divide-border`}>
          {filteredPanels.map((panel) => (
            <div
              key={panel.audience}
              className={`px-6 py-10 lg:px-10 lg:py-12 ${
                panel.primary ? "bg-gold/5" : ""
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">
                {panel.eyebrow}
              </p>
              <h3 className="text-xl font-bold text-text-primary mb-3 leading-snug">
                {panel.heading}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                {panel.body}
              </p>
              <Link
                href={panel.href}
                className={panel.primary ? "btn-gold text-sm" : "btn-outline-gold text-sm"}
              >
                {panel.cta}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
