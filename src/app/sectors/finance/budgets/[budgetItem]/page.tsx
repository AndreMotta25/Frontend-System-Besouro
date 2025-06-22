"use client";

import React, { useState } from "react";
import { chartData, projectsBudgets } from "@/components/constants/data";
import FinanceLayout from "../../financeLayout";
import { IProjectCard } from "@/interfaces/ProjectsInterface";
import { CornerDownLeft, X } from "lucide-react";
import MultipleRadialBars from "@/components/charts/MultipleRadialBars";
import BudgetDetails from "@/components/BudgetDetails/BudgetDetails";

const BudgetsPageId = ({ params }: any) => {
  const { budgetItem } = params;

  const budget = projectsBudgets.find((p) => p.projectId === budgetItem);

  if (!budget) {
    return <>Nenhum orçamento encontrado!</>;
  }

  return (
    <>
      <FinanceLayout>
        <BudgetsPageIdArea budget={budget} />
      </FinanceLayout>
    </>
  );
};

interface BudgetsPageIdProps {
  budget?: IProjectCard;
}

const BudgetsPageIdArea = ({ budget }: BudgetsPageIdProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [searchValues, setSearchValues] = useState<string[]>([]);
  const [removeIndex, setRemoveIndex] = useState<number | null>(null);

  const handleEnterKey = (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  };

  const handleSearch = () => {
    setInputValue("");

    if (inputValue.trim() === "") {
      return;
    }
    setSearchValues((prevData) => [...prevData, inputValue]);
  };

  const handleRemoveValue = (index: number) => {
    setRemoveIndex(index);
    setTimeout(() => {
      setSearchValues((prevData) => prevData.filter((_, i) => i !== index));
      setRemoveIndex(null);
    }, 200);
  };

  const inputs = [
    { label: "Fornecedor MT 1", text: "Lorem Ipsum" },
    { label: "Fornecedor MT 2", text: "Lorem Ipsum" },
    { label: "Total", text: "R$0,00" },
    { label: "Total", text: "R$0,00" },
    { label: "Total 1 + 2", text: "R$0,00" },
    { label: "Contrato MT1", text: "Ok" },
  ];

  return (
    <div className="flex flex-col justify-center py-5">
      <h1 className="text-2xl text-orangeSupport font-bold">
        Orçamento {budget?.name}
      </h1>
      <div className="py-8 flex justify-center items-center flex-col gap-4">
        <div className="relative flex bg-white dark:bg-gray-800 w-2/3 h-16 px-5 rounded-2xl border-0 shadow-md justify-between items-center gap-4">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleEnterKey}
            className=" bg-transparent focus:outline-none w-full required"
            placeholder="Digite a palavra chave para selecionar a vizualização do orçamento. Ex: Kit aluno"
          />

          <button>
            <CornerDownLeft
              onClick={handleSearch}
              className="text-orangeSupport"
            />
          </button>
        </div>

        <div className="flex max-w-full items-center flex-wrap gap-4 ">
          {searchValues.length > 0 &&
            searchValues.map((item, index) => (
              <div
                key={index}
                className={`w-40 flex bg-orangeSupport rounded-lg text-white items-center justify-between px-3 gap-2 h-10 shadow-md 
                    ${
                      removeIndex === index
                        ? "animate-fadeOut"
                        : "animate-fadeIn"
                    }`}
              >
                <span className="truncate">{item}</span>
                <X
                  onClick={(e) => handleRemoveValue(index)}
                  className="text-white w-6 h-6"
                />
              </div>
            ))}
        </div>
      </div>
      <div className="flex gap-5 min-h-80">
        <div className="shadow-md rounded-2xl bg-white dark:bg-gray-800 h-full w-1/2 p-4 relative">
          <h2 className="text-orangeSupport">
            Orçamento Geral
            {searchValues.length > 0
              ? searchValues.map((item, index) => (
                  <span key={index}>
                    {` ${item}`}
                    {index === searchValues.length - 1 ? null : ","}
                  </span>
                ))
              : budget?.name}
          </h2>
          <div>
            <MultipleRadialBars
              props={chartData}
              color={budget ? budget.accentColor : ""}
            />
          </div>
        </div>
        <div className="shadow-md rounded-2xl bg-white dark:bg-gray-800 h-full w-1/2 p-4 flex flex-col gap-5">
          <h2 className="text-orangeSupport">
            Orçamento
            {searchValues.length > 0 ? (
              searchValues.map((item, index) => (
                <span key={index}>
                  {` ${item}`}
                  {index === searchValues.length - 1 ? null : ","}
                </span>
              ))
            ) : (
              <> Geral</>
            )}{" "}
            - Detalhes
          </h2>
          <BudgetDetails inputs={inputs} chartData={chartData} />
        </div>
      </div>
    </div>
  );
};

export default BudgetsPageId;
