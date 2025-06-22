"use client";

import RegisterProgressBar from "@/components/RegisterProgressBar/RegisterProgressBar";
import Loading from "@/icons/Loading";
import { ReactElement, useState } from "react";
import FormRegisterUser from "@/components/FormRegisterUser/FormRegisterUser";
import { IUserRegisterData } from "@/interfaces/RegisterUserInterfaces";
import Image from "next/image";
import CleanLayout from "@/app/cleanLayout";
import MessageModal from "@/components/Modals/ModalMessages/MessageModal";
import usePost from "@/hooks/api/usePost";
import { LoaderCircle, SearchX } from "lucide-react";
import { useSearchParams } from "next/navigation";

const Register = () => {
  return (
    <>
      <CleanLayout
        pageTitle="Cadastre-se"
        subTitle="Efetue seu cadastro para acessar o sistema"
      >
        <RegisterArea />
      </CleanLayout>
    </>
  );
};

interface ProgressBar {
  icon: ReactElement;
  status: string;
  text: string;
  title: string;
}

const RegisterArea = () => {
  const params = useSearchParams();
  const token = params.get("token");
  const [loading, setLoading] = useState<boolean>(false);
  const [modal, setModal] = useState({
    isOpen: false,
    message: "",
    status: "",
  });
  const [step, setStep] = useState(1); // Criando a variável de controle dos componentes de etapas do formulário
  const [infosUser, setInfosUser] = useState<IUserRegisterData>({}); // Criando a variável que vai receber todos os dados do usuário
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
      text: "E-mail e Senha",
      title: "Passo 2",
    },
  ]);
  const { postData } = usePost();

  const nextStep = () => {
    // Muda o componente do formulário de registro para o próximo
    setStep((prev) => Math.min(prev + 1, 2));
  };

  const prevStep = () => {
    // Muda o componente do formulário de regsitro para o anterior
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const fetchUserData = async (infosUser: any) => {
    // Requisição de envio dos dados
    setLoading(true);

    try {
      const res: any = await postData(
        `/guests/signup?token=${token}`,
        infosUser
      );

      if (!res.response) {
        setModal({
          isOpen: true,
          message: "Ocorreu algum erro!",
          status: "error",
        });
        return;
      }
      setModal({
        isOpen: true,
        message: "Usuário criado com sucesso!",
        status: "success",
      });
    } catch (error: any) {
      console.log(error);
      setModal({
        isOpen: true,
        message: "Erro inesperado, por favor tente novamente",
        status: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return <div className="flex flex-col items-center p-0 md:p-5 gap-5">
      <div className="absolute top-0 right-0 w-1/2 lg:w-1/4 -z-10">
        <Image
          src="/assets/backgroundVetorRegister.svg"
          alt="papel de parede da página"
          className="w-full"
          width={0}
          height={0}
        />
      </div>

      {/* Modal com a mensagem de retorno da api */}
      <MessageModal
        isOpen={modal.isOpen}
        onClose={() => setModal({ ...modal, isOpen: false })}
        text={modal.message}
        status={modal.status}
      />

      {loading ? (
        <div className="fixed w-full h-full inset-0 flex justify-center items-center z-50 bg-black/25 ">
          <div className="rounded-2xl bg-white dark:bg-gray-800 justify-center p-5 flex items-center flex-col gap-1 w-1/2 h-1/4">
            <LoaderCircle className="animate-spin" />{" "}
            <p className="text-gray-500 dark:text-white">Carregando...</p>
          </div>
        </div>
      ) : null}

      <div className="dark:bg-gray-800 bg-white rounded-3xl drop-shadow-md w-[900px] max-w-[90vw] py-5 flex justify-center h-full md:min-h-60 md:h-60">
        <div className="w-4/6 flex flex-col gap-5">
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

      <div className="dark:bg-gray-800 rounded-3xl shadow-md bg-white w-[900px] max-w-[90vw]">
        <div className="p-10 min-h-60 flex items-center">
          <FormRegisterUser
            step={step}
            setInfosUser={setInfosUser}
            progressData={progressBarData}
            setProgressData={setProgressData}
          />
        </div>
      </div>

      <div className="flex w-[900px] max-w-[90vw] justify-center md:justify-between relative flex-wrap gap-5 pb-5">
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
        {step < 2 && (
          <button
            className="rounded-xl md:absolute md:right-0 w-60 bg-white dark:bg-gray-700 shadow-lg p-2 cursor-pointer hover:-translate-y-1 ease-in duration-75"
            onClick={nextStep}
          >
            <label className="text-sm text-[#EC671A] cursor-pointer">
              Próximo Passo
            </label>
          </button>
        )}
        {step === 2 && (
          <button
            className="rounded-xl md:absolute md:right-0 w-60 bg-white dark:bg-gray-700 shadow-lg p-2 cursor-pointer hover:-translate-y-1 ease-in duration-75"
            type="submit"
            onClick={(e) => fetchUserData(infosUser)}
          >
            <label className="text-sm text-[#EC671A] cursor-pointer">
              Enviar
            </label>
          </button>
        )}
      </div>
    </div>
  
};

export default Register;
