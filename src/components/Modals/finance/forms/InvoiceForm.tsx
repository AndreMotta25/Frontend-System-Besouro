"use client";

import FloatLabelInput from "@/components/UI/FloatLabelInput/FloatLabelInput";
import { IInvoice } from "@/interfaces/InvoiceInterfaces";
import React from "react";

interface InvoiceFormProps {
    setFormData: React.Dispatch<React.SetStateAction<IInvoice[]>>;
}

const InvoiceForm = ({setFormData} : InvoiceFormProps) => {
  const inputStyle = "p-4 focus:outline-none";

  const changeFormData = (field: string, value: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <>
      <div>
        <h1 className="font-bold text-orangeSupport">
          Identificação da Nota Fiscal
        </h1>

        <div className="flex flex-col gap-4 w-full py-4">
          <div className="flex flex-row gap-4">
            <div className="w-full basis-1/3">
              <FloatLabelInput
                idInput="idEntryExit"
                title={"Entrada / Saída"}
                type={"text"}
                width={""}
                className={inputStyle}
                onChange={(e) => changeFormData("entryExit", e.target.value)}
              />
            </div>
            <div className="w-full basis-2/3">
              <FloatLabelInput
                idInput="idCfOp"
                title={"CF/OP"}
                type={"text"}
                width={""}
                className={inputStyle}
                onChange={(e) => changeFormData("cfOp", e.target.value)}
              />
            </div>
            <div className="w-full basis-1/3">
              <FloatLabelInput
                idInput="idSeries"
                title={"Série"}
                type={"text"}
                width={""}
                className={inputStyle}
                onChange={(e) => changeFormData("series", e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <div className="w-full basis-1/4">
              <FloatLabelInput
                idInput="idSubSeries"
                title={"SubSérie"}
                type={"text"}
                width={""}
                className={inputStyle}
                onChange={(e) => changeFormData("subSeries", e.target.value)}
              />
            </div>
            <div className="w-full basis-1/4">
              <FloatLabelInput
                idInput="idNfNumber"
                title={"Número nota fiscal"}
                type={"number"}
                width={""}
                className={inputStyle}
                onChange={(e) => changeFormData("nfNumber", e.target.value)}
              />
            </div>
            <div className="w-full basis-1/4">
              <FloatLabelInput
                idInput="idModel"
                title={"Modelo"}
                type={"text"}
                width={""}
                className={inputStyle}
                onChange={(e) => changeFormData("model", e.target.value)}
              />
            </div>
            <div className="w-full basis-1/4">
              <FloatLabelInput
                idInput="idNatureOperation"
                title={"Natureza Operação"}
                type={"text"}
                width={""}
                className={inputStyle}
                onChange={(e) =>
                  changeFormData("natureOperation", e.target.value)
                }
              />
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <div className="w-full basis-1/4">
              <FloatLabelInput
                idInput="idEmissionDate"
                title={"Data emissão"}
                type={"date"}
                width={""}
                className={inputStyle}
                onChange={(e) => changeFormData("emissionDate", e.target.value)}
              />
            </div>
            <div className="w-full basis-1/4">
              <FloatLabelInput
                idInput="idEntryExitDate"
                title={"Data entrada/saída"}
                type={"date"}
                width={""}
                className={inputStyle}
                onChange={(e) =>
                  changeFormData("entryExitDate", e.target.value)
                }
              />
            </div>
            <div className="w-full basis-1/4">
              <FloatLabelInput
                idInput="idEntryExitTime"
                title={"Hora entrada/saída"}
                type={"text"}
                width={""}
                className={inputStyle}
                onChange={(e) =>
                  changeFormData("entryExitTime", e.target.value)
                }
              />
            </div>
            <div className="w-full basis-1/4">
              <FloatLabelInput
                idInput="idIeTaxSubtitle"
                title={"IE subtitulo tributário"}
                type={"text"}
                width={""}
                className={inputStyle}
                onChange={(e) =>
                  changeFormData("ieTaxSubtitle", e.target.value)
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-orangeSupport">Emitente/Destinatário</h1>

        <div className="flex flex-col gap-4 w-full py-4">
          <div className="flex flex-row gap-4">
            <div className="w-full">
              <FloatLabelInput
                idInput="idCorporateReason"
                title={"Razão social / Nome"}
                type={"text"}
                width={""}
                className={inputStyle}
                onChange={(e) =>
                  changeFormData("corporateReason", e.target.value)
                }
              />
            </div>
            <div className="w-full basis-1/2">
              <FloatLabelInput
                idInput="idTaxID"
                title={"CNPJ / CPF"}
                type={"text"}
                width={""}
                className={inputStyle}
                onChange={(e) => changeFormData("taxId", e.target.value)}
              />
            </div>
            <div className="w-full basis-1/2">
              <FloatLabelInput
                idInput="idDocumentIdentifier"
                title={"IE / RG"}
                type={"text"}
                width={""}
                className={inputStyle}
                onChange={(e) =>
                  changeFormData("documentIdentifier", e.target.value)
                }
              />
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <div className="w-full">
              <FloatLabelInput
                idInput="idDocumentIdentifier"
                title={"Razão social / Nome"}
                type={"text"}
                width={""}
                className={inputStyle}
                onChange={(e) =>
                  changeFormData("_corporateReason", e.target.value)
                }
              />
            </div>
            <div className="w-full basis-1/2">
              <FloatLabelInput
                idInput="idTaxID"
                title={"CPF / CNPJ"}
                type={"text"}
                width={""}
                className={inputStyle}
                onChange={(e) => changeFormData("_taxId", e.target.value)}
              />
            </div>
            <div className="w-full basis-1/2">
              <FloatLabelInput
                idInput="id2"
                title={"IE / RG"}
                type={""}
                width={""}
                className={inputStyle}
                onChange={(e) =>
                  changeFormData("_documentIdentifier", e.target.value)
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-orangeSupport">Emitente/Destinatário</h1>

        <div className="flex flex-col gap-4 w-full py-4">
          <div className="flex flex-row gap-4">
            <div className="w-full">
              <FloatLabelInput
                idInput="id2"
                title={"Razão social / Nome"}
                type={""}
                width={""}
                className={inputStyle}
              />
            </div>
            <div className="w-full basis-1/2">
              <FloatLabelInput
                idInput="id2"
                title={"CNPJ / CPF"}
                type={""}
                width={""}
                className={inputStyle}
              />
            </div>
            <div className="w-full basis-1/2">
              <FloatLabelInput
                idInput="id2"
                title={"IE / RG"}
                type={""}
                width={""}
                className={inputStyle}
              />
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <div className="w-full">
              <FloatLabelInput
                idInput="id2"
                title={"Razão social / Nome"}
                type={""}
                width={""}
                className={inputStyle}
              />
            </div>
            <div className="w-full basis-1/2">
              <FloatLabelInput
                idInput="id2"
                title={"CPF / CNPJ"}
                type={""}
                width={""}
                className={inputStyle}
              />
            </div>
            <div className="w-full basis-1/2">
              <FloatLabelInput
                idInput="id2"
                title={"IE / RG"}
                type={""}
                width={""}
                className={inputStyle}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-orangeSupport">Dados do transportador</h1>

        <div className="flex flex-col gap-4 w-full py-4">
          <div className="flex flex-row gap-4">
            <div className="w-full">
              <FloatLabelInput
                idInput="idTransportDocumentIdentifier"
                title={"Razão social / Nome"}
                type={"text"}
                width={""}
                className={inputStyle}
                onChange={(e) =>
                  changeFormData("transportCorporateReason", e.target.value)
                }
              />
            </div>
            <div className="w-full basis-1/2">
              <FloatLabelInput
                idInput="idFreightModality"
                title={"Modalidade do frete"}
                type={""}
                width={""}
                className={inputStyle}
                onChange={(e) =>
                  changeFormData("freightModality", e.target.value)
                }
              />
            </div>
            <div className="w-full basis-1/2">
              <FloatLabelInput
                idInput="idVehicleLisensePlate"
                title={"Placa veículo"}
                type={"text"}
                width={""}
                className={inputStyle}
                onChange={(e) =>
                  changeFormData("vehicleLisensePlate", e.target.value)
                }
              />
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <div className="w-24">
              <FloatLabelInput
                idInput="idStateCode"
                title={"UF"}
                type={"text"}
                width={""}
                className={inputStyle}
                onChange={(e) =>
                  changeFormData("transportStateCode", e.target.value)
                }
              />
            </div>
            <div className="w-full basis-1/3">
              <FloatLabelInput
                idInput="idCnpj"
                title={"CNPJ"}
                type={"text"}
                width={""}
                className={inputStyle}
                onChange={(e) =>
                  changeFormData("transportCnpj", e.target.value)
                }
              />
            </div>
            <div className="w-full basis-1/3">
              <FloatLabelInput
                idInput="idFreightIdentifier"
                title={"IE / RG"}
                type={"text"}
                width={""}
                className={inputStyle}
                onChange={(e) =>
                  changeFormData("transportDocumentIdentifier", e.target.value)
                }
              />
            </div>
            <div className="w-full basis-1/2">
              <FloatLabelInput
                idInput="id2"
                title={"Endereço"}
                type={""}
                width={""}
                className={inputStyle}
                onChange={(e) =>
                  changeFormData("transportAddress", e.target.value)
                }
              />
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <div className="w-full basis-3/5">
              <FloatLabelInput
                idInput="id2"
                title={"Município"}
                type={""}
                width={""}
                className={inputStyle}
                onChange={(e) =>
                  changeFormData("transportCity", e.target.value)
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-orangeSupport">Volumes transportados</h1>

        <div className="flex flex-col gap-4 w-full py-4">
          <div className="flex flex-row gap-4">
            <div className="w-full basis-1/4">
              <FloatLabelInput
                idInput="idAmount"
                title={"Quantidade"}
                type={"number"}
                width={""}
                className={inputStyle}
                onChange={(e) => changeFormData("amount", e.target.value)}
              />
            </div>
            <div className="w-full basis-1/4">
              <FloatLabelInput
                idInput="idSpecies"
                title={"Espécie"}
                type={"text"}
                width={""}
                className={inputStyle}
                onChange={(e) => changeFormData("species", e.target.value)}
              />
            </div>
            <div className="w-full basis-1/4">
              <FloatLabelInput
                idInput="idMark"
                title={"Marca"}
                type={"text"}
                width={""}
                className={inputStyle}
                onChange={(e) => changeFormData("mark", e.target.value)}
              />
            </div>
            <div className="w-full basis-1/4">
              <FloatLabelInput
                idInput="id2"
                title={"Número"}
                type={"text"}
                width={""}
                className={inputStyle}
                onChange={(e) => changeFormData("amountNumber", e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <div className="w-full basis-1/4">
              <FloatLabelInput
                idInput="idGrossWeight"
                title={"Peso bruto"}
                type={"text"}
                width={""}
                className={inputStyle}
                onChange={(e) => changeFormData("grossWeight", e.target.value)}
              />
            </div>
            <div className="w-full basis-1/4">
              <FloatLabelInput
                idInput="idLiquidWeight"
                title={"Peso líquido"}
                type={"text"}
                width={""}
                className={inputStyle}
                onChange={(e) => changeFormData("liquidWeight", e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceForm;
