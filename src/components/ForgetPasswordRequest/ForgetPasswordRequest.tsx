import React, { FormEvent, useState } from "react";
import { Mail } from "lucide-react";
import usePost from "@/hooks/api/usePost";

interface ForgetRequestProps {
  setModal: (value: any) => void;
}

const ForgetPasswordRequest = ({ setModal }: ForgetRequestProps) => {
  const { postData } = usePost();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const email = form.get("email") as string;

    try {
      const res = await postData("/api/forget-password", { email });
      if (res?.statusCode !== 200) {
        setModal({
          isOpen: true,
          message: "Ocorre um erro, por favor tente novamente!",
          status: "error",
        });
        return;
      }
      setModal({
        isOpen: true,
        message: "Sucesso! Verifique seu e-mail para mais informações",
        status: "success",
      });
    } catch {
      setModal({
        isOpen: true,
        message: "Erro inesperado, por favor tente novamente",
        status: "error",
      });
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl drop-shadow-md w-full lg:w-2/5 h-[300px] p-3 md:p-6 flex items-center justify-center flex-col">
      <div className="w-4/5 flex flex-col gap-5">
        <div className="text-center">
          <h1 className="text-grayText/80 dark:text-white font-bold text-xl">
            Esqueceu a senha?
          </h1>
          <h2 className="text-grayTitle dark:text-white text-md">
            Insira seu e-mail para trocar a sua senha atual
          </h2>
        </div>
        <form className="flex flex-col gap-5" onSubmit={onSubmit}>
          <div className="relative w-full">
            <input
              required
              className="dark:bg-bgDefaultDark dark:text-white dark:border-none dark:placeholder:text-white/90 border border-zinc-100 rounded-xl w-full pl-12 py-2 shadow-md"
              type="email"
              placeholder="E-mail"
              name="email"
            />
            <Mail
              style={{ transform: "translateY(-50%)" }}
              className="absolute top-1/2 translate-y-1/2 ml-1 w-10 text-gray-500 dark:text-white/90"
            />
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

export default ForgetPasswordRequest;
