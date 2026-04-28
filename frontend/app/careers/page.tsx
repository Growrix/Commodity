import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { careerPillars, careersContactEmail, openRoles } from "@/lib/data/siteContent";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore open roles and learn how Veterra Global hires for commercial, operations, and supplier onboarding teams.",
};

export default function CareersPage() {
  return (
    <>
      <section className="bg-background pt-[72px] pb-16">
        <Container className="pt-12">
          <Breadcrumb items={[{ label: "Careers" }]} className="mb-8" />
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Careers</p>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-5 leading-tight">
              Build your career where
              <br />
              <span className="text-gold">trade execution is real.</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              We hire for judgment, ownership, and clarity under pressure. If you want proximity to real commercial flows instead of internal theatre, this is where the work happens.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-pad bg-surface">
        <Container>
          <SectionHeader
            eyebrow="Why Join Us"
            title="A commercial team with operating range"
            subtitle="We work across sourcing, shipping, documentation, and structured trade support with a bias toward execution quality."
            className="mb-10"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {careerPillars.map((pillar) => (
              <div key={pillar.title} className="surface-card-elevated p-6 rounded-lg">
                <h2 className="text-lg font-bold text-text-primary mb-3">{pillar.title}</h2>
                <p className="text-sm text-text-secondary leading-relaxed">{pillar.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad bg-background">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10">
            <SectionHeader
              eyebrow="Open Roles"
              title="Current hiring priorities"
              subtitle="These roles support the next stage of our commercial, operations, and onboarding capability."
            />
            <a href={`mailto:${careersContactEmail}`} className="btn-outline-gold text-sm">
              Send General Interest
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {openRoles.map((role) => (
              <div key={role.slug} className="surface-card p-6 rounded-lg">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">{role.team}</p>
                <h2 className="text-xl font-bold text-text-primary mb-2">{role.title}</h2>
                <p className="text-sm text-text-secondary mb-4">{role.location}</p>
                <p className="text-sm text-text-secondary leading-relaxed mb-6">{role.summary}</p>
                <a href={`mailto:${careersContactEmail}?subject=Application%20-%20${encodeURIComponent(role.title)}`} className="text-sm text-gold hover:text-gold-light transition-colors duration-200">
                  Apply by email
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad bg-surface">
        <Container>
          <div className="surface-card-elevated p-8 rounded-lg grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] gap-6 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Application Note</p>
              <h2 className="text-2xl font-bold text-text-primary mb-3">No suitable role today?</h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                We still want to hear from strong operators with relevant commodity, logistics, compliance, or finance experience. Send a concise note with the markets or functions where you can add immediate value.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={`mailto:${careersContactEmail}`} className="btn-gold justify-center text-sm">
                Send General Interest
              </a>
              <Link href="/about" className="btn-outline-gold justify-center text-sm">
                Learn About Us
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}