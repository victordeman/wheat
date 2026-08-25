import React from "react";
import { cn } from "./Button";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  variant?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
  titleAs?: "h1" | "h2" | "h3";
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  variant = "light",
  align = "left",
  className = "",
  titleAs: TitleComponent = "h2",
}) => {
  const isDark = variant === "dark";

  return (
    <div
      className={cn(
        "space-y-4 max-w-3xl",
        align === "center" ? "mx-auto text-center" : "",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "text-xs font-semibold uppercase tracking-widest block",
            isDark ? "text-brand-gold" : "text-brand-gold-deep"
          )}
        >
          {eyebrow}
        </span>
      )}
      <TitleComponent
        className={cn(
          "font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.15]",
          isDark ? "text-white" : "text-brand-dark"
        )}
      >
        {title}
      </TitleComponent>
      {description && (
        <p
          className={cn(
            "text-base md:text-lg leading-relaxed",
            isDark ? "text-gray-300" : "text-gray-700"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
