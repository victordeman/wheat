import React from "react";
import { cn } from "./Button";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "dark" | "outline" | "gold";
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    const variants = {
      default: "bg-brand-card border border-brand-border text-brand-text",
      dark: "bg-brand-dark border border-brand-green-light text-white",
      outline: "bg-transparent border border-brand-border text-brand-text",
      gold: "bg-brand-canvas border-2 border-brand-gold text-brand-text",
    };

    return (
      <div
        ref={ref}
        className={cn("p-6 relative transition-all duration-200", variants[variant], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export const Badge: React.FC<{
  children: React.ReactNode;
  variant?: "gold" | "green" | "dark" | "outline";
  className?: string;
}> = ({ children, variant = "gold", className }) => {
  const variants = {
    gold: "bg-brand-gold/15 text-brand-gold-deep border-brand-gold/30",
    green: "bg-brand-green/10 text-brand-green border-brand-green/20",
    dark: "bg-brand-dark text-brand-gold border-brand-dark",
    outline: "border-brand-border text-brand-text bg-transparent",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 text-[10px] md:text-xs font-semibold uppercase tracking-widest border",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
