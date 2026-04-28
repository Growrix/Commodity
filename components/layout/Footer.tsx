import Link from "next/link";
import { Globe, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const footerLinks = {
  Products: [
    { label: "Agriculture", href: "/products/agriculture" },
    { label: "Energy", href: "/products/energy" },
    { label: "Fertilizers", href: "/products/fertilizers" },
    { label: "Industrial Materials", href: "/products/industrial-materials" },
    { label: "All Products", href: "/products" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Capabilities", href: "/capabilities" },
    { label: "Markets", href: "/markets" },
    { label: "Insights", href: "/insights" },
    { label: "Careers", href: "/careers" },
  ],
  "Partner With Us": [
    { label: "For Buyers", href: "/partner-with-us/buyers" },
    { label: "For Suppliers", href: "/partner-with-us/suppliers" },
    { label: "Strategic Partners", href: "/partner-with-us/partners" },
    { label: "Sourcing Request", href: "/partner-with-us/sourcing" },
    { label: "Partner Hub", href: "/partner-with-us" },
  ],
  Trust: [
    { label: "Trust Center", href: "/trust-center" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/legal/privacy-policy" },
    { label: "Terms of Use", href: "/legal/terms-of-use" },
    { label: "Cookie Policy", href: "/legal/cookie-policy" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[var(--color-ink)] text-white">
      {/* CTA row */}
      <div className="border-b border-white/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-gold)] mb-2">Ready to Trade?</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                Start a conversation<br />with our team.
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/partner-with-us/buyers"
                className="inline-flex items-center gap-2 bg-[var(--color-gold)] text-[var(--color-ink)] font-semibold px-6 py-3 rounded hover:bg-[var(--color-gold-bright)] transition-all duration-200 hover:shadow-[var(--shadow-gold)]"
              >
                Request a Quote <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/20 text-white font-medium px-6 py-3 rounded hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-all duration-200"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 bg-[var(--color-gold)] rounded flex items-center justify-center">
                <Globe className="w-4.5 h-4.5 text-[var(--color-ink)]" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-white text-sm tracking-tight">GlobalTrade Commodities</span>
            </Link>
            <p className="text-sm text-white/40 mb-6 leading-relaxed max-w-xs">
              A trusted international commodity trading company connecting global supply chains across four core sectors.
            </p>
            <div className="space-y-2.5 text-sm">
              {[
                { icon: MapPin, text: "Global HQ — Geneva, Switzerland" },
                { icon: Mail, text: "trade@globaltrade.com" },
                { icon: Phone, text: "+41 22 000 0000" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2.5 text-white/40">
                  <Icon className="w-3.5 h-3.5 text-[var(--color-gold)] flex-shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-white/90 font-semibold text-xs uppercase tracking-widest mb-4">
                {section}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/35 hover:text-[var(--color-gold)] transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
            <p>Copyright {year} GlobalTrade Commodities Ltd. All rights reserved.</p>
            <div className="flex items-center gap-5">
              {[
                { label: "Privacy", href: "/legal/privacy-policy" },
                { label: "Terms", href: "/legal/terms-of-use" },
                { label: "Cookies", href: "/legal/cookie-policy" },
              ].map(({ label, href }) => (
                <Link key={label} href={href} className="hover:text-white/60 transition-colors">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
