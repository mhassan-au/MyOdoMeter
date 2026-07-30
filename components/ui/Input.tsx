/**
 * Input.tsx
 *
 * Global reusable input component.
 * Provides consistent labels, borders, spacing and validation styling
 * across MyOdoMeter forms.
 */

import React from "react";


interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {

  label?: string;
  error?: string;
  helperText?: string;
}


export default function Input({
  label,
  error,
  helperText,
  className = "",
  id,
  ...props
}: InputProps) {


  /*
   * Generate a fallback id when label is provided.
   * Helps accessibility by linking label and input.
   */
  const inputId =
    id ?? label?.toLowerCase().replace(/\s+/g, "-");


  return (
    <div className="space-y-1">

      {label && (
        <label
          htmlFor={inputId}
          className="
            block
            text-sm
            font-medium
            text-[#111827]
          "
        >
          {label}
        </label>
      )}


      <input
        id={inputId}
        className={`
          w-full
          rounded-lg
          border
          px-3
          py-2
          text-sm
          text-[#111827]
          outline-none
          transition

          placeholder:text-gray-400

          ${
            error
              ? "border-[#DC2626] focus:ring-2 focus:ring-red-200"
              : "border-[#E5E7EB] focus:border-[#111827] focus:ring-2 focus:ring-gray-200"
          }

          ${className}
        `}
        {...props}
      />


      {error && (
        <p className="text-sm text-[#DC2626]">
          {error}
        </p>
      )}


      {!error && helperText && (
        <p className="text-sm text-[#6B7280]">
          {helperText}
        </p>
      )}

    </div>
  );
}