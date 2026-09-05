import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Product } from "../../data/types";
import { ProductMedia } from "../ui/ProductMedia";
import { formatINR } from "../../lib/format";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/product/${product.id}`} className="group block">
        <div className="relative overflow-hidden">
          <ProductMedia
            product={product}
            className="aspect-[4/5] w-full transition duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div className="pointer-events-none absolute inset-0 border border-transparent transition group-hover:border-gold-400/50" />
        </div>
        <div className="mt-3 flex flex-col gap-1">
          <h3 className="text-base leading-snug text-ink-900 transition group-hover:text-gold-700">
            {product.name}
          </h3>
          <p className="text-xs text-ink-500">{product.fabric}</p>
          <p className="mt-0.5 text-sm text-ink-900">{formatINR(product.price)}</p>
        </div>
      </Link>
    </motion.div>
  );
}
