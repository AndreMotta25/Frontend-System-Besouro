"use client";

import { useState } from "react";
import LowBaixa from "./forms/OtherOptions/LowBaixa";
import {
  Status,
  statusCores,
  statusMapping,
} from "@/components/constants/status";
import ConfirmationModal from "../ModalMessages/ConfirmationModal";
import ShadModalLayout from "../ShadModalLayout";

interface ModalLayoutProp {
  onClose: () => void;
  cardData: any;
}

const OtherOptionsModal: React.FC<ModalLayoutProp> = ({
  onClose,
  cardData,
}) => {
  return (
    <>
      <ShadModalLayout
        title="Outras Opções"
        isOpen
        onOpenChange={onClose}
        editMode={true}
      >
        <OtherOptionsArea cardData={cardData} onClose={onClose} />
      </ShadModalLayout>
    </>
  );
};

const OtherOptionsArea = ({ cardData, onClose }: any) => {
  const status = statusMapping[cardData.status] || Status.BAD;
  const statusClass = statusCores[status];
  const [isOpenCancelBaixa, setIsOpenCancelBaixa] = useState(false);
  const [selectedOption, setSelectedOption] = useState("baixaParcial");

  const toggleOption = () => {
    switch (selectedOption) {
      case "baixaParcial":
        return <LowBaixa />;
      case "baixaAutomatica":
        return <LowBaixa />;
      case "cancelBaixa":
        return null;
      default:
        null;
    }
  };

  const handleCancelAction = (isAccepted: boolean) => {
    if (isAccepted) {
      console.log("Removendo o conteúdo do banco de dados");
      setIsOpenCancelBaixa(false);
      onClose(false);
      return;
    }
    setIsOpenCancelBaixa(false);
  };

  const controlModal = () => {
    setIsOpenCancelBaixa(!isOpenCancelBaixa);
  };

  return (
    <>
      <ShadModalLayout isOpen={isOpenCancelBaixa} onOpenChange={controlModal} width="max-w-sm">
        <ConfirmationModal
          onOptionSelected={(isAccepet) => handleCancelAction(isAccepet)}
          message="Tem certeza que deseja cancelar a baixa?"
        />
      </ShadModalLayout>

      <div className="p-6 md:p-5 space-y-4 max-h-[500px] overflow-y-auto">
        <div className="w-1/2 mx-auto flex flex-row bg-white dark:bg-gray-700 text-orangeSupport items-center justify-between py-2 px-8 rounded-full">
          <label
            onClick={() => setSelectedOption("baixaParcial")}
            className={`hover:bg-orangeSupport hover:text-white p-2 rounded-3xl text-base select-none ${
              selectedOption == "baixaParcial" && "bg-orangeSupport text-white"
            }`}
          >
            Baixa Parcial
          </label>
          <label
            onClick={() => setSelectedOption("baixaAutomatica")}
            className={`hover:bg-orangeSupport hover:text-white p-2 rounded-3xl text-base select-none ${
              selectedOption == "baixaAutomatica" &&
              "bg-orangeSupport text-white"
            }`}
          >
            Baixa Automatica
          </label>
          <label
            onClick={() => setIsOpenCancelBaixa(true)}
            className={`hover:bg-orangeSupport hover:text-white p-2 rounded-3xl text-base select-none ${
              selectedOption == "op3" && "bg-orangeSupport text-white"
            }`}
          >
            Cancelar Baixa
          </label>
        </div>

        <div
          className={`flex w-36 rounded-lg p-1 border-2 ${statusClass} bg-transparent text-sm justify-center items-start`}
        >
          {cardData.status}
        </div>

        <div className="w-full h-full max-h-[430px] overflow-auto p-4 rounded-3xl ">
          {toggleOption()}
        </div>
      </div>
    </>
  );
};

export default OtherOptionsModal;
