import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", children, ...props },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold disabled:pointer-events-none disabled:opacity-50 cursor-pointer rounded-none uppercase tracking-wider text-xs md:text-sm";

    const variants = {
      primary:
        "bg-brand-dark text-white hover:bg-brand-green border border-brand-dark",
      secondary:
        "bg-brand-card text-brand-dark hover:bg-brand-border border border-brand-border",
      gold:
        "bg-brand-gold text-brand-dark font-semibold hover:bg-brand-gold-deep border border-brand-gold",
      outline:
        "border border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white",
      ghost:
        "text-brand-dark hover:bg-brand-card hover:text-brand-dark border border-transparent",
    };

    const sizes = {
      sm: "h-8 px-3 text-xs",
      md: "h-10 px-5 text-xs md:text-sm",
      lg: "h-12 px-7 text-sm md:text-base",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
