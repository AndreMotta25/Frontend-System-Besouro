"use client";

import { SunMoon } from "lucide-react";
import BellNotify from "../Notifications/BellNotify";
import { BesouroIcon } from "@/icons/BesouroIcon";
import { useState, useEffect } from "react";
import UserDropDown from "@/components/UserDropDown/UserDropDown";
import SearchModal from "../Modals/SearchModal";

// Foto mockada
const imageUser =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwyXeKDN29AmZgZPLS7n0Bepe8QmVappBwZCeA3XWEbWNdiDFB";

const NavBar = ({
  colorNav,
  colorNavDark,
}: {
  colorNav: string;
  colorNavDark: string;
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    savedTheme === "dark"
      ? (document.documentElement.classList.add("dark"), setIsDarkMode(true))
      : savedTheme === "light" &&
        document.documentElement.classList.remove("dark");

    !savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? (document.documentElement.classList.add("dark"), setIsDarkMode(true))
      : null;
  }, []);

  const handleColorMode = () => {
    isDarkMode
      ? (document.documentElement.classList.remove("dark"),
        localStorage.setItem("theme", "light"))
      : (document.documentElement.classList.add("dark"),
        localStorage.setItem("theme", "dark"));

    setIsDarkMode(!isDarkMode);
  };

  const isCustomColor = colorNav?.startsWith("#");

  const userData = {
    name: "Colaborador",
    email: "exemplo@exemplo.com",
    photo: imageUser,
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-10 ${
          !isCustomColor ? `bg-${colorNav} dark:bg-${colorNavDark}` : ""
        }`}
        style={{
          backgroundColor: isCustomColor ? colorNav : undefined, // usa a cor customizada
          ...(colorNavDark && !isCustomColor
            ? { backgroundColor: colorNavDark }
            : {}), // aplica a cor dark se não for custom
        }}
      >
        <div className="w-full flex flex-row items-center justify-between mx-auto px-9 pt-9 pb-4">
          <a href="/" className="flex items-center md:basis1/4 gap-2">
            <BesouroIcon className="md:w-6 md:h-12 w-4 h-10" />
            <span className="hidden md:inline-block titleNav self-center whitespace-nowrap">
              BESOURO
            </span>
          </a>

          <div className="w-full items-center md:basis-1/2 md:justify-center lg:justify-end">
            <SearchModal />

            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  items-center">
              <li>
                <BellNotify />
              </li>
              <li onClick={handleColorMode}>
                <SunMoon className="text-[#3377FF] hover:text-blue-950 cursor-pointer" />
              </li>
              <li>
                <UserDropDown props={userData} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
