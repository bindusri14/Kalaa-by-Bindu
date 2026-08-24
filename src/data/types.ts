export type CategorySlug =
  | "frocks"
  | "kurtas"
  | "kurtas-men"
  | "sarees"
  | "dupattas"
  | "tote-bags";

export interface Category {
  slug: CategorySlug;
  name: string;
  devanagari: string;
  tagline: string;
  description: string;
}

export type SwatchVariant = "paisley" | "floral" | "ikat" | "mandala" | "leaf";

export interface SwatchTheme {
  variant: SwatchVariant;
  base: string;
  motif: string;
  accent: string;
}

export interface Product {
  id: string;
  name: string;
  category: CategorySlug;
  technique: string;
  fabric: string;
  price: number;
  sizes: string[];
  description: string;
  /** Real product photography, in display order. Falls back to `swatch` when empty. */
  images: string[];
  swatch: SwatchTheme;
  featured?: boolean;
}
