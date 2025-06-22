"use client";

import { IListInvoiceCard } from "@/interfaces/ListInterfaces";
import React, { useState } from "react";
import CardData from "./CardData/CardData";

interface ListInvoiceCardProps {
  props: IListInvoiceCard;
}

const ListInvoiceCard = ({ props }: ListInvoiceCardProps) => {
  const tabHead = [
    "Descrição",
    "Produto",
    "Item NF",
    "Unidade",
    "Quantidade",
    "Valor unitário",
    "Valor total",
  ];

  const [details, setDetails] = useState<boolean>(false);

  const propsArray = Object.values(props);

  const invoiceCardData = {
    noteType: "a",
    complementType: "b",
    number: "c",
    series: "d",
    emissionDate: "2020-12-12",
    supplier: "f",
    docSpecify: "g",
    ufOrigin: "h",
    propSupplier: "i",
  };

  return (
    <div className="flex gap-5 items-center text-grayText relative">
      <div className="h-full w-10">
        <input className="rounded-sm absolute top-14" type="checkbox" />
      </div>

      <div className="w-full">
        <div
          onClick={() => setDetails(!details)}
          className="rounded-2xl shadow-lg w-full mb-4 cursor-pointer dark:text-white dark:border dark:border-gray-700/20"
        >
          <ul className="bg-white dark:bg-gray-800 py-4 px-5 flex rounded-t-2xl gap-2">
            {tabHead &&
              tabHead.map((item, index) => (
                <li
                  key={index}
                  className={`${
                    index <= 1 ? "basis-1/5" : "basis-1/6"
                  } whitespace-nowrap text-ellipsis overflow-hidden`}
                >
                  {item}
                </li>
              ))}
          </ul>
          <ul className="py-4 px-5 flex gap-2">
            {props &&
              propsArray.map((item, index) => (
                <li
                  key={index}
                  className={`${
                    index <= 1 ? "basis-1/5" : "basis-1/6"
                  } whitespace-nowrap text-ellipsis overflow-hidden`}
                >
                  {item}
                </li>
              ))}
          </ul>
        </div>

        {details && <CardData props={invoiceCardData} />}
      </div>
    </div>
  );
};

export default ListInvoiceCard;
