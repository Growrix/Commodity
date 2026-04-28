import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Home, Search } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Button from "@/components/ui/Button";

const HERO_IMAGE = "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=2400&q=80";

const SUGGESTED_LINKS = [
  { label: "Products", href: "/products" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Markets", href: "/markets" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound() {
  return (
    <PageLayout>
      <section className="relative min-h-[80vh] flex items-center justify-center bg-[var(--color-ink)] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={HERO_IMAGE} alt="" fill className="object-cover object-center opacity-15" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-ink)] via-[var(--color-ink)]/90 to-[var(--color-ink)]" />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto px-4 py-24">
          <div className="text-[120px] sm:text-[180px] font-bold leading-none text-gold-gradient mb-6">404</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Page Not Found</h1>
          <p className="text-white/60 mb-10 leading-relaxed text-lg">
            The page you are looking for does not exist or may have moved. Use the navigation below to find what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <Button href="/" variant="gold">
              <Home className="w-4 h-4" />
              Return Home
            </Button>
            <Button href="/search" variant="outline-white">
              <Search className="w-4 h-4" />
              Search the Site
            </Button>
          </div>
          <div className="pt-10 border-t border-white/10">
            <p className="text-xs uppercase tracking-widest text-white/40 mb-4">Or jump to</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {SUGGESTED_LINKS.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-sm text-white/70 hover:text-[var(--color-gold)] border border-white/15 hover:border-[var(--color-gold)] rounded-[var(--radius-pill)] transition-all duration-200"
                >
                  {label}
                  <ArrowRight className="w-3 h-3" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
