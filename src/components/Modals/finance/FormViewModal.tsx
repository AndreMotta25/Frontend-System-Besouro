"use client";

import { useState, useEffect } from "react";
import GeneralDatesForm from "./forms/FormView/GeneralDatesForm";
import TaxesForm from "./forms/FormView/TaxesForm";
import AdministrativeForm from "./forms/FormView/AdministrativeForm";
import BankForm from "./forms/FormView/BankForm";
import AccountancyForm from "./forms/FormView/AccountancyForm";
import OthersForms from "./forms/FormView/OthersForms";
import { Download, PencilLine } from "lucide-react";
import { BesouroIcon } from "@/icons/BesouroIcon";
import InstituteIcon from "@/icons/InstituteIcon";
import ShadModalLayout from "../ShadModalLayout";

interface FormViewModalProp {
  mode: "view" | "create";
  editMode?: boolean;
  receivable?: boolean;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ModalLayoutProp {
  isOpen: boolean;
  onClose: () => void;
  mode: "view" | "create";
  receivable?: boolean;
}

interface FormData {
  generalDates: Record<string, string>;
  taxes: Record<string, string>;
  adm: Record<string, string>;
  bank: Record<string, string>;
  acount: Record<string, string>;
  others: Record<string, string>;
}

const FormViewModal: React.FC<ModalLayoutProp> = ({
  onClose,
  mode,
  isOpen,
  receivable,
}) => {
  const [editMode, setEditMode] = useState(mode === "create");

  let title =
    mode === "create" && !receivable ? "Incluir Titulo" : "Vizualizar Titulo";

  useEffect(() => {
    if (!isOpen) {
      setEditMode(mode === "create");
    }
  }, [isOpen, editMode]);

  return (
    <>
      <ShadModalLayout
        title={title}
        isOpen={isOpen}
        onOpenChange={onClose}
        editMode={editMode}
      >
        <FormViewModalArea
          mode={mode}
          editMode={editMode}
          setEditMode={setEditMode}
          receivable={receivable}
        />
      </ShadModalLayout>
    </>
  );
};

const FormViewModalArea: React.FC<FormViewModalProp> = ({
  mode,
  editMode,
  setEditMode,
  receivable,
}) => {
  const [selectedSession, setSelectedSession] = useState("generalDates");
  const [buttonActive, setButtonActive] = useState<string>("agencia");

  const [formData, setFormData] = useState<FormData>({
    generalDates: {},
    taxes: {},
    adm: {},
    bank: {},
    acount: {},
    others: {},
  });

  // com dados (simulando api)
  const formDataApi = {
    generalDates: {
      Prefix: "ABC",
      TitleNumber: "12345",
      Installment: "12",
      TypeTitle: "Fatura",
      Nature: "Despesa",
      Supplier: "Fornecedor Ltda",
      SupplierName: "Empresa XYZ",
      Emission: "2024-10-17",
      Maturity: "2024-12-31",
      RealMaturity: "2024-12-25",
      TitleValue: "5000.00",
      History: "Pagamento de serviços prestados",
      BalanceTitle: "1500.00",
      CoinTitle: "USD",
      Value: "3500.00",
      CoinTaxe: "1.2",
      AprovCode: "APV12345",
    },
    taxes: {
      Iss: "1500.00",
      Irrf: "250.00",
      Inss: "300.00",
      Dirf: "100.00",
      Retention: "50.00",
      Senat: "30.00",
      Confins: "120.00",
      Pis: "40.00",
      Csll: "70.00",
      PccBase: "2000.00",
      Maturity: "2024-12-31",
      ValueAcServ: "5000.00",
      VariacDctf: "15.00",
      BalanceTaxes: "1800.00",
      PeriodDctf: "2024-01",
      FormRetIss: "Tipo A",
      AplyVlrMin: "0.00",
      AplyValue: "600.00",
      CodAlilgIss: "001",
      ParcIma: "20.00",
      ImaValue: "250.00",
      IssBase: "800.00",
      VlFumpeq: "900.00",
      IrfBase: "2000.00",
      Cide: "15.00",
      VlrFamad: "100.00",
      InstallmentFamad: "3",
      InstallmentFumpeq: "5",
      ProvInss: "10.00",
      IssBiribut: "5.00",
      CodRetInss: "RET123",
      CodServIss: "SERV456",
    },
    adm: {
      PermaRate: "5.25",
      FeesPorc: "3.75",
      Addctional: "200.00",
      BoxFlow: "1500.00",
      Unfolding: "50.00",
      Approver: "João Silva",
      Decrease: "10.00",
      FineNature: "Multa de Atraso",
      TaxeCorCoin: "2.50",
      SuspensionDate: "2024-11-15",
      HasDocs: "Sim",
      SolicitationNumber: "123456789",
    },
    bank: {
      Carrier: "Transportadora XYZ",
      ModPay: "Transferência",
      CodBars: "1234567890123",
      DigLine: "12345678",
      BankFor: "Banco do Brasil",
      AgencyFor: "1234",
      AgencyDv: "1",
      AccountFor: "56789",
      AccountDv: "0",
      FormPay: "Débito automático",
      AgendaDate: "2024-10-15",
    },
    acount: {
      Apportionment: "Rateio A",
      CtaContabil: "Conta 123",
      ConstCenter: "Centro Custo X",
      DailyCode: "Cód. Diário 456",
      SeqDaily: "789",
    },
    others: {
      apportionmentProj: "50%",
      OrcCode: "O12345",
      ContratNumber: "C78910",
      ContratRevision: "Rev1",
      SheetNumber: "S001",
      CronogNumber: "CN123",
      InstallmentNumber: "Inst. 5",
      RdaCode: "RDA987",
      AprovDate: "2024-10-01",
      Reference: "Ref001",
      ProcRef: "ProcRef123",
      ProcType: "Tipo A",
      ContabItem: "Item01",
      ContratBonif: "10%",
      MeasurementeNumber: "M123",
      CtrDiscount: "5%",
      FineCtr: "2%",
      VlrClass: "Classe 1",
      RetentionVlr: "1000",
      RetentionInss: "150",
      RetCnpj: "00.000.000/0001-00",
      OperationCode: "OpCode123",
      f100Desc: "Descrição do F100",
      OperadName: "Nome do Operador",
    },
  };

  // Títulos dos modais
  const titlesViewModal = [
    {
      text: "Dados Gerais",
      value: "generalDates",
    },
    {
      text: "Impostos",
      value: "taxes",
    },
    {
      text: "Administrativo",
      value: "adm",
    },
    {
      text: "Banco",
      value: "bank",
    },
    {
      text: "Contábil",
      value: "acount",
    },
    {
      text: "Outros",
      value: "others",
    },
  ];

  useEffect(() => {
    mode === "view" && setFormData(formDataApi);
  }, [mode]);

  const handleInputChange = (
    formName: keyof FormData,
    fieldName: string,
    value: string
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [formName]: {
        ...prevData[formName],
        [fieldName]: value,
      },
    }));
  };

  const toggleSession = () => {
    switch (selectedSession) {
      case "generalDates":
        return (
          <GeneralDatesForm
            data={formData.generalDates}
            isEdit={!editMode}
            onChange={(field: any, value: any) =>
              handleInputChange("generalDates", field, value)
            }
          />
        );
      case "taxes":
        return (
          <TaxesForm
            data={formData.taxes}
            isEdit={!editMode}
            onChange={(field: any, value: any) =>
              handleInputChange("taxes", field, value)
            }
          />
        );
      case "adm":
        return (
          <AdministrativeForm
            data={formData.adm}
            isEdit={!editMode}
            onChange={(field: any, value: any) =>
              handleInputChange("adm", field, value)
            }
          />
        );
      case "bank":
        return (
          <BankForm
            data={formData.bank}
            isEdit={!editMode}
            onChange={(field: any, value: any) =>
              handleInputChange("bank", field, value)
            }
          />
        );
      case "acount":
        return (
          <AccountancyForm
            data={formData.acount}
            isEdit={!editMode}
            onChange={(field: any, value: any) =>
              handleInputChange("acount", field, value)
            }
          />
        );
      case "others":
        return (
          <OthersForms
            data={formData.others}
            isEdit={!editMode}
            onChange={(field: any, value: any) =>
              handleInputChange("others", field, value)
            }
          />
        );
      default:
        return null;
    }
  };

  // Teste de funcionalidade de baixar arquivo
  const handleDownload = () => {
    const data = "Este é o conteúdo do arquivo TXT";
    const blob = new Blob([data], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "./teste.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      {/* <!-- Modal body --> */}
      <div className="p-6 md:p-5 space-y-4 min-h-[500px] max-h-[500px] overflow-y-auto">
        <div className="w-5/6 mx-auto flex flex-row bg-white dark:bg-gray-700 text-orangeSupport justify-between py-2 px-8 rounded-full shadow-md">
          {titlesViewModal.map((item, index) => (
            <label
              key={index}
              onClick={() => setSelectedSession(item.value)}
              className={`hover:bg-orangeSupport hover:text-white py-2 px-4 rounded-3xl text-base select-none hover:scale-105 transition-all duration-200 ${
                selectedSession == item.value && "bg-orangeSupport text-white"
              }`}
            >
              {item.text}
            </label>
          ))}
        </div>

        <div className="w-full bg-white dark:bg-gray-700 h-full max-h-[500px] overflow-auto p-4 rounded-3xl flex flex-col gap-2">
          <div className="w-full flex gap-5 bg-white dark:bg-gray-700">
            <button
              onClick={() => setButtonActive("agencia")}
              className={`hover:scale-105 transition-all dark:bg-bgDefaultDark duration-200 rounded-xl text-bettleOrange border-bettleOrange w-36 py-1 flex items-center justify-center relative ${
                buttonActive === "agencia"
                  ? "shadow-[0_0_0_2px] shadow-bettleOrange"
                  : "shadow-none bg-bgDefault"
              }`}
            >
              <BesouroIcon className="h-5 absolute left-2" />
              Agência
            </button>
            <button
              onClick={() => setButtonActive("instituto")}
              className={`hover:scale-105 transition-all dark:bg-bgDefaultDark duration-200 rounded-xl text-bettleInstitute dark:text-white border-bettleInstitute/80 w-36 py- flex items-center justify-center relative ${
                buttonActive === "instituto"
                  ? "shadow-[0_0_0_2px] shadow-bettleInstitute"
                  : "shadow-none bg-bgDefault"
              }`}
            >
              <InstituteIcon className="h-5 w-5 absolute left-2" />
              Instituto
            </button>

            {mode === "view" && (
              <button
                onClick={() => {
                  handleDownload();
                }}
                className="hover:scale-105 transition-all duration-200"
              >
                <Download className="text-orangeSupport" />
              </button>
            )}
          </div>
          {toggleSession()}
        </div>
      </div>

      <div
        className={`${
          mode == "create" ? "hidden" : receivable ? "hidden" : "flex"
        } cursor-pointer absolute flex right-1 bottom-5 w-12 h-12 bg-orangeSupport items-center justify-center rounded-full hover:scale-125 ease-in duration-100`}
      >
        <PencilLine
          onClick={() => setEditMode(true)}
          className="text-white size-6"
        />
      </div>
    </>
  );
};

export default FormViewModal;
