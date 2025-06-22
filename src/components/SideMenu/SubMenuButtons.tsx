"use client";

import "../../styles/SideMenu.scss";
import RightArrow from "@/icons/RightArrow";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

interface SubMenuButtons {
  sector: string;
  route: string;
}

interface SideSubMenuProps {
  icon: React.ElementType;
  MenuIsOpen: boolean;
  sector: string;
  subMenus: SubMenuButtons[];
}

// Componente SubMenuButtons
export const SubMenuButtons: React.FC<SideSubMenuProps> = ({
  icon: Component,
  MenuIsOpen,
  sector,
  subMenus,
}) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <div
        className={`side-menu-button ${
          isOpen ? "active" : ""
        } side-menu-button relative bg-white dark:bg-gray-800 container my-1 p-4 h-14 flex flex-row items-center justify-between rounded-xl hover:bg-bettleOrange hover:dark:bg-bettleOrange group transition-colors duration-200 w-56 cursor-pointer`}
      >
        <button
          className="side-menu-text w-full flex flex-row items-center dark:text-white group-hover:text-white"
          onClick={toggleMenu}
        >
          <div className="h-6 w-6">
            {/* Renderiza o ícone passado como prop */}
            <Component className="side-menu-icon h-full w-full text-bettleOrange group-hover:text-white transition-colors duration-300" />
          </div>
          <div className="side-menu-button-text ml-4 m-0 text-grayText font-bold text-sm group-hover:text-white transition-colors duration-300 hide-class">
            <span className="dark:text-white">{sector}</span>{" "}
            {/* Texto do setor */}
          </div>
          <div className="absolute right-4 hide-class">
            <RightArrow className="side-menu-arrow h-full w-full text-grayText dark:text-white group-hover:text-white transition-colors duration-300" />
          </div>
        </button>
      </div>

      {/* Submenu*/}
      {isOpen && MenuIsOpen && (
        <div className="my-2 pl-10 space-y-2 transition-all duration-300 w-64">
          {subMenus.map((submenu, index) => (
            <button
              key={index}
              onClick={() => router.push(submenu.route)}
              className="w-full p-2 text-gray-900 transition duration-75 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              {submenu.sector}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
