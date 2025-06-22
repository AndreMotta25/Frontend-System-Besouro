"use client"

import FloatLabelInput from "@/components/UI/FloatLabelInput/FloatLabelInput";

interface FormProp {
  data: any;
  isEdit: boolean;
  onChange: (field: any, value: any) => void;
}

const OthersForms = (props: FormProp) => {
  return (
    <>
      <div className="w-full flex flex-col gap-6 pt-3">
        <div className="w-full grid grid-cols-5 gap-4">
          <FloatLabelInput
            width="w-full"
            idInput="apportionmentProjInput"
            title="Rateio Proj."
            type="text"
            value={props.data.apportionmentProj || ""}
            disabled={props.isEdit}
            onChange={(e) => props.onChange("apportionmentProj", e.target.value)}
            className={`px-2.5 pb-4 pt-4`}
          />

          <FloatLabelInput
            width="w-full"
            idInput="OrcCodeInput"
            title="Cód. Orç."
            type="text"
            value={props.data.OrcCode || ""}
            disabled={props.isEdit}
            onChange={(e) => props.onChange("OrcCode", e.target.value)}
            className={`px-2.5 pb-4 pt-4`}
          />

          <FloatLabelInput
            width="w-full"
            idInput="ContratNumberInput"
            title="Nº Contrato"
            type="text"
            value={props.data.ContratNumber || ""}
            disabled={props.isEdit}
            onChange={(e) => props.onChange("ContratNumber", e.target.value)}
            className={`px-2.5 pb-4 pt-4`}
          />

          <FloatLabelInput
            width="w-full"
            idInput="ContratRevisionInput"
            title="Revisão Contrato"
            type="text"
            value={props.data.ContratRevision || ""}
            disabled={props.isEdit}
            onChange={(e) => props.onChange("ContratRevision", e.target.value)}
            className={`px-2.5 pb-4 pt-4`}
          />

          <FloatLabelInput
            width="w-full"
            idInput="SheetNumberInput"
            title="Nº Planilha"
            type="text"
            value={props.data.SheetNumber || ""}
            disabled={props.isEdit}
            onChange={(e) => props.onChange("SheetNumber", e.target.value)}
            className={`px-2.5 pb-4 pt-4`}
          />

          <FloatLabelInput
            width="w-full"
            idInput="NCronogInput"
            title="Nº Cronog."
            type="text"
            value={props.data.CronogNumber || ""}
            disabled={props.isEdit}
            onChange={(e) => props.onChange("CronogNumber", e.target.value)}
            className={`px-2.5 pb-4 pt-4`}
          />

          <FloatLabelInput
            width="w-full"
            idInput="InstallNumberInput"
            title="Nº Parcela"
            type="text"
            value={props.data.InstallmentNumber || ""}
            disabled={props.isEdit}
            onChange={(e) => props.onChange("InstallmentNumber", e.target.value)}
            className={`px-2.5 pb-4 pt-4`}
          />

          <FloatLabelInput
            width="w-full"
            idInput="RdaCodeInput"
            title="Cód. RDA"
            type="text"
            value={props.data.RdaCode || ""}
            disabled={props.isEdit}
            onChange={(e) => props.onChange("RdaCode", e.target.value)}
            className={`px-2.5 pb-4 pt-4`}
          />
          <FloatLabelInput
            width="w-full"
            idInput="AprovDateInput"
            title="Data Aprovação"
            type="text"
            value={props.data.AprovDate || ""}
            disabled={props.isEdit}
            onChange={(e) => props.onChange("AprovDate", e.target.value)}
            className={`px-2.5 pb-4 pt-4`}
          />
        </div>

        <div className="w-full grid grid-cols-4 gap-4 mt-6">
          <FloatLabelInput
            width="w-full"
            idInput="ReferenceInput"
            title="Referência"
            type="text"
            value={props.data.Reference || ""}
            disabled={props.isEdit}
            onChange={(e) => props.onChange("Reference", e.target.value)}
            className={`px-2.5 pb-4 pt-4`}
          />

          <FloatLabelInput
            width="w-full"
            idInput="ProcRefInput"
            title="Proc. Referência"
            type="text"
            value={props.data.ProcRef || ""}
            disabled={props.isEdit}
            onChange={(e) => props.onChange("ProcRef", e.target.value)}
            className={`px-2.5 pb-4 pt-4`}
          />

          <FloatLabelInput
            width="w-full"
            idInput="TipoProcInput"
            title="Tipo Processo"
            type="text"
            value={props.data.ProcType || ""}
            disabled={props.isEdit}
            onChange={(e) => props.onChange("ProcType", e.target.value)}
            className={`px-2.5 pb-4 pt-4`}
          />

          <FloatLabelInput
            width="w-full"
            idInput="ItemContabInput"
            title="Item Contab."
            type="text"
            value={props.data.ContabItem || ""}
            disabled={props.isEdit}
            onChange={(e) => props.onChange("ContabItem", e.target.value)}
            className={`px-2.5 pb-4 pt-4`}
          />

          <FloatLabelInput
            width="w-full"
            idInput="BonifContratInput"
            title="Bonif. Contrato"
            type="text"
            value={props.data.ContratBonif || ""}
            disabled={props.isEdit}
            onChange={(e) => props.onChange("ContratBonif", e.target.value)}
            className={`px-2.5 pb-4 pt-4`}
          />

          <FloatLabelInput
            width="w-full"
            idInput="NMedicaoInput"
            title="Nº Medição"
            type="text"
            value={props.data.MeasurementeNumber || ""}
            disabled={props.isEdit}
            onChange={(e) => props.onChange("MeasurementeNumber", e.target.value)}
            className={`px-2.5 pb-4 pt-4`}
          />

          <FloatLabelInput
            width="w-full"
            idInput="DescCTRInput"
            title="Desconto CTR"
            type="text"
            value={props.data.CtrDiscount || ""}
            disabled={props.isEdit}
            onChange={(e) => props.onChange("CtrDiscount", e.target.value)}
            className={`px-2.5 pb-4 pt-4`}
          />
          <FloatLabelInput
            width="w-full"
            idInput="MultaCTRInput"
            title="Multa CTR."
            type="text"
            value={props.data.FineCtr || ""}
            disabled={props.isEdit}
            onChange={(e) => props.onChange("FineCtr", e.target.value)} 
            className={`px-2.5 pb-4 pt-4`}
          />
        </div>

        <div className="w-full grid grid-cols-5 gap-4 mt-6">
          <FloatLabelInput
            width="w-full"
            idInput="ClasseVirInput"
            title="Classe Vlr."
            type="text"
            value={props.data.VlrClass || ""}
            disabled={props.isEdit}
            onChange={(e) => props.onChange("VlrClass", e.target.value)}
            className={`px-2.5 pb-4 pt-4`}
          />

          <FloatLabelInput
            width="w-full"
            idInput="RetenVlrInput"
            title="Retenção Vlr."
            type="text"
            value={props.data.RetentionVlr || ""}
            disabled={props.isEdit}
            onChange={(e) => props.onChange("RetentionVlr", e.target.value)}
            className={`px-2.5 pb-4 pt-4`}
          />

          <FloatLabelInput
            width="w-full"
            idInput="RetenInssInput"
            title="Retenção INSS"
            type="text"
            value={props.data.RetentionInss || ""}
            disabled={props.isEdit}
            onChange={(e) => props.onChange("RetentionInss", e.target.value)}
            className={`px-2.5 pb-4 pt-4`}
          />

          <FloatLabelInput
            width="w-full"
            idInput="CnpjRetInput"
            title="CNPJ Ret."
            type="text"
            value={props.data.RetCnpj || ""}
            disabled={props.isEdit}
            onChange={(e) => props.onChange("RetCnpj", e.target.value)}
            className={`px-2.5 pb-4 pt-4`}
          />

          <FloatLabelInput
            width="w-full"
            idInput="CodOpInput"
            title="Cód. Operação"
            type="text"
            value={props.data.OperationCode || ""}
            disabled={props.isEdit}
            onChange={(e) => props.onChange("OperationCode", e.target.value)}
            className={`px-2.5 pb-4 pt-4`}
          />
        </div>

        <div className="w-full flex flew-row gap-4">
          <FloatLabelInput
            width="w-1/2"
            idInput="DescF100Input"
            title="Desc. F100"
            type="text"
            value={props.data.f100Desc || ""}
            disabled={props.isEdit}
            onChange={(e) => props.onChange("f100Desc", e.target.value)}
            className={`px-2.5 pb-4 pt-4`}
          />

          <FloatLabelInput
            width="w-full"
            idInput="NomeOperadInput"
            title="Nome Operad."
            type="text"
            value={props.data.OperadName || ""}
            disabled={props.isEdit}
            onChange={(e) => props.onChange("OperadName", e.target.value)}
            className={`px-2.5 pb-4 pt-4`}
          />
        </div>
      </div>
    </>
  );
};

export default OthersForms;
