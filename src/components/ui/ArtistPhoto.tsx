import { clsx } from "clsx";
import artistPhoto from "../../assets/artist-bindu.jpeg";

export function ArtistPhoto({ className }: { className?: string }) {
  return (
    <div className={clsx("relative overflow-hidden bg-plum-900", className)}>
      <img
        src={artistPhoto}
        alt="Bindu, founder and lead artist of Kalaa by Bindu"
        className="h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold-400/25" />
    </div>
  );
}
