/**
 * Loading.tsx
 *
 * Global reusable loading component.
 * Used for async operations and data loading states.
 *
 * Keeps loading indicators consistent
 * across MyOdoMeter.
 */

import React from "react";


interface LoadingProps {

  message?: string;

  size?: "sm" | "md" | "lg";

  fullPage?: boolean;

}


export default function Loading({
  message = "Loading...",
  size = "md",
  fullPage = false,
}: LoadingProps) {


  /*
   * Spinner sizes.
   */
  const sizeStyles = {

    sm: "h-4 w-4 border-2",

    md: "h-8 w-8 border-4",

    lg: "h-12 w-12 border-4",

  };


  const content = (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        gap-3
      "
    >

      {/* Loading spinner */}
      <div
        className={`
          animate-spin
          rounded-full
          border-[#E5E7EB]
          border-t-[#111827]
          ${sizeStyles[size]}
        `}
      />


      {message && (
        <p
          className="
            text-sm
            text-[#6B7280]
          "
        >
          {message}
        </p>
      )}

    </div>
  );


  /*
   * Full page loading mode.
   * Used while application data is initialising.
   */
  if (fullPage) {

    return (
      <div
        className="
          flex
          min-h-screen
          items-center
          justify-center
          bg-[#F9FAFB]
        "
      >
        {content}
      </div>
    );

  }


  return content;
}