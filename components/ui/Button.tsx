/**
 * Button.tsx
 *
 * Global reusable button component.
 * Used across MyOdoMeter for consistent actions and styling.
 */

import React from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "ghost";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  loading?: boolean;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  loading = false,
  disabled,
  children,
  className = "",
  ...props
}: ButtonProps) {

  /*
   * Base styles shared by every button.
   * Keeps spacing, typography and behaviour consistent.
   */
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition disabled:cursor-not-allowed disabled:opacity-50";


  /*
   * Variant styles.
   * Colour values follow the MyOdoMeter design system.
   */
  const variantStyles = {
    primary:
      "bg-[#111827] text-white hover:bg-[#1f2937]",

    secondary:
      "border border-[#E5E7EB] bg-white text-[#111827] hover:bg-[#F9FAFB]",

    danger:
      "bg-[#DC2626] text-white hover:bg-[#b91c1c]",

    ghost:
      "bg-transparent text-[#111827] hover:bg-[#F9FAFB]",
  };


  /*
   * Show loading state without changing button size.
   */
  const content = loading ? (
    <>
      <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      <span>Loading...</span>
    </>
  ) : (
    children
  );


  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {content}
    </button>
  );
}