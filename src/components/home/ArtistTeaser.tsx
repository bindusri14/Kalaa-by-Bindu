import { Link } from "react-router-dom";
import { Reveal } from "../ui/Reveal";
import { Ornament } from "../ui/Ornament";
import { ArtistPhoto } from "../ui/ArtistPhoto";

export function ArtistTeaser() {
  return (
    <section className="bg-plum-950 px-6 py-24 md:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 md:grid-cols-2">
        <Reveal>
          <ArtistPhoto className="aspect-[4/5] w-full max-w-md" />
        </Reveal>

        <Reveal delay={0.15} className="flex flex-col items-start gap-6">
          <span className="text-xs tracking-wide-xl uppercase text-gold-300">The Artist</span>
          <h2 className="text-4xl text-ivory-50 md:text-5xl">
            A brush, a bolt of fabric,
            <br />
            and Bindu.
          </h2>
          <Ornament className="!justify-start" />
          <p className="max-w-md text-base font-light leading-relaxed text-ivory-100/70">
            Every piece begins on Bindu's worktable — sketched freehand, mixed by eye, and
            painted without a single stencil. Kalaa by Bindu grew from a childhood spent
            watching her grandmother paint temple cloth, into a studio that now dresses
            people across the country in wearable, hand-painted art.
          </p>
          <Link
            to="/about"
            className="group flex items-center gap-2 border border-gold-400/60 px-7 py-3 text-sm tracking-wide-xl uppercase text-gold-200 transition hover:bg-gold-400 hover:text-plum-950"
          >
            Read Her Story
            <span className="transition group-hover:translate-x-1">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
