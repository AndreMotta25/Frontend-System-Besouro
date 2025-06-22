"use client";

import React, { useEffect, useState } from "react";
import { BesouroIcon } from "@/icons/BesouroIcon";
import InstituteIcon from "@/icons/InstituteIcon";
import Cookies from "js-cookie";

interface DropDownProp {
  tooltipSide: string;
}

const DropDownEllipse = (props: DropDownProp) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  const [enterprise, setEnterprise] = useState(
    Cookies.get("enterprise")
  );

  useEffect(() => {
    if (enterprise) {
      Cookies.set("enterprise", enterprise);
    }
  }, [enterprise]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative">
      <button
        data-tooltip-target={`tooltip-${props.tooltipSide}`}
        data-tooltip-placement={props.tooltipSide}
        onClick={toggleDropdown}
        onMouseEnter={() => setTooltipVisible(true)}
        onMouseLeave={() => setTooltipVisible(false)}
        className={`relative inline-flex items-center hover:scale-105 transition-all dark:bg-bgDefaultDark duration-200 rounded-xl w-36 py-1 justify-center shadow-[0_0_0_2px] mb-4 ${
          enterprise === "agencia"
            ? "text-bettleOrange border-bettleOrange shadow-bettleOrange"
            : "text-bettleInstitute border-bettleInstitute/80 shadow-bettleInstitute"
        }`}
        type="button"
      >
        {enterprise === "agencia" ? (
          <BesouroIcon className="h-5 absolute left-2" />
        ) : (
          <InstituteIcon className="h-5 w-5 absolute left-2" />
        )}
        {enterprise === "agencia" ? "Agência" : "Instituto"}
      </button>

      <div
        id={`tooltip-${props.tooltipSide}`}
        role="tooltip"
        className={`w-64 absolute z-10 ml-4 ${
          isTooltipVisible ? "inline-block" : "invisible"
        } px-3 py-2 text-sm font-medium text-grayText dark:text-white border rounded-lg shadow-md tooltip bg-white border-gray-200 dark:border-none dark:bg-gray-700 ${
          props.tooltipSide == "left" && "right-5"
        }`}
      >
        Escolher entre Agencia e Instituto
        {/* <div className="tooltip-arrow" data-popper-arrow></div> */}
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          id="dropdownDots"
          className={`absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 shadow-md${
            props.tooltipSide == "left" && "right-2"
          }`}
        >
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            onClick={() => setEnterprise("instituto")}
          >
            Instituto Besouro
          </a>
          <div className="">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              onClick={() => setEnterprise("agencia")}
            >
              Agencia Besouro
            </a>
          </div>
        </div>
        // <div id="dropdownDots" className={`"absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 ${props.tooltipSide == 'left' && 'right-3'}`}>
        //     <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Instituto Besouro</a>
        //     <div className="">
        //         <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Agencia Besouro</a>
        //     </div>
        // </div>
      )}
    </div>
  );
};

export default DropDownEllipse;
