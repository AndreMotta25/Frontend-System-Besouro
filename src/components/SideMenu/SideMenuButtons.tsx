"use client";

import "../../styles/SideMenu.scss";
import RightArrow from "@/icons/RightArrow";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface SideMenuButtonProps {
  icon: React.ElementType;
  sector: string;
  route: string;
  isOpen: boolean;
}

// Componente SideMenuButton
export const SideMenuButton: React.FC<SideMenuButtonProps> = ({
  icon: Component,
  sector,
  route,
  isOpen,
}) => {
  const router = useRouter(); // Hook do Next.js para navegação
  const isActive = usePathname() === route; // Hook do Next.js para verificar se a rota atual é a mesma da rota do botão
  const [showText, setShowText] = useState(isOpen);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isOpen) {
      timer = setTimeout(() => setShowText(true), 100);
    } else {
      setShowText(false);
      timer = setTimeout(() => setShowText(false), 100);
    }

    return () => clearTimeout(timer);
  }, [isOpen]);

  return (
    <div
      // Classe dinâmica que muda com base na rota ativa
      className={`  side-menu-button ${
        isActive ? "active" : ""
      } relative bg-white dark:bg-gray-800 container my-1 p-4 h-14 flex flex-row items-center justify-between rounded-xl hover:bg-bettleOrange hover:dark:bg-bettleOrange group ease-in-out transition-all duration-300 w-56 cursor-pointer`}
    >
      <button
        // Classe dinâmica que muda com base na rota ativa
        className="side-menu-text w-full flex flex-row items-center dark:text-white group-hover:text-white"
        onClick={() => router.push(route)}
      >
        <div className="h-6 w-6">
          {/* Renderiza o ícone passado como prop */}
          <Component className="side-menu-icon h-full w-full text-bettleOrange group-hover:text-white transition-colors" />
        </div>
        <div className="side-menu-button-text ml-4 m-0 text-grayText font-bold text-sm group-hover:text-white transition-colors hide-class">
          <span
            className={`dark:text-white transition-opacity ${
              showText ? "opacity-100" : "opacity-0"
            }`}
          >
            {sector}
          </span>
          {/* Texto do setor */}
        </div>
        <div className="absolute right-4 hide-class">
          {/* Ícone de seta à direita */}
          <RightArrow className="side-menu-arrow h-full w-full text-grayText dark:text-white group-hover:text-white transtion-colors" />
        </div>
      </button>
    </div>
  );
};
