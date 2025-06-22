"use client";

import PrincipalForm from "./forms/FormSettle/PrincipalForm";
import GeneralDatas from "./forms/FormSettle/GeneralDatasForm";
import LowValuesForm from "./forms/FormSettle/LowValuesForm";
import ShadModalLayout from "../ShadModalLayout";

interface SucessMessageProps {
  isOpen: boolean;
  onClose: () => void;
}

const FormSettleModal: React.FC<SucessMessageProps> = ({ onClose, isOpen }) => {
  return (
    <ShadModalLayout
      title="Baixar título"
      editMode={false}
      onOpenChange={onClose}
      isOpen={isOpen}
    >
      <FormSettleModalArea onClose={onClose} />
    </ShadModalLayout>
  );
};

const FormSettleModalArea = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="p-6 md:p-5 space-y-4 max-h-[500px] overflow-y-auto">
      <div className="w-full rounded-2xl bg-white dark:bg-gray-700 text-orangeSupport shadow-xl py-7 px-5 justify-center">
        <label>Principal</label>
        <PrincipalForm />
      </div>
      <div className="w-full flex flex-row justify-between gap-3">
        <div className="w-3/5 rounded-2xl bg-white dark:bg-gray-700 text-orangeSupport shadow-xl py-7 px-5 justify-center">
          <label>Dados Gerais</label>
          <GeneralDatas />
        </div>
        <div className="w-2/5 max-h-96 overflow-auto rounded-2xl bg-white dark:bg-gray-700 text-orangeSupport shadow-xl py-7 px-5 justify-center">
          <label>Valores de baixa</label>
          <LowValuesForm />
        </div>
      </div>
    </div>
  );
};

export default FormSettleModal;
