import { clsx } from "clsx";
import type { Product } from "../../data/types";
import { FabricSwatch } from "./FabricSwatch";

interface ProductMediaProps {
  product: Product;
  imageIndex?: number;
  className?: string;
}

export function ProductMedia({ product, imageIndex = 0, className }: ProductMediaProps) {
  const src = product.images[imageIndex];

  if (src) {
    return (
      <div className={clsx("overflow-hidden bg-plum-900", className)}>
        <img
          src={src}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return <FabricSwatch swatch={product.swatch} className={className} />;
}
