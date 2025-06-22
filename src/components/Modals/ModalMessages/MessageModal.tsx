import React, { useEffect, useState } from "react";
import { CircleCheck, CircleX, Loader } from "lucide-react";

interface MessageModalProps {
  isOpen: boolean;
  onClose: (value: boolean) => void;
  text?: string;
  status: string;
}

const MessageModal: React.FC<MessageModalProps> = ({
  isOpen,
  onClose,
  text,
  status,
}) => {
  const [visible, setVisible] = useState(isOpen);

  // Torna o modal visível e depois de dois segundos ele some
  useEffect(() => {
    if (isOpen) {
      setVisible(true)
      const timer = setTimeout(() => {
        onClose(false);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => {
        setVisible(false);
      }, 900);
    }
  }, [isOpen]);

  if (!visible) return null;

  return (
    <dialog
      className={`fixed w-full h-full inset-0 bg-black bg-opacity-55 flex justify-center items-center z-50 transition-opacity duration-500 ease-in-out ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-white dark:bg-gray-800 p-10 rounded-xl shadow-2xl w-full max-w-sm flex flex-col justify-center items-center gap-4 transition-transform duration-500 ease-in-out ${
          isOpen ? "scale-100" : "scale-90"
        }`}
      >
        {status === "error" ? (
          <CircleX className="size-24 text-red-500" />
        ) : status === "success" ? (
          <CircleCheck className="size-24 text-green-500" />
        ) : null}

        <label className="text-gray-700 dark:text-white">{text}</label>
      </div>
    </dialog>
  );
};

export default MessageModal;
