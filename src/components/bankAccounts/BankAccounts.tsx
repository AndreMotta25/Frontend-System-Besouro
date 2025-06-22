"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const BankAccounts = () => {
  const [isVisible, setIsVisible] = useState(true);

  const contasBancarias = [
    {
      nameConta: "Caixa Econômica Federal",
      saldoConta: 1500,
    },
    {
      nameConta: "Banco do Brasil",
      saldoConta: 7500,
    },
    {
      nameConta: "Itaú",
      saldoConta: 22000,
    },
    {
      nameConta: "Santander",
      saldoConta: 18000,
    },
    {
      nameConta: "Bradesco",
      saldoConta: 5000,
    },
    {
      nameConta: "Nubank",
      saldoConta: 3000,
    },
    {
      nameConta: "Banco Inter",
      saldoConta: 12000,
    },
    {
      nameConta: "Banrisul",
      saldoConta: 8000,
    },
    {
      nameConta: "Safra",
      saldoConta: 25000,
    },
    {
      nameConta: "Banco Original",
      saldoConta: 9000,
    },
  ];


  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white w-96 h-4/5 right-10 rounded-xl flex flex-col shadow-md pb-5">
      <div className="w-full text-orangeSupport flex py-3 h-96 justify-center rounded-xl items-center shadow-md">
        <span className="font-semibold select-none">Contas Bancárias</span>
      </div>

      <div className="w-full h-full pt-9 px-5 max-h-full ">
        <div className="relative w-full h-3/4">
          {/* Saldo Total */}
          <div className="flex w-full text-gray-500 flex-row justify-between items-center">
            <div className="flex flex-col select-none">
              <span className={`font-semibold ${!isVisible && "blur-sm"}`}>
                Saldo: {isVisible ? "R$ 30.000,00" : "R$ XX.XXX,XX"}
              </span>
              <span className="text-xs">15/08/2024 a 25/08/2024</span>
            </div>
            {isVisible ? (
              <Eye
                className="cursor-pointer"
                onClick={() => setIsVisible(false)}
              />
            ) : (
              <EyeOff
                className="cursor-pointer"
                onClick={() => setIsVisible(true)}
              />
            )}
          </div>

          <div className="w-full pt-8 flex flex-col gap-7 max-h-[83%] overflow-auto">
            {contasBancarias.map((conta, index) => (
              <div key={index} className={`flex w-full text-gray-500 flex-row justify-between items-center ${!isVisible && "blur-sm"}`}>
                <div>
                  <span className="select-none">{conta.nameConta}</span>
                </div>
                <div className="flex flex-col select-none justify-center items-center">
                  <span className={`font-semibold text-sm"}`}>Saldo</span>
                  <span>
                    {isVisible ? `R$ ${conta.saldoConta.toFixed(2)}` : "R$ XX.XXX,XX"}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
        {/* <a href="/sectors/finance/payments/newAccount"> */}
        <button className="rounded-xl  dark:border dark:border-gray-700/15  shadow-md p-2 cursor-pointer hover:-translate-y-1 ease-in duration-75">
          <label className="text-sm text-orangeSupport cursor-pointer">
            Adcionar Nova Conta
          </label>
        </button>
        {/* </a> */}
      </div>
    </div>
  );
};
export default BankAccounts;
