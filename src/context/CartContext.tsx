import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Product } from "../data/types";

export interface CartLine {
  product: Product;
  size: string;
  qty: number;
}

interface CartState {
  lines: CartLine[];
  isOpen: boolean;
  addItem: (product: Product, size: string, qty?: number) => void;
  removeItem: (productId: string, size: string) => void;
  updateQty: (productId: string, size: string, qty: number) => void;
  openCart: () => void;
  closeCart: () => void;
  subtotal: number;
  itemCount: number;
}

const CartContext = createContext<CartState | null>(null);

const STORAGE_KEY = "kalaa-cart-v1";

interface StoredLine {
  productId: string;
  size: string;
  qty: number;
}

export function CartProvider({ children, catalog }: { children: ReactNode; catalog: Product[] }) {
  const [lines, setLines] = useState<CartLine[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const stored: StoredLine[] = JSON.parse(raw);
      return stored
        .map((s) => {
          const product = catalog.find((p) => p.id === s.productId);
          return product ? { product, size: s.size, qty: s.qty } : null;
        })
        .filter((l): l is CartLine => l !== null);
    } catch {
      return [];
    }
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const stored: StoredLine[] = lines.map((l) => ({
      productId: l.product.id,
      size: l.size,
      qty: l.qty,
    }));
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
  }, [lines]);

  const addItem = (product: Product, size: string, qty = 1) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.product.id === product.id && l.size === size);
      if (existing) {
        return prev.map((l) =>
          l.product.id === product.id && l.size === size ? { ...l, qty: l.qty + qty } : l,
        );
      }
      return [...prev, { product, size, qty }];
    });
    setIsOpen(true);
  };

  const removeItem = (productId: string, size: string) => {
    setLines((prev) => prev.filter((l) => !(l.product.id === productId && l.size === size)));
  };

  const updateQty = (productId: string, size: string, qty: number) => {
    if (qty < 1) {
      removeItem(productId, size);
      return;
    }
    setLines((prev) =>
      prev.map((l) => (l.product.id === productId && l.size === size ? { ...l, qty } : l)),
    );
  };

  const subtotal = useMemo(
    () => lines.reduce((sum, l) => sum + l.product.price * l.qty, 0),
    [lines],
  );
  const itemCount = useMemo(() => lines.reduce((sum, l) => sum + l.qty, 0), [lines]);

  const value: CartState = {
    lines,
    isOpen,
    addItem,
    removeItem,
    updateQty,
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
    subtotal,
    itemCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
