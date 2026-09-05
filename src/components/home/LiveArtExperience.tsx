import { Link } from "react-router-dom";
import { Reveal } from "../ui/Reveal";
import { Ornament } from "../ui/Ornament";

const occasions = [
  {
    title: "Pre-Wedding Events",
    body: "Add a personal touch with live-painted totes, potlis, couple initials, names and traditional motifs. Guests can watch their keepsakes come to life, or take part in interactive canvases and memory artworks.",
  },
  {
    title: "Private Gatherings",
    body: "Turn your gathering into a shared creative experience — everyone can sit together, paint, experiment and create their own little piece of art, guided by Bindu. A fun, relaxed activity that becomes a memory to take home.",
  },
];

export function LiveArtExperience() {
  return (
    <section className="relative overflow-hidden bg-plum-950 px-6 py-24 md:px-10">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{ background: "radial-gradient(ellipse at 50% 0%, #451a3f 0%, #170512 70%)" }}
      />
      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal className="flex flex-col items-center gap-6">
          <span className="text-xs tracking-wide-xl uppercase text-gold-300">Beyond the Atelier</span>
          <h2 className="text-4xl text-ivory-50 md:text-5xl">Live Art Experiences</h2>
          <Ornament />
          <p className="max-w-xl text-base font-light leading-relaxed text-ivory-100/70">
            Bindu also paints live — turning weddings and private gatherings into a moment guests
            watch unfold, brush by brush.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {occasions.map((o, i) => (
            <Reveal
              key={o.title}
              delay={0.1 + i * 0.1}
              className="border border-gold-500/15 bg-plum-900/40 px-8 py-10 text-left"
            >
              <h3 className="text-xl text-gold-200">{o.title}</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-ivory-100/70">{o.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-14">
          <Link
            to="/contact"
            className="inline-block border border-gold-400/80 px-8 py-3.5 text-sm tracking-wide-xl uppercase text-gold-200 transition hover:bg-gold-400 hover:text-plum-950"
          >
            Enquire About a Live Session
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
