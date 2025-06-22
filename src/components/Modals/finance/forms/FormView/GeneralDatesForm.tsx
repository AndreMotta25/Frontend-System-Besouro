"use client";

import { sectors } from "@/components/constants/data";
import FloatLabelInput from "@/components/UI/FloatLabelInput/FloatLabelInput";
import FloatLabelSelect from "@/components/UI/FloatLabelSelect/FloatLabelSelect";

interface FormProp {
  data: any;
  isEdit: boolean;
  onChange: (field: any, value: any) => void;
}

const GeneralDatesForm = (props: FormProp) => {
  const projects = [
    { label: "Gerdau", value: "teste" },
    { label: "Meu trampo", value: "te" },
    { label: "Avança", value: "te" },
  ];

  return (
    <>
      <div className="w-1/2 gap-4 py-5 flex">
        <FloatLabelSelect
          width="w-full"
          bgColor="bg-white"
          placeHolder="Selecione um projeto"
          idSelect="idProject"
          title="Projeto"
          onChange={(e) => props.onChange("Project", e)}
          options={projects}
          disabled={props.isEdit}
        />

        <FloatLabelSelect
          width="w-full"
          bgColor="bg-white"
          placeHolder="Selecione um setor"
          idSelect="idSector"
          title="Setor"
          onChange={(e) => props.onChange("Sector", e)}
          options={sectors}
          disabled={props.isEdit}
        />
      </div>
      <div className="w-full flex flex-col gap-3 pt-3">
        <div className="w-full flex flex-row gap-4">
          <FloatLabelInput
            width="w-2/5"
            idInput="PrefixInput"
            title="Prefixo"
            type="text"
            value={props.data.Prefix || ""}
            disabled={props.isEdit}
            onChange={(e) => props.onChange("Prefix", e.target.value)}
            className={`px-2.5 pb-4 pt-4 dark:bg-bgDefaultDark`}
          />

          <FloatLabelInput
            width="w-full"
            idInput="TitleNumberInput"
            title="Numero do titulo"
            type="text"
            value={props.data.TitleNumber || ""}
            disabled={props.isEdit}
            onChange={(e) => props.onChange("TitleNumber", e.target.value)}
            className={`px-2.5 pb-4 pt-4`}
          />

          <FloatLabelInput
            width="w-full"
            idInput="InstallmentInput"
            title="Parcela"
            type="text"
            value={props.data.Installment || ""}
            disabled={props.isEdit}
            onChange={(e) => props.onChange("Installment", e.target.value)}
            className={`px-2.5 pb-4 pt-4`}
          />

          <FloatLabelInput
            width="w-full"
            idInput="TypeTitleInput"
            title="Tipo"
            type="text"
            value={props.data.TypeTitle || ""}
            disabled={props.isEdit}
            onChange={(e) => props.onChange("TypeTitle", e.target.value)}
            className={`px-2.5 pb-4 pt-4`}
          />

          <FloatLabelInput
            width="w-full"
            idInput="NatureInput"
            title="Natureza"
            type="text"
            value={props.data.Nature || ""}
            disabled={props.isEdit}
            onChange={(e) => props.onChange("Nature", e.target.value)}
            className={`px-2.5 pb-4 pt-4`}
          />
        </div>
        <div className="w-full flex flex-row gap-4">
          <FloatLabelInput
            width="w-2/5"
            idInput="SupplierInput"
            title="Fornecedor"
            type="text"
            value={props.data.Supplier || ""}
            disabled={props.isEdit}
            onChange={(e) => props.onChange("Supplier", e.target.value)}
            className={`px-2.5 pb-4 pt-4`}
          />

          <FloatLabelInput
            width="w-full"
            idInput="SupplierNameInput"
            title="Nome Fornecedor"
            type="text"
            value={props.data.SupplierName || ""}
            disabled={props.isEdit}
            onChange={(e) => props.onChange("SupplierName", e.target.value)}
            className={`px-2.5 pb-4 pt-4`}
          />

          <FloatLabelInput
            width="w-full"
            idInput="EmissionInput"
            title="Emissão"
            type="date"
            value={props.data.Emission || ""}
            disabled={props.isEdit}
            onChange={(e) => props.onChange("Emission", e.target.value)}
            className={`px-2.5 pb-4 pt-4`}
          />

          <FloatLabelInput
            width="w-full"
            idInput="MaturityInput"
            title="Vencimento"
            type="date"
            value={props.data.Maturity || ""}
            disabled={props.isEdit}
            onChange={(e) => props.onChange("Maturity", e.target.value)}
            className={`px-2.5 pb-4 pt-4`}
          />
        </div>
        <div className="w-full flex flex-row gap-4 mt-12">
          <FloatLabelInput
            width="w-1/4"
            idInput="RealMaturityInput"
            title="Vencimento real"
            type="date"
            value={props.data.RealMaturity || ""}
            disabled={props.isEdit}
            onChange={(e) => props.onChange("RealMaturity", e.target.value)}
            className={`px-2.5 pb-4 pt-4 dark:text-white`}
          />

          <FloatLabelInput
            width="w-1/4"
            idInput="TitleValueInput"
            title="Valor Titulo"
            type="text"
            value={props.data.TitleValue || ""}
            disabled={props.isEdit}
            onChange={(e) => props.onChange("TitleValue", e.target.value)}
            className={`px-2.5 pb-4 pt-4`}
          />

          <FloatLabelInput
            width="w-1/2"
            idInput="HistoryInput"
            title="Historico"
            type="text"
            value={props.data.History || ""}
            disabled={props.isEdit}
            onChange={(e) => props.onChange("History", e.target.value)}
            className={`px-2.5 pb-4 pt-4`}
          />
        </div>
        <div className="w-full flex flex-row gap-4">
          <FloatLabelInput
            width="w-4/5"
            idInput="BalanceInput"
            title="Saldo"
            type="text"
            value={props.data.BalanceTitle || ""}
            disabled={props.isEdit}
            onChange={(e) => props.onChange("BalanceTitle", e.target.value)}
            className={`px-2.5 pb-4 pt-4`}
          />

          <FloatLabelInput
            width="w-4/5"
            idInput="CoinInput"
            title="Moeda"
            type="text"
            value={props.data.CoinTitle || ""}
            disabled={props.isEdit}
            onChange={(e) => props.onChange("CoinTitle", e.target.value)}
            className={`px-2.5 pb-4 pt-4`}
          />

          <FloatLabelInput
            width="w-4/5"
            idInput="ValueInput"
            title="Valor"
            type="text"
            value={props.data.Value || ""}
            disabled={props.isEdit}
            onChange={(e) => props.onChange("Value", e.target.value)}
            className={`px-2.5 pb-4 pt-4`}
          />

          <FloatLabelInput
            width="w-full"
            idInput="CoinTaxeInput"
            title="Taxa Moeda"
            type="text"
            value={props.data.CoinTaxe || ""}
            disabled={props.isEdit}
            onChange={(e) => props.onChange("CoinTaxe", e.target.value)}
            className={`px-2.5 pb-4 pt-4`}
          />
        </div>
      </div>
    </>
  );
};

export default GeneralDatesForm;
