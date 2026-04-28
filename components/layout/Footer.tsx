import Link from "next/link";
import { Globe, Mail, Phone, MapPin } from "lucide-react";

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
    <footer className="bg-[#0a1628] text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#c8a84b] rounded flex items-center justify-center">
                <Globe className="w-5 h-5 text-[#0f2040]" />
              </div>
              <span className="font-bold text-white text-lg">
                GlobalTrade Commodities
              </span>
            </Link>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              A trusted international commodity trading company connecting
              global supply chains across Agriculture, Energy, Fertilizers,
              and Industrial Materials.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4 text-[#c8a84b] flex-shrink-0" />
                <span>Global Headquarters — Geneva, Switzerland</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4 text-[#c8a84b] flex-shrink-0" />
                <span>trade@globaltrade.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4 text-[#c8a84b] flex-shrink-0" />
                <span>+41 22 000 0000</span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                {section}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-[#c8a84b] transition-colors"
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
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>
              Copyright {year} GlobalTrade Commodities Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/legal/privacy-policy"
                className="hover:text-gray-300 transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/legal/terms-of-use"
                className="hover:text-gray-300 transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/legal/cookie-policy"
                className="hover:text-gray-300 transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
