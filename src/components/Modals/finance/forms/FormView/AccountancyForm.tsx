"use client"

import FloatLabelInput from "@/components/UI/FloatLabelInput/FloatLabelInput";

interface FormProp {
  data: any;
  isEdit: boolean;
  onChange: (field: any, value: any) => void;
}

const AccountancyForm = (props: FormProp) => {

  return (
    <>
      <div className="w-full grid grid-cols-3 gap-6 pt-3">
        <FloatLabelInput
          width="w-full"
          idInput="ApportionmentInput"
          title="Rateio"
          type="text"
          value={props.data.Apportionment || ""}
          disabled={props.isEdit}
          onChange={(e) => props.onChange("Apportionment", e.target.value)}
          className={`px-2.5 pb-4 pt-4`}
        />

        <FloatLabelInput
          width="w-full"
          idInput="CtaContabilInput"
          title="Cta. Contábil"
          type="text"
          value={props.data.CtaContabil || ""}
          disabled={props.isEdit}
          onChange={(e) => props.onChange("CtaContabil", e.target.value)}
          className={`px-2.5 pb-4 pt-4`}
        />

        <FloatLabelInput
          width="w-full"
          idInput="ConstCenterInput"
          title="Centro de Custo"
          type="text"
          value={props.data.ConstCenter || ""}
          disabled={props.isEdit}
          onChange={(e) => props.onChange("ConstCenter", e.target.value)}
          className={`px-2.5 pb-4 pt-4`}
        />

        <FloatLabelInput
          width="w-full"
          idInput="DailyCodeInput"
          title="Código Diário"
          type="text"
          value={props.data.DailyCode || ""}
          disabled={props.isEdit}
          onChange={(e) => props.onChange("DailyCode", e.target.value)}
          className={`px-2.5 pb-4 pt-4`}
        />

        <FloatLabelInput
          width="w-full"
          idInput="SeqDiarioInput"
          title="Seq. Diário"
          type="text"
          value={props.data.SeqDaily || ""}
          disabled={props.isEdit}
          onChange={(e) => props.onChange("SeqDaily", e.target.value)}
          className={`px-2.5 pb-4 pt-4`}
        />
      </div>
    </>
  );
};
export default AccountancyForm;
