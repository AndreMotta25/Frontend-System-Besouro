"use client";

import NavBar from "@/components/NavBar/NavBar";
import { SideMenu } from "@/components/SideMenu/SideMenu";
import { WaveProjects } from "@/icons/WaveProject";
import React, { useState } from "react";
import { useRouter } from "next/router";

// Icons
import { Home } from "@/icons/Home";
import Data from "@/icons/Data";
import Projects from "@/icons/Projects";
import Chats from "@/icons/Chats";
import History from "@/icons/History";
import Calendar  from '@/icons/Calendar';

interface ProjetctLayoutProps {
  children: React.ReactNode;
  pageTitle: string;
  photoProject: string;
  colorProject: string;
}

const ProjetctLayout: React.FC<ProjetctLayoutProps> = ({
  children,
  pageTitle,
  photoProject,
  colorProject,
}) => {
  const [sideMeuOpen, setSideMenuOpen] = useState(true);

  const menuData = [
    {
      icon: Home,
      sector: "Minha Área",
      route: "/",
    },
    {
      icon: Data,
      sector: "Setor",
      route: "/sectors",
    },
    {
      icon: Projects,
      sector: "Projetos",
      route: "/projects",
    },
    {
      icon: Chats,
      sector: "Chats",
      route: "/chats",
    },
    {
      icon: Calendar,
      sector: "Agenda",
      route: "/chats",
    },
    {
      icon: History,
      sector: "Últimos Acessos",
      route: "/history",
    },
  ];


  const handleSideMenu = () => {
    setSideMenuOpen(!sideMeuOpen);
  };

  return (
    <>
      <NavBar colorNav={colorProject} colorNavDark={colorProject} />
      <div className="relative w-full">
        <div className="md:absolute inset-0 flex items-center mt-24 justify-center">
          <img className="w-52" src={photoProject} alt="" />
        </div>
        <WaveProjects
          className="w-full hidden md:inline-block"
          colorWave={colorProject}
        />
      </div>
      <div className="px-5">
        <SideMenu isOpen={sideMeuOpen} menuItems={menuData} changeMenu={handleSideMenu} />
        <div className={`w-full ${sideMeuOpen ? "md:pl-80" : "md:pl-36"}`}>
          <div className="flex flex-row justify-between md:pr-16 items-center pt-8 md:pt-0">
            <h1 className="md:text-2xl text-lg font-bold text-grayTitle">{pageTitle}</h1>
            <a href="/projects/1/classes" className="group dark:text-white">
              <button className="cursor-pointer border transition ease-in-out delay-75 group-hover:bg-bgHouverOrange group-hover:-translate-y-2 hover:text-white hover:border-none border-bettleBlue rounded-full w-44 h-7 justify-between">
                <span className="text-xs">Lista de presença</span>
              </button>
            </a>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default ProjetctLayout;
