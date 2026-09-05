import type { Product, SwatchTheme, SwatchVariant } from "./types";

import frockKrishnaLotus from "../assets/products/frock-krishna-lotus.jpeg";
import kurtaPeacockBlossom from "../assets/products/kurta-peacock-blossom.jpeg";
import kurtaLotusTrail from "../assets/products/kurta-lotus-trail.jpeg";
import kurtaGoldenBloom from "../assets/products/kurta-golden-bloom.jpeg";
import kurtaMenPeacockFeather from "../assets/products/kurta-men-peacock-feather.jpeg";
import tshirtF1Race from "../assets/products/tshirt-f1-race.png";
import totePandaBamboo from "../assets/products/tote-panda-bamboo.jpeg";
import totePortraitBloom from "../assets/products/tote-portrait-bloom.jpeg";
import toteFloralPop from "../assets/products/tote-floral-pop.png";

const palettes: Omit<SwatchTheme, "variant">[] = [
  { base: "#c76b4a", motif: "#f4e3c9", accent: "#7a3623" }, // terracotta
  { base: "#33456b", motif: "#eae2c8", accent: "#1b2740" }, // indigo
  { base: "#d9a441", motif: "#4a2e1f", accent: "#8a5a1e" }, // mustard
  { base: "#3f5d43", motif: "#e9dcb8", accent: "#24391f" }, // forest
  { base: "#a6462b", motif: "#f2d9b1", accent: "#5c2313" }, // rust
  { base: "#2c6e6a", motif: "#f2e6c9", accent: "#163e3c" }, // teal
  { base: "#c98a94", motif: "#fbeee0", accent: "#7a4650" }, // blush
  { base: "#5c2854", motif: "#e6c988", accent: "#33102f" }, // plum
];

const variants: SwatchVariant[] = ["paisley", "floral", "ikat", "mandala", "leaf"];

function swatchAt(index: number): SwatchTheme {
  const palette = palettes[index % palettes.length];
  const variant = variants[index % variants.length];
  return { variant, ...palette };
}

const sizesApparel = ["S", "M", "L", "XL", "XXL"];
const sizesFrock = ["1-2Y", "2-3Y", "3-4Y", "4-5Y", "5-6Y"];
const sizesOneSize = ["One Size"];

export const products: Product[] = [
  {
    id: "frock-krishna-lotus",
    name: "Little Krishna Frock",
    category: "frocks",
    section: "custom",
    technique: "Pichwai",
    fabric: "Pure Cotton",
    price: 1399,
    sizes: sizesFrock,
    description:
      "A sunshine-yellow cotton frock for the smallest member of the family, hand-painted with a Pichwai-style baby Krishna holding a lotus. Ruffled straps and hem, tied at the back for an easy fit.",
    images: [frockKrishnaLotus],
    swatch: swatchAt(2),
    featured: true,
  },
  {
    id: "kurta-peacock-blossom",
    name: "Peacock Blossom Kurta",
    category: "kurtas",
    section: "custom",
    technique: "Kalamkari",
    fabric: "Pure Cotton",
    price: 1499,
    sizes: sizesApparel,
    description:
      "An olive kurta with a hand-painted peacock in full plume, trailing into a branch of pink blossoms down the hem. Mandarin collar, three-quarter sleeves.",
    images: [kurtaPeacockBlossom],
    swatch: swatchAt(3),
    featured: true,
  },
  {
    id: "kurta-lotus-trail",
    name: "Lotus Trail Kurta",
    category: "kurtas",
    section: "custom",
    technique: "Pichwai",
    fabric: "Cotton",
    price: 949,
    sizes: sizesApparel,
    description:
      "A soft grey kurta with hand-painted lotus blooms trailing across the hem and cuffs — a quiet, everyday piece with one considered detail.",
    images: [kurtaLotusTrail],
    swatch: swatchAt(6),
  },
  {
    id: "kurta-golden-bloom",
    name: "Golden Bloom Kurta",
    category: "kurtas",
    section: "custom",
    technique: "Mughal Floral",
    fabric: "Cotton",
    price: 1199,
    sizes: sizesApparel,
    description:
      "A deep maroon kurta with a hand-painted golden floral spray at the yoke, trailing down one side in the Mughal miniature tradition.",
    images: [kurtaGoldenBloom],
    swatch: swatchAt(7),
  },
  {
    id: "kurta-men-peacock-feather",
    name: "Peacock Feather Kurta",
    category: "kurtas-men",
    section: "custom",
    technique: "Pichwai",
    fabric: "Linen Cotton",
    price: 1199,
    sizes: sizesApparel,
    description:
      "A crisp white kurta for men with a single hand-painted peacock feather and flute at the chest, inspired by Krishna's iconography and kept graphic and modern.",
    images: [kurtaMenPeacockFeather],
    swatch: swatchAt(1),
    featured: true,
  },
  {
    id: "tshirt-f1-race",
    name: "Formula 1 Graphic Tee",
    category: "t-shirts",
    section: "custom",
    technique: "Custom Print",
    fabric: "Cotton Jersey",
    price: 1199,
    sizes: sizesApparel,
    description:
      "A black cotton tee with a bold Formula 1 race-car graphic down the front — a custom-printed piece made to order alongside our hand-painted line.",
    images: [tshirtF1Race],
    swatch: swatchAt(5),
  },
  {
    id: "tote-panda-bamboo",
    name: "Panda & Bamboo Tote",
    category: "tote-bags",
    section: "launched",
    technique: "Hand-Painted",
    fabric: "Canvas",
    price: 499,
    sizes: sizesOneSize,
    description:
      "A natural canvas tote hand-painted with a panda cub nestled in bamboo, finished with hand-painted green straps.",
    images: [totePandaBamboo],
    swatch: swatchAt(3),
  },
  {
    id: "tote-portrait-bloom",
    name: "Sundari Tote",
    category: "tote-bags",
    section: "launched",
    technique: "Hand-Painted",
    fabric: "Cotton",
    price: 699,
    sizes: sizesOneSize,
    description:
      "A natural canvas tote hand-painted with a woman in profile among elephant-ear leaves, set against a bold sunset-orange disc.",
    images: [totePortraitBloom],
    swatch: swatchAt(6),
  },
  {
    id: "Abstract Boho Tote",
    name: "Pop Floral Tote",
    category: "tote-bags",
    section: "launched",
    technique: "Hand-Painted",
    fabric: "Cotton",
    price: 649,
    sizes: sizesOneSize,
    description:
      "A natural canvas tote hand-painted with line-drawn blooms over blocks of blue, yellow and orange, finished with black handles.",
    images: [toteFloralPop],
    swatch: swatchAt(1),
  },
];

export const featuredProducts = products.filter((p) => p.featured);

export const productById = (id: string) => products.find((p) => p.id === id);

export const productsByCategory = (slug: string) =>
  products.filter((p) => p.category === slug);
