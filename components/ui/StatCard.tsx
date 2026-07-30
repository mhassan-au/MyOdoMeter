/**
 * StatCard.tsx
 *
 * Global reusable statistics card component.
 * Used for dashboard metrics and summary information.
 */

import React from "react";


interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: React.ReactNode;
  variant?: "default" | "success" | "warning" | "business" | "private";
}


export default function StatCard({
  title,
  value,
  description,
  icon,
  variant = "default",
}: StatCardProps) {


  /*
   * Variant styles follow MyOdoMeter colour system.
   */
  const variantStyles = {

    default:
      "text-[#111827]",

    success:
      "text-[#16A34A]",

    warning:
      "text-[#F59E0B]",

    business:
      "text-[#2563EB]",

    private:
      "text-[#6B7280]",
  };


  return (
    <div
      className="
        rounded-xl
        border
        border-[#E5E7EB]
        bg-white
        p-4
      "
    >

      <div
        className="
          flex
          items-start
          justify-between
        "
      >

        <div>

          <p
            className="
              text-sm
              text-[#6B7280]
            "
          >
            {title}
          </p>


          <p
            className={`
              mt-1
              text-2xl
              font-semibold
              ${variantStyles[variant]}
            `}
          >
            {value}
          </p>


          {description && (
            <p
              className="
                mt-1
                text-xs
                text-[#6B7280]
              "
            >
              {description}
            </p>
          )}

        </div>


        {icon && (
          <div
            className="
              text-[#6B7280]
            "
          >
            {icon}
          </div>
        )}

      </div>

    </div>
  );
}