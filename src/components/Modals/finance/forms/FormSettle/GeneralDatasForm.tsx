"use client"

import FloatLabelInput from "@/components/UI/FloatLabelInput/FloatLabelInput";

const GeneralDatasForm = () => {
  return (
    <>
      <FloatLabelInput
        width="w-full"
        idInput="BeneficiaryInput"
        title="Beneficiario"
        type="text"
        className="px-2.5 pb-4 pt-4 mt-3"
      />

      <div className="w-full flex flex-row justify-between gap-5 pt-3">
        <FloatLabelInput
          width="w-full"
          idInput="EmissionHistoryInput"
          title="Hist. Emissão"
          type="text"
          className="px-2.5 pb-4 pt-4"
        />

        <FloatLabelInput
          width="w-full"
          idInput="CarrierInput"
          title="Portador"
          type="text"
          className="px-2.5 pb-4 pt-4"
        />

        <FloatLabelInput
          width="w-full"
          idInput="MotBaixaInput"
          title="Mot. Baixa"
          type="text"
          className="px-2.5 pb-4 pt-4"
        />
      </div>

      <div className="w-full flex flex-row justify-between gap-5 pt-3">
        <FloatLabelInput
          width="w-full"
          idInput="BankInput"
          title="Banco (select)"
          type="text"
          className="px-2.5 pb-4 pt-4"
        />

        <FloatLabelInput
          width="w-full"
          idInput="AgencyInput"
          title="Agencia"
          type="text"
          className="px-2.5 pb-4 pt-4"
        />

        <FloatLabelInput
          width="w-full"
          idInput="AccountInput"
          title="Conta"
          type="text"
          className="px-2.5 pb-4 pt-4"
        />
      </div>

      <div className="w-full flex flex-row justify-between gap-5 pt-3">
        <FloatLabelInput
          width="w-full"
          idInput="CheckNumberInput"
          title="Cheque Nº"
          type="text"
          className="px-2.5 pb-4 pt-4"
        />

        <FloatLabelInput
          width="w-full"
          idInput="PayDateInput"
          title="Data de Pagto."
          type="text"
          className="px-2.5 pb-4 pt-4"
        />

        <FloatLabelInput
          width="w-full"
          idInput="DebitDateInput"
          title="Data Débito"
          type="text"
          className="px-2.5 pb-4 pt-4"
        />

        <FloatLabelInput
          width="w-full"
          idInput="BaixaHistoryInput"
          title="Hist. Baixa"
          type="text"
          className="px-2.5 pb-4 pt-4"
        />
      </div>
    </>
  );
};

export default GeneralDatasForm