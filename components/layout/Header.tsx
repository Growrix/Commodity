"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { clsx } from "clsx";

const navigation = [
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Agriculture", href: "/products/agriculture" },
      { label: "Energy", href: "/products/energy" },
      { label: "Fertilizers", href: "/products/fertilizers" },
      { label: "Industrial Materials", href: "/products/industrial-materials" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Food & Beverage", href: "/industries/food-beverage" },
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "Energy & Power", href: "/industries/energy-power" },
      { label: "Agriculture", href: "/industries/agriculture" },
    ],
  },
  {
    label: "Capabilities",
    href: "/capabilities",
    children: [
      { label: "Origination", href: "/capabilities/origination" },
      { label: "Trade Finance", href: "/capabilities/trade-finance" },
      { label: "Logistics", href: "/capabilities/logistics" },
      { label: "Quality Assurance", href: "/capabilities/quality-assurance" },
      { label: "Risk Management", href: "/capabilities/risk-management" },
    ],
  },
  {
    label: "Markets",
    href: "/markets",
    children: [
      { label: "Origin Markets", href: "/markets/origins/west-africa" },
      { label: "Destination Markets", href: "/markets/destinations/southeast-asia" },
      { label: "Trade Corridors", href: "/markets/corridors/black-sea-asia" },
    ],
  },
  {
    label: "Insights",
    href: "/insights",
    children: [],
  },
  {
    label: "Trust",
    href: "/trust-center",
    children: [],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="bg-[#0f2040] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-[#c8a84b] rounded flex items-center justify-center">
              <Globe className="w-5 h-5 text-[#0f2040]" />
            </div>
            <span className="font-bold text-lg tracking-tight leading-tight">
              GlobalTrade<br />
              <span className="text-[#c8a84b] text-sm font-normal">Commodities</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-200 hover:text-white hover:bg-white/10 rounded transition-colors"
                >
                  {item.label}
                  {item.children.length > 0 && (
                    <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                  )}
                </Link>
                {item.children.length > 0 && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 w-52 bg-white text-[#374151] shadow-xl rounded-b-lg border border-gray-100 py-2 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm hover:bg-[#f8f9fa] hover:text-[#0f2040] transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/partner-with-us"
              className="text-sm bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded transition-colors"
            >
              Partner With Us
            </Link>
            <Link
              href="/partner-with-us/buyers"
              className="text-sm bg-[#c8a84b] hover:bg-[#b89438] text-[#0f2040] font-semibold px-4 py-2 rounded transition-colors"
            >
              Request a Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded text-gray-300 hover:text-white hover:bg-white/10"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0a1628] border-t border-white/10">
          <div className="px-4 py-4 space-y-1">
            {navigation.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-sm font-medium text-gray-200 hover:text-white hover:bg-white/10 rounded"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block px-6 py-1.5 text-xs text-gray-400 hover:text-gray-200"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="pt-3 border-t border-white/10 space-y-2">
              <Link
                href="/contact"
                className="block px-3 py-2 text-sm text-gray-300 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/partner-with-us/buyers"
                className="block text-center bg-[#c8a84b] text-[#0f2040] font-semibold px-4 py-2 rounded text-sm"
                onClick={() => setMobileOpen(false)}
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
