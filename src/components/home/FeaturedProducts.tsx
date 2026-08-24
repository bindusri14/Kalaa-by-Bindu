import { Link } from "react-router-dom";
import { featuredProducts } from "../../data/products";
import { ProductCard } from "../shop/ProductCard";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

export function FeaturedProducts() {
  return (
    <section className="bg-ivory-50 px-6 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Signature Pieces"
          title="Recently Off the Easel"
          description="A small selection from this season's collection — each one unique, none of them reprinted."
          className="mb-16"
        />

        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 lg:grid-cols-6">
          {featuredProducts.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>

        <Reveal className="mt-16 flex justify-center">
          <Link
            to="/shop"
            className="border border-gold-600/60 px-8 py-3.5 text-sm tracking-wide-xl uppercase text-gold-700 transition hover:bg-plum-900 hover:text-ivory-50 hover:border-plum-900"
          >
            View the Full Collection
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
