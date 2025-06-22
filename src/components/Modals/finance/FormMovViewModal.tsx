"use client";

// Formularios
import OriginForm from "./forms/FormMovView/OriginForm";
import DestityForm from "./forms/FormMovView/DestinyForm";
import IdentificationForm from "./forms/FormMovView/IdentificationForm";
import ShadModalLayout from "../ShadModalLayout";

interface ModalLayoutProp {
  onClose: () => void;
}

const FormMovViewModal: React.FC<ModalLayoutProp> = ({ onClose }) => {
  return (
    <>
      <ShadModalLayout
        title="Visualizar Movimentação"
        isOpen
        onOpenChange={onClose}
        editMode={false}
      >
        <FormMovViewArea />
      </ShadModalLayout>
    </>
  );
};

const FormMovViewArea = () => {
  return (
    <div className="p-6 md:p-5 space-y-4 max-h-[500px] overflow-y-auto">
      <div className="w-full flex flex-row gap-5">
        <div className="w-full bg-white dark:bg-gray-700 p-4 rounded-xl shadow-md">
          <label>Origem</label>
          <OriginForm />
        </div>
        <div className="w-full bg-white dark:bg-gray-700 p-4 rounded-xl shadow-md">
          <label>Destino</label>
          <DestityForm />
        </div>
      </div>
      <div className="w-full bg-white dark:bg-gray-700 p-4 rounded-xl shadow-md">
        <label>Identificação | Data Crédito</label>
        <IdentificationForm />
      </div>
    </div>
  );
};

export default FormMovViewModal;
