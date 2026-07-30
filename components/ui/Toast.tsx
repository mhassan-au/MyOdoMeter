/**
 * Toast.tsx
 *
 * Global reusable toast notification component.
 * Used for temporary success, warning, info and error messages.
 *
 * This component only handles presentation.
 * Toast state management will be handled separately later.
 */

import React from "react";
import {
  CheckCircle,
  AlertTriangle,
  XCircle,
  Info,
  X,
} from "lucide-react";

import IconButton from "./IconButton";


type ToastType =
  | "success"
  | "warning"
  | "error"
  | "info";


interface ToastProps {

  type?: ToastType;

  title: string;

  message?: string;

  onClose?: () => void;

}


export default function Toast({
  type = "info",
  title,
  message,
  onClose,
}: ToastProps) {


  /*
   * Icon and colour configuration.
   * Matches MyOdoMeter design system.
   */
  const config = {

    success: {
      icon: <CheckCircle size={20} />,
      color: "text-[#16A34A]",
      background: "bg-green-50",
    },

    warning: {
      icon: <AlertTriangle size={20} />,
      color: "text-[#F59E0B]",
      background: "bg-yellow-50",
    },

    error: {
      icon: <XCircle size={20} />,
      color: "text-[#DC2626]",
      background: "bg-red-50",
    },

    info: {
      icon: <Info size={20} />,
      color: "text-[#2563EB]",
      background: "bg-blue-50",
    },

  };


  const current = config[type];


  return (
    <div
      className="
        flex
        w-full
        max-w-sm
        items-start
        gap-3
        rounded-xl
        border
        border-[#E5E7EB]
        bg-white
        p-4
        shadow-md
      "
    >

      {/* Status icon */}
      <div
        className={`
          mt-0.5
          ${current.color}
        `}
      >
        {current.icon}
      </div>


      {/* Content */}
      <div className="flex-1">

        <h4
          className="
            text-sm
            font-semibold
            text-[#111827]
          "
        >
          {title}
        </h4>


        {message && (
          <p
            className="
              mt-1
              text-sm
              text-[#6B7280]
            "
          >
            {message}
          </p>
        )}

      </div>


      {/* Close button */}
      {onClose && (
        <IconButton
          icon={<X size={16} />}
          label="Close notification"
          variant="ghost"
          size="sm"
          onClick={onClose}
        />
      )}

    </div>
  );
}