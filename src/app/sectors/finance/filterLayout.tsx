"use client";

import NavBar from "@/components/NavBar/NavBar";
import { SideMenu } from "@/components/SideMenu/SideMenu";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Home } from "@/icons/Home";
import Data from "@/icons/Data";
import Chats from "@/icons/Chats";
import Calendar from "@/icons/Calendar";
import ReceiptIcon from "@/icons/ReceiptIcon";
import { Search, SearchX, Landmark } from "lucide-react";
import DropDownEllipse from "@/components/DropDownEllipse/DropDownEllipse";
import FormViewModal from "@/components/Modals/finance/FormViewModal";
import { useRouter } from "next/navigation";

interface FilterLayoutProps {
  subtitle?: string;
  option: "payable" | "receivable";
  setOption: Dispatch<SetStateAction<"payable" | "receivable">>;
  children: React.ReactNode;
}

const FilterLayout: React.FC<FilterLayoutProps> = ({
  children,
  subtitle,
  option,
  setOption,
}) => {
  const [sideMeuOpen, setSideMenuOpen] = useState(true);
  const [isSearch, setIsSearch] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const navigate = useRouter();

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
      SubMenus: [
        {
          sector: "string",
          route: "string",
        },
        { sector: "string", route: "string" },
      ],
    },
    {
      icon: ReceiptIcon,
      sector: "Contas a Pagar",
      route: "/sectors/finance/payments",
    },
    {
      icon: Landmark,
      sector: "Mov bancarias",
      route: "/sectors/finance/bankTransitions",
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
    setSideMenuOpen(!sideMeuOpen);
  };

  return (
    <>
      <FormViewModal
        isOpen={isViewModalOpen}
        mode="create"
        onClose={() => setIsViewModalOpen(false)}
      />

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
          <div className="w-full flex flex-row justify-between items-center">
            <div className="flex gap-4">
              <label
                className={`${
                  option == "payable" ? "text-orangeSupport" : "text-grayText"
                } font-bold text-xl transition-colors cursor-pointer`}
                onClick={() => setOption("payable")}
              >
                Contas a pagar
              </label>

              <label
                className={`${
                  option == "receivable"
                    ? "text-orangeSupport"
                    : "text-grayText"
                } font-bold text-xl transition-colors cursor-pointer`}
                onClick={() => setOption("receivable")}
              >
                Contas a receber
              </label>
            </div>
            {subtitle && (
              <>
                <label className="text-grayText ">{subtitle}</label>
              </>
            )}
            <div className="flex flex-row px-6 py-2 bg-white dark:bg-gray-800 text-orangeSupport items-center divide-x-2 justify-center gap-3 rounded-2xl">
              {isSearch ? (
                <>
                  <input
                    className="w-full text-sm text-gray-900 border-none no-focus rounded-3xl dark:bg-gray-800 dark:text-white"
                    type="text"
                  />
                  <SearchX
                    onClick={() => setIsSearch(!isSearch)}
                    className="pl-1 size-8 text-orangeSupport cursor-pointer"
                  />
                </>
              ) : (
                <>
                  <label
                    onClick={() => {
                      setIsViewModalOpen(true);
                    }}
                    className="cursor-pointer select-none hover:scale-105 transition-all duration-200"
                  >
                    Incluir Titulo
                  </label>

                  <label
                    onClick={() => {
                      navigate.push(
                        "/sectors/finance/payments/paymentReceipts"
                      );
                    }}
                    className="cursor-pointer pl-3 select-none"
                  >
                    Comprovantes de pagamento
                  </label>

                  <Search
                    onClick={() => setIsSearch(!isSearch)}
                    className="pl-1 size-6 text-orangeSupport cursor-pointer"
                  />
                </>
              )}
            </div>
            <DropDownEllipse tooltipSide="left" />
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default FilterLayout;
