import { ArtistPhoto } from "../components/ui/ArtistPhoto";
import { ProductMedia } from "../components/ui/ProductMedia";
import { Ornament } from "../components/ui/Ornament";
import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { products } from "../data/products";

export default function About() {
  return (
    <div className="bg-ivory-100">
      <section className="relative overflow-hidden bg-plum-950 px-6 pb-24 pt-40 md:px-10">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{ background: "radial-gradient(ellipse at 50% 0%, #451a3f 0%, #170512 70%)" }}
        />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 md:grid-cols-2">
          <Reveal>
            <span className="text-xs tracking-wide-xl uppercase text-gold-300">The Artist</span>
            <h1 className="mt-4 text-5xl leading-tight text-ivory-50 md:text-6xl">Bindu</h1>
            <Ornament className="!justify-start my-6" />
            <p className="max-w-md text-base font-light leading-relaxed text-ivory-100/70">
              Founder and lead artist of Kalaa by Bindu. 
              What began as an exploration of colors and fabrics has evolved into a signature style where every piece tells its own story through art
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <ArtistPhoto className="aspect-[4/5] w-full max-w-md md:ml-auto" />
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 text-center">
          <Reveal>
            <p className="text-2xl font-light italic leading-relaxed text-ink-900 md:text-3xl">
              "I see every piece of fabric as a blank canvas — a place where color, imagination, and a little bit of soul can come together."
            </p>
            <p className="mt-4 text-sm tracking-wide-xl uppercase text-gold-600">— Bindu, Founder</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory-200 px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 md:grid-cols-2">
          <Reveal className="flex flex-col gap-4">
            <h2 className="text-3xl text-ink-900">Where it Began</h2>
            <p className="font-light leading-relaxed text-ink-500">
              It all began with Bindu’s love for colors, fabrics, and the beauty of art. 
              What started as a creative passion slowly grew into a journey of turning simple fabrics into expressive works of art. 
              With every piece, her ideas evolved into a distinctive style that feels both traditional and contemporary. 
              Today, Kalaa by Bindu is a celebration of that journey, bringing art to life through wearable creations.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-4">
            <h2 className="text-3xl text-ink-900">The Studio Today</h2>
            <p className="font-light leading-relaxed text-ink-500">
              Today, Kalaa by Bindu is a one-woman studio where every part of the creative journey is managed by Bindu herself. 
              From developing designs and choosing colors to painting, finishing, and preparing each piece, she personally oversees it all. 
              Every creation carries her vision, care, and attention to detail from beginning to end.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory-50 px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="From the Studio"
            title="Brushwork, Up Close"
            description="A glimpse of the techniques behind the collection."
            className="mb-16"
          />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {products.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.06}>
                <ProductMedia product={p} className="aspect-square w-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
