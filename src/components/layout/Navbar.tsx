import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { clsx } from "clsx";
import logoGold from "../../assets/logo-gold.png";
import { categories } from "../../data/categories";
import { useCart } from "../../context/CartContext";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "The Artist", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, openCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setShopOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === "/";
  const solid = scrolled || mobileOpen || !isHome;

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        solid ? "bg-plum-950/95 shadow-lg shadow-black/20 backdrop-blur" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoGold} alt="Kalaa by Bindu" className="h-9 w-auto shrink-0 md:h-11" />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              clsx(
                "text-sm tracking-wide-xl uppercase text-ivory-100/90 transition hover:text-gold-300",
                isActive && "text-gold-300",
              )
            }
          >
            Home
          </NavLink>

          <div
            className="relative"
            onMouseEnter={() => setShopOpen(true)}
            onMouseLeave={() => setShopOpen(false)}
          >
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                clsx(
                  "text-sm tracking-wide-xl uppercase text-ivory-100/90 transition hover:text-gold-300",
                  isActive && "text-gold-300",
                )
              }
            >
              Shop
            </NavLink>
            <AnimatePresence>
              {shopOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-4"
                >
                  <div className="rounded-sm border border-gold-500/20 bg-plum-950/98 p-3 shadow-xl shadow-black/30 backdrop-blur">
                    <Link
                      to="/shop"
                      className="block rounded-sm px-3 py-2 text-sm text-gold-300 transition hover:bg-plum-800"
                    >
                      All Pieces
                    </Link>
                    <div className="my-1 h-px bg-gold-500/15" />
                    {categories.map((c) => (
                      <Link
                        key={c.slug}
                        to={`/shop/${c.slug}`}
                        className="block rounded-sm px-3 py-2 text-sm text-ivory-100/90 transition hover:bg-plum-800 hover:text-gold-300"
                      >
                        {c.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.slice(1).map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                clsx(
                  "text-sm tracking-wide-xl uppercase text-ivory-100/90 transition hover:text-gold-300",
                  isActive && "text-gold-300",
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={openCart}
            aria-label="Open cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-ivory-100 transition hover:text-gold-300"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M6 8h12l-1.2 11.2a2 2 0 0 1-2 1.8H9.2a2 2 0 0 1-2-1.8L6 8Z" strokeLinejoin="round" />
              <path d="M9 8V6a3 3 0 0 1 6 0v2" strokeLinecap="round" />
            </svg>
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-gold-500 text-[10px] font-medium text-plum-950">
                {itemCount}
              </span>
            )}
          </button>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center text-ivory-100 md:hidden"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
              {mobileOpen ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-gold-500/15 md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              <Link to="/" className="py-2 text-sm uppercase tracking-wide-xl text-ivory-100">
                Home
              </Link>
              <Link to="/shop" className="py-2 text-sm uppercase tracking-wide-xl text-ivory-100">
                Shop All
              </Link>
              {categories.map((c) => (
                <Link
                  key={c.slug}
                  to={`/shop/${c.slug}`}
                  className="py-2 pl-4 text-sm text-ivory-100/70"
                >
                  {c.name}
                </Link>
              ))}
              <Link to="/about" className="py-2 text-sm uppercase tracking-wide-xl text-ivory-100">
                The Artist
              </Link>
              <Link to="/contact" className="py-2 text-sm uppercase tracking-wide-xl text-ivory-100">
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
