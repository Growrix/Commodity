import Link from "next/link";
import Container from "@/components/ui/Container";
import StatCard from "@/components/ui/StatCard";

const stats = [
  { value: "30+", label: "Origin countries" },
  { value: "40+", label: "Destination markets" },
  { value: "4", label: "Commodity sectors" },
  { value: "99.5%", label: "Delivery success rate" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-end bg-background overflow-hidden pt-[72px]">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      {/* Gold diagonal accent */}
      <div className="absolute top-1/4 right-0 w-[600px] h-px bg-gradient-to-l from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-1/3 left-0 w-[400px] h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <Container className="pb-24 pt-20 relative">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">
              Global Commodity Trading
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-[1.05] tracking-tight mb-6">
            Reliable Supply.
            <br />
            <span className="text-gold">Global</span> Reach.
            <br />
            Proven Execution.
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mb-10">
            Veterra Global sources, finances, and delivers agricultural commodities, energy products,
            fertilizers, and industrial materials across six continents — on specification, on time, with
            full documentation.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16">
            <Link href="/contact#quote" className="btn-gold text-base px-8 py-4">
              Request a Quote
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link href="/products" className="btn-outline-gold text-base px-8 py-4">
              Explore Products
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-border">
            {stats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
