import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import CTABand from "@/components/layout/CTABand";
import TrustStrip from "@/components/layout/TrustStrip";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Veterra Global is an international commodity trading company with a presence across Africa, Asia, Europe, and the Middle East.",
};

const milestones = [
  { year: "2013", event: "Company founded with focus on Black Sea grain origination" },
  { year: "2015", event: "Expanded into fertilizer trading across MENA and West Africa" },
  { year: "2017", event: "Opened Singapore office to serve Asian commodity markets" },
  { year: "2019", event: "Added Industrial Materials and Energy divisions" },
  { year: "2021", event: "Surpassed 1M MT annual traded volume across all sectors" },
  { year: "2023", event: "Nairobi office opened for Sub-Saharan Africa coverage" },
  { year: "2025", event: "Expanded origination network to 30+ countries" },
];

const leadership = [
  {
    name: "Alexander Voss",
    title: "Chief Executive Officer",
    bio: "20 years in international commodity trading across grains, oilseeds, and fertilizers. Previously senior trader at a top-3 global trading house.",
  },
  {
    name: "Priya Nair",
    title: "Chief Commercial Officer",
    bio: "Led commercial expansion into South and Southeast Asia. Deep relationships across the Indian subcontinent grain and fertilizer import sector.",
  },
  {
    name: "James Okonkwo",
    title: "Head of Africa Operations",
    bio: "Specialist in sub-Saharan Africa trade flows, port logistics, and regulatory frameworks. Based in Nairobi.",
  },
  {
    name: "Elena Marchetti",
    title: "Head of Trade Finance",
    bio: "Structured trade finance across 25+ countries. Expert in LC documentation, payment risk, and working capital management for commodity trades.",
  },
];

