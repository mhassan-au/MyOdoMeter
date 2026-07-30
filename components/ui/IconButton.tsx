/**
 * IconButton.tsx
 *
 * Global reusable icon-only button component.
 * Used for actions such as edit, delete, settings and menu buttons.
 */

import React from "react";

type IconButtonVariant =
  | "default"
  | "danger"
  | "ghost";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: IconButtonVariant;
  icon: React.ReactNode;
  label: string;
  size?: "sm" | "md" | "lg";
}

export default function IconButton({
  variant = "default",
  icon,
  label,
  size = "md",
  className = "",
  disabled,
  ...props
}: IconButtonProps) {


  /*
   * Common icon button styles.
   * Ensures consistent touch targets on mobile devices.
   */
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg transition disabled:cursor-not-allowed disabled:opacity-50";


  /*
   * Size definitions.
   * Minimum 44px touch area recommended for mobile.
   */
  const sizeStyles = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  };


  /*
   * Variant colours follow MyOdoMeter design system.
   */
  const variantStyles = {
    default:
      "text-[#111827] hover:bg-[#F9FAFB]",

    danger:
      "text-[#DC2626] hover:bg-red-50",

    ghost:
      "text-[#6B7280] hover:bg-[#F9FAFB]",
  };


  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${className}
      `}
      {...props}
    >
      {icon}
    </button>
  );
}