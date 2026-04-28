import Button from "@/components/ui/Button";
import { ArrowRight, Package, Factory, Handshake } from "lucide-react";

const paths = [
  {
    icon: Package,
    title: "I need to source commodities",
    description: "Get competitive pricing and reliable supply from our global network.",
    cta: "Request a Quote",
    href: "/partner-with-us/buyers",
    variant: "secondary" as const,
  },
  {
    icon: Factory,
    title: "I want to supply products",
    description: "Join our supplier network and access international markets.",
    cta: "Register as Supplier",
    href: "/partner-with-us/suppliers",
    variant: "outline" as const,
  },
  {
    icon: Handshake,
    title: "I'm exploring a partnership",
    description: "Discuss strategic collaboration and long-term commercial partnerships.",
    cta: "Explore Partnership",
    href: "/partner-with-us/partners",
    variant: "outline" as const,
  },
];

export default function CTABand() {
  return (
    <section className="bg-[#0f2040] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            How Can We Help You?
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Choose the path that fits your commercial intent.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {paths.map(({ icon: Icon, title, description, cta, href, variant }) => (
            <div
              key={title}
              className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors"
            >
              <Icon className="w-8 h-8 text-[#c8a84b] mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {description}
              </p>
              <Button href={href} variant={variant} size="sm">
                {cta}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
