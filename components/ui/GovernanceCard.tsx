import React from "react";
import Image from "next/image";
import { Card, Badge } from "./Card";
import { cn } from "./Button";

export interface GovernanceStepCardProps {
  step: string;
  title: string;
  description: string;
  variant?: "default" | "dark";
  className?: string;
}

export const GovernanceStepCard: React.FC<GovernanceStepCardProps> = ({
  step,
  title,
  description,
  variant = "default",
  className,
}) => {
  const isDark = variant === "dark";

  return (
    <Card
      variant={variant}
      className={cn(
        "space-y-4 border-t-4",
        isDark ? "bg-[#141814] border-t-brand-gold border-gray-800" : "bg-white border-t-brand-dark border-brand-border",
        className
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "font-serif text-4xl font-bold block",
          isDark ? "text-brand-gold" : "text-brand-gold-deep"
        )}
      >
        {step}
      </span>
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
          isDark ? "text-gray-300" : "text-gray-600"
        )}
      >
        {description}
      </p>
    </Card>
  );
};

export interface GovernanceLeaderCardProps {
  name: string;
  role: string;
  title: string;
  image: string;
  variant?: "default" | "dark";
  className?: string;
}

export const GovernanceLeaderCard: React.FC<GovernanceLeaderCardProps> = ({
  name,
  role,
  title,
  image,
  variant = "default",
  className,
}) => {
  const isDark = variant === "dark";

  return (
    <Card
      variant={variant}
      className={cn(
        "flex flex-col sm:flex-row gap-6 items-center sm:items-start p-6",
        isDark ? "bg-[#141814] border-gray-800" : "bg-white border-brand-border",
        className
      )}
    >
      <div className="relative w-32 h-36 flex-shrink-0 border border-brand-border overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={`Portrait of ${name}, ${role}`}
          fill
          className="object-cover object-top"
        />
      </div>
      <div className="space-y-3 text-center sm:text-left">
        <Badge
          variant={isDark ? "gold" : "green"}
          className="text-[10px]"
        >
          {role}
        </Badge>
        <h3
          className={cn(
            "font-serif text-2xl font-bold leading-tight",
            isDark ? "text-white" : "text-brand-dark"
          )}
        >
          {name}
        </h3>
        <p
          className={cn(
            "text-xs sm:text-sm leading-relaxed font-medium",
            isDark ? "text-gray-400" : "text-gray-600"
          )}
        >
          {title}
        </p>
      </div>
    </Card>
  );
};
