"use client";

import Image from "next/image";
import CleanLayout from "@/app/cleanLayout";
import { BesouroIcon } from "@/icons/BesouroIcon";
import { ChevronLeft } from "lucide-react";
import ProfileSessions from "@/components/ProfileSessions/page";
import { useEffect, useState } from "react";
import Logout from "@/functions/Logout";
import { useRouter } from "next/navigation";
import ShadModalLayout from "@/components/Modals/ShadModalLayout";
import ConfirmationModal from "@/components/Modals/ModalMessages/ConfirmationModal";
import { useUserContext } from "@/contexts/UserContext";
import { Skeleton } from "@/components/UI/skeleton";
import { Button } from "@/components/UI/button";
import ProfileData from "@/components/ProfileData/page";

const Profile = () => {
  return (
    <>
      <CleanLayout>
        <ProfileArea />
      </CleanLayout>
    </>
  );
};

type SessionType = "general-data" | "settings" | "support" | "team";

interface menuItems {
  value: SessionType;
  label: string;
}

const ProfileArea = () => {
  const router = useRouter();
  const [session, setSession] = useState<SessionType>("general-data");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [functionControl, setFunctionControl] = useState<"logout" | "delete">();
  const { user, getUserData, decodedUser, error } = useUserContext();

  const toggleSession = (session: SessionType) => {
    setSession(session);
  };

  const menuItems: menuItems[] = [
    { value: "general-data", label: "Dados gerais" },
    { value: "settings", label: "Configurações" },
    { value: "team", label: "Equipe" },
  ];

  const controlModal = (control?: "logout" | "delete") => {
    setIsModalOpen(!isModalOpen);
    setFunctionControl(control);
  };

  const handleDelete = (isAccepted: boolean) => {
    if (isAccepted) {
      console.log("deletando o usuário");
    } else {
      setIsModalOpen(false);
    }
  };

  const handleLogout = (isAccepted: boolean) => {
    if (isAccepted) {
      Logout();
    } else {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    getUserData();
  }, [decodedUser]);

  return error ? (
    <div className="w-full h-full flex items-center justify-center">
      {/* Mensagem de erro caso o usuário não for encontrado */}
      <div className="bg-white border-2 border-red-700 rounded-xl p-8 shadow-lg flex flex-col justify-center gap-4 items-center">
        <h1 className="text-red-700">Erro ao buscar dados!</h1>
        <Button variant={"destructive"} onClick={() => router.push("/")}>
          Voltar ao inicio
        </Button>
      </div>
    </div>
  ) : (
    <div className="flex flex-col p-0 md:p-5 h-full gap-8">
      {/* Modal com mensgaens */}
      <ShadModalLayout
        isOpen={isModalOpen}
        onOpenChange={controlModal}
        width="max-w-sm"
      >
        <ConfirmationModal
          onOptionSelected={
            functionControl === "logout" ? handleLogout : handleDelete
          }
          message={
            functionControl === "logout"
              ? "Tem certeza que deseja sair?"
              : "Tem certeza que deseja excluir a sua conta?"
          }
        />
      </ShadModalLayout>

      <div className="absolute left-0 top-0 w-full -z-10">
        <Image
          src="/assets/backgroundVetorProfile.svg"
          alt="papel de parede da página"
          className="w-full"
          width={0}
          height={0}
        />
      </div>

      <div className="flex w-full justify-center relative">
        <button
          onClick={() => router.back()}
          className="rounded-xl bg-white dark:bg-gray-800 flex gap-2 h-14 w-36 items-center justify-center font-bold shadow-md absolute left-0"
        >
          <ChevronLeft /> Voltar
        </button>

        <div className="flex items-center md:basis1/4 gap-2">
          <BesouroIcon className="md:w-6 md:h-12 w-4 h-10" />
          <span className="hidden md:inline-block titleNav self-center whitespace-nowrap">
            BESOURO
          </span>
        </div>
      </div>

      <div className="flex justify-center gap-8 h-[60vh]">
        {user ? (
          <ProfileData
            user={user}
            session={session}
            menuItems={menuItems}
            toggleSession={toggleSession}
            controlModal={controlModal}
          />
        ) : (
          <Skeleton className="w-44 h-full" />
        )}
        <ProfileSessions user={user} session={session} />
      </div>
    </div>
  );
};

export default Profile;
