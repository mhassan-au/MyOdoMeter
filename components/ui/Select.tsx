/**
 * Select.tsx
 *
 * Global reusable select/dropdown component.
 * Provides consistent styling, labels and validation
 * across MyOdoMeter forms.
 *
 * This component only handles UI.
 * Data loading should happen outside through services/hooks.
 */

import React from "react";


interface SelectOption {
  value: string;
  label: string;
}


interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {

  label?: string;
  error?: string;
  helperText?: string;

  options: SelectOption[];

  placeholder?: string;

  /*
   * Used when options are being loaded
   * from Firebase or another async source.
   */
  loading?: boolean;
}


export default function Select({
  label,
  error,
  helperText,
  options,
  placeholder,
  loading = false,
  disabled,
  className = "",
  id,
  ...props
}: SelectProps) {


  /*
   * Generate accessible id from label.
   */
  const selectId =
    id ?? label?.toLowerCase().replace(/\s+/g, "-");


  /*
   * Disable dropdown while loading.
   */
  const isDisabled =
    disabled || loading;


  return (
    <div className="space-y-1">

      {label && (
        <label
          htmlFor={selectId}
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


      <select
        id={selectId}
        disabled={isDisabled}
        className={`
          w-full
          rounded-lg
          border
          bg-white
          px-3
          py-2
          text-sm
          text-[#111827]
          outline-none
          transition

          disabled:cursor-not-allowed
          disabled:bg-gray-100
          disabled:text-gray-500

          ${
            error
              ? "border-[#DC2626] focus:ring-2 focus:ring-red-200"
              : "border-[#E5E7EB] focus:border-[#111827] focus:ring-2 focus:ring-gray-200"
          }

          ${className}
        `}
        {...props}
      >

        {loading && (
          <option>
            Loading...
          </option>
        )}


        {!loading && placeholder && (
          <option value="">
            {placeholder}
          </option>
        )}


        {!loading && options.length === 0 && (
          <option value="">
            No options available
          </option>
        )}


        {!loading &&
          options.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}

      </select>


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