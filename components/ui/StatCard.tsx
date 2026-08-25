import React from "react";
import { Card } from "./Card";
import { cn } from "./Button";

export interface StatCardProps {
  value: string;
  label: string;
  subtext?: string;
  variant?: "default" | "dark" | "outline" | "gold";
  accentBorderPosition?: "top" | "left" | "none";
  className?: string;
  valueColor?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  subtext,
  variant = "default",
  accentBorderPosition = "top",
  className,
  valueColor,
}) => {
  const borderStyles = {
    top: variant === "dark" ? "border-t-4 border-t-brand-gold" : "border-t-4 border-t-brand-gold",
    left: "border-l-4 border-l-brand-gold",
    none: "",
  };

  const isDark = variant === "dark";

  return (
    <Card
      variant={variant}
      className={cn(
        "flex flex-col justify-between space-y-3",
        borderStyles[accentBorderPosition],
        className
      )}
    >
      <div>
        <div
          className={cn(
            "font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight",
            valueColor ? valueColor : isDark ? "text-brand-gold" : "text-brand-dark"
          )}
        >
          {value}
        </div>
        <div
          className={cn(
            "font-semibold text-sm mt-2 leading-snug",
            isDark ? "text-gray-200" : "text-brand-green"
          )}
        >
          {label}
        </div>
      </div>
      {subtext && (
        <div
          className={cn(
            "text-xs uppercase tracking-wider pt-2 border-t",
            isDark ? "text-gray-400 border-gray-800" : "text-gray-500 border-brand-border"
          )}
        >
          {subtext}
        </div>
      )}
    </Card>
  );
};
