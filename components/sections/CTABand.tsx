import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const paths = [
  {
    tag: "For Buyers",
    title: "Source Commodities at Scale",
    description: "Get competitive pricing, verified supply, and compliant documentation for your procurement programs.",
    cta: "Request a Quote",
    href: "/partner-with-us/buyers",
    accent: true,
  },
  {
    tag: "For Suppliers",
    title: "Join Our Global Supplier Network",
    description: "Connect with international buyers and expand your market access through our verified supplier program.",
    cta: "Register as Supplier",
    href: "/partner-with-us/suppliers",
    accent: false,
  },
  {
    tag: "For Partners",
    title: "Explore Strategic Collaboration",
    description: "Long-term supply programs, joint ventures, and structured commercial partnerships.",
    cta: "Start a Conversation",
    href: "/partner-with-us/partners",
    accent: false,
  },
];

export default function CTABand() {
  return (
    <section className="bg-[var(--color-ink)] py-24 relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(var(--color-gold) 1px, transparent 1px), linear-gradient(90deg, var(--color-gold) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[var(--color-gold)] text-[11px] font-bold uppercase tracking-[0.18em] mb-3 block">
            Work With Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-[1.1] tracking-tight">
            One counterpart.<br />Every commercial need.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {paths.map(({ tag, title, description, cta, href, accent }) => (
            <div
              key={tag}
              className={`relative rounded-[var(--radius-xl)] p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                accent
                  ? "bg-[var(--color-gold)] text-[var(--color-ink)]"
                  : "bg-white/4 border border-white/8 text-white hover:border-[var(--color-gold)]/30 hover:bg-white/6"
              }`}
            >
              <span className={`text-[10px] font-bold uppercase tracking-widest mb-4 ${accent ? "text-[var(--color-ink)]/60" : "text-[var(--color-gold)]"}`}>
                {tag}
              </span>
              <h3 className={`text-xl font-bold mb-3 leading-snug ${accent ? "text-[var(--color-ink)]" : "text-white"}`}>
                {title}
              </h3>
              <p className={`text-sm leading-relaxed mb-8 flex-1 ${accent ? "text-[var(--color-ink)]/60" : "text-white/40"}`}>
                {description}
              </p>
              <Link
                href={href}
                className={`inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 group/cta ${
                  accent
                    ? "text-[var(--color-ink)]"
                    : "text-[var(--color-gold)] hover:text-[var(--color-gold-light)]"
                }`}
              >
                {cta}
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
