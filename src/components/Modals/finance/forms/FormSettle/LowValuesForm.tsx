"use client"

import FloatLabelInput from "@/components/UI/FloatLabelInput/FloatLabelInput";

const LowValuesForm = () => {
  return (
    <>
      <div className="w-full pt-3 flex flex-col gap-5 overflow-auto">
        <div className="w-full flex flex-row gap-3">
          <FloatLabelInput
            width="w-full"
            idInput="OrigialValueInput"
            title="Valor Original"
            type="text"
            className="px-2.5 pb-4 pt-4"
          />
          <FloatLabelInput
            width="w-full"
            idInput="RebatesInput"
            title="Abatimentos"
            type="text"
            className="px-2.5 pb-4 pt-4"
          />
        </div>

        <div className="w-full flex flex-row gap-3">
          <FloatLabelInput
            width="w-full"
            idInput="PartialsPaymentsInput"
            title="Pagtos. Parciais "
            type="text"
            className="px-2.5 pb-4 pt-4"
          />
          <FloatLabelInput
            width="w-full"
            idInput="AdditionInput"
            title="Acréscimo"
            type="text"
            className="px-2.5 pb-4 pt-4"
          />
        </div>

        <div className="w-full flex flex-row gap-3">
          <FloatLabelInput
            width="w-full"
            idInput="DecreaseInput"
            title="Decréscimo"
            type="text"
            className="px-2.5 pb-4 pt-4"
          />
          <FloatLabelInput
            width="w-full"
            idInput="DiscountsInput"
            title="Descontos"
            type="text"
            className="px-2.5 pb-4 pt-4"
          />
        </div>

        <div className="w-full flex flex-row gap-3">
          <FloatLabelInput
            width="w-full"
            idInput="PernanecTexesInput"
            title="Taxa Permanenc."
            type="text"
            className="px-2.5 pb-4 pt-4"
          />
          <FloatLabelInput
            width="w-full"
            idInput="NameInput"
            title="Fine"
            type="text"
            className="px-2.5 pb-4 pt-4"
          />
        </div>

        <div className="w-full flex flex-row gap-3">
          <FloatLabelInput
            width="w-full"
            idInput="AcessoriesValueInput"
            title="Valores Acessórios"
            type="text"
            className="px-2.5 pb-4 pt-4"
          />
          <FloatLabelInput
            width="w-full"
            idInput="IssInput"
            title="ISS"
            type="text"
            className="px-2.5 pb-4 pt-4"
          />
        </div>

        <div className="w-full flex flex-row gap-3">
          <FloatLabelInput
            width="w-full"
            idInput="PisInput"
            title="PIS"
            type="text"
            className="px-2.5 pb-4 pt-4"
          />
          <FloatLabelInput
            width="w-full"
            idInput="CslInput"
            title="CSL"
            type="text"
            className="px-2.5 pb-4 pt-4"
          />
        </div>

        <FloatLabelInput
          width="w-full"
          idInput="AmountPaidInput"
          title="Valor Pago"
          type="text"
          className="px-2.5 pb-4 pt-4"
        />
      </div>
    </>
  );
};

export default LowValuesForm