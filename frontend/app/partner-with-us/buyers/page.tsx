import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import QuoteForm from "@/components/forms/QuoteForm";
import SourcingForm from "@/components/forms/SourcingForm";
import Breadcrumb from "@/components/layout/Breadcrumb";

export const metadata: Metadata = {
  title: "Buy From Us",
  description:
    "Request a quote or submit a sourcing request. Veterra Global supplies commodity buyers across 40+ destination markets.",
};

const process = [
  { step: 1, title: "Submit a Request", body: "Fill in the quote or sourcing form with your commodity, volume, destination, and timeline." },
  { step: 2, title: "Trade Desk Review", body: "Our team reviews your requirements and prepares an offer within 24 hours on business days." },
  { step: 3, title: "Commercial Discussion", body: "We discuss pricing, specification, and trade terms — including incoterm, payment, and logistics." },
  { step: 4, title: "Contract & Execution", body: "Once agreed, we execute the trade, manage logistics, and deliver with a full documentation pack." },
];

export default function BuyersPage() {
  return (
    <>
      <section className="bg-background pt-[72px] pb-16">
        <Container className="pt-12">
          <Breadcrumb
            items={[{ label: "Partner With Us", href: "/partner-with-us" }, { label: "Buyers" }]}
            className="mb-8"
          />
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">For Buyers</p>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-5 leading-tight">
              Reliable Supply.
              <br />
              <span className="text-gold">Full Documentation.</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              We supply qualified commercial buyers with physical commodities — on specification, on
              time, with the documentation your procurement and compliance teams need.
            </p>
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="bg-surface py-14">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-6">How It Works</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {process.map((p) => (
              <div key={p.step} className="surface-card-elevated p-5 rounded-lg">
                <div className="w-8 h-8 rounded-full border border-gold/40 bg-gold-muted flex items-center justify-center text-sm font-bold text-gold mb-3">
                  {p.step}
                </div>
                <h3 className="text-sm font-bold text-text-primary mb-2">{p.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Forms */}
      <section className="section-pad bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div id="quote">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-2">Option 1</p>
              <h2 className="text-2xl font-bold text-text-primary mb-2">Request a Quote</h2>
              <p className="text-sm text-text-secondary mb-6">
                Know what you need? Submit your specifications and we&apos;ll come back with pricing and availability.
              </p>
              <QuoteForm />
            </div>
            <div id="sourcing">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-2">Option 2</p>
              <h2 className="text-2xl font-bold text-text-primary mb-2">Sourcing Request</h2>
              <p className="text-sm text-text-secondary mb-6">
                Looking for a hard-to-source commodity or multi-origin supply? Tell us what you need and we&apos;ll find it.
              </p>
              <SourcingForm />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-12">
        <Container className="text-center">
          <p className="text-sm text-text-secondary">
            All enquiries are treated confidentially.{" "}
            <Link href="/trust-center" className="text-gold hover:text-gold-light">
              View our Trust Center
            </Link>{" "}
            for compliance and documentation standards.
          </p>
        </Container>
      </section>
    </>
  );
}
