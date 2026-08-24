import { useState, type FormEvent } from "react";
import { Reveal } from "../ui/Reveal";
import { Ornament } from "../ui/Ornament";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="bg-plum-900 px-6 py-20 md:px-10">
      <Reveal className="mx-auto flex max-w-xl flex-col items-center gap-5 text-center">
        <span className="text-xs tracking-wide-xl uppercase text-gold-300">Stay in the Studio</span>
        <h2 className="text-3xl text-ivory-50 md:text-4xl">New Pieces, Painted Monthly</h2>
        <Ornament />
        <p className="text-sm font-light text-ivory-100/70">
          A quiet note from the studio when a new collection is ready — nothing more.
        </p>

        {submitted ? (
          <p className="mt-2 text-sm text-gold-300">Thank you — welcome to the studio list.</p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-2 flex w-full max-w-sm gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full border border-ivory-100/25 bg-transparent px-4 py-3 text-sm text-ivory-50 placeholder:text-ivory-100/40 focus:border-gold-400 focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 bg-gold-500 px-6 py-3 text-sm tracking-wide-xl uppercase text-plum-950 transition hover:bg-gold-400"
            >
              Join
            </button>
          </form>
        )}
      </Reveal>
    </section>
  );
}
