"use client"

import React, { useEffect, useState } from "react";
import { CircleCheck } from "lucide-react";

interface SucessMessageProps {
  isOpen: boolean;
  onClose: () => void;
  text?: string;
}

const SucessMessage: React.FC<SucessMessageProps> = ({
  isOpen,
  onClose,
  text,
}) => {
  const [visible, setVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      const timer = setTimeout(() => {
        onClose();
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      setTimeout(() => {
        setVisible(false);
      }, 900);
    }
  }, [isOpen, onClose]);

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
        <CircleCheck className="size-24 text-green-500" />

        <label className="text-gray-700 dark:text-white">{text}</label>
      </div>
    </dialog>
  );
};

export default SucessMessage;
