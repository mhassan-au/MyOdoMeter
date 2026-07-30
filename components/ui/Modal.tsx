/**
 * Modal.tsx
 *
 * Global reusable modal component.
 * Used for forms, confirmations and popup interactions
 * across MyOdoMeter.
 */

"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";
import IconButton from "./IconButton";

interface ModalProps {
  isOpen: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  size?: "sm" | "md" | "lg";
}


export default function Modal({
  isOpen,
  title,
  children,
  onClose,
  size = "md",
}: ModalProps) {


  /*
   * Prevent background scrolling while modal is open.
   */
  useEffect(() => {

    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
    };

  }, [isOpen]);


  /*
   * Close modal when ESC key is pressed.
   */
  useEffect(() => {

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }


    if (isOpen) {
      window.addEventListener(
        "keydown",
        handleEscape
      );
    }


    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };

  }, [isOpen, onClose]);


  if (!isOpen) {
    return null;
  }


  /*
   * Modal width options.
   */
  const sizeStyles = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
  };


  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-end
        justify-center
        bg-black/40
        sm:items-center
      "
      onMouseDown={onClose}
    >

      <div
        className={`
          w-full
          ${sizeStyles[size]}
          rounded-t-2xl
          bg-white
          shadow-xl
          sm:rounded-2xl
        `}
        onMouseDown={(event) =>
          event.stopPropagation()
        }
      >

        {/* Modal Header */}
        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-[#E5E7EB]
            px-4
            py-3
          "
        >

          <h2
            className="
              text-lg
              font-semibold
              text-[#111827]
            "
          >
            {title}
          </h2>


          <IconButton
            icon={<X size={18} />}
            label="Close modal"
            variant="ghost"
            onClick={onClose}
          />

        </div>


        {/* Modal Content */}
        <div className="p-4">
          {children}
        </div>


      </div>

    </div>
  );
}