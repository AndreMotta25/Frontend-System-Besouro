"use client"

import FloatLabelInput from "@/components/UI/FloatLabelInput/FloatLabelInput";

const PrincipalForm = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-3 pt-3">
        <div className="w-full flex flex-row gap-4">
          <FloatLabelInput
            width="w-2/5"
            idInput="PrefixInput"
            title="Prefixo"
            type="text"
            className="px-2.5 pb-4 pt-4"
          />

          <FloatLabelInput
            width="w-full"
            idInput="NumberInput"
            title="Numero"
            type="text"
            className="px-2.5 pb-4 pt-4"
          />

          <FloatLabelInput
            width="w-full"
            idInput="installmentInput"
            title="Parcela"
            type="text"
            className="px-2.5 pb-4 pt-4"
          />

          <FloatLabelInput
            width="w-full"
            idInput="TypeInput"
            title="Tipo"
            type="text"
            className="px-2.5 pb-4 pt-4"
          />

          <FloatLabelInput
            width="w-full"
            idInput="NatureInput"
            title="Natureza"
            type="text"
            className="px-2.5 pb-4 pt-4"
          />
        </div>
        <div className="w-full flex flex-row gap-4">
          <FloatLabelInput
            width="w-2/5"
            idInput="SupplierInput"
            title="Fornecedor"
            type="text"
            className="px-2.5 pb-4 pt-4"
          />

          <FloatLabelInput
            width="w-full"
            idInput="SupplierNameInput"
            title="Nome Fornecedor"
            type="text"
            className="px-2.5 pb-4 pt-4"
          />

          <FloatLabelInput
            width="w-full"
            idInput="EmissionInput"
            title="Emissão"
            type="text"
            className="px-2.5 pb-4 pt-4"
          />

          <FloatLabelInput
            width="w-full"
            idInput="ActualMaturityInput"
            title="Vencimento Atual"
            type="text"
            className="px-2.5 pb-4 pt-4"
          />
        </div>
      </div>
    </>
  );
};

export default PrincipalForm;
