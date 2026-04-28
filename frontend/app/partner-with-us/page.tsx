import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "Buy from us, supply to us, or explore a strategic partnership with Veterra Global.",
};

const audiencePanels = [
  {
    href: "/partner-with-us/buyers",
    eyebrow: "Buyers",
    title: "Buy From Us",
    description:
      "We supply qualified buyers with reliable volumes, full documentation, and trade terms structured to your procurement cycle.",
    features: [
      "Request a Quote in 24 hours",
      "Specification-compliant supply",
      "Full certification pack on every cargo",
      "Origin flexibility across 30+ countries",
    ],
    cta: "Explore Buyer Path",
    variant: "primary" as const,
  },
  {
    href: "/partner-with-us/suppliers",
    eyebrow: "Suppliers",
    title: "Supply To Us",
    description:
      "Register as a supplier. We are actively seeking quality producers and exporters across all commodity sectors we trade.",
    features: [
      "Transparent onboarding process",
      "Long-term and spot purchasing",
      "Compliance-led counterparty",
      "Global offtake access",
    ],
    cta: "Register as a Supplier",
    variant: "outline" as const,
  },
  {
    href: "/partner-with-us/partners",
    eyebrow: "Partners",
    title: "Strategic Partnership",
    description:
      "Logistics, finance, distribution, market development. Discuss a joint commercial model that creates mutual value.",
    features: [
      "Logistics and freight partnerships",
      "Trade finance collaborations",
      "Market development joint ventures",
      "Storage and warehousing",
    ],
    cta: "Discuss a Partnership",
    variant: "outline" as const,
  },
];

export default function PartnerWithUsPage() {
  return (
    <>
      <section className="bg-background pt-[72px] pb-20">
        <Container className="pt-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Partner With Us</p>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
              Which Path
              <br />
              <span className="text-gold">Is Right for You?</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              Whether you are a buyer seeking reliable commodity supply, a producer seeking qualified
              offtakers, or an organisation looking to build a commercial partnership — we have a
              structured path for you.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-pad bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {audiencePanels.map((panel) => (
              <div
                key={panel.href}
                className={`surface-card p-8 rounded-lg flex flex-col ${
                  panel.variant === "primary" ? "border-gold/30 bg-gold-muted" : ""
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">
                  {panel.eyebrow}
                </p>
                <h2 className="text-2xl font-bold text-text-primary mb-3">{panel.title}</h2>
                <p className="text-sm text-text-secondary leading-relaxed mb-6">{panel.description}</p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {panel.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-text-secondary">
                      <span className="text-gold mt-0.5 shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={panel.href}
                  className={panel.variant === "primary" ? "btn-gold text-sm justify-center" : "btn-outline-gold text-sm justify-center"}
                >
                  {panel.cta}
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad bg-background">
        <Container className="text-center">
          <p className="text-text-secondary mb-2 text-sm">Not sure which path applies to you?</p>
          <h2 className="text-2xl font-bold text-text-primary mb-4">
            Just <span className="text-gold">Contact Us Directly</span>
          </h2>
          <p className="text-text-secondary mb-8 max-w-md mx-auto text-sm">
            Our commercial team will direct your enquiry to the right person within 24 hours.
          </p>
          <Link href="/contact" className="btn-gold">Contact Our Team</Link>
        </Container>
      </section>
    </>
  );
}
