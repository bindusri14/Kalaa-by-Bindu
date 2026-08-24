import { Link } from "react-router-dom";
import logoGold from "../../assets/logo-gold.png";
import { categories } from "../../data/categories";
import { Ornament } from "../ui/Ornament";

export function Footer() {
  return (
    <footer className="bg-plum-950 text-ivory-100">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="flex flex-col items-start gap-4 md:col-span-2">
            <img src={logoGold} alt="Kalaa by Bindu" className="h-11 w-auto shrink-0" />
            <p className="max-w-sm text-sm font-light leading-relaxed text-ivory-100/70">
              Every piece from Kalaa by Bindu begins as a blank fabric and a loaded brush.
              Hand-painted, small-batch, made across India — nothing is ever printed.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-xs tracking-wide-xl uppercase text-gold-300">Shop</h3>
            <Link to="/shop" className="text-sm text-ivory-100/70 transition hover:text-gold-300">
              All Pieces
            </Link>
            {categories.map((c) => (
              <Link
                key={c.slug}
                to={`/shop/${c.slug}`}
                className="text-sm text-ivory-100/70 transition hover:text-gold-300"
              >
                {c.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-xs tracking-wide-xl uppercase text-gold-300">Studio</h3>
            <Link to="/about" className="text-sm text-ivory-100/70 transition hover:text-gold-300">
              The Artist
            </Link>
            <Link to="/contact" className="text-sm text-ivory-100/70 transition hover:text-gold-300">
              Contact
            </Link>
            <a
              href="mailto:hello@kalaabybindu.com"
              className="text-sm text-ivory-100/70 transition hover:text-gold-300"
            >
              hello@kalaabybindu.com
            </a>
          </div>
        </div>

        <Ornament className="my-10" />

        <div className="flex flex-col items-center justify-between gap-3 text-xs text-ivory-100/40 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Kalaa by Bindu. All rights reserved.</p>
          <p className="tracking-wide-xl uppercase">Hand-Painted, Always.</p>
        </div>
      </div>
    </footer>
  );
}
