import Link from "next/link";
import NewsletterForm from "@/components/forms/NewsletterForm";
import Container from "@/components/ui/Container";
import { footerLinks } from "@/lib/data/navigation";

const officeLocations = [
  { city: "London", country: "United Kingdom", note: "Registered Office" },
  { city: "Dubai", country: "UAE", note: "MENA & South Asia" },
  { city: "Singapore", country: "Singapore", note: "Asia-Pacific" },
  { city: "Nairobi", country: "Kenya", note: "Sub-Saharan Africa" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border">
      {/* Main footer */}
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand + offices */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 border border-gold flex items-center justify-center rounded-sm">
                <span className="text-gold font-bold text-sm leading-none">V</span>
              </div>
              <div className="leading-tight">
                <span className="text-white font-semibold text-sm tracking-wider uppercase">Veterra</span>
                <span className="text-gold font-semibold text-sm tracking-wider uppercase"> Global</span>
              </div>
            </Link>
            <p className="text-sm text-text-secondary leading-relaxed mb-6 max-w-xs">
              Global commodity trading specialists in Agriculture, Energy, Fertilizers, and Industrial Materials.
            </p>
            {/* Offices */}
            <div className="space-y-3">
              {officeLocations.map((o) => (
                <div key={o.city} className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-gold mt-2 shrink-0" />
                  <div>
                    <span className="text-sm font-medium text-text-primary">{o.city}, {o.country}</span>
                    <span className="text-xs text-text-muted ml-2">{o.note}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Company</h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Products</h3>
            <ul className="space-y-2.5">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Services</h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Stay Informed</h3>
            <p className="text-sm text-text-secondary mb-4">Market updates and commodity intelligence by sector.</p>
            <NewsletterForm compact />
            <p className="text-xs text-text-muted mt-2">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <Container className="py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-text-muted text-center sm:text-left">
              Copyright {year} [Company Legal Name]. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs text-text-muted hover:text-text-secondary transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
