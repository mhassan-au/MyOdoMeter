/**
 * ConfirmDialog.tsx
 *
 * Global reusable confirmation dialog.
 * Used for destructive actions that require user confirmation.
 *
 * Built on top of the shared Modal and Button components.
 */

import Modal from "./Modal";
import Button from "./Button";


interface ConfirmDialogProps {
  isOpen: boolean;

  title: string;

  message: string;

  confirmText?: string;

  cancelText?: string;

  onConfirm: () => void;

  onCancel: () => void;

  loading?: boolean;
}


export default function ConfirmDialog({
  isOpen,
  title,
  message,
  confirmText = "Delete",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
  loading = false,
}: ConfirmDialogProps) {


  return (
    <Modal
      isOpen={isOpen}
      title={title}
      onClose={onCancel}
      size="sm"
    >

      <div className="space-y-5">


        {/* Confirmation message */}
        <p
          className="
            text-sm
            text-[#6B7280]
          "
        >
          {message}
        </p>


        {/* Action buttons */}
        <div
          className="
            flex
            justify-end
            gap-3
          "
        >

          <Button
            variant="secondary"
            onClick={onCancel}
            disabled={loading}
          >
            {cancelText}
          </Button>


          <Button
            variant="danger"
            onClick={onConfirm}
            loading={loading}
          >
            {confirmText}
          </Button>

        </div>


      </div>

    </Modal>
  );
}