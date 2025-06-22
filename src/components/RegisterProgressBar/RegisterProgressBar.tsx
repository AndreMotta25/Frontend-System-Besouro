import Loading from "@/icons/Loading";
import Lock from "@/icons/Lock";
import { CircleCheck } from "lucide-react";
import React, { ReactElement } from "react";

interface ProgressBar {
  icon: ReactElement;
  text: string;
  title: string;
}

interface RegisterProgressBarProps {
  props: ProgressBar;
  status: string;
}

const RegisterProgressBar = ({ props, status }: RegisterProgressBarProps) => {
  // Recebe os valores da barra de progresso e retorna os ícones, cores e textos exatos conforme o status dele.
  const config: any = {
    waiting: {
      colors: [
        "bg-bettleOrange",
        "bg-bettleOrange/50 dark:bg-bettleOrange",
        "text-orangeSupport ",
      ],
      text: "Em progresso",
      icon: <Lock className="" />,
    },
    pending: {
      colors: ["bg-gray-200 dark: dark:bg-zinc-900", "bg-gray-100 dark:bg-zinc-900/50", "text-gray-700 dark:text-white"],
      text: "Pendente",
      icon: <Loading className="" />,
    },
    complete: {
      colors: ["bg-green-500", "bg-green-300", "text-green-900"],
      text: "Concluído",
      icon: <CircleCheck className="" />,
    },
    default: {
      colors: ["bg-gray-200", "bg-gray-100", "text-gray-700"],
      text: "Carregando...",
      icon: <Loading className="" />,
    },
  };

  const { colors, text, icon } = config[status] || config.default;

  return (
    <>
      <div className="flex gap-5 justify-center items-center md:inline md:gap-0 md:items-start">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center ${colors[1]}`}
        >
          {React.cloneElement(icon, { className: colors[2] })}
        </div>
        <div className="flex flex-col gap-1 md:gap-3 md:absolute md:mt-10">
          <p className="text-sm text-gray-500 dark:text-white">{props.title}</p>
          <p className="text-sm md:text-lg text-gray-800 dark:text-white">{props.text}</p>
          <p
            className={`text-sm w-fit ${colors[2]} py-1 px-4 rounded-2xl ${colors[1]}`}
          >
            {text}
          </p>
        </div>
      </div>
      <div className={`h-1.5 w-full my-3 ${colors[0]}`} />
    </>
  );
};

export default RegisterProgressBar;
