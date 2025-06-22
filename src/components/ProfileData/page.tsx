"use client";

import { CircleUserRound } from "lucide-react";
import React, { useState } from "react";
import { HoverCardLayout } from "../HoverCardLayout/HoverCardLayout";
import { IUser } from "@/interfaces/UserInterfaces";

interface menuItems {
  value: SessionType;
  label: string;
}

type SessionType = "general-data" | "settings" | "support" | "team";

interface ProfileDataProps {
  user: IUser;
  menuItems: menuItems[];
  session: SessionType;
  toggleSession: (value: SessionType) => void;
  controlModal: (value: "logout" | "delete") => void;
}

const ProfileData = ({
  user,
  menuItems,
  session,
  toggleSession,
  controlModal,
}: ProfileDataProps) => {
  const [openHoverCard, setOpenHoverCard] = useState<string | null>(null);

  const onOpenChange = (value: string, isOpen: boolean) => {
    setOpenHoverCard(isOpen ? value : null);
  };

  return (
    <div className="h-full rounded-2xl shadow-xl w-44 bg-white dark:bg-gray-800 flex flex-col justify-between text-grayText dark:text-white">
      <div className="flex flex-col p-4 gap-2">
        <div className="flex justify-center w-full">
          <CircleUserRound className="w-12 h-12" />
        </div>

        <div className="flex flex-col text-center">
          <HoverCardLayout
            trigger={
              <span className="truncate cursor-pointer">
                {user?.name} {user?.surname}
              </span>
            }
            open={openHoverCard === "fullName"}
            onOpenChange={(isOpen) => onOpenChange("fullName", isOpen)}
          >
            {user?.name} {user?.surname}
          </HoverCardLayout>

          <HoverCardLayout
            trigger={
              <span className="truncate cursor-pointer">{user?.email}</span>
            }
            open={openHoverCard === "email"}
            onOpenChange={(isOpen) => onOpenChange("email", isOpen)}
          >
            {user?.email}
          </HoverCardLayout>
        </div>
      </div>

      <div className="h-[1px] bg-grayTitle/50 dark:bg-white w-full" />

      <div className="p-4 h-1/2 overflow-auto">
        <ul className="flex flex-col gap-4">
          {menuItems
            .filter((item) => user.isSupervisor || item.value !== "team")
            .map((item, index) => (
              <>
                <li
                  key={index}
                  className="relative group cursor-pointer inline-block"
                  onClick={() => toggleSession(item.value)}
                >
                  {item.label}
                  <span
                    className={`absolute left-0 bottom-[-2px] h-[2px] bg-bettleOrange transition-all duration-300 group-hover:w-full ${
                      session === item.value ? "w-full" : "w-0"
                    }`}
                  />
                </li>
              </>
            ))}
        </ul>
      </div>

      <div className="h-[1px] bg-grayTitle/50 dark:bg-white w-full" />

      <div className="p-4">
        <ul className="flex flex-col text-red-700 text-center">
          <li className="cursor-pointer" onClick={() => controlModal("logout")}>
            Finalizar sessão
          </li>
          <li className="cursor-pointer" onClick={() => controlModal("delete")}>
            Excluir conta
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileData;
