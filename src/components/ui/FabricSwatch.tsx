import { useId } from "react";
import type { SwatchTheme } from "../../data/types";
import { clsx } from "clsx";

interface FabricSwatchProps {
  swatch: SwatchTheme;
  className?: string;
}

function PatternContent({ variant, motif, accent }: { variant: SwatchTheme["variant"]; motif: string; accent: string }) {
  switch (variant) {
    case "paisley":
      return (
        <g>
          <path
            d="M18 4c9 0 14 7 12 15c-2 8-11 11-17 7c-5-3-6-10-2-14c2-2 6-2 7 1c1 2-1 4-3 3"
            fill="none"
            stroke={motif}
            strokeWidth="1.4"
            opacity="0.85"
          />
        </g>
      );
    case "floral":
      return (
        <g opacity="0.85">
          {[0, 72, 144, 216, 288].map((deg) => (
            <ellipse
              key={deg}
              cx="20"
              cy="10"
              rx="4.2"
              ry="7.5"
              fill={motif}
              opacity="0.75"
              transform={`rotate(${deg} 20 20)`}
            />
          ))}
          <circle cx="20" cy="20" r="3" fill={accent} />
        </g>
      );
    case "ikat":
      return (
        <g opacity="0.85">
          <path d="M0 20 L20 0 L40 20 L20 40 Z" fill="none" stroke={motif} strokeWidth="1.3" />
          <circle cx="20" cy="20" r="2.4" fill={motif} />
        </g>
      );
    case "mandala":
      return (
        <g opacity="0.85" fill="none" stroke={motif} strokeWidth="1.1">
          <circle cx="20" cy="20" r="3" />
          <circle cx="20" cy="20" r="7.5" />
          <circle cx="20" cy="20" r="12" strokeDasharray="1.5 3" />
        </g>
      );
    case "leaf":
      return (
        <g opacity="0.85">
          <path
            d="M20 4c7 5 7 19 0 28c-7-9-7-23 0-28Z"
            fill="none"
            stroke={motif}
            strokeWidth="1.3"
          />
          <line x1="20" y1="7" x2="20" y2="29" stroke={motif} strokeWidth="1" />
        </g>
      );
  }
}

export function FabricSwatch({ swatch, className }: FabricSwatchProps) {
  const uid = useId().replace(/[:]/g, "");
  const patternId = `pat-${uid}`;
  const gradId = `grad-${uid}`;
  const vignetteId = `vig-${uid}`;
  const patternSize = swatch.variant === "ikat" ? 40 : swatch.variant === "mandala" ? 40 : 40;

  return (
    <div className={clsx("relative overflow-hidden bg-plum-900", className)}>
      <svg
        viewBox="0 0 400 500"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
        role="presentation"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={swatch.base} />
            <stop offset="100%" stopColor={swatch.accent} />
          </linearGradient>
          <radialGradient id={vignetteId} cx="50%" cy="35%" r="75%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.16" />
            <stop offset="55%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.28" />
          </radialGradient>
          <pattern
            id={patternId}
            width={patternSize}
            height={patternSize}
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(8)"
          >
            <PatternContent variant={swatch.variant} motif={swatch.motif} accent={swatch.accent} />
          </pattern>
        </defs>
        <rect width="400" height="500" fill={`url(#${gradId})`} />
        <rect width="400" height="500" fill={`url(#${patternId})`} />
        <rect width="400" height="500" fill={`url(#${vignetteId})`} />
      </svg>
      <div className="pointer-events-none absolute inset-0 bg-noise mix-blend-overlay" />
    </div>
  );
}
