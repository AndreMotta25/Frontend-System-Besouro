"use client";

import NavBar from "@/components/NavBar/NavBar";
import { SideMenu } from "@/components/SideMenu/SideMenu";
import React, { useState } from "react";

// Icons
import { Home } from "@/icons/Home";
import Data from "@/icons/Data";
import Projects from "@/icons/Projects";
import Chats from "@/icons/Chats";
import History from "@/icons/History";
import Calendar from "@/icons/Calendar";

interface PageLayoutProps {
  children: React.ReactNode;
  pageTitle: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, pageTitle }) => {
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
      <NavBar colorNav="bgDefault" colorNavDark="bgDefaultDark" />
      <div className="px-5 pt-14">
        <SideMenu
          isOpen={sideMeuOpen}
          menuItems={menuData}
          changeMenu={handleSideMenu}
        />
        <div
          className={`w-full ${sideMeuOpen ? "md:pl-72" : "md:pl-28"} pt-20`}
        >
          <h1 className="text-2xl font-bold text-grayTitle">{pageTitle}</h1>
          {children}
        </div>
      </div>
    </>
  );
};

export default PageLayout;
