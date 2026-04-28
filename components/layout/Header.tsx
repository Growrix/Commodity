"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Globe, ArrowUpRight } from "lucide-react";
import { clsx } from "clsx";

const navigation = [
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Agriculture", href: "/products/agriculture", desc: "Grains, oilseeds & soft commodities" },
      { label: "Energy", href: "/products/energy", desc: "Refined petroleum & LPG" },
      { label: "Fertilizers", href: "/products/fertilizers", desc: "Nitrogen, phosphate & potassium" },
      { label: "Industrial Materials", href: "/products/industrial-materials", desc: "Sulfur, metals & chemicals" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Food & Beverage", href: "/industries/food-beverage", desc: "Global food supply chains" },
      { label: "Manufacturing", href: "/industries/manufacturing", desc: "Industrial inputs & materials" },
      { label: "Energy & Power", href: "/industries/energy-power", desc: "Fuel & power generation" },
      { label: "Agriculture", href: "/industries/agriculture", desc: "Fertilizer & input programs" },
    ],
  },
  {
    label: "Capabilities",
    href: "/capabilities",
    children: [
      { label: "Origination", href: "/capabilities/origination", desc: "40+ verified source markets" },
      { label: "Trade Finance", href: "/capabilities/trade-finance", desc: "L/C, D/C & structured terms" },
      { label: "Logistics", href: "/capabilities/logistics", desc: "Freight, ports & customs" },
      { label: "Quality Assurance", href: "/capabilities/quality-assurance", desc: "Third-party inspection" },
    ],
  },
  {
    label: "Markets",
    href: "/markets",
    children: [
      { label: "Origin Markets", href: "/markets/origins/west-africa", desc: "Where we source from" },
      { label: "Destination Markets", href: "/markets/destinations/southeast-asia", desc: "Where we deliver" },
      { label: "Trade Corridors", href: "/markets/corridors/black-sea-asia", desc: "Key routes & volumes" },
    ],
  },
  { label: "Insights", href: "/insights", children: [] },
  { label: "Trust", href: "/trust-center", children: [] },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[var(--color-ink)]/95 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.06)]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
            <div className="w-8 h-8 bg-[var(--color-gold)] rounded flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <Globe className="w-4.5 h-4.5 text-[var(--color-ink)]" strokeWidth={2.5} />
            </div>
            <div className="leading-none">
              <span className="block font-bold text-white text-sm tracking-tight">GlobalTrade</span>
              <span className="block text-[var(--color-gold)] text-[10px] font-medium tracking-widest uppercase">Commodities</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navigation.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3.5 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors duration-150 rounded"
                >
                  {item.label}
                  {item.children.length > 0 && (
                    <ChevronDown
                      className={clsx(
                        "w-3.5 h-3.5 transition-transform duration-200",
                        activeDropdown === item.label && "rotate-180"
                      )}
                    />
                  )}
                </Link>

                {item.children.length > 0 && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2 w-64 animate-fade-in" style={{ animationDuration: "0.15s" }}>
                    <div className="bg-[var(--color-ink-soft)] border border-white/10 rounded-[var(--radius-lg)] shadow-[0_8px_40px_rgba(0,0,0,0.5)] overflow-hidden">
                      <div className="p-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-start gap-3 px-3 py-2.5 rounded-[var(--radius-sm)] hover:bg-white/6 transition-colors group/item"
                          >
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-medium text-white group-hover/item:text-[var(--color-gold)] transition-colors">{child.label}</div>
                              <div className="text-xs text-white/40 mt-0.5">{child.desc}</div>
                            </div>
                            <ArrowUpRight className="w-3.5 h-3.5 text-white/20 group-hover/item:text-[var(--color-gold)] mt-0.5 flex-shrink-0 transition-colors" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              href="/contact"
              className="text-sm text-white/60 hover:text-white px-3 py-2 transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/partner-with-us/buyers"
              className="inline-flex items-center gap-1.5 bg-[var(--color-gold)] text-[var(--color-ink)] text-sm font-semibold px-4 py-2 rounded hover:bg-[var(--color-gold-bright)] transition-all duration-200 hover:shadow-[var(--shadow-gold)] active:scale-[0.98]"
            >
              Request a Quote
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen
              ? <X className="w-5 h-5" />
              : <Menu className="w-5 h-5" />
            }
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[var(--color-ink)] border-t border-white/6 animate-fade-in" style={{ animationDuration: "0.2s" }}>
          <div className="px-4 py-5 space-y-0.5 max-h-[80vh] overflow-y-auto">
            {navigation.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block px-3 py-2.5 text-sm font-semibold text-white/80 hover:text-white rounded transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block pl-7 pr-3 py-1.5 text-xs text-white/40 hover:text-[var(--color-gold)] transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="pt-4 border-t border-white/6 space-y-2">
              <Link
                href="/contact"
                className="block px-3 py-2.5 text-sm text-white/60 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/partner-with-us/buyers"
                className="flex items-center justify-center gap-2 bg-[var(--color-gold)] text-[var(--color-ink)] font-semibold px-4 py-3 rounded text-sm"
                onClick={() => setMobileOpen(false)}
              >
                Request a Quote <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
