import type { Category } from "./types";

export const categories: Category[] = [
  {
    slug: "frocks",
    name: "Frocks",
    devanagari: "फ्रॉक",
    tagline: "Little ones' finery",
    description:
      "Hand-painted cotton frocks for the smallest members of the family — playful motifs, soft dyes, made to twirl in.",
  },
  {
    slug: "kurtas",
    name: "Kurtas",
    devanagari: "कुर्ता",
    tagline: "Everyday heritage",
    description:
      "Hand-painted kurtas in breathable cotton — a single motif, brushed by hand, on a silhouette made for every day.",
  },
  {
    slug: "kurtas-men",
    name: "Men's Kurtas",
    devanagari: "पुरुष कुर्ता",
    tagline: "Tailored heritage",
    description:
      "Structured kurtas for men, each carrying one restrained hand-painted motif — quiet enough for the office, considered enough for a celebration.",
  },
  {
    slug: "sarees",
    name: "Sarees",
    devanagari: "साड़ी",
    tagline: "The artist's canvas",
    description:
      "Silk and chiffon sarees painted border to border by hand — our most detailed pieces, each one taking days to finish.",
  },
  {
    slug: "dupattas",
    name: "Dupattas",
    devanagari: "दुपट्टा",
    tagline: "The finishing drape",
    description:
      "Hand-painted dupattas to complete a kurta or stand alone. This season's pieces are still on the easel — check back soon.",
  },
  {
    slug: "tote-bags",
    name: "Tote Bags",
    devanagari: "टोट बैग",
    tagline: "Art you carry",
    description:
      "Canvas totes with a single hand-painted motif and leather handles — wearable art for the everyday carry.",
  },
];

export const categoryBySlug = (slug: string) =>
  categories.find((c) => c.slug === slug);
