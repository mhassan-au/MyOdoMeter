/**
 * EmptyState.tsx
 *
 * Global reusable empty state component.
 * Used when a screen has no data to display.
 *
 * Keeps empty messages, icons and actions consistent
 * across MyOdoMeter.
 */

import React from "react";


interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  action?: React.ReactNode;
}


export default function EmptyState({
  icon,
  title,
  description,
  action,
}: EmptyStateProps) {


  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        rounded-xl
        border
        border-[#E5E7EB]
        bg-white
        px-6
        py-10
        text-center
      "
    >

      {icon && (
        <div
          className="
            mb-4
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-[#F9FAFB]
            text-[#6B7280]
          "
        >
          {icon}
        </div>
      )}


      <h3
        className="
          text-lg
          font-semibold
          text-[#111827]
        "
      >
        {title}
      </h3>


      <p
        className="
          mt-2
          max-w-sm
          text-sm
          text-[#6B7280]
        "
      >
        {description}
      </p>


      {action && (
        <div className="mt-5">
          {action}
        </div>
      )}

    </div>
  );
}