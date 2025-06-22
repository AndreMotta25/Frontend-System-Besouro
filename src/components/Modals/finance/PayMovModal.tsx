"use client";

import ShadModalLayout from "../ShadModalLayout";
import LowBaixa from "./forms/OtherOptions/LowBaixa";

interface ModalLayoutProp {
  onClose: () => void;
}

const PayMovModal: React.FC<ModalLayoutProp> = ({ onClose }) => {
  return (
    <>
      <ShadModalLayout
        title="Pagar Movimentação"
        isOpen
        onOpenChange={onClose}
        editMode={true}
      >
        {PayMovModalArea()}
      </ShadModalLayout>
    </>
  );
};

const PayMovModalArea = () => {
  return (
      <div className="p-6 md:p-5 space-y-4 max-h-[500px]">
        <div className="w-full h-full max-h-[450px] overflow-auto p-4 rounded-3xl ">
          <LowBaixa />
        </div>
      </div>
  );
};

export default PayMovModal;
