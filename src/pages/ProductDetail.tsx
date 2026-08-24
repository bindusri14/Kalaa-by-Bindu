import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { productById, productsByCategory } from "../data/products";
import { categoryBySlug } from "../data/categories";
import { ProductMedia } from "../components/ui/ProductMedia";
import { ProductCard } from "../components/shop/ProductCard";
import { Reveal } from "../components/ui/Reveal";
import { Ornament } from "../components/ui/Ornament";
import { formatINR } from "../lib/format";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const product = id ? productById(id) : undefined;
  const { addItem, openCart } = useCart();
  const [size, setSize] = useState<string | null>(null);
  const [added, setAdded] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setActiveImage(0);
    setSize(null);
  }, [id]);

  if (!product) return <Navigate to="/shop" replace />;

  const category = categoryBySlug(product.category);
  const related = productsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const handleAdd = () => {
    const chosenSize = size ?? product.sizes[0];
    addItem(product, chosenSize, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="bg-ivory-100 pt-28">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10">
        <p className="mb-10 text-xs tracking-wide-xl uppercase text-ink-500">
          <Link to="/shop" className="hover:text-plum-900">
            Shop
          </Link>
          {category && (
            <>
              {" / "}
              <Link to={`/shop/${category.slug}`} className="hover:text-plum-900">
                {category.name}
              </Link>
            </>
          )}
          {" / "}
          <span className="text-ink-900">{product.name}</span>
        </p>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={
              product.images.length > 1
                ? "grid grid-cols-[1fr] gap-3 sm:grid-cols-[80px_1fr]"
                : ""
            }
          >
            {product.images.length > 1 && (
              <div className="order-2 flex gap-3 sm:order-1 sm:flex-col">
                {product.images.map((img, i) => (
                  <button
                    key={img}
                    type="button"
                    onClick={() => setActiveImage(i)}
                    className={`h-20 w-20 shrink-0 overflow-hidden border transition ${
                      activeImage === i ? "border-gold-500" : "border-transparent"
                    }`}
                  >
                    <img src={img} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
            <ProductMedia
              product={product}
              imageIndex={activeImage}
              className="order-1 aspect-[4/5] w-full sm:order-2"
            />
          </motion.div>

          <Reveal delay={0.1} className="flex flex-col gap-6">
            <div>
              <span className="text-xs tracking-wide-xl uppercase text-gold-600">
                {product.technique} · {category?.devanagari}
              </span>
              <h1 className="mt-3 text-4xl text-ink-900 md:text-5xl">{product.name}</h1>
              <p className="mt-4 text-2xl text-ink-900">{formatINR(product.price)}</p>
            </div>

            <Ornament className="!justify-start" />

            <p className="max-w-md text-base font-light leading-relaxed text-ink-500">
              {product.description}
            </p>

            <dl className="grid max-w-md grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="text-ink-500">Fabric</dt>
                <dd className="text-ink-900">{product.fabric}</dd>
              </div>
              <div>
                <dt className="text-ink-500">Technique</dt>
                <dd className="text-ink-900">{product.technique}</dd>
              </div>
              <div>
                <dt className="text-ink-500">Care</dt>
                <dd className="text-ink-900">Hand wash cold, dry in shade</dd>
              </div>
              <div>
                <dt className="text-ink-500">Made to order</dt>
                <dd className="text-ink-900">7–10 business days</dd>
              </div>
            </dl>

            <div>
              <p className="mb-2 text-xs tracking-wide-xl uppercase text-ink-500">
                Size {product.sizes.length > 1 && "— select one"}
              </p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSize(s)}
                    className={`min-w-[3rem] border px-3 py-2 text-sm transition ${
                      (size ?? product.sizes[0]) === s
                        ? "border-plum-900 bg-plum-900 text-ivory-50"
                        : "border-ink-900/20 text-ink-700 hover:border-plum-900"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={handleAdd}
                className="min-w-[220px] bg-plum-900 px-8 py-4 text-sm tracking-wide-xl uppercase text-ivory-50 transition hover:bg-plum-800"
              >
                {added ? "Added ✓" : "Add to Bag"}
              </button>
              <button
                type="button"
                onClick={() => {
                  handleAdd();
                  openCart();
                }}
                className="text-sm tracking-wide-xl uppercase text-gold-700 underline underline-offset-4 hover:text-gold-600"
              >
                View Bag
              </button>
            </div>

            <p className="max-w-md text-xs leading-relaxed text-ink-500/80">
              As each piece is hand-painted, minor variations in colour and motif placement are
              part of its character — no two are ever identical.
            </p>
          </Reveal>
        </div>
      </div>

      {related.length > 0 && (
        <section className="border-t border-ink-900/10 bg-ivory-50 px-6 py-20 md:px-10">
          <div className="mx-auto max-w-7xl">
            <Reveal className="mb-12 text-center">
              <span className="text-xs tracking-wide-xl uppercase text-gold-600">
                More from {category?.name}
              </span>
            </Reveal>
            <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
