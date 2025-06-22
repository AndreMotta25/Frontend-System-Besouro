"use client";

import NavBar from "@/components/NavBar/NavBar";
import { SideMenu } from "@/components/SideMenu/SideMenu";
import React, { useState } from "react";
import { Home } from "@/icons/Home";
import Data from "@/icons/Data";
import Chats from "@/icons/Chats";
import Calendar from "@/icons/Calendar";
import ReceiptIcon from "@/icons/ReceiptIcon";
import DropDownEllipse from "@/components/DropDownEllipse/DropDownEllipse";
import { Landmark  } from 'lucide-react';

interface FinanceLayoutProps {
  children: React.ReactNode;
}

const FinanceLayout: React.FC<FinanceLayoutProps> = ({ children }) => {
  const [sideMenuOpen, setSideMenuOpen] = useState(true);

  const menuData = [
    {
      icon: Home,
      sector: "Home",
      route: "/sectors/finance/",
    },
    {
      icon: Data,
      sector: "Financeiro",
      route: "/sectors/finance/",
      // route: "/sectors/finance/payments",
    },
    {
      icon: ReceiptIcon,
      sector: "Contas a Pagar",
      route: "/sectors/finance/payments",
    },
    {
      icon: Landmark ,
      sector: "Mov bancarias",
      route: "/sectors/finance/bankTransitions"
    },
    {
      icon: Chats,
      sector: "Chats",
      route: "/sectors/finance/chats",
    },
    {
      icon: Calendar,
      sector: "Agenda",
      route: "/history",
    },
  ];

  const handleSideMenu = () => {
    setSideMenuOpen(!sideMenuOpen);
  };

  return (
    <>
      <NavBar colorNav="bgDefault" colorNavDark="bgDefaultDark" />
      <div className="px-5 pt-14">
        <SideMenu
          isOpen={sideMenuOpen}
          menuItems={menuData}
          changeMenu={handleSideMenu}
        />
        <div
          className={`w-full ${sideMenuOpen ? "md:pl-72" : "md:pl-28"} pt-20`}
        >
          <DropDownEllipse tooltipSide="right" />
          {children}
        </div>
      </div>
    </>
  );
};

export default FinanceLayout;
