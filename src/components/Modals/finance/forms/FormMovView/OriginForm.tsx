"use client";

import FloatLabelInput from "@/components/UI/FloatLabelInput/FloatLabelInput";

const OriginForm = () => {
  return (
    <>
      <div className="w-full grid grid-cols-2 mt-2 gap-3">
        <FloatLabelInput
          width="w-full"
          idInput="BankInput"
          title="Banco"
          type="text"
          disabled={true}
          className="px-2.5 pb-4 pt-4 mt-3"
        />

        <FloatLabelInput
          width="w-full"
          idInput="AgencyInput"
          title="Agência"
          type="text"
          disabled={true}
          className="px-2.5 pb-4 pt-4 mt-3"
        />

        <FloatLabelInput
          width="w-full"
          idInput="AccountInput"
          title="Conta"
          type="text"
          disabled={true}
          className="px-2.5 pb-4 pt-4 mt-3"
        />

        <FloatLabelInput
          width="w-full"
          idInput="NatureInput"
          title="Natureza"
          type="text"
          disabled={true}
          className="px-2.5 pb-4 pt-4 mt-3"
        />
      </div>
    </>
  );
};

export default OriginForm;
