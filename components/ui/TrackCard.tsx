import React from "react";
import Image from "next/image";
import { Card, Badge } from "./Card";
import { CheckCircle2 } from "lucide-react";
import { cn } from "./Button";

export interface TrackCardProps {
  number?: string | number;
  badgeText: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  features?: string[];
  accentColor?: "green" | "gold";
  variant?: "default" | "dark";
  className?: string;
}

export const TrackCard: React.FC<TrackCardProps> = ({
  number,
  badgeText,
  title,
  description,
  image,
  imageAlt = "",
  features,
  accentColor = "green",
  variant = "default",
  className,
}) => {
  const isDark = variant === "dark";
  const borderTopColor =
    accentColor === "gold"
      ? "border-t-brand-gold"
      : "border-t-brand-green";

  return (
    <Card
      variant={variant}
      className={cn(
        "border-t-4 space-y-6",
        borderTopColor,
        isDark ? "bg-[#141814] border-gray-800" : "bg-white border-brand-border",
        className
      )}
    >
      {image && (
        <div className="relative h-56 w-full border border-brand-border overflow-hidden bg-gray-100">
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 left-4">
            <Badge variant={accentColor === "gold" ? "gold" : "dark"}>
              {badgeText}
            </Badge>
          </div>
        </div>
      )}

      {!image && (
        <div className="flex items-center justify-between">
          <Badge variant={accentColor === "gold" ? "gold" : "dark"}>
            {badgeText}
          </Badge>
          {number && (
            <span className="font-serif text-3xl font-bold text-brand-gold">
              0{number}
            </span>
          )}
        </div>
      )}

      <div className="space-y-3">
        <h3
          className={cn(
            "font-serif text-2xl font-bold",
            isDark ? "text-white" : "text-brand-dark"
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "text-sm leading-relaxed",
            isDark ? "text-gray-300" : "text-gray-700"
          )}
        >
          {description}
        </p>
      </div>

      {features && features.length > 0 && (
        <ul className="space-y-3 pt-2 text-sm">
          {features.map((feature, idx) => (
            <li
              key={idx}
              className={cn(
                "flex items-start gap-2.5",
                isDark ? "text-gray-200" : "text-brand-dark"
              )}
            >
              <CheckCircle2
                className={cn(
                  "w-4 h-4 flex-shrink-0 mt-0.5",
                  accentColor === "gold"
                    ? "text-brand-gold-deep"
                    : "text-brand-green"
                )}
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
};
