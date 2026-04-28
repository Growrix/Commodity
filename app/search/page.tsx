import type { Metadata } from "next";
import { Search } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Search",
  description: "Search the GlobalTrade Commodities website.",
};

export default function SearchPage() {
  return (
    <PageLayout>
      <section className="bg-[var(--color-ink)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Search" }]} dark />
          <div className="mt-8 max-w-2xl">
            <h1 className="text-4xl font-bold mb-6">Search</h1>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="search"
                  placeholder="Search products, markets, insights..."
                  className="w-full pl-12 pr-4 py-4 rounded-lg text-[#374151] text-base focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]"
                />
              </div>
              <Button variant="gold" size="lg">Search</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#6b7280] text-center text-lg">
            Enter a search term above to find products, market intelligence, and more.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
