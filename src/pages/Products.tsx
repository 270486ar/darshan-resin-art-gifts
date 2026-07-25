import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal, X } from "lucide-react";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import ProductCard from "../components/ProductCard";
import { products, PRODUCT_CATEGORIES } from "../data/products";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") ?? "All";
  const [query, setQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [activeCategory]);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = activeCategory === "All" || p.category === activeCategory;
      const matchesQuery =
        query.trim() === "" ||
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  function setCategory(cat: string) {
    if (cat === "All") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", cat);
    }
    setSearchParams(searchParams, { replace: true });
  }

  return (
    <>
      <SEO
        title="Shop All Products"
        description="Browse 30+ handcrafted resin art products — name boards, wedding gifts, anniversary gifts, photo frames, wall decor and more from Darshan Resin Art & Gifts, Puducherry."
        path="/products"
      />
      <PageHero
        eyebrow="Our Catalogue"
        title="Shop Handcrafted Resin Gifts"
        description="Every piece is made to order — tap Enquire Now on WhatsApp to personalise yours."
        image="/images/hero/hero-02.svg"
      />

      <section className="container-xl py-14">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-sm">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-royal-500 dark:text-ivory/50" size={18} />
            <label htmlFor="product-search" className="sr-only">
              Search products
            </label>
            <input
              id="product-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              className="focus-ring glass w-full rounded-full py-3 pl-11 pr-4 text-sm text-royal-900 dark:text-ivory placeholder:text-royal-500/60 dark:placeholder:text-ivory/40"
            />
          </div>
          <button
            type="button"
            onClick={() => setShowFilters((v) => !v)}
            className="focus-ring btn-outline lg:hidden"
          >
            <SlidersHorizontal size={16} /> {showFilters ? "Hide Filters" : "Filter by Category"}
          </button>
        </div>

        <div className={`mt-6 flex-wrap gap-2 ${showFilters ? "flex" : "hidden"} lg:flex`}>
          {["All", ...PRODUCT_CATEGORIES].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={`focus-ring rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-royal-600 text-white dark:bg-gold-500 dark:text-charcoal"
                  : "glass text-royal-800 dark:text-ivory/80 hover:bg-royal-100/70 dark:hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <p className="mt-6 text-sm text-royal-700/60 dark:text-ivory/50">
          Showing {filtered.length} of {products.length} products
        </p>

        {filtered.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        ) : (
          <div className="mt-16 flex flex-col items-center gap-4 text-center">
            <X size={40} className="text-royal-300 dark:text-ivory/30" />
            <p className="text-royal-700/70 dark:text-ivory/60">
              No products matched your search. Try a different keyword or category.
            </p>
          </div>
        )}
      </section>
    </>
  );
}
