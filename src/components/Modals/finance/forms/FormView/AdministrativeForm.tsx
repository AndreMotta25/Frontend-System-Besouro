"use client";

import FloatLabelInput from "@/components/UI/FloatLabelInput/FloatLabelInput";
import FloatLabelSelect from "@/components/UI/FloatLabelSelect/FloatLabelSelect";

interface FormProp {
  data: any;
  isEdit: boolean;
  onChange: (field: any, value: any) => void;
}

const AdministrativeForm = (props: FormProp) => {
  return (
    <>
      <div className="w-full flex flex-col gap-3 pt-3">
        <div className="w-full grid grid-cols-4 gap-4">
          <FloatLabelInput
            width="w-full"
            idInput="PermaRateInput"
            title="Taxa Perma"
            type="text"
            value={props.data.PermaRate || ""}
            disabled={props.isEdit}
            onChange={(e) => props.onChange("PermaRate", e.target.value)}
            className={`px-2.5 pb-4 pt-4`}
          />

          <FloatLabelInput
            width="w-full"
            idInput="FeesPorcInput"
            title="Porc. Juros"
            type="text"
            value={props.data.FeesPorc || ""}
            disabled={props.isEdit}
            onChange={(e) => props.onChange("FeesPorc", e.target.value)}
            className={`px-2.5 pb-4 pt-4`}
          />

          <FloatLabelInput
            width="w-full"
            idInput="AddctionalInput"
            title="Acréscimo"
            type="text"
            value={props.data.Addctional || ""}
            disabled={props.isEdit}
            onChange={(e) => props.onChange("Addctional", e.target.value)}
            className={`px-2.5 pb-4 pt-4`}
          />

          <FloatLabelSelect
            width="w-full"
            bgColor="bg-white"
            placeHolder="Selecione"
            idSelect="idCashFlow"
            title="Fluxo Caixa"
            disabled={props.isEdit}
            onChange={(e) => props.onChange("CashFlow", e)}
            options={[
              { label: "Sim", value: "positive" },
              { label: "Não", value: "negative" },
            ]}
          />

          <FloatLabelInput
            width="w-full"
            idInput="UnfoldingInput"
            title="Desdobramen."
            type="text"
            value={props.data.Unfolding || ""}
            disabled={props.isEdit}
            onChange={(e) => props.onChange("Unfolding", e.target.value)}
            className={`px-2.5 pb-4 pt-4`}
          />

          <FloatLabelInput
            width="w-full"
            idInput="ApproverInput"
            title="Aprovador"
            type="text"
            value={props.data.Approver || ""}
            disabled={props.isEdit}
            onChange={(e) => props.onChange("Approver", e.target.value)}
            className={`px-2.5 pb-4 pt-4`}
          />

          <FloatLabelInput
            width="w-full"
            idInput="DecreaseInput"
            title="Decréscimo"
            type="text"
            value={props.data.Decrease || ""}
            disabled={props.isEdit}
            onChange={(e) => props.onChange("Decrease", e.target.value)}
            className={`px-2.5 pb-4 pt-4`}
          />

          <FloatLabelSelect
            width="w-full"
            bgColor="bg-white"
            placeHolder="Selecione"
            idSelect="idFineNature"
            title="Multa Natureza"
            disabled={props.isEdit}
            onChange={(e) => props.onChange("FineNature", e)}
            options={[
              { label: "exemplo", value: "ex" },
              { label: "exemplo", value: "exemplo" },
            ]}
          />
        </div>
        <div className="w-full flex flex-row gap-4 mt-6">
          <FloatLabelInput
            width="w-full"
            idInput="TaxeCorCoinInput"
            title="Taxa Cor. Moeda"
            type="text"
            value={props.data.TaxeCorCoin || ""}
            disabled={props.isEdit}
            onChange={(e) => props.onChange("TaxeCorCoin", e.target.value)}
            className={`px-2.5 pb-4 pt-4`}
          />

          <FloatLabelInput
            width="w-full"
            idInput="SuspensionDateInput"
            title="Data Suspensão"
            type="date"
            value={props.data.SuspensionDate || ""}
            disabled={props.isEdit}
            onChange={(e) => props.onChange("SuspensionDate", e.target.value)}
            className={`px-2.5 pb-4 pt-4`}
          />

          <FloatLabelSelect
            width="w-full"
            bgColor="bg-white"
            placeHolder="Selecione"
            idSelect="idHasDocs"
            title="Possui Docs."
            disabled={props.isEdit}
            onChange={(e) => props.onChange("HasDocs", e)}
            options={[
              { label: "Sim", value: "positive" },
              { label: "Não", value: "negative" },
            ]}
          />

          <FloatLabelInput
            width="w-full"
            idInput="SolicitationNumberInput"
            title="Número Solicitação"
            type="text"
            value={props.data.SolicitationNumber || ""}
            disabled={props.isEdit}
            onChange={(e) =>
              props.onChange("SolicitationNumber", e.target.value)
            }
            className={`px-2.5 pb-4 pt-4`}
          />
        </div>
      </div>
    </>
  );
};
export default AdministrativeForm;
