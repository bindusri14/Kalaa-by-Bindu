import { ArtistPhoto } from "../components/ui/ArtistPhoto";
import { ProductMedia } from "../components/ui/ProductMedia";
import { Ornament } from "../components/ui/Ornament";
import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { products } from "../data/products";

const milestones = [
  { year: "2011", text: "Bindu paints her first commissioned dupatta for a family wedding." },
  { year: "2015", text: "Formal training in Kalamkari and Pichwai under two Mithila-region artists." },
  { year: "2019", text: "Kalaa by Bindu founded as a small studio of three hand-painters." },
  { year: "2026", text: "Now a full atelier, still painting every commission by hand — no exceptions." },
];

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
              Founder and lead artist of Kalaa by Bindu. Trained in Madhubani and Kalamkari
              painting, Bindu has spent over a decade turning plain cloth into wearable,
              hand-painted heirlooms.
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
              "I don't think of fabric as something to decorate. I think of it as a surface
              that's been waiting — the way a wall waits for a fresco."
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
              Bindu grew up watching her grandmother paint temple cloth in a small town in
              Andhra Pradesh, mixing pigment from tamarind seed and iron filings the way it had
              been done for generations. What started as an afternoon pastime became a formal
              apprenticeship, and eventually, a studio of her own.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-4">
            <h2 className="text-3xl text-ink-900">The Studio Today</h2>
            <p className="font-light leading-relaxed text-ink-500">
              Kalaa by Bindu now works with a small team of hand-painters across India, each
              trained in a specific regional technique — Warli, Gond, Pichwai, Kalamkari and
              Phad among them. Every piece that leaves the studio has passed under Bindu's own
              eye before it ships.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Milestones" title="A Decade at the Easel" className="mb-16" />
          <div className="mx-auto flex max-w-3xl flex-col gap-10">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.08}>
                <div className="flex items-start gap-6 border-b border-ink-900/10 pb-8">
                  <span className="w-16 shrink-0 font-display text-2xl text-gold-600">{m.year}</span>
                  <p className="font-light leading-relaxed text-ink-700">{m.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
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
