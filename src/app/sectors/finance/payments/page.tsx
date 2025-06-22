"use client";

import React, { useState } from "react";
import { Eye, EyeOff, Check, CalendarClock } from "lucide-react";
import BankAccounts from "@/components/bankAccounts/BankAccounts";
import CreditsCards from "@/components/CreditsCardsList/CreditsCards";
import FinanceLayout from "../financeLayout";
import MixedMultipleYExiosChart from "@/components/charts/MixedMultipleYExios";

const Payments = () => {
  return (
    <>
      <FinanceLayout>{PaymentsArea()}</FinanceLayout>
    </>
  );
};

const PaymentsArea = () => {
  const AccountsToReceived = [
    {
      banco: "Banco Inter",
      valor: 12000,
      status: "receber",
      data: "10/11/2024",
    },
    {
      banco: "Nubank",
      valor: 8000,
      status: "vencido",
      data: "15/11/2024",
    },
    {
      banco: "PagSeguro",
      valor: 3000,
      status: "recebido",
      data: "20/11/2024",
    },
    {
      banco: "Banco Original",
      valor: 5000,
      status: "receber",
      data: "30/11/2024",
    },
    {
      banco: "Banco Safra",
      valor: 4500,
      status: "vencido",
      data: "12/11/2024",
    },
    {
      banco: "C6 Bank",
      valor: 6000,
      status: "recebido",
      data: "25/11/2024",
    },
  ];

  const AccountsToPay = [
    {
      banco: "Santander",
      valor: 15000,
      status: "pagar",
      data: "05/10/2024",
    },
    {
      banco: "Itaú",
      valor: 7000,
      status: "vencido",
      data: "12/10/2024",
    },
    {
      banco: "Bradesco",
      valor: 2500,
      status: "pago",
      data: "18/10/2024",
    },
    {
      banco: "Caixa",
      valor: 4000,
      status: "pagar",
      data: "22/10/2024",
    },
    {
      banco: "Banco do Brasil",
      valor: 3500,
      status: "vencido",
      data: "30/10/2024",
    },
    {
      banco: "HSBC",
      valor: 1800,
      status: "pago",
      data: "05/10/2024",
    },
  ];

  const ReceivedPaymentByMonth = {
    "02/05/2024": {   
      recebimento: 1231,
      pagamento: 213,
      saldo: 1018,
    },
    "17/05/2024": {
      recebimento: 1550,
      pagamento: 400,
      saldo: 1150,
    },
    "01/06/2024": {
      recebimento: 900,
      pagamento: 250,
      saldo: 650,
    },
    "16/06/2024": {
      recebimento: 2200,
      pagamento: 1800,
      saldo: 400,
    },
    "01/07/2024": {
      recebimento: 1800,
      pagamento: 900,
      saldo: 900,
    },
    "16/07/2024": {
      recebimento: 2400,
      pagamento: 700,
      saldo: 1700,
    },
    "31/07/2024": {
      recebimento: 2000,
      pagamento: 1200,
      saldo: 800,
    },
  };

  const CreditCards = [
    {
      bankInstitution: "Inter",
      balanceCard: 48200.2,
      flagBank: "elo",
      numberCard: "123 456 789 654",
    },
    {
      bankInstitution: "Nubank",
      balanceCard: 32000.81,
      flagBank: "visa",
      numberCard: "987 654 321 456",
    },
    {
      bankInstitution: "Caixa economica",
      balanceCard: 84200.78,
      flagBank: "mastercard",
      numberCard: "6554 123 987 321",
    },
    {
      bankInstitution: "Safra",
      balanceCard: 84200.78,
      flagBank: "amex",
      numberCard: "951 753 862 318",
    },
    {
      bankInstitution: "Itau",
      balanceCard: 84200.78,
      flagBank: "discover",
      numberCard: "648 268 841 982",
    },
  ];

  const [filterBy, setFilterBy] = useState(["", ""]);
  const [isVisible, setIsVisible] = useState(true);
  const [AccountsSelect, setAccountsSelect] = useState("R");
  return (
    <>
      <div className="fixed flex flex-col gap-5 h-5/6 overflow-auto right-6">
        <BankAccounts />
        <CreditsCards cardsAccount={CreditCards} />
      </div>
      <div className="w-full pr-[28rem]">
        <div className="w-full ">
          <div className="w-full flex flex-row justify-between">
            <div className="w-80 flex flex-row justify-between">
              <label
                className={`select-none font-semibold text-lg ${
                  AccountsSelect == "R"
                    ? "text-orangeSupport"
                    : "text-gray-600 hover:-translate-y-1 transition ease-in duration-75"
                } cursor-pointer`}
                onClick={() => setAccountsSelect("R")}
              >
                Contas A Receber
              </label>
              <label
                className={`select-none font-semibold text-lg ${
                  AccountsSelect == "P"
                    ? "text-orangeSupport"
                    : "text-gray-600 hover:-translate-y-1 transition ease-in duration-75"
                } cursor-pointer`}
                onClick={() => setAccountsSelect("P")}
              >
                Contas A Pagar
              </label>
            </div>

            {isVisible ? (
              <Eye
                className="cursor-pointer text-gray-500"
                onClick={() => setIsVisible(false)}
              />
            ) : (
              <EyeOff
                className="cursor-pointer text-gray-500"
                onClick={() => setIsVisible(true)}
              />
            )}
          </div>

          <div className="w-full flex flex-row justify-between py-3 px-5 rounded-2xl bg-white dark:bg-gray-800 shadow-md">
            <div
              onClick={() =>
                filterBy[0] == "recebido"
                  ? setFilterBy(["", ""])
                  : setFilterBy(["recebido", "pago"])
              }
              className={`flex flex-row cursor-pointer gap-2 justify-center items-center p-1 px-3 group hover:bg-green-100 hover:-translate-y-1 ease-in duration-150 rounded-3xl ${
                filterBy[0] == "recebido" && "bg-green-100"
              }`}
            >
              <label
                className={`group-hover:text-green-600 select-none dark:text-white ease-in duration-150 ${
                  filterBy[0] == "recebido" &&
                  "text-green-600 dark:text-green-600"
                }`}
              >
                {AccountsSelect == "R" ? "Recebidos" : "Pagos"}
              </label>
              <div
                className={`w-5 h-5 flex bg-gray-500 rounded-full justify-center  items-center group-hover:bg-green-600 ease-in duration-150 ${
                  filterBy[0] == "recebido" && "bg-green-600"
                }`}
              >
                <Check className="size-3 text-bgDefault dark:text-bgDefaultDark font-bold" />
              </div>
            </div>

            <div
              onClick={() =>
                filterBy[0] == "receber"
                  ? setFilterBy(["", ""])
                  : setFilterBy(["receber", "pagar"])
              }
              className={`flex flex-row cursor-pointer gap-2 justify-center items-center p-1 px-3 group hover:bg-yellow-100 hover:-translate-y-1 ease-in duration-150 rounded-3xl ${
                filterBy[0] == "receber" && "bg-yellow-100"
              }`}
            >
              <label
                className={`group-hover:text-yellow-600 select-none dark:text-white ease-in duration-150 ${
                  filterBy[0] == "receber" &&
                  "text-yellow-600 dark:text-yellow-600"
                } `}
              >
                A {AccountsSelect == "R" ? "Receber" : "Pagar"}
              </label>
              <div
                className={`w-5 h-5 flex bg-gray-500 rounded-full justify-center items-center group-hover:bg-yellow-600 ease-in duration-150 ${
                  filterBy[0] == "receber" && "bg-yellow-600"
                }`}
              >
                <label className="text-sm text-bgDefault select-none dark:text-bgDefaultDark ease-in duration-150">
                  !
                </label>
              </div>
            </div>

            <div
              onClick={() =>
                filterBy[0] == "vencido"
                  ? setFilterBy(["", ""])
                  : setFilterBy(["vencido", "vencido"])
              }
              className={`flex flex-row cursor-pointer gap-2 justify-center items-center p-1 px-3 group hover:bg-red-100 hover:-translate-y-1 ease-in duration-150 rounded-3xl ${
                filterBy[0] == "vencido" && "bg-red-100 -translate-y-1"
              }`}
            >
              <label
                className={`group-hover:text-red-600 select-none dark:text-white ease-in duration-150 ${
                  filterBy[0] == "vencido" && "text-red-600 dark:text-red-600"
                } `}
              >
                Vencidos
              </label>
              <CalendarClock
                className={`size-5 text-gray-500 font-bold group-hover:text-red-600 ease-in duration-150 ${
                  filterBy[0] == "vencido" && "text-red-600"
                }`}
              />
            </div>
          </div>

          <div
            className={`w-full min-h-72 max-h-72 flex flex-col p-5 rounded-xl bg-white dark:bg-gray-800  mt-3 shadow-md ${
              !isVisible && "blur-sm"
            }`}
          >
            <div className="w-full min-h-56 max-h-5min-h-56 overflow-auto flex flex-col gap-5">
              {AccountsSelect == "R"
                ? AccountsToReceived.filter((account) =>
                    filterBy[0] ? account.status === filterBy[0] : true
                  ).map((account, index) => (
                    <div
                      key={index}
                      className="w-full flex flex-row justify-between items-center px-5 dark:text-white border-b-2 border-gray-300"
                    >
                      <span>{isVisible ? account.banco : "Instituição"}</span>
                      <div className="flex flex-col items-end">
                        <span className="text-sm">
                          R${isVisible ? account.valor.toFixed(2) : "XXX"}
                        </span>
                        {account.status === "recebido" ? (
                          <span className="text-xs text-green-400">{`Recebido em ${
                            isVisible ? account.data : "dd/mm/aaaa"
                          }`}</span>
                        ) : account.status === "receber" ? (
                          <span className="text-xs text-yellow-400">{`Receber em ${
                            isVisible ? account.data : "dd/mm/aaaa"
                          }`}</span>
                        ) : (
                          <span className="text-xs text-red-400">{`Vencido em ${
                            isVisible ? account.data : "dd/mm/aaaa"
                          }`}</span>
                        )}
                      </div>
                    </div>
                  ))
                : AccountsToPay.filter((account) =>
                    filterBy[1] ? account.status === filterBy[1] : true
                  ).map((account, index) => (
                    <div
                      key={index}
                      className="w-full flex flex-row justify-between items-center px-5 dark:text-white border-b-2 border-gray-300"
                    >
                      <span>{isVisible ? account.banco : "Instituição"}</span>
                      <div className="flex flex-col items-end">
                        <span className="text-sm">
                          R${isVisible ? account.valor.toFixed(2) : "XXX"}
                        </span>
                        {account.status === "pago" ? (
                          <span className="text-xs text-green-400">{`Pago em ${
                            isVisible ? account.data : "dd/mm/aaaa"
                          }`}</span>
                        ) : account.status === "pagar" ? (
                          <span className="text-xs text-yellow-400">{`Pagar em ${
                            isVisible ? account.data : "dd/mm/aaaa"
                          }`}</span>
                        ) : (
                          <span className="text-xs text-red-400">{`Vencido em ${
                            isVisible ? account.data : "dd/mm/aaaa"
                          }`}</span>
                        )}
                      </div>
                    </div>
                  ))}
            </div>
            <a href="/sectors/finance/payments/details/">
              <label className="select-none cursor-pointer text-gray-600 hover:text-orangeSupport text-xs">
                ! Ir para detalhes de Contas a Pagar e Receber
              </label>
            </a>
          </div>
        </div>

        <div className={`w-full mt-4 bg-white dark:bg-gray-800 shadow-md rounded-xl ${!isVisible && "blur-md"}`}>
          <MixedMultipleYExiosChart
            height={390}
            dashName="Fluxo de Caixa"
            labels={Object.keys(ReceivedPaymentByMonth)}
            values={[
              {
                name: "Recebimentos",
                type: "column",
                data: Object.values(ReceivedPaymentByMonth).map(
                  (item) => item.recebimento
                ),
              },
              {
                name: "Pagamentos",
                type: "column",
                data: Object.values(ReceivedPaymentByMonth).map(
                  (item) => item.pagamento
                ),
              },
              {
                name: "Saldo",
                type: "line",
                data: Object.values(ReceivedPaymentByMonth).map(
                  (item) => item.saldo
                ),
              },
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default Payments;
