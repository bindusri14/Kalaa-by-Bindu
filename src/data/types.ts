export type CategorySlug =
  | "frocks"
  | "kurtas"
  | "kurtas-men"
  | "tote-bags"
  | "t-shirts";

export interface Category {
  slug: CategorySlug;
  name: string;
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

export type ProductSection = "custom" | "launched";

export interface Product {
  id: string;
  name: string;
  category: CategorySlug;
  section: ProductSection;
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
