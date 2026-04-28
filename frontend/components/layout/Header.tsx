"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { navLinks } from "@/lib/data/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="w-8 h-8 border border-gold flex items-center justify-center rounded-sm">
              <span className="text-gold font-bold text-sm leading-none">V</span>
            </div>
            <div className="leading-tight">
              <span className="text-white font-semibold text-sm tracking-wider uppercase">Veterra</span>
              <span className="text-gold font-semibold text-sm tracking-wider uppercase"> Global</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav ref={dropdownRef} className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.label} className="relative">
                {link.items || link.groups ? (
                  <button
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded ${
                      activeDropdown === link.label
                        ? "text-gold"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                    onClick={() =>
                      setActiveDropdown(activeDropdown === link.label ? null : link.label)
                    }
                    aria-expanded={activeDropdown === link.label}
                  >
                    {link.label}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        activeDropdown === link.label ? "rotate-180" : ""
                      }`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-200 rounded"
                  >
                    {link.label}
                  </Link>
                )}

                {/* Mega / Regular dropdown */}
                {activeDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-1 animate-slide-down z-50">
                    {link.mega && link.groups ? (
                      <MegaDropdown groups={link.groups} onClose={() => setActiveDropdown(null)} />
                    ) : link.items ? (
                      <SimpleDropdown items={link.items} onClose={() => setActiveDropdown(null)} />
                    ) : null}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/partner-with-us"
              className="text-sm font-medium text-text-secondary hover:text-gold transition-colors duration-200"
            >
              Partner With Us
            </Link>
            <Link
              href="/partner-with-us/buyers#quote"
              className="btn-gold text-sm"
            >
              Request a Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 rounded"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-text-primary transition-all duration-200 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-text-primary transition-all duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-text-primary transition-all duration-200 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-background z-40 overflow-y-auto">
          <div className="px-4 py-6 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between py-3 px-4 text-base font-medium text-text-primary hover:text-gold border-b border-border transition-colors duration-200"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                  <svg className="w-4 h-4 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
                  </svg>
                </Link>
              </div>
            ))}
            <div className="pt-6 space-y-3">
              <Link
                href="/partner-with-us"
                className="btn-outline-gold w-full justify-center text-sm"
                onClick={() => setMobileOpen(false)}
              >
                Partner With Us
              </Link>
              <Link
                href="/partner-with-us/buyers#quote"
                className="btn-gold w-full justify-center text-sm"
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

function MegaDropdown({
  groups,
  onClose,
}: {
  groups: { heading: string; href: string; items: { label: string; href: string }[] }[];
  onClose: () => void;
}) {
  return (
    <div className="bg-surface border border-border shadow-2xl shadow-black/50 rounded-lg p-6 min-w-[720px]">
      <div className="grid grid-cols-4 gap-6">
        {groups.map((group) => (
          <div key={group.heading}>
            <Link
              href={group.href}
              className="block text-xs font-semibold uppercase tracking-widest text-gold mb-3 hover:text-gold-light transition-colors"
              onClick={onClose}
            >
              {group.heading}
            </Link>
            <ul className="space-y-1.5">
              {group.items.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="block text-sm text-text-secondary hover:text-text-primary transition-colors duration-150 py-0.5"
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function SimpleDropdown({
  items,
  onClose,
}: {
  items: { label: string; href: string }[];
  onClose: () => void;
}) {
  return (
    <div className="bg-surface border border-border shadow-2xl shadow-black/50 rounded-lg py-2 min-w-[220px]">
      {items.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="block px-4 py-2.5 text-sm text-text-secondary hover:text-text-primary hover:bg-surface-elevated transition-colors duration-150"
          onClick={onClose}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
