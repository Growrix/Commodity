import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { getFeaturedSearchResults, searchSite, type SearchScope } from "@/lib/data/search";
import { popularQueries } from "@/lib/data/siteContent";

export const metadata: Metadata = {
  title: "Search",
  description:
    "Search products, markets, insights, capabilities, and trust documents across the public commodity trading site.",
};

const scopeOptions: { value: SearchScope; label: string }[] = [
  { value: "all", label: "All" },
  { value: "products", label: "Products" },
  { value: "capabilities", label: "Capabilities" },
  { value: "markets", label: "Markets" },
  { value: "insights", label: "Insights" },
  { value: "trust", label: "Trust Documents" },
];

function getScope(value?: string): SearchScope {
  return scopeOptions.some((option) => option.value === value) ? (value as SearchScope) : "all";
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; type?: string }>;
}) {
  const params = await searchParams;
  const query = params.q?.trim() ?? "";
  const scope = getScope(params.type);
  const results = query ? searchSite(query, scope) : [];
  const featuredResults = getFeaturedSearchResults();
  const groupedResults = results.reduce<Record<string, typeof results>>((accumulator, result) => {
    if (!accumulator[result.type]) {
      accumulator[result.type] = [];
    }
    accumulator[result.type].push(result);
    return accumulator;
  }, {});

  return (
    <>
      <section className="bg-background pt-[72px] pb-16">
        <Container className="pt-12">
          <Breadcrumb items={[{ label: "Search" }]} className="mb-8" />
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Search</p>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-5 leading-tight">
              Find products, markets,
              <br />
              <span className="text-gold">and trust material fast.</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              Search the public site without drilling through menus. Results span products, insight content, trade corridors, and governance documents.
            </p>
          </div>

          <form action="/search" className="surface-card p-5 rounded-lg grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_220px_auto] gap-4">
            <div>
              <label htmlFor="search-q" className="form-label">Search the site</label>
              <input
                id="search-q"
                name="q"
                defaultValue={query}
                className="form-field"
                placeholder="Try wheat, East Africa, trade finance, supplier code..."
              />
            </div>
            <div>
              <label htmlFor="search-type" className="form-label">Scope</label>
              <select id="search-type" name="type" defaultValue={scope} className="form-field">
                {scopeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-end">
              <button type="submit" className="btn-gold w-full justify-center text-sm">
                Search
              </button>
            </div>
          </form>
        </Container>
      </section>

      <section className="section-pad bg-surface">
        <Container>
          <SectionHeader
            eyebrow="Popular Queries"
            title="Fast starting points"
            subtitle="Common commercial topics that bring visitors quickly into the right discovery path."
            className="mb-8"
          />
          <div className="flex flex-wrap gap-3">
            {popularQueries.map((popularQuery) => (
              <Link
                key={popularQuery}
                href={`/search?q=${encodeURIComponent(popularQuery)}`}
                className="surface-card px-4 py-2.5 rounded-full text-sm text-text-secondary hover:text-text-primary hover:border-gold/40 transition-all duration-200"
              >
                {popularQuery}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad bg-background">
        <Container>
          {query ? (
            results.length ? (
              <div className="space-y-10">
                {Object.entries(groupedResults).map(([group, items]) => (
                  <div key={group}>
                    <h2 className="text-2xl font-bold text-text-primary mb-5">{group}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                      {items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="group surface-card p-5 rounded-lg hover:border-gold/40 transition-all duration-200"
                        >
                          <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">{item.type}</p>
                          <h3 className="text-lg font-bold text-text-primary group-hover:text-gold transition-colors duration-200 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-sm text-text-secondary leading-relaxed">{item.summary}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="surface-card-elevated p-8 rounded-lg">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">No Exact Match</p>
                <h2 className="text-2xl font-bold text-text-primary mb-3">No results for &quot;{query}&quot;</h2>
                <p className="text-sm text-text-secondary leading-relaxed mb-6 max-w-2xl">
                  Try a broader commodity family, region, or capability term. If you already know the business context, reach out directly and we will route you to the right team.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/products" className="btn-outline-gold text-sm">Browse Products</Link>
                  <Link href="/markets" className="btn-outline-gold text-sm">Browse Markets</Link>
                  <Link href="/contact" className="btn-gold text-sm">Contact Trade Desk</Link>
                </div>
              </div>
            )
          ) : (
            <div>
              <SectionHeader
                eyebrow="Featured Results"
                title="Useful starting points"
                subtitle="Representative destinations across the content and discovery model while you decide what to search for."
                className="mb-8"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {featuredResults.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group surface-card p-5 rounded-lg hover:border-gold/40 transition-all duration-200"
                  >
                    <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">{item.type}</p>
                    <h2 className="text-lg font-bold text-text-primary group-hover:text-gold transition-colors duration-200 mb-2">
                      {item.title}
                    </h2>
                    <p className="text-sm text-text-secondary leading-relaxed">{item.summary}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}