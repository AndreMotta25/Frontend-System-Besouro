import { CircleUserRound } from "lucide-react";

interface profileData {
  props: {
    fotoUser: any;
    nome: string;
    cargo: string;
    tarefas: number;
    setor: string;
  };
}

const userWelcomeArea = ({ props }: profileData) => {
  const backgroundImage = "/assets/backgroundVetorRegister.svg";

  return (
    <>
      <img
        className="absolute top-0 right-0 rounded-2xl -z-10"
        src={backgroundImage}
        alt="imagem de fundo"
      />
      <div className="flex gap-5 p-10">
        <div className="w-20 h-20">
          {props.fotoUser ? (
            <img
              className="rounded-full select-none"
              src={props.fotoUser}
              alt="foto de pefil"
            />
          ) : (
            <CircleUserRound className="w-12 h-12 text-[#3377FF] select-none" />
          )}
        </div>
        <div className="flex flex-col gap-2">
          <span className="dark:text-white text-2xl xl text-grayTitle font-bold">
            Bom dia, {props.nome}!
          </span>
          <span className="dark:text-white text-grayTitle">
            {props.cargo} - {props.setor}
          </span>
          <span className="dark:text-white text-grayTitle py-2">
            Você possui {props.tarefas} tarefas para hoje!
          </span>
          <button
            type="button"
            className="dark:text-white underline underline-offset-2 w-fit mt-10 text-grayTitle font-bold"
          >
            Review it!
          </button>
        </div>
      </div>
    </>
  );
};

export default userWelcomeArea;
