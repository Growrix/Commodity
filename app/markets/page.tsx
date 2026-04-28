import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import CTABand from "@/components/sections/CTABand";
import SectionHeader from "@/components/sections/SectionHeader";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Markets",
  description: "GlobalTrade's origin markets, destination markets, and key trade corridors across the globe.",
};

const origins = [
  { slug: "west-africa", name: "West Africa", commodities: ["Crude Oil", "Cocoa", "Cashews"] },
  { slug: "black-sea", name: "Black Sea Region", commodities: ["Wheat", "Corn", "Sunflower Oil"] },
  { slug: "south-america", name: "South America", commodities: ["Soybeans", "Corn", "Iron Ore"] },
  { slug: "middle-east", name: "Middle East", commodities: ["LPG", "Urea", "Petroleum"] },
  { slug: "southeast-asia", name: "Southeast Asia", commodities: ["Rice", "Palm Oil", "Rubber"] },
  { slug: "australia", name: "Australia & Oceania", commodities: ["Wheat", "Barley", "Coal"] },
];

const destinations = [
  { slug: "southeast-asia", name: "Southeast Asia", profile: "High-growth importing region" },
  { slug: "south-asia", name: "South Asia", profile: "Large-scale grain & fertilizer importer" },
  { slug: "west-africa-dest", name: "West Africa", profile: "Refined products & food-grade demand" },
  { slug: "north-africa", name: "North Africa", profile: "Wheat, fertilizer, and energy demand" },
  { slug: "europe", name: "Europe", profile: "Diversified commodity demand" },
  { slug: "east-africa", name: "East Africa", profile: "Growing food security supply programs" },
];

const corridors = [
  { slug: "black-sea-asia", from: "Black Sea", to: "Southeast Asia", commodities: ["Wheat", "Corn"], volume: "High" },
  { slug: "middle-east-south-asia", from: "Middle East", to: "South Asia", commodities: ["Urea", "LPG"], volume: "High" },
  { slug: "south-america-china", from: "South America", to: "China", commodities: ["Soybeans", "Iron Ore"], volume: "Very High" },
  { slug: "west-africa-europe", from: "West Africa", to: "Europe", commodities: ["Crude Oil", "Cocoa"], volume: "High" },
  { slug: "australia-middle-east", from: "Australia", to: "Middle East & Africa", commodities: ["Wheat", "Barley"], volume: "Medium" },
];

export default function MarketsPage() {
  return (
    <PageLayout>
      <section className="relative bg-[var(--color-ink)] text-white py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=2400&q=80"
            alt="World trade and markets"
            fill
            className="object-cover object-center opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-ink)] via-[var(--color-ink)]/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Markets" }]} dark />
          <div className="mt-10 max-w-2xl animate-fade-up">
            <span className="text-[var(--color-gold)] text-[11px] font-bold uppercase tracking-[0.18em] mb-4 block">
              Global Reach
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.08] tracking-tight">
              Markets, Origins, and Trade Corridors
            </h1>
            <p className="text-lg text-white/55 leading-relaxed mb-10">
              We operate in the world's most active commodity corridors — connecting supply from origin markets with demand across 60+ countries.
            </p>
            <Button href="/contact" variant="gold">
              Explore Trade Corridors <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Origins */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Where We Source" title="Origin Markets" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {origins.map(({ slug, name, commodities }) => (
              <Link
                key={slug}
                href={`/markets/origins/${slug}`}
                className="block bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 hover:shadow-md transition-all hover:-translate-y-0.5 group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-[var(--color-gold)]" />
                  <h3 className="font-bold text-[var(--color-ink)] group-hover:text-[var(--color-gold)] transition-colors">{name}</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {commodities.map((c) => (
                    <span key={c} className="text-xs bg-white border border-[var(--color-border)] text-[var(--color-text-secondary)] px-2 py-0.5 rounded-full">
                      {c}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-sm font-medium text-[var(--color-ink)] group-hover:text-[var(--color-gold)]">
                  View origin
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-20 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Where We Deliver" title="Destination Markets" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map(({ slug, name, profile }) => (
              <Link
                key={slug}
                href={`/markets/destinations/${slug}`}
                className="block bg-white border border-[var(--color-border)] rounded-xl p-6 hover:shadow-md transition-all hover:-translate-y-0.5 group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-[var(--color-ink)]" />
                  <h3 className="font-bold text-[var(--color-ink)] group-hover:text-[var(--color-gold)] transition-colors">{name}</h3>
                </div>
                <p className="text-sm text-[var(--color-text-muted)] mb-4">{profile}</p>
                <div className="flex items-center gap-1 text-sm font-medium text-[var(--color-ink)] group-hover:text-[var(--color-gold)]">
                  View market
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Corridors */}
      <section className="py-20 bg-[var(--color-ink)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Trade Routes" title="Key Corridors" dark />
          <div className="space-y-4">
            {corridors.map(({ slug, from, to, commodities, volume }) => (
              <Link
                key={slug}
                href={`/markets/corridors/${slug}`}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white/4 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group"
              >
                <div className="flex items-center gap-3 flex-1">
                  <span className="font-semibold text-white">{from}</span>
                  <ArrowRight className="w-4 h-4 text-[var(--color-gold)] flex-shrink-0" />
                  <span className="font-semibold text-white">{to}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {commodities.map((c) => (
                    <span key={c} className="text-xs bg-white/10 text-white/55 px-2 py-0.5 rounded-full">{c}</span>
                  ))}
                </div>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${volume === "Very High" ? "bg-green-500/20 text-green-300" : "bg-amber-500/20 text-amber-300"}`}>
                  {volume} Volume
                </span>
                <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-[var(--color-gold)] transition-colors hidden sm:block" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </PageLayout>
  );
}
