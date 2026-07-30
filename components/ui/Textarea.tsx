/**
 * Textarea.tsx
 *
 * Global reusable textarea component.
 * Provides consistent labels, spacing, validation styling
 * and behaviour across MyOdoMeter forms.
 */

import React from "react";


interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {

  label?: string;
  error?: string;
  helperText?: string;
}


export default function Textarea({
  label,
  error,
  helperText,
  className = "",
  id,
  ...props
}: TextareaProps) {


  /*
   * Generate accessible id from label when not supplied.
   */
  const textareaId =
    id ?? label?.toLowerCase().replace(/\s+/g, "-");


  return (
    <div className="space-y-1">

      {label && (
        <label
          htmlFor={textareaId}
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


      <textarea
        id={textareaId}
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

          resize-none

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