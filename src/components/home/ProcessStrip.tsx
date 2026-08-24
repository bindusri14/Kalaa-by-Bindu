import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

const steps = [
  {
    n: "01",
    title: "Sketch",
    body: "Each motif is drawn freehand in charcoal directly onto the fabric — no stencils, no repeats.",
  },
  {
    n: "02",
    title: "Mix",
    body: "Natural and fabric-safe pigments are hand-mixed to match the season's palette, batch by batch.",
  },
  {
    n: "03",
    title: "Paint",
    body: "Brush to cloth. A single kurta can take anywhere from six to twenty hours of painting.",
  },
  {
    n: "04",
    title: "Set & Finish",
    body: "Colours are heat-set for wash-fastness, then tailored and pressed by hand before it reaches you.",
  },
];

export function ProcessStrip() {
  return (
    <section className="bg-ivory-200 px-6 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="The Craft" title="From Blank Cloth to Finished Piece" className="mb-16" />

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1} className="flex flex-col gap-3">
              <span className="text-sm text-gold-600">{s.n}</span>
              <h3 className="text-2xl text-ink-900">{s.title}</h3>
              <p className="text-sm font-light leading-relaxed text-ink-500">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
