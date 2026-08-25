import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Card } from "./Card";
import { cn } from "./Button";

export interface PathwayCardProps {
  id: string;
  title: string;
  description: string;
  actionText: string;
  image?: string;
  onSelect?: (id: string) => void;
  variant?: "default" | "dark";
  className?: string;
}

export const PathwayCard: React.FC<PathwayCardProps> = ({
  id,
  title,
  description,
  actionText,
  image,
  onSelect,
  variant = "default",
  className,
}) => {
  const isDark = variant === "dark";

  return (
    <Card
      variant={variant}
      className={cn(
        "p-0 overflow-hidden flex flex-col justify-between border hover:border-brand-gold transition-all duration-200",
        isDark
          ? "bg-[#141814] border-gray-800 text-white"
          : "bg-white border-brand-border text-brand-text",
        className
      )}
    >
      <div>
        {image && (
          <div className="relative h-44 w-full bg-gray-100">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="p-6 space-y-3">
          <h3
            className={cn(
              "font-serif text-xl font-bold",
              isDark ? "text-white" : "text-brand-dark"
            )}
          >
            {title}
          </h3>
          <p
            className={cn(
              "text-sm leading-relaxed",
              isDark ? "text-gray-400" : "text-gray-600"
            )}
          >
            {description}
          </p>
        </div>
      </div>

      <div className="p-6 pt-0">
        <a
          href="#contact"
          onClick={() => onSelect?.(id)}
          className={cn(
            "inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold",
            isDark
              ? "text-brand-gold hover:underline"
              : "text-brand-green hover:text-brand-gold"
          )}
        >
          <span>{actionText}</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </Card>
  );
};
