"use client";

import { BesouroIcon } from "@/icons/BesouroIcon";
import BesouroLogin from "@/icons/BesouroLogin";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { Eye, EyeOff, LoaderCircle, Lock, Mail } from "lucide-react";
import CleanLayout from "@/app/cleanLayout";
import Image from "next/image";
import MessageModal from "@/components/Modals/ModalMessages/MessageModal";
import usePost from "@/hooks/api/usePost";
import Cookies from "js-cookie";
import { useUserContext } from "@/contexts/UserContext";

const Login = () => {
  return (
    <CleanLayout pageTitle="" subTitle="">
      <LoginArea />
    </CleanLayout>
  );
};

const LoginArea = () => {
  const [modal, setModal] = useState({
    isOpen: false,
    message: "",
    status: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({}); // Criando a variável de erros do input
  const [isVisible, setIsVisible] = useState<boolean>(true); // Criando a variável de controle da visualização da senha
  const [loading, setLoading] = useState<boolean>(false); // Criando a variável de carregamento
  const router = useRouter();
  const { getDecodedUserData } = useUserContext();
  const { postData } = usePost();

  const validateInputs = (email: string, password: string) => {
    // Validando os dados do formulário de login
    const newErrors: { [key: string]: string } = {};

    if (!email) {
      newErrors.email = "E-mail é obrigatório.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "E-mail inválido.";
    }

    if (!password) {
      newErrors.password = "Senha é obrigatória.";
    }

    return newErrors;
  };

  const handleChangePasswordView = () => {
    // Muda a visualização da senha
    if (isVisible) {
      return "password";
    }
    return "text";
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    // Requisição de envio de dados do login
    event.preventDefault();

    // Setando o loading para verdadeiro
    setLoading(true);

    // Transformando os dados em JSON
    const formData = new FormData(event.currentTarget);

    const data = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    // Enviando as informações do formulário e enviando para a função de validação
    // const validationErrors = validateInputs(data.email, data.password);
    // if (Object.keys(validationErrors).length > 0) {
    //   setErrors(validationErrors);
    //   return;
    // } else {
    //   setErrors({});
    // }

    // Requisição do login
    try {
      const res: any = await postData("/auth/login", data);

      // Se retornar o token, cria um item local com o valor do token
      if (res.response) {
        const token = res.response.token;
        Cookies.set("token", token, { expires: 1 });
        getDecodedUserData();
      }

      // Se não retornar nada dispara um erro
      if (!res.response && res.statusCode === 401) {
        setModal({
          isOpen: true,
          message: "Usuário e/ou senha incorretos!",
          status: "error",
        });
        return;
      }

      if (!res.response && res.statusCode !== 200) {
        setModal({
          isOpen: true,
          message: "Algum erro inesperado aconteceu!",
          status: "error",
        });
        return;
      }

      // Se retornar o token, abre o modal de sucesso
      setModal({
        isOpen: true,
        message: "Login Efetuado com sucesso",
        status: "success",
      });

      // Redireciona para a página principal
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error: any) {
      console.log(error);
      setModal({ isOpen: true, message: "Algo de errado!", status: "error" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex justify-center flex-col items-center gap-8 h-full">
      {/* Imagem de fundo */}
      <div className="fixed w-full top-0 h-full -z-10">
        <Image
          className="w-full h-full object-cover"
          src={"/assets/backgroundVetorLogin.svg"}
          width={0}
          height={0}
          alt="papel de parede"
        />
      </div>

      {/* Modal com a mensagem de retorno da api */}
      <MessageModal
        isOpen={modal.isOpen}
        onClose={() => setModal({ ...modal, isOpen: false })}
        text={modal.message}
        status={modal.status}
      />

      <div className="bg-gradient-to-b from-bettleOrange/60 from-10% to-white to-60% dark:from-gray-800 dark:to-gray-800 rounded-3xl drop-shadow-md w-full md:w-4/5 lg:w-2/5 h-[500px]">
        <div className="flex w-full h-full justify-center items-center py-10 px-12 flex-col gap-5">
          <BesouroLogin className="w-16 h-16" />
          <div className="text-center">
            <h1 className="text-grayText/80 dark:text-white font-bold text-xl">
              Entre com o E-mail
            </h1>
            <h2 className="text-grayTitle dark:text-white text-md">
              Acesse sua conta com o e-mail cadastrado
            </h2>
          </div>

          <form
            className="flex w-full flex-col justify-center items-center gap-5"
            onSubmit={onSubmit}
          >
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
            {errors.email && (
              <span className="text-red-500 font-bold">{errors.email}</span>
            )}

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
            {errors.password && (
              <span className="text-red-500 font-bold">{errors.password}</span>
            )}

            <div className="w-full flex justify-end">
              <button
                className="w-fit text-grayText dark:text-white underline underline-offset-2"
                type="button"
                onClick={() => router.push("/forget-password")}
              >
                Esqueceu a senha?
              </button>
            </div>

            <button
              className={`rounded-xl w-full p-2 text-white ${
                loading
                  ? "bg-gray-600 opacity-50 cursor-not-allowed"
                  : "bg-bettleOrange"
              }`}
              type={loading ? "button" : "submit"}
            >
              {loading ? (
                <span className="w-full justify-center flex gap-4">
                  <LoaderCircle className="animate-spin" /> Carregando...
                </span>
              ) : (
                "Entrar"
              )}
            </button>
          </form>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <BesouroIcon className="w-6 h-12" />
        <span className="titleNav self-center whitespace-nowrap">BESOURO</span>
      </div>
    </div>
  );
};

export default Login;
