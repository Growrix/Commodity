import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Search, ArrowUpRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

const HERO_IMAGE = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=80";

const POPULAR_SEARCHES = [
  { label: "Urea Granular", href: "/products/fertilizers" },
  { label: "Soybean Meal", href: "/products/agriculture" },
  { label: "Diesel EN590", href: "/products/energy" },
  { label: "Sulphur Lump", href: "/products/industrial-materials" },
  { label: "Trade Finance", href: "/capabilities/trade-finance" },
  { label: "West Africa Origin", href: "/markets/origins/west-africa" },
];

const QUICK_LINKS = [
  { label: "Browse All Products", href: "/products" },
  { label: "Industry Solutions", href: "/industries" },
  { label: "Trade Corridors", href: "/markets" },
  { label: "Insights & Reports", href: "/insights" },
];

export const metadata: Metadata = {
  title: "Search",
  description: "Search the GlobalTrade Commodities website.",
};

export default function SearchPage() {
  return (
    <PageLayout>
      {/* Hero with search */}
      <section className="relative bg-[var(--color-ink)] text-white py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={HERO_IMAGE} alt="Search" fill priority className="object-cover object-center opacity-20" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-ink)] via-[var(--color-ink)]/85 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Search" }]} dark />
          <div className="mt-10 max-w-3xl animate-fade-up">
            <span className="text-[var(--color-gold)] text-[11px] font-bold uppercase tracking-[0.18em] mb-4 block">Find What You Need</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-[1.08] tracking-tight">Search GlobalTrade</h1>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text-subtle)]" />
                <input
                  type="search"
                  placeholder="Search products, markets, insights..."
                  className="w-full pl-12 pr-4 py-4 rounded-[var(--radius-md)] text-[var(--color-text-secondary)] text-base focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] bg-white"
                />
              </div>
              <Button variant="gold" size="lg">Search</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular searches */}
      <section className="py-20 bg-[var(--color-surface)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="text-[var(--color-gold)] text-[11px] font-bold uppercase tracking-[0.18em] mb-3 block">Popular Searches</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-ink)] mb-8 tracking-tight">What others are looking for</h2>
            <div className="flex flex-wrap gap-3 mb-16">
              {POPULAR_SEARCHES.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[var(--color-surface-off)] hover:bg-[var(--color-ink)] hover:text-white text-[var(--color-text-secondary)] text-sm font-medium rounded-[var(--radius-pill)] border border-[var(--color-border)] hover:border-[var(--color-ink)] transition-all duration-200"
                >
                  {label}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <span className="text-[var(--color-gold)] text-[11px] font-bold uppercase tracking-[0.18em] mb-3 block">Or Browse</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-ink)] mb-8 tracking-tight">Jump to a section</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {QUICK_LINKS.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="flex items-center justify-between p-6 bg-white border border-[var(--color-border)] rounded-[var(--radius-lg)] hover:border-[var(--color-gold)]/40 hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 group"
                >
                  <span className="font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-gold)] transition-colors">{label}</span>
                  <ArrowUpRight className="w-5 h-5 text-[var(--color-text-subtle)] group-hover:text-[var(--color-gold)] transition-colors" />
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
}
