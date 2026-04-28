import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SupplierForm from "@/components/forms/SupplierForm";

export const metadata: Metadata = {
  title: "Supplier Registration",
  description:
    "Register as a commodity supplier. Veterra Global actively sources from producers across 30+ countries.",
};

const requirements = [
  "Registered business with verifiable trading history",
  "Ability to supply minimum volumes on a commercial basis",
  "Relevant certifications and quality documentation",
  "Compliance with our sanctions screening process",
  "Willingness to provide independent inspection at loading",
  "References from prior commercial buyers or trading counterparties",
];

export default function SuppliersPage() {
  return (
    <>
      <section className="bg-background pt-[72px] pb-16">
        <Container className="pt-12">
          <Breadcrumb
            items={[{ label: "Partner With Us", href: "/partner-with-us" }, { label: "Suppliers" }]}
            className="mb-8"
          />
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">For Suppliers</p>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-5 leading-tight">
              Access Global
              <br />
              <span className="text-gold">Offtake Markets.</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              We are actively seeking quality producers and exporters across all commodity sectors we trade.
              Register your capacity and we will evaluate your profile for current and future purchasing needs.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-pad bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-text-primary mb-5">What We Look For</h2>
              <ul className="space-y-3 mb-8">
                {requirements.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-sm text-text-secondary">
                    <span className="text-gold mt-0.5 shrink-0">✓</span>
                    {r}
                  </li>
                ))}
              </ul>
              <div className="surface-card-elevated p-5 rounded-lg">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-2">Due Diligence Note</p>
                <p className="text-xs text-text-muted leading-relaxed">
                  All supplier registrations are subject to our standard compliance review including
                  sanctions screening, KYC verification, and quality credential validation before
                  any commercial agreement is entered into.
                </p>
              </div>
            </div>
            <div className="lg:col-span-3">
              <h2 className="text-xl font-bold text-text-primary mb-5">Supplier Registration Form</h2>
              <SupplierForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