const compliancePoints = [
  "Sanctions screening on all counterparties before onboarding",
  "Anti-bribery and corruption policy covering all markets",
  "GAFTA and FOSFA standard contract terms",
  "SGS or equivalent third-party inspection on all cargoes",
  "Full audit trail from purchase to delivery",
  "Compliance review for all new supplier registrations",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background pt-[72px] pb-24">
        <Container className="pt-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">About Veterra Global</p>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
              Built for Serious
              <br />
              <span className="text-gold">Commercial Trade.</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl">
              Veterra Global is an independent commodity trading company specialising in Agriculture, Energy,
              Fertilizers, and Industrial Materials. We operate with the discipline of a trading house and the
              responsiveness of a dedicated commercial partner.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-gold">Speak With Our Team</Link>
              <Link href="/trust-center" className="btn-outline-gold">View Trust Center</Link>
            </div>
          </div>
        </Container>
      </section>

      <TrustStrip />

      {/* Company Overview */}
      <section className="section-pad bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                eyebrow="Our Operating Model"
                title={<>Execution-First. <span className="text-gold">Documentation-Led.</span></>}
                className="mb-6"
              />
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  We are not a brokerage. We buy, sell, and deliver physical commodities — taking
                  ownership of goods and managing the full commercial lifecycle from origin to
                  destination port.
                </p>
                <p>
                  Our operating philosophy is built around three disciplines: supply reliability through
                  origin diversification, risk management through contract discipline, and trust through
                  documentation transparency.
                </p>
                <p>
                  Every transaction we execute comes with a complete documentation pack — certificate of
                  quality, weight, origin, inspection, and all required trade compliance instruments.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "30+", label: "Origin Countries" },
                { value: "40+", label: "Destination Markets" },
                { value: "1M+", label: "MT Traded Annually" },
                { value: "4", label: "Commodity Sectors" },
                { value: "10+", label: "Years of Operation" },
                { value: "4", label: "Global Offices" },
              ].map((stat) => (
                <div key={stat.label} className="surface-card-elevated p-5 rounded-lg">
                  <p className="text-3xl font-bold text-gold">{stat.value}</p>
                  <p className="text-sm text-text-secondary mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Leadership */}
      <section className="section-pad bg-background" id="leadership">
        <Container>
          <SectionHeader
            eyebrow="Leadership"
            title="The Team Behind the Trades"
            subtitle="Experienced practitioners — not career administrators — running every commercial function."
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {leadership.map((person) => (
              <div key={person.name} className="surface-card p-6 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-surface-elevated border border-border-light flex items-center justify-center mb-4">
                  <span className="text-lg font-bold text-gold">{person.name[0]}</span>
                </div>
                <h3 className="text-base font-bold text-text-primary mb-0.5">{person.name}</h3>
                <p className="text-xs font-medium text-gold mb-3">{person.title}</p>
                <p className="text-sm text-text-secondary leading-relaxed">{person.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Global Network */}
      <section className="section-pad bg-surface" id="network">
        <Container>
          <SectionHeader
            eyebrow="Global Footprint"
            title={<>Four Offices. <span className="text-gold">One Team.</span></>}
            subtitle="Strategically located to serve commodity flows across the major import and export corridors."
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { city: "London", country: "United Kingdom", focus: "Headquarters, European trading", region: "Europe" },
              { city: "Dubai", country: "United Arab Emirates", focus: "MENA, South Asia & East Africa", region: "MENA" },
              { city: "Singapore", country: "Singapore", focus: "Southeast Asia & Asia-Pacific", region: "Asia" },
              { city: "Nairobi", country: "Kenya", focus: "Sub-Saharan Africa", region: "Africa" },
            ].map((office) => (
              <div key={office.city} className="surface-card-elevated p-6 rounded-lg">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">{office.region}</p>
                <h3 className="text-xl font-bold text-text-primary mb-0.5">{office.city}</h3>
                <p className="text-sm text-text-secondary mb-3">{office.country}</p>
                <p className="text-xs text-text-muted">{office.focus}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Compliance */}
      <section className="section-pad bg-background" id="compliance">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader
                eyebrow="Compliance & Ethics"
                title={<>Trust Is Built on <span className="text-gold">Standards.</span></>}
                className="mb-6"
              />
              <div className="space-y-4 text-text-secondary leading-relaxed mb-8">
                <p>
                  We apply the same standards to every trade regardless of volume or counterparty. Compliance is
                  not a box-ticking exercise — it is an operational discipline that protects buyers, suppliers, and
                  the integrity of every transaction we conduct.
                </p>
                <p>
                  Our approach aligns with the UK Bribery Act, EU sanctions frameworks, and the compliance
                  requirements of the international commodity trade finance community.
                </p>
              </div>
              <ul className="space-y-3">
                {compliancePoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-text-secondary">
                    <span className="text-gold mt-0.5 shrink-0">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeader
                eyebrow="Sustainability"
                title={<>Responsible <span className="text-gold">Sourcing Standards</span></>}
                className="mb-6"
              />
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  We apply environmental and social screening criteria to all new supplier relationships.
                  This includes reviewing deforestation risk, water stewardship practices, and labour
                  standards as part of our onboarding process.
                </p>
                <p>
                  We are actively building our ESG reporting capability and will publish our first
                  Responsible Sourcing Report in 2026. We encourage buyers with specific ESG requirements
                  to discuss certification and traceability needs directly with our commercial team.
                </p>
              </div>
              <Link href="/trust-center" className="btn-outline-gold mt-8 text-sm">
                View Trust Center Documentation
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="section-pad bg-surface">
        <Container>
          <SectionHeader
            eyebrow="Our History"
            title="Built Over a Decade of Active Trading"
            className="mb-12"
          />
          <div className="relative pl-8 border-l border-border-light space-y-8 max-w-2xl">
            {milestones.map((m) => (
              <div key={m.year} className="relative">
                <div className="absolute -left-[41px] w-3 h-3 rounded-full bg-gold border-2 border-background" />
                <p className="text-xs font-semibold text-gold mb-1">{m.year}</p>
                <p className="text-sm text-text-secondary leading-relaxed">{m.event}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
