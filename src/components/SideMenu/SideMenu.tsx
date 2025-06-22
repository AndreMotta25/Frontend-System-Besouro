"use-client";

import { SideMenuButton } from "./SideMenuButtons";
import HideSideMenuButton from "./HideSideMenuButton";
import React, { useState } from "react";
import { SubMenuButtons } from "./SubMenuButtons";

interface SubMenuItem {
  sector: string;
  route: string;
}

interface MenuItem {
  icon: React.ElementType;
  sector: string;
  route: string;
  SubMenus?: SubMenuItem[];
}

interface SideMenuProps {
  isOpen: boolean;
  menuItems: MenuItem[];
  changeMenu: () => void;
}

export const SideMenu: React.FC<SideMenuProps> = ({
  isOpen,
  menuItems,
  changeMenu,
}) => {
  return (
    <div className="md:fixed md:block p-2.5 border-0.5 border-bettleBlue border-w-full rounded-[20px] flex-col w-fit top-1/2 transform -translate-y-1/2">
      {menuItems.map((menu, index) =>
        !menu.SubMenus ? (
          <SideMenuButton
            isOpen={isOpen}
            key={index}
            icon={menu.icon}
            sector={menu.sector}
            route={menu.route}
          />
        ) : (
          <SubMenuButtons
            key={index}
            MenuIsOpen={isOpen}
            sector={menu.sector}
            icon={menu.icon}
            subMenus={menu.SubMenus}
          />
        )
      )}
      <HideSideMenuButton hideMenuClick={changeMenu} />
    </div>
  );
};
