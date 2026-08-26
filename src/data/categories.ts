import type { Category } from "./types";

export const categories: Category[] = [
  {
    slug: "frocks",
    name: "Frocks",
    tagline: "Little ones' finery",
    description:
      "Hand-painted cotton frocks for the smallest members of the family — playful motifs, soft dyes, made to twirl in.",
  },
  {
    slug: "kurtas",
    name: "Kurtas",
    tagline: "Everyday heritage",
    description:
      "Hand-painted kurtas in breathable cotton — a single motif, brushed by hand, on a silhouette made for every day.",
  },
  {
    slug: "kurtas-men",
    name: "Men's Kurtas",
    tagline: "Tailored heritage",
    description:
      "Structured kurtas for men, each carrying one restrained hand-painted motif — quiet enough for the office, considered enough for a celebration.",
  },
  {
    slug: "tote-bags",
    name: "Tote Bags",
    tagline: "Art you carry",
    description:
      "Canvas totes with a single hand-painted motif — wearable art for the everyday carry.",
  },
  {
    slug: "t-shirts",
    name: "T-Shirts",
    tagline: "Graphic & custom",
    description:
      "Custom-printed graphic tees made to order — a casual counterpoint to the hand-painted line.",
  },
];

export const categoryBySlug = (slug: string) =>
  categories.find((c) => c.slug === slug);
