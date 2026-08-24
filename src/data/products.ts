import type { Product, SwatchTheme, SwatchVariant } from "./types";

import frockKrishnaLotus from "../assets/products/frock-krishna-lotus.jpeg";
import kurtaPeacockBlossom from "../assets/products/kurta-peacock-blossom.jpeg";
import kurtaLotusTrail from "../assets/products/kurta-lotus-trail.jpeg";
import kurtaGoldenBloom from "../assets/products/kurta-golden-bloom.jpeg";
import kurtaWildflower from "../assets/products/kurta-wildflower.jpg";
import kurtaMenPeacockFeather from "../assets/products/kurta-men-peacock-feather.jpeg";
import sareeLotusPond from "../assets/products/saree-lotus-pond.jpg";
import sareePeacockFeather from "../assets/products/saree-peacock-feather.jpg";
import toteLotusBloom from "../assets/products/tote-lotus-bloom.jpg";

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
const sizesSaree = ["Free Size"];

export const products: Product[] = [
  {
    id: "frock-krishna-lotus",
    name: "Little Krishna Frock",
    category: "frocks",
    technique: "Pichwai",
    fabric: "Pure Cotton",
    price: 2400,
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
    technique: "Kalamkari",
    fabric: "Pure Cotton",
    price: 4800,
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
    technique: "Pichwai",
    fabric: "Cotton",
    price: 4200,
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
    technique: "Mughal Floral",
    fabric: "Cotton",
    price: 4600,
    sizes: sizesApparel,
    description:
      "A deep maroon kurta with a hand-painted golden floral spray at the yoke, trailing down one side in the Mughal miniature tradition.",
    images: [kurtaGoldenBloom],
    swatch: swatchAt(7),
  },
  {
    id: "kurta-wildflower",
    name: "Wildflower Kurta",
    category: "kurtas",
    technique: "Botanical",
    fabric: "Cotton",
    price: 4400,
    sizes: sizesApparel,
    description:
      "A rust kurta with hand-painted wildflowers gathered at the neckline and trailing down the front in warm gold — understated enough for daily wear.",
    images: [kurtaWildflower],
    swatch: swatchAt(4),
  },
  {
    id: "kurta-men-peacock-feather",
    name: "Peacock Feather Kurta",
    category: "kurtas-men",
    technique: "Pichwai",
    fabric: "Linen Cotton",
    price: 3800,
    sizes: sizesApparel,
    description:
      "A crisp white kurta for men with a single hand-painted peacock feather and flute at the chest, inspired by Krishna's iconography and kept graphic and modern.",
    images: [kurtaMenPeacockFeather],
    swatch: swatchAt(1),
    featured: true,
  },
  {
    id: "saree-lotus-pond",
    name: "Lotus Pond Saree",
    category: "sarees",
    technique: "Pichwai",
    fabric: "Silk Chiffon",
    price: 21500,
    sizes: sizesSaree,
    description:
      "An ivory saree hand-painted with a sprawling lotus pond across the pallu and border — soft pinks and greens on a fluid silk chiffon drape.",
    images: [sareeLotusPond],
    swatch: swatchAt(6),
    featured: true,
  },
  {
    id: "saree-peacock-feather",
    name: "Peacock Feather Saree",
    category: "sarees",
    technique: "Kalamkari",
    fabric: "Pure Silk",
    price: 26500,
    sizes: sizesSaree,
    description:
      "A midnight-blue silk saree with a hand-painted peacock and feather border in emerald and gold — our most detailed bridal piece, days in the making.",
    images: [sareePeacockFeather],
    swatch: swatchAt(1),
    featured: true,
  },
  {
    id: "tote-lotus-bloom",
    name: "Lotus Bloom Tote",
    category: "tote-bags",
    technique: "Botanical",
    fabric: "Canvas, Leather Handles",
    price: 2200,
    sizes: sizesOneSize,
    description:
      "A natural canvas tote hand-painted with a single lotus in watercolour pinks and gold flecks, finished with leather handles and a riveted tag.",
    images: [toteLotusBloom],
    swatch: swatchAt(0),
    featured: true,
  },
];

export const featuredProducts = products.filter((p) => p.featured);

export const productById = (id: string) => products.find((p) => p.id === id);

export const productsByCategory = (slug: string) =>
  products.filter((p) => p.category === slug);
