import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { categories, categoryBySlug } from "../data/categories";
import { products } from "../data/products";
import { ProductCard } from "../components/shop/ProductCard";
import { Reveal } from "../components/ui/Reveal";

export default function Shop() {
  const { category } = useParams();
  const activeCategory = category ? categoryBySlug(category) : undefined;

  const list = useMemo(() => {
    if (!category) return products;
    return products.filter((p) => p.category === category);
  }, [category]);

  return (
    <div className="bg-ivory-100">
      <section className="relative overflow-hidden bg-plum-950 px-6 pb-16 pt-36 text-center md:px-10">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{ background: "radial-gradient(ellipse at 50% 0%, #451a3f 0%, #170512 70%)" }}
        />
        <div className="relative mx-auto max-w-3xl">
          <span className="text-xs tracking-wide-xl uppercase text-gold-300">
            {activeCategory ? activeCategory.devanagari : "The Collection"}
          </span>
          <h1 className="mt-4 text-4xl text-ivory-50 md:text-6xl">
            {activeCategory ? activeCategory.name : "All Hand-Painted Pieces"}
          </h1>
          {activeCategory && (
            <p className="mx-auto mt-4 max-w-xl text-sm font-light leading-relaxed text-ivory-100/70">
              {activeCategory.description}
            </p>
          )}
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <nav className="mb-12 flex flex-wrap items-center justify-center gap-3">
          <FilterPill to="/shop" active={!category} label="All" />
          {categories.map((c) => (
            <FilterPill key={c.slug} to={`/shop/${c.slug}`} active={category === c.slug} label={c.name} />
          ))}
        </nav>

        {list.length === 0 ? (
          <p className="py-20 text-center text-ink-500">No pieces found in this category yet.</p>
        ) : (
          <motion.div
            key={category ?? "all"}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 gap-x-6 gap-y-14 md:grid-cols-3 lg:grid-cols-4"
          >
            {list.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </motion.div>
        )}
      </div>

      <Reveal className="border-t border-ink-900/10 bg-ivory-50 px-6 py-16 text-center md:px-10">
        <p className="mx-auto max-w-lg text-sm font-light leading-relaxed text-ink-500">
          Don't see quite what you're looking for? We take a limited number of custom
          commissions each season.{" "}
          <Link to="/contact" className="text-gold-700 underline underline-offset-4">
            Get in touch
          </Link>
          .
        </p>
      </Reveal>
    </div>
  );
}

function FilterPill({ to, label, active }: { to: string; label: string; active: boolean }) {
  return (
    <Link
      to={to}
      className={`border px-5 py-2 text-xs tracking-wide-xl uppercase transition ${
        active
          ? "border-plum-900 bg-plum-900 text-ivory-50"
          : "border-ink-900/15 text-ink-700 hover:border-plum-900 hover:text-plum-900"
      }`}
    >
      {label}
    </Link>
  );
}
