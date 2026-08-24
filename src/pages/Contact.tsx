import { useState, type FormEvent } from "react";
import { Reveal } from "../components/ui/Reveal";
import { Ornament } from "../components/ui/Ornament";
import { SectionHeading } from "../components/ui/SectionHeading";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-ivory-100 pt-28">
      <section className="px-6 py-16 md:px-10">
        <SectionHeading
          eyebrow="Get in Touch"
          title="We'd Love to Hear From You"
          description="Questions about sizing, custom commissions, or an order — write to us and the studio will reply within two business days."
          className="mb-16"
        />

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2">
          <Reveal>
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center gap-4 border border-gold-500/30 bg-ivory-50 px-8 py-16 text-center">
                <span className="text-3xl text-gold-600">✓</span>
                <p className="text-lg text-ink-900">Thank you for writing to us.</p>
                <p className="text-sm text-ink-500">
                  Our studio will be in touch at the email you provided.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <Field label="Name" type="text" required />
                <Field label="Email" type="email" required />
                <Field label="Subject" type="text" />
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs tracking-wide-xl uppercase text-ink-500">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="border border-ink-900/15 bg-ivory-50 px-4 py-3 text-sm text-ink-900 focus:border-gold-500 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 w-full bg-plum-900 py-3.5 text-sm tracking-wide-xl uppercase text-ivory-50 transition hover:bg-plum-800 sm:w-auto sm:px-10"
                >
                  Send Message
                </button>
              </form>
            )}
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-8">
            <div>
              <h3 className="text-2xl text-ink-900">Studio</h3>
              <Ornament className="!justify-start my-3" />
              <p className="font-light leading-relaxed text-ink-500">
                Kalaa by Bindu
                <br />
                Hand-Painted Textile Atelier
                <br />
                India
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-sm tracking-wide-xl uppercase text-gold-600">Email</h3>
              <a href="mailto:kalaabybindu@gmail.com" className="text-ink-900 hover:text-gold-700">
                kalaabybindu@gmail.com
              </a>
            </div>
            <div>
              <h3 className="mb-2 text-sm tracking-wide-xl uppercase text-gold-600">
                Custom Commissions
              </h3>
              <p className="font-light leading-relaxed text-ink-500">
                A limited number of bespoke, fully custom pieces are taken on each season.
                Mention "Commission" in your subject line to begin the conversation.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function Field({ label, type, required }: { label: string; type: string; required?: boolean }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs tracking-wide-xl uppercase text-ink-500">{label}</label>
      <input
        type={type}
        required={required}
        className="border border-ink-900/15 bg-ivory-50 px-4 py-3 text-sm text-ink-900 focus:border-gold-500 focus:outline-none"
      />
    </div>
  );
}
