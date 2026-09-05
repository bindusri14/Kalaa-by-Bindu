import { Hero } from "../components/home/Hero";
import { CategoryShowcase } from "../components/home/CategoryShowcase";
import { FeaturedProducts } from "../components/home/FeaturedProducts";
import { ArtistTeaser } from "../components/home/ArtistTeaser";
import { LiveArtExperience } from "../components/home/LiveArtExperience";
import { ProcessStrip } from "../components/home/ProcessStrip";
import { Newsletter } from "../components/home/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryShowcase />
      <FeaturedProducts />
      <ArtistTeaser />
      <LiveArtExperience />
      <ProcessStrip />
      <Newsletter />
    </>
  );
}
