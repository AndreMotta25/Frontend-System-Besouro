"use client";

import PageLayout from "@/app/pageLayout";
import MessageModal from "@/components/Modals/ModalMessages/MessageModal";
import RegisterProgressBar from "@/components/RegisterProgressBar/RegisterProgressBar";
import usePost from "@/hooks/api/usePost";
import Loading from "@/icons/Loading";
import { ReactElement, useState } from "react";
import FormRegisterEmployee from "@/components/Forms/FormRegisterEmployee/FormRegisterEmployee";
import { IUserRegisterData } from "@/interfaces/RegisterUserInterfaces";
import { LoaderCircle } from "lucide-react";

interface ProgressBar {
  icon: ReactElement;
  status: string;
  text: string;
  title: string;
}

const CreateUser = () => {
  return (
    <>
      <PageLayout pageTitle="Cadastrar novo usuário">
        <CreateUserArea />
      </PageLayout>
    </>
  );
};

const CreateUserArea = () => {
  const [modal, setModal] = useState({
    isOpen: false,
    message: "",
    status: "",
  });
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState<IUserRegisterData>({});
  const [componentKey, setComponentKey] = useState(0);
  const [loading, setLoading] = useState<boolean>(false);
  const { postData } = usePost();
  const [progressBarData, setProgressData] = useState<ProgressBar[]>([
    // Criando a variável que recebe os dados da barra de progressão
    {
      icon: <Loading className="" />,
      status: "",
      text: "Dados gerais",
      title: "Passo 1",
    },
    {
      icon: <Loading className="" />,
      status: "",
      text: "Endereço",
      title: "Passo 2",
    },
    {
      icon: <Loading className="" />,
      status: "",
      text: "Autenticação",
      title: "Passo 3",
    },
  ]);

  const nextStep = () => {
    // Muda o componente do formulário de registro para o próximo
    setStep((prev) => Math.min(prev + 1, 4));
  };

  const prevStep = () => {
    // Muda o componente do formulário de regsitro para o anterior
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const sendUserData = async (infosUser: any) => {
    // Requisição de envio dos dados do funcionário
    setLoading(true);
    try {
      const res = await postData("/users/signup", infosUser);

      if (!res?.response) {
        setModal({
          isOpen: true,
          message: res?.response.message
            ? res?.response.message
            : "Erro na criação do usuário!",
          status: "error",
        });
        return;
      }
      setComponentKey((prevKey) => prevKey + 1);
      setStep(1);
      setModal({
        isOpen: true,
        message: "Usuário cadastrado com sucesso!",
        status: "success",
      });
    } catch (error) {
      console.error("Erro:", error);
      setModal({
        isOpen: true,
        message: "Erro inesperado, por favor tente novamente",
        status: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <MessageModal
        isOpen={modal.isOpen}
        onClose={() => setModal({ ...modal, isOpen: false })}
        text={modal.message}
        status={modal.status}
      />

      <div className="w-full dark:bg-gray-800 h-full p-4 pt-8 flex flex-col items-center rounded-xl shadow-md border my-8 gap-4">
        <div className="w-full py-5 flex justify-center h-full md:h-60">
          <div className="w-5/6 flex flex-col gap-5">
            <div className="flex flex-col md:h-fit md:flex-row md:items-center md:gap-5">
              {progressBarData.map((item, index) => (
                <RegisterProgressBar
                  props={item}
                  status={item.status}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="w-5/6">
          {loading ? (
            <div className="flex items-center gap-2 justify-center">
              <LoaderCircle className="animate-spin" />
              <span>Carregando...</span>
            </div>
          ) : (
            <FormRegisterEmployee
              key={componentKey}
              step={step}
              setUserData={setUserData}
              progressData={progressBarData}
              setProgressData={setProgressData}
            />
          )}
        </div>

        <div className="flex w-5/6 justify-center md:justify-between relative flex-wrap gap-5 h-12">
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
              onClick={(e) => sendUserData(userData)}
            >
              <label className="text-sm text-[#EC671A] cursor-pointer">
                Confirmar
              </label>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default CreateUser;
