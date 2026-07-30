/**
 * Card.tsx
 *
 * Global reusable card container.
 * Provides consistent background, border, spacing and layout
 * across MyOdoMeter screens.
 */

import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
  onClick?: () => void;
}

export default function Card({
  children,
  className = "",
  padding = "md",
  onClick,
}: CardProps) {


  /*
   * Standard card spacing.
   * Keeps layouts consistent across the application.
   */
  const paddingStyles = {
    none: "",
    sm: "p-3",
    md: "p-4",
    lg: "p-6",
  };


  /*
   * Base card design.
   * Uses MyOdoMeter colour palette.
   */
  const baseStyles =
    `
    rounded-xl
    border
    border-[#E5E7EB]
    bg-white
    shadow-sm
    ${onClick ? "cursor-pointer hover:shadow-md transition" : ""}
    `;


  return (
    <div
      className={`
        ${baseStyles}
        ${paddingStyles[padding]}
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </div>
  );
}