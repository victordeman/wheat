import React, { useId } from "react";
import { cn } from "./Button";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id: customId, ...props }, ref) => {
    const generatedId = useId();
    const inputId = customId || generatedId;
    const errorId = `${inputId}-error`;

    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label htmlFor={inputId} className="text-xs font-semibold uppercase tracking-wider text-brand-dark">
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className={cn(
            "w-full px-3.5 py-2.5 bg-white border border-brand-border text-brand-text text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors placeholder:text-gray-400",
            error && "border-red-600 focus:border-red-600 focus:ring-red-600",
            className
          )}
          {...props}
        />
        {error && (
          <span id={errorId} className="text-xs text-red-600 mt-0.5">
            {error}
          </span>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id: customId, ...props }, ref) => {
    const generatedId = useId();
    const textareaId = customId || generatedId;
    const errorId = `${textareaId}-error`;

    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label htmlFor={textareaId} className="text-xs font-semibold uppercase tracking-wider text-brand-dark">
            {label}
          </label>
        )}
        <textarea
          id={textareaId}
          ref={ref}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className={cn(
            "w-full px-3.5 py-2.5 bg-white border border-brand-border text-brand-text text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors placeholder:text-gray-400 min-h-[120px]",
            error && "border-red-600 focus:border-red-600 focus:ring-red-600",
            className
          )}
          {...props}
        />
        {error && (
          <span id={errorId} className="text-xs text-red-600 mt-0.5">
            {error}
          </span>
        )}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";
