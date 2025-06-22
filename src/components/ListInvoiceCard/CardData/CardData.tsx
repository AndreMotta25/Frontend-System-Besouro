import FloatLabelInput from "@/components/UI/FloatLabelInput/FloatLabelInput";
import React from "react";

interface IInvoiceCardData {
  noteType: string;
  complementType: string;
  number: string;
  series: string;
  emissionDate: string;
  supplier: string;
  docSpecify: string;
  ufOrigin: string;
  propSupplier: string;
}

interface CardDataProps {
  props: IInvoiceCardData;
}

const CardData = ({ props }: CardDataProps) => {
  const inputStyle = "p-4 bg-white";
  const disabled = true;

  return (
    <div className="bg-bgDefault rounded-xl animate-fadeIn p-4 flex flex-col gap-4 dark:bg-gray-800">
      <div className="flex gap-4">
        <FloatLabelInput
          idInput="idNoteType"
          title="Tipo de nota"
          type="text"
          width=""
          disabled={disabled}
          className={inputStyle}
          value={props.noteType}
        />
        <FloatLabelInput
          idInput="idComplementType"
          title="Tipo Comple."
          type="text"
          width=""
          disabled={disabled}
          className={inputStyle}
          value={props.complementType}
        />
        <FloatLabelInput
          idInput="idNumber"
          title="Número"
          type="text"
          width=""
          disabled={disabled}
          className={inputStyle}
          value={props.number}
        />
        <FloatLabelInput
          idInput="idSeries"
          title="Série"
          type="text"
          width=""
          disabled={disabled}
          className={inputStyle}
          value={props.series}
        />
        <FloatLabelInput
          idInput="idEmissionDate"
          title="Data de emissão"
          type="date"
          width=""
          disabled={disabled}
          className={inputStyle}
          value={props.emissionDate}
        />
      </div>
      <div className="flex gap-4">
        <FloatLabelInput
          idInput="idSupplier"
          title="Fornecedor"
          type="text"
          width=""
          disabled={disabled}
          className={inputStyle}
          value={props.supplier}
        />
        <FloatLabelInput
          idInput="idDocSpecify"
          title="Espec. Doc."
          type="text"
          width=""
          disabled={disabled}
          className={inputStyle}
          value={props.docSpecify}
        />
        <FloatLabelInput
          idInput="idUfOrigin"
          title="Uf Origem"
          type="text"
          width=""
          disabled={disabled}
          className={inputStyle}
          value={props.ufOrigin}
        />
        <FloatLabelInput
          idInput="idPropSupplier"
          title="Fornecedor Prop."
          type="text"
          width=""
          disabled={disabled}
          className={inputStyle}
          value={props.propSupplier}
        />
      </div>
    </div>
  );
};

export default CardData;
