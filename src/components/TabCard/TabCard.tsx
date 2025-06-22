"use client";

import { useState } from "react";
import { Status, statusCores, statusMapping } from "../constants/status";

interface DetailsAccount {
  idCard: number;
  columnValue: Record<string, any>;
  dropDownOptions?: string[];
  funcOption?: ((newState: boolean, cardId: number) => void)[];
  receivable?: boolean;
  onModalChange?: () => void;
  setInfos?: (value: any) => void;
}

const TabCard = (props: DetailsAccount) => {
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const toggleDropdown = () => {
    if (props.dropDownOptions) {
      setOptionsOpen((prev) => !prev);
    } else {
      props.setInfos && props.setInfos(props.columnValue);
      props.onModalChange && props.onModalChange();
    }
  };

  const status = statusMapping[props.columnValue.status] || Status.BAD;

  const statusClass = statusCores[status];

  return (
    <div className="flex relative flex-row items-center gap-4">
      {props.columnValue.status && (
        <span
          className="relative flex h-3 w-3"
          onMouseEnter={() => setTooltipVisible(true)}
          onMouseLeave={() => setTooltipVisible(false)}
        >
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full ${statusClass} opacity-75`}
          />
          <span
            className={`relative inline-flex rounded-full h-3 w-3 ${statusClass}`}
          />
        </span>
      )}
      {isTooltipVisible && (
        <div
          className={`absolute z-10 border-2 ${statusClass} bg-transparent left-4 px-3 py-2 text-sm font-medium text-center rounded-lg shadow-sm tooltip`}
        >
          {props.receivable && props.columnValue.status === "Baixado"
            ? "Recebido"
            : props.columnValue.status}
        </div>
      )}
      <div
        className="bg-white dark:bg-gray-800 text-gray-500 hover:-translate-y-1 hover:bg-[#EC671A90] dark:hover:bg-[#EC671A90] hover:text-white text-sm font-bold shadow-xl flex gap-5 flex-row py-7 rounded-2xl ease-in duration-75"
        onClick={toggleDropdown}
      >
        {Object.entries(props.columnValue).map(
          ([key, value]) =>
            key !== "status" && (
              <div
                key={key}
                className="min-w-44 text-center select-none"
              >{`${value}`}</div>
            )
        )}
      </div>

      {/* Dropdown options */}
      {optionsOpen && props.dropDownOptions && (
        <div className="z-10 absolute bg-white divide-y divide-gray-100 rounded-2xl left-64 top-8 shadow w-44 dark:bg-gray-700">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            {props.dropDownOptions.map((option, index) => (
              <li key={index}>
                <label
                  onClick={() =>
                    props.funcOption?.[index]?.(true, props.idCard)
                  }
                  className="block px-4 rounded-2xl py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {option}
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TabCard;
