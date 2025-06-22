import { CircleAlert } from "lucide-react";

interface ConfirmationModalProps {
  onOptionSelected: (isAccepted: boolean) => void;
  message: string;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  onOptionSelected,
  message,
}) => {
  return (
    <div className="dark:bg-gray-800 rounded-2xl">
      <div className="text-center w-full h-full items-center p-2">
        <CircleAlert className="mx-auto my-auto size-14 opacity-15" />

        <h3 className="px-8 py-4 text-lg font-normal text-gray-500 dark:text-gray-400">
          {message}
        </h3>
      </div>
      <div className="w-full h-full flex flex-row border-t-2 dark:border-gray-600 divide-x-2 divide-solid dark:divide-gray-600 ">
        <button
          onClick={() => onOptionSelected(true)}
          data-modal-hide="popup-modal"
          className="w-full text-red-600 bg-transparent outline-none hover:text-red-800 focus:ring-4 font-medium text-base items-center p-5 text-center"
        >
          Sim
        </button>
        <button
          onClick={() => onOptionSelected(false)}
          data-modal-hide="popup-modal"
          className="w-full text-black dark:text-white bg-transparent outline-none hover:opacity-50 focus:ring-4 font-medium text-base items-center p-5 text-center"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
