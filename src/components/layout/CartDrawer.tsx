import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { formatINR } from "../../lib/format";
import { ProductMedia } from "../ui/ProductMedia";

export function CartDrawer() {
  const { isOpen, closeCart, lines, updateQty, removeItem, subtotal } = useCart();
  const [checkingOut, setCheckingOut] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />
          <motion.aside
            className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-ivory-50 shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between border-b border-ink-900/10 px-6 py-5">
              <h2 className="text-2xl text-ink-900">Your Selection</h2>
              <button
                type="button"
                onClick={closeCart}
                aria-label="Close cart"
                className="flex h-9 w-9 items-center justify-center text-ink-500 transition hover:text-ink-900"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {lines.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
                <p className="text-ink-500">Your bag is empty.</p>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="border border-gold-600 px-6 py-2.5 text-sm tracking-wide-xl uppercase text-gold-700 transition hover:bg-gold-600 hover:text-ivory-50"
                >
                  Explore the Shop
                </Link>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-4">
                  <ul className="flex flex-col gap-5">
                    {lines.map((line) => (
                      <li key={`${line.product.id}-${line.size}`} className="flex gap-4">
                        <ProductMedia product={line.product} className="h-24 w-20 shrink-0" />
                        <div className="flex flex-1 flex-col gap-1">
                          <div className="flex items-start justify-between gap-2">
                            <p className="text-sm leading-snug text-ink-900">{line.product.name}</p>
                            <button
                              type="button"
                              onClick={() => removeItem(line.product.id, line.size)}
                              aria-label="Remove item"
                              className="shrink-0 text-ink-500/60 transition hover:text-ink-900"
                            >
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                              </svg>
                            </button>
                          </div>
                          <p className="text-xs text-ink-500">Size {line.size}</p>
                          <div className="mt-1 flex items-center justify-between">
                            <div className="flex items-center border border-ink-900/15">
                              <button
                                type="button"
                                className="h-7 w-7 text-ink-700 transition hover:bg-ivory-200"
                                onClick={() => updateQty(line.product.id, line.size, line.qty - 1)}
                              >
                                −
                              </button>
                              <span className="w-8 text-center text-sm">{line.qty}</span>
                              <button
                                type="button"
                                className="h-7 w-7 text-ink-700 transition hover:bg-ivory-200"
                                onClick={() => updateQty(line.product.id, line.size, line.qty + 1)}
                              >
                                +
                              </button>
                            </div>
                            <span className="text-sm text-ink-900">
                              {formatINR(line.product.price * line.qty)}
                            </span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-ink-900/10 px-6 py-5">
                  <div className="mb-4 flex items-center justify-between text-sm">
                    <span className="text-ink-500">Subtotal</span>
                    <span className="text-lg text-ink-900">{formatINR(subtotal)}</span>
                  </div>
                  <p className="mb-4 text-xs leading-relaxed text-ink-500">
                    Taxes and shipping calculated at checkout. Each piece is made and packed to order.
                  </p>
                  {checkingOut ? (
                    <div className="border border-gold-500/40 bg-gold-100/60 px-4 py-3 text-center text-sm text-gold-700">
                      Thank you — our atelier will reach out shortly to confirm sizing and complete
                      your order.
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setCheckingOut(true)}
                      className="w-full bg-plum-900 py-3.5 text-sm tracking-wide-xl uppercase text-ivory-50 transition hover:bg-plum-800"
                    >
                      Proceed to Checkout
                    </button>
                  )}
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
