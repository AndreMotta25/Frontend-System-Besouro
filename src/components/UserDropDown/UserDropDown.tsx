"use client";
import { CircleUserRound } from "lucide-react";
import React, { useState } from "react";
import ConfirmationModal from "../Modals/ModalMessages/ConfirmationModal";
import ShadModalLayout from "../Modals/ShadModalLayout";
import { useUserContext } from "@/contexts/UserContext";
import Logout from "@/functions/Logout";

interface IUserDataProps {
  props: {
    name: string;
    email: string;
    photo: string;
  };
}

const UserDropDown = ({ props }: IUserDataProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { decodedUser } = useUserContext();

  const handleLogout = (isAccepted: boolean) => {
    if (isAccepted) {
      Logout();
    } else {
      setIsModalOpen(false);
    }
  };

  const controlModal = () => {
    !isModalOpen;
  };

  return (
    <div className="relative">
      <ShadModalLayout
        isOpen={isModalOpen}
        onOpenChange={controlModal}
        width="max-w-sm"
      >
        <ConfirmationModal
          onOptionSelected={handleLogout}
          message="Tem certeza que deseja sair?"
        />
      </ShadModalLayout>

      <button
        className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {props.photo ? (
          <img
            className="w-8 h-8 rounded-full"
            src={props.photo}
            alt="user photo"
          />
        ) : (
          <CircleUserRound className="w-8 h-8 rounded-full text-[#3377FF] select-none" />
        )}
      </button>

      {isOpen && (
        <div className="z-10 absolute top-10 end-0 bg-white divide-y divide-gray-100 rounded-lg shadow-xl w-44 dark:bg-gray-800 dark:divide-gray-600">
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>{decodedUser?.name}</div>
            <div className="font-medium truncate">{decodedUser?.sub}</div>
          </div>
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownUserAvatarButton"
          >
            <li>
              <a
                href="/profile"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Meu perfil
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Acessos recentes
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Configurações
              </a>
            </li>
          </ul>
          <div className="py-2">
            <a
              href="#"
              onClick={() => setIsModalOpen(!isModalOpen)}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sair
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropDown;
