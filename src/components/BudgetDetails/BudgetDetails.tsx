import { IBudgetProjectDetails } from "@/interfaces/ProjectsInterface";
import React from "react";

interface BudgetDetailsProps {
  inputs: { label: string; text: string }[];
  chartData: IBudgetProjectDetails;
}

const BudgetDetails = ({ inputs, chartData }: BudgetDetailsProps) => {
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-2 gap-2 text-grayText dark:text-white">
        {inputs.map((item, index) => (
          <div key={index} className="flex flex-col gap-1 ">
            <span className="">{item.label}</span>
            <div className="rounded-xl shadow-md border boder-gray-500 py-2 px-4 dark:bg-bgDefaultDark dark:border-none">
              {item.text}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-5 text-grayText dark:text-white">
        <div className="flex justify-between w-full text-orangeSupport">
          <span>Valores gastos por mês</span>
          <span>2024</span>
        </div>
        <div className="grid grid-cols-4 grid-rows-3 gap-2">
          {chartData?.monthValues?.map((item: any, index: number) => (
            <div
              key={index}
              className="flex flex-col gap-2 border rounded-xl shadow-md h-20 p-2 justify-center dark:bg-bgDefaultDark dark:border-none"
            >
              <span>{item.month.slice(0, 3)}</span>
              <span className="text-right">{item.value}</span>
            </div>
          ))}
        </div>
        <div className="text-orangeSupport w-full text-right">
          Total R$
          {chartData?.totalAmount.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
          })}
        </div>
      </div>
    </>
  );
};

export default BudgetDetails;
