import { clsx } from "clsx";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={clsx(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={clsx(
            "text-xs tracking-wide-xl uppercase",
            dark ? "text-gold-300" : "text-gold-600",
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={clsx(
          "text-4xl md:text-5xl font-medium",
          dark ? "text-ivory-50" : "text-ink-900",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            "max-w-xl text-base font-light leading-relaxed",
            dark ? "text-ivory-200/80" : "text-ink-500",
            align === "center" ? "mx-auto" : "",
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
