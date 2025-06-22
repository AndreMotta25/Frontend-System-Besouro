import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../UI/dialog";

interface ModalProps {
  children: React.ReactNode;
  title?: string;
  editMode?: boolean;
  isOpen: boolean;
  width?: string;
  onOpenChange: () => void;
  onSave?: (...args: any[]) => any;
}

const ShadModalLayout = ({
  children,
  title,
  editMode,
  isOpen,
  onOpenChange,
  width,
  onSave,
}: ModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={() => onOpenChange()}>
      <DialogContent
        className={`max-h-[95vh] dark:bg-gray-800 max-w-[90vw] ${
          width || "w-full"
        } focus:outline-none`}
      >
        <DialogTitle />
        <DialogDescription />
        {title && (
          <DialogHeader>
            <div className="grid grid-cols-3 w-full justify-between text-orangeSupport p-6 bg-white rounded-t-2xl border-b dark:bg-gray-700">
              <div className="text-sm">
                <label onClick={onOpenChange} className="hover:opacity-35">
                  Cancelar
                </label>
              </div>
              <label className="font-semibold text-lg text-center">
                <DialogTitle>{title}</DialogTitle>
              </label>
              {editMode && (
                <div className="text-sm text-right">
                  <label onClick={onSave} className="hover:opacity-35">
                    Salvar
                  </label>
                </div>
              )}
            </div>
            <DialogDescription />
          </DialogHeader>
        )}

        <div className="">{children}</div>
      </DialogContent>
    </Dialog>
  );
};

export default ShadModalLayout;
