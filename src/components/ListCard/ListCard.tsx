"use client";

import { ChevronFirst, ChevronLast } from "lucide-react";
import TabCard from "../TabCard/TabCard";

type Pagination = {
  CurrentPage: number;
  NextOffset: number;
  qtdItensTotal: number;
};

interface ListCardProp {
  tabHead: string[];
  tabContent: Record<string, any>[];
  pagination: Pagination;
  dropDownOptions?: string[];
  funcOptions?: ((newState: boolean, cardId: number) => void)[];
  propertyLength?: number;
  receivable?: boolean;
  onModalChange?: () => void;
  setInfosTabCard?: (item: any) => void;
}

const ListCard = (props: ListCardProp) => {
  const lengthOfProperties = Object.keys(props.tabContent[0]).length;

  return (
    <>
      <div className="w-full border-opacity-5 rounded-xl overflow-x-auto h-[63lvh] py-3">
        <div
          className={`flex gap-5 flex-row pl-4 mb-5 ${
            lengthOfProperties <= 6 ? "ml-0" : "ml-7"
          } px-3 text-orangeSupport`}
        >
          {props.tabHead.map((column, index) => (
            <div key={index} className="min-w-44 font-bold text-center">
              {column}
            </div>
          ))}
        </div>

        <div className={`flex flex-col gap-5 max-h-60 px-3`}>
          {props.tabContent.map((columnValue, index) => {
            return (
              <TabCard
                key={index}
                idCard={index}
                columnValue={columnValue}
                dropDownOptions={props.dropDownOptions}
                funcOption={props.funcOptions}
                onModalChange={props.onModalChange}
                setInfos={props.setInfosTabCard}
                receivable={props.receivable}
              />
            );
          })}
        </div>
      </div>

      <div className="flex flex-flex justify-end items-center gap-5 mt-2">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Itens{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {props.pagination.CurrentPage}
          </span>{" "}
          -
          <span className="font-semibold text-gray-900 dark:text-white">
            {props.pagination.NextOffset}{" "}
          </span>
          de{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {props.pagination.qtdItensTotal}
          </span>{" "}
        </span>
        <div className="inline-flex xs:mt-0 gap-4">
          <ChevronFirst className="text-gray-600 cursor-pointer hover:text-black dark:hover:text-white hover:-translate-x-1 ease-in duration-75" />
          <ChevronLast className="text-gray-600 cursor-pointer hover:text-black dark:hover:text-white hover:translate-x-1 ease-in duration-75" />
        </div>
      </div>
    </>
  );
};

export default ListCard;
