import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { categories } from "../../data/categories";
import { productsByCategory } from "../../data/products";
import { ProductMedia } from "../ui/ProductMedia";
import { SectionHeading } from "../ui/SectionHeading";

export function CategoryShowcase() {
  return (
    <section className="bg-ivory-100 px-6 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The Collection"
          title="Six Canvases, One Craft"
          description="Every category begins the same way — undyed fabric and a loaded brush. What changes is the cut."
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => {
            const sample = productsByCategory(cat.slug)[0];
            return (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link to={`/shop/${cat.slug}`} className="group block">
                  <div className="relative overflow-hidden">
                    {sample ? (
                      <ProductMedia
                        product={sample}
                        className="aspect-[3/4] w-full transition duration-700 ease-out group-hover:scale-[1.05]"
                      />
                    ) : (
                      <div
                        className="aspect-[3/4] w-full"
                        style={{
                          background:
                            "radial-gradient(ellipse at 50% 30%, #451a3f 0%, #260a25 55%, #170512 100%)",
                        }}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-plum-950/80 via-plum-950/10 to-transparent" />
                    <div className="absolute inset-0 flex flex-col items-center justify-end gap-1 pb-6 text-center">
                      <span className="text-xs tracking-wide-xl uppercase text-gold-300">
                        {cat.devanagari}
                      </span>
                      <h3 className="text-2xl text-ivory-50">{cat.name}</h3>
                      <span className="mt-1 text-xs uppercase tracking-wide-xl text-ivory-100/60 opacity-0 transition group-hover:opacity-100">
                        {sample ? cat.tagline : "Coming Soon"}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
