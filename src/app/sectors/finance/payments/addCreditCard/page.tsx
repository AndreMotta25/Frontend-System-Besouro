"use client";

import FinanceLayout from "../../financeLayout";
import Loading from "@/icons/Loading";
import MixedMultipleYExiosChart from "@/components/charts/MixedMultipleYExios";
import { ReactElement, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import RegisterProgressBar from "@/components/RegisterProgressBar/RegisterProgressBar";
import FormAddCreditCard from "@/components/Forms/FormAddCreditCard/FormAddCreditCard";
import { ICreditCardData } from "@/interfaces/AddCreditCardt";
import MessageModal from "@/components/Modals/ModalMessages/MessageModal";
import usePost from "@/hooks/api/usePost";

interface ProgressBar {
  icon: ReactElement;
  status: string;
  text: string;
  title: string;
}

const AddCreditCard = () => {
  return (
    <>
      <FinanceLayout>
        <AddCreditCardArea />
      </FinanceLayout>
    </>
  );
};

const AddCreditCardArea = () => {
  const [modal, setModal] = useState({
    isOpen: false,
    message: "",
    status: "",
  });
  const [step, setStep] = useState(1);
  const [creditCardData, setCreditCardData] = useState<ICreditCardData | null>(
    {}
  );
  const [componentKey, setComponentKey] = useState(0);
  const { postData } = usePost();
  const [progressBarData, setProgressData] = useState<ProgressBar[]>([
    // Criando a variável que recebe os dados da barra de progressão
    {
      icon: <Loading className="" />,
      status: "",
      text: "Dados do Cartão",
      title: "Passo 1",
    },
    {
      icon: <Loading className="" />,
      status: "",
      text: "Sobre a Fatura",
      title: "Passo 2",
    },
    {
      icon: <Loading className="" />,
      status: "",
      text: "Conclusão",
      title: "Passo 3",
    },
  ]);

  const nextStep = () => {
    // Muda o componente do formulário de registro para o próximo
    setStep((prev) => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    // Muda o componente do formulário de regsitro para o anterior
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const sendCardCreditData = async (infosCard: any) => {
    // Requisição de envio dos dados
    setStep(1);
    try {
      const res = await postData(
        "/add-credit-card",
        infosCard
      );

      if (!res?.response) {
        setCreditCardData(null),
          setModal({
            isOpen: true,
            message: res?.response.message,
            status: "error",
          });
        return;
      }
      setComponentKey((prevKey) => prevKey + 1);
      console.log(res);
      setModal({
        isOpen: true,
        message: "Cartão registrado com sucesso!",
        status: "success",
      });
    } catch (error) {
      console.error("Erro:", error);
      setModal({
        isOpen: true,
        message: "Erro inesperado, por favor tente novamente",
        status: "error",
      });
    }
  };

  const AccountsCards = [
    { idAccount: "002", AccountName: "RAMIREZ SAFRA", Balance: 123.81 },
    { idAccount: "003", AccountName: "VINICIUS BRADESCO", Balance: 123.81 },
    { idAccount: "004", AccountName: "DOUGLAS ITAU", Balance: 123.81 },
    { idAccount: "005", AccountName: "BRUNO SANTANDER", Balance: 123.81 },
    { idAccount: "002", AccountName: "RAMIREZ SAFRA", Balance: 123.81 },
    { idAccount: "003", AccountName: "VINICIUS BRADESCO", Balance: 123.81 },
    { idAccount: "004", AccountName: "DOUGLAS ITAU", Balance: 123.81 },
    { idAccount: "005", AccountName: "BRUNO SANTANDER", Balance: 123.81 },
  ];

  return (
    <div className="w-full h-[75lvh] gap-2 flex flex-row justify-between ">
      <MessageModal
        isOpen={modal.isOpen}
        onClose={() => setModal({ ...modal, isOpen: false })}
        text={modal.message}
        status={modal.status}
      />

      <div className="w-full h-full shadow-2xl dark:bg-gray-800 p-4 pt-8 flex flex-col gap-12 rounded-xl">
        <div className="h-96 flex flex-col md:h-fit md:flex-row md:items-center md:gap-5">
          {progressBarData.map((item, index) => (
            <RegisterProgressBar
              props={item}
              status={item.status}
              key={index}
            />
          ))}
        </div>

        <div className="mt-28">
          <FormAddCreditCard
            key={componentKey}
            step={step}
            setCardData={setCreditCardData}
            progressData={progressBarData}
            setProgressData={setProgressData}
          />

          <div className="flex w-full justify-center md:justify-between relative flex-wrap gap-5 pb-5 mt-4">
            {step > 1 && (
              <button
                className="rounded-xl md:absolute md:left-0 w-60 bg-white dark:bg-gray-700 shadow-lg p-2 cursor-pointer hover:-translate-y-1 ease-in duration-75"
                onClick={prevStep}
              >
                <label className="text-sm text-[#EC671A] cursor-pointer">
                  Voltar
                </label>
              </button>
            )}
            {step < 3 && (
              <button
                className="rounded-xl md:absolute md:right-0 w-60 bg-white dark:bg-gray-700 shadow-lg p-2 cursor-pointer hover:-translate-y-1 ease-in duration-75"
                onClick={nextStep}
              >
                <label className="text-sm text-[#EC671A] cursor-pointer">
                  Próximo Passo
                </label>
              </button>
            )}
            {step === 3 && (
              <button
                className="rounded-xl md:absolute md:right-0 w-60 bg-white dark:bg-gray-700 shadow-lg p-2 cursor-pointer hover:-translate-y-1 ease-in duration-75"
                type="submit"
                onClick={(e) => sendCardCreditData(creditCardData)}
              >
                <label className="text-sm text-[#EC671A] cursor-pointer">
                  Confirmar
                </label>
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="w-full h-full flex flex-col dark:shadow-slate-900  gap-2">
        <div className="shadow-2xl rounded-xl h-1/2 dark:bg-gray-800">
          <MixedMultipleYExiosChart
            dashName="Teste"
            height={260}
            labels={["f"]}
            values={[{ name: "teste", type: "column", data: [12] }]}
          />
        </div>

        <div className="shadow-2xl h-1/2 p-2 overflow-auto">
          <div className="w-full flex flex-row justify-between ">
            <label className="select-none text-orangeSupport font-semibold">
              Contas Cadastradas
            </label>

            <Trash2 className="size-4 text-red-700 cursor-pointer hover:-translate-y-1 ease-in duration-75" />
          </div>

          {AccountsCards.map((account, index) => (
            <div
              key={index}
              className="group px-4 pt-3 hover:-translate-y-1 dark:text-white hover:text-orangeSupport ease-in duration-75"
            >
              <div className="w-full py-2 px-3 rounded-xl bg-white dark:bg-gray-800 shadow-2xl flex flew-row justify-between items-center gap-3">
                <div className="w-full flex flex-row gap-2">
                  <input
                    id={account.idAccount}
                    type="checkbox"
                    className="appearance-none h-6 w-6 border border-gray-300 rounded-sm checked:bg-red-500 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-red-300"
                  />
                  {account.AccountName}
                </div>

                <div className="flex flex-col items-center">
                  <label className="text-xs">Saldo</label>
                  <label className="text-xs">R${account.Balance}</label>
                </div>

                <div className="hidden group-hover:flex flex-row gap-2 pt-2">
                  <Pencil className="size-4 text-gray-600 cursor-pointer  hover:-translate-y-1 ease-in duration-75" />
                  <Trash2 className="size-4 text-red-700 cursor-pointer hover:-translate-y-1 ease-in duration-75" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddCreditCard;
