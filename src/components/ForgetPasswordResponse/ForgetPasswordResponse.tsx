import usePost from "@/hooks/api/usePost";
import { Eye, EyeOff, Lock } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

interface ForgetRequestProps {
  setModal: (value: any) => void;
  changePss: string;
}

const ForgetPasswordResponse = ({
  setModal,
  changePss,
}: ForgetRequestProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(true); // Criando a variável de controle da visualização da senha
  const [isVisibleConfirm, setIsVisibleConfirm] = useState<boolean>(true);
  const { postData } = usePost();
  const router = useRouter();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget); // Recebendo os dados do formulário
    const pass = form.get("password") as string; // Atribuindo o valor de senha para uma variável
    // const confirm = form.get("confirmPassword") as string; // Atribuindo o valor de confimação de senha

    try {
      const res = await postData("/api/forget-password", {
        password: pass,
        tokenID: changePss,
      });

      if (res?.statusCode !== 200) {
        setModal({
          isOpen: true,
          message: "Ocorreu um erro, por favor tente novamente!",
          status: "error",
        });
        return;
      }
      setModal({
        isOpen: true,
        message: "Senha atualizada com sucesso!",
        status: "success",
      });

      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch {
      setModal({
        isOpen: true,
        message: "Erro inesperado, por favor tente novamente",
        status: "error",
      });
    }
  }

  const handleChangePasswordView = () => {
    // Muda a visualização da senha
    if (isVisible) {
      return "password";
    }
    return "text";
  };

  const handleChangeConfirmView = () => {
    // Muda a visualização da confirmação de senha
    if (isVisibleConfirm) {
      return "password";
    }
    return "text";
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl drop-shadow-md w-full lg:w-2/5 h-[300px] p-3 md:p-6 flex items-center justify-center flex-col">
      <div className="w-4/5 flex flex-col gap-5">
        <div className="text-center">
          <h1 className="text-grayText/80 dark:text-white font-bold text-xl">
            Insira a sua nova senha!
          </h1>
          <h2 className="text-grayTitle dark:text-white text-md">
            Agora é a hora de criar a sua nova senha!
          </h2>
        </div>
        <form className="flex flex-col gap-5" onSubmit={onSubmit}>
          <div className="relative w-full">
            <input
              required
              className="dark:bg-bgDefaultDark dark:text-white dark:border-none dark:placeholder:text-white/90 border border-zinc-100 rounded-xl w-full p-12 py-2 shadow-md"
              type={handleChangePasswordView()}
              placeholder="Senha"
              name="password"
            />
            <Lock className="absolute translate-y-[-50%] top-1/2 ml-1 w-10 text-gray-500 dark:text-white/90 z-10" />
            {isVisible ? (
              <Eye
                onClick={() => setIsVisible(!isVisible)}
                className="absolute translate-y-[-50%] top-1/2 right-0 mr-1 w-10 text-gray-500 dark:text-white/90 z-10 cursor-pointer"
              />
            ) : (
              <EyeOff
                onClick={() => setIsVisible(!isVisible)}
                className="absolute translate-y-[-50%] top-1/2 right-0 mr-1 w-10 text-gray-500 dark:text-white/90 z-10 cursor-pointer"
              />
            )}
          </div>

          <div className="relative w-full">
            <input
              required
              className="dark:bg-bgDefaultDark dark:text-white dark:border-none dark:placeholder:text-white/90 border border-zinc-100 rounded-xl w-full p-12 py-2 shadow-md"
              type={handleChangeConfirmView()}
              placeholder="Confirme sua senha"
              name="confirmPassword"
            />
            <Lock className="absolute translate-y-[-50%] top-1/2 ml-1 w-10 text-gray-500 dark:text-white/90 z-10" />
            {isVisibleConfirm ? (
              <Eye
                onClick={() => setIsVisibleConfirm(!isVisibleConfirm)}
                className="absolute translate-y-[-50%] top-1/2 right-0 mr-1 w-10 text-gray-500 dark:text-white/90 z-10 cursor-pointer"
              />
            ) : (
              <EyeOff
                onClick={() => setIsVisibleConfirm(!isVisibleConfirm)}
                className="absolute translate-y-[-50%] top-1/2 right-0 mr-1 w-10 text-gray-500 dark:text-white/90 z-10 cursor-pointer"
              />
            )}
          </div>

          <button
            className="rounded-xl w-full p-2 bg-bettleOrange text-white"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPasswordResponse;
