import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import GeneralInquiryForm from "@/components/forms/GeneralInquiryForm";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { contactPaths, regionalOffices } from "@/lib/data/siteContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Veterra Global or route your request to the right commercial, sourcing, supplier, or partnership workflow.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-background pt-[72px] pb-16">
        <Container className="pt-12">
          <Breadcrumb items={[{ label: "Contact" }]} className="mb-8" />
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Contact</p>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-5 leading-tight">
              Start the right
              <br />
              <span className="text-gold">commercial conversation.</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              Use the route that best matches your request. Structured forms reach the relevant team faster, while the general inquiry path remains open for everything else.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-pad bg-surface">
        <Container>
          <SectionHeader
            eyebrow="Best Route"
            title="Choose the path that fits your request"
            subtitle="Each route is tuned for a different stage of the buyer, supplier, or partner workflow."
            className="mb-10"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {contactPaths.map((path) => (
              <Link
                key={path.href}
                href={path.href}
                className="group surface-card p-6 rounded-lg hover:border-gold/40 transition-all duration-200"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Specialized Route</p>
                <h2 className="text-lg font-bold text-text-primary group-hover:text-gold transition-colors duration-200 mb-3">
                  {path.title}
                </h2>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">{path.description}</p>
                <span className="inline-flex items-center gap-2 text-sm text-gold">
                  Open route
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-10 items-start">
            <div>
              <SectionHeader
                eyebrow="General Inquiry"
                title="Not sure which route fits?"
                subtitle="Send a general message and we will route it to the right team without losing the context you provide."
                className="mb-8"
              />
              <GeneralInquiryForm />
            </div>

            <div className="space-y-6">
              <div className="surface-card-elevated p-6 rounded-lg">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Assurance Note</p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Inquiry data is handled confidentially and shared only with the teams responsible for evaluating your request. If you need to share supporting documents later, we will route you to the appropriate secure workflow.
                </p>
              </div>
              <div className="surface-card p-6 rounded-lg">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Response Expectations</p>
                <ul className="space-y-3 text-sm text-text-secondary">
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-0.5">1</span>
                    Quote and sourcing requests are prioritized during business hours.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-0.5">2</span>
                    Compliance or documentation questions are routed to the responsible review team.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-0.5">3</span>
                    If your request is urgent, include commodity, market, and timing context in the first message.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-pad bg-surface">
        <Container>
          <SectionHeader
            eyebrow="Regional Coverage"
            title="Where to reach us"
            subtitle="Commercial support is coordinated across our core operating regions."
            className="mb-10"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {regionalOffices.map((office) => (
              <div key={office.city} className="surface-card-elevated p-6 rounded-lg">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">{office.timezone}</p>
                <h2 className="text-xl font-bold text-text-primary mb-1">{office.city}</h2>
                <p className="text-sm text-text-secondary mb-3">{office.country}</p>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">{office.focus}</p>
                <a href={`mailto:${office.email}`} className="text-sm text-gold hover:text-gold-light transition-colors duration-200">
                  {office.email}
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}