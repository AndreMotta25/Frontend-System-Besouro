"use client";
import { SunMoon } from "lucide-react";
import { useEffect, useState } from "react";

interface CleanLayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
  subTitle?: string;
}

const CleanLayout: React.FC<CleanLayoutProps> = ({
  children,
  pageTitle,
  subTitle,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleColorMode = () => {
    isDarkMode
      ? (document.documentElement.classList.remove("dark"),
        localStorage.setItem("theme", "light"))
      : (document.documentElement.classList.add("dark"),
        localStorage.setItem("theme", "dark"));

    setIsDarkMode(!isDarkMode);
  };

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

  return (
      <div className="px-5 py-5 md:pt-20 md:px-20 overflow-hidden md:overflow-auto min-h-full md:h-screen flex flex-col gap-5 md:gap-0">
        <div className="flex flex-row justify-between">
          <div>
            <h1 className="text-2xl font-bold text-bettleOrange">
              {pageTitle}
            </h1>
            <h2 className="text-base text-grayTitle">{subTitle}</h2>
          </div>
          <div>
            <button onClick={handleColorMode}>
              <SunMoon className="text-[#3377FF] hover:text-[#3377FF]/60 cursor-pointer" />
            </button>
          </div>
        </div>
        {children}
      </div>
  );
};

export default CleanLayout;
