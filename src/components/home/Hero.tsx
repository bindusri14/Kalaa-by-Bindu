import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { Ornament } from "../ui/Ornament";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.16, delayChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] overflow-hidden bg-plum-950">
      {/* background layers */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, #451a3f 0%, #260a25 55%, #170512 100%)",
          }}
        />
        <div className="absolute inset-0 bg-noise opacity-60 mix-blend-overlay" />

        {/* ambient ornaments */}
        <svg
          className="absolute -left-24 top-16 h-72 w-72 text-gold-500/10 animate-drift"
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeWidth="1"
            d="M100 20c50 0 70 40 60 80s-60 55-90 35c-25-18-30-52-10-70 10-9 30-9 35 5 5 12-5 20-15 15"
          />
        </svg>
        <svg
          className="absolute -right-16 bottom-0 h-96 w-96 text-gold-500/10 animate-drift-slow"
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="100" cy="100" r="40" strokeWidth="0.8" />
          <circle cx="100" cy="100" r="65" strokeWidth="0.8" strokeDasharray="2 6" />
          <circle cx="100" cy="100" r="90" strokeWidth="0.8" />
        </svg>
      </motion.div>

      {/* content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-6"
        >
          <motion.span
            variants={item}
            className="text-xs tracking-wide-xl uppercase text-gold-300/90 animate-shimmer"
          >
            Hand-Painted Fabric Couture
          </motion.span>

          <motion.h1
            variants={item}
            className="max-w-3xl text-5xl leading-[1.1] text-ivory-50 md:text-7xl"
          >
            Wearable art,
            <br />
            <span className="text-gold-gradient italic">painted by hand.</span>
          </motion.h1>

          <motion.div variants={item}>
            <Ornament />
          </motion.div>

          <motion.p
            variants={item}
            className="max-w-md text-base font-light leading-relaxed text-ivory-100/70"
          >
            Kurtas, frocks, tote bags and more — each one a canvas, brushed by an artist's hand
            before it ever becomes yours.
          </motion.p>

          <motion.div variants={item} className="mt-4 flex flex-wrap items-center justify-center gap-5">
            <Link
              to="/shop"
              className="border border-gold-400/80 px-8 py-3.5 text-sm tracking-wide-xl uppercase text-gold-200 transition hover:bg-gold-400 hover:text-plum-950"
            >
              Explore the Collection
            </Link>
            <Link
              to="/about"
              className="group flex items-center gap-2 text-sm tracking-wide-xl uppercase text-ivory-100/80 transition hover:text-gold-300"
            >
              Meet the Artist
              <span className="transition group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-10 flex flex-col items-center gap-2 text-ivory-100/50"
        >
          <span className="text-[10px] tracking-wide-xl uppercase">Scroll</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-8 w-px bg-gradient-to-b from-gold-400 to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
