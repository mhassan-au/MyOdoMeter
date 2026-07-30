/**
 * Text.tsx
 *
 * Purpose:
 * Shared typography components used across the application.
 */

import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  size?: "xs" | "sm" | "md" | "lg";
  weight?: "normal" | "medium" | "semibold" | "bold";
  color?: "default" | "secondary" | "muted" | "primary";
  className?: string;
}

interface TitleProps {
  children: ReactNode;
  size?: "lg" | "xl" | "2xl";
  className?: string;
}

const textSizes = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

const textWeights = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const textColors = {
  default: "text-gray-900 dark:text-white",
  secondary: "text-gray-600 dark:text-gray-300",
  muted: "text-gray-500 dark:text-gray-400",
  primary: "text-blue-600 dark:text-blue-400",
};

const titleSizes = {
  lg: "text-xl font-semibold",
  xl: "text-2xl font-bold",
  "2xl": "text-3xl font-bold",
};

export function Text({
  children,
  size = "md",
  weight = "normal",
  color = "default",
  className = "",
}: TextProps) {
  return (
    <p
      className={`${textSizes[size]} ${textWeights[weight]} ${textColors[color]} ${className}`}
    >
      {children}
    </p>
  );
}

export function Title({
  children,
  size = "xl",
  className = "",
}: TitleProps) {
  return (
    <h1 className={`${titleSizes[size]} text-gray-900 dark:text-white ${className}`}>
      {children}
    </h1>
  );
}