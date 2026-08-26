import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { products } from "../data/products";
import { ProductCard } from "../components/shop/ProductCard";
import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";

export default function Shop() {
  const customProducts = products.filter((p) => p.section === "custom");
  const launchedToteBags = products.filter(
    (p) => p.section === "launched" && p.category === "tote-bags",
  );

  return (
    <div className="bg-ivory-100">
      <section className="relative overflow-hidden bg-plum-950 px-6 pb-16 pt-36 text-center md:px-10">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{ background: "radial-gradient(ellipse at 50% 0%, #451a3f 0%, #170512 70%)" }}
        />
        <div className="relative mx-auto max-w-3xl">
          <span className="text-xs tracking-wide-xl uppercase text-gold-300">The Collection</span>
          <h1 className="mt-4 text-4xl text-ivory-50 md:text-6xl">All Hand-Painted Pieces</h1>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <section id="custom">
          <SectionHeading
            eyebrow="Made to Order"
            title="Custom Made"
            description="Each piece is hand-painted to order — get in touch to commission your size, colours, and motif."
            className="mb-12"
          />
          <motion.div
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 gap-x-6 gap-y-14 md:grid-cols-3 lg:grid-cols-4"
          >
            {customProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </motion.div>
        </section>

        <section id="launched" className="mt-28 border-t border-ink-900/10 pt-24">
          <SectionHeading
            eyebrow="Ready to Wear"
            title="Launched"
            description="Our ready-made line, released in small drops."
            className="mb-12"
          />

          {launchedToteBags.length > 0 && (
            <div className="mb-16">
              <h3 className="mb-8 text-center text-xs tracking-wide-xl uppercase text-gold-700">
                Tote Bags
              </h3>
              <motion.div
                initial="hidden"
                animate="show"
                className="grid grid-cols-2 gap-x-6 gap-y-14 md:grid-cols-3 lg:grid-cols-4"
              >
                {launchedToteBags.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                ))}
              </motion.div>
            </div>
          )}

          <p className="py-12 text-center text-sm tracking-wide-xl uppercase text-ink-500">
            More Styles Launching Soon
          </p>
        </section>
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
