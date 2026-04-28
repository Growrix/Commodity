import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { capabilities } from "@/lib/data/capabilities";

export default function CapabilityCards({ limit = 6 }: { limit?: number }) {
  const displayed = capabilities.slice(0, limit);

  return (
    <section className="section-pad bg-surface">
      <Container>
        <SectionHeader
          eyebrow="How We Work"
          title={<>End-to-End <span className="text-gold">Trade Execution</span></>}
          subtitle="We are not a broker. We manage the full commercial journey — from origin to destination — so you don't have to."
          className="mb-12"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayed.map((cap) => (
            <Link
              key={cap.slug}
              href={`/capabilities/${cap.slug}`}
              className="group surface-card-elevated p-6 hover:border-gold/40 transition-all duration-200 rounded-lg"
            >
              <div className="text-2xl mb-4">{cap.icon}</div>
              <h3 className="text-base font-bold text-text-primary mb-2 group-hover:text-gold transition-colors duration-200">
                {cap.name}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {cap.summary}
              </p>
              <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-gold uppercase tracking-wider">
                Learn more
                <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
