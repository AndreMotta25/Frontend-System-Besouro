"use client";

import FinanceLayout from "../../financeLayout";
import FloatLabelInput from "@/components/UI/FloatLabelInput/FloatLabelInput";
import FloatLabelSelect from "@/components/UI/FloatLabelSelect/FloatLabelSelect";
import MixedMultipleYExiosChart from "@/components/charts/MixedMultipleYExios";
import { NumericFormat } from "react-number-format";
import SucessMessage from "@/components/Modals/ModalMessages/SucessMessage";
import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

const NewAccount = () => {
  return (
    <>
      <FinanceLayout>
        <NewAccountArea />
      </FinanceLayout>
    </>
  );
};

const NewAccountArea = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const AccountsCards = [
    { idAccount: "002", AccountName: "RAMIREZ SAFRA", Balance: 123.81 },
    { idAccount: "003", AccountName: "VINICIUS BRADESCO", Balance: 123.81 },
    { idAccount: "004", AccountName: "DOUGLAS ITAU", Balance: 123.81 },
    { idAccount: "005", AccountName: "BRUNO SANTANDER", Balance: 123.81 },
    { idAccount: "002", AccountName: "RAMIREZ SAFRA", Balance: 123.81 },
    { idAccount: "003", AccountName: "VINICIUS BRADESCO", Balance: 123.81 },
    { idAccount: "004", AccountName: "DOUGLAS ITAU", Balance: 123.81 },
    { idAccount: "005", AccountName: "BRUNO SANTANDER", Balance: 123.81 },
  ];

  return (
    <div className="w-full h-[75lvh] gap-2 flex flex-row justify-between ">
      <SucessMessage isOpen={isModalOpen} onClose={handleCloseModal} />

      <div className="w-full h-full shadow-2xl dark:bg-gray-800 p-4 pt-8 flex flex-col gap-12 rounded-xl">
        <div className="w-full">
          <FloatLabelInput
            width="w-full"
            idInput="NameInput"
            title="Nome (insira um nome para a conta)"
            type="text"
            className="px-2.5 pb-4 pt-4"
          />
        </div>
        <div className="w-full flex gap-4">
          <FloatLabelSelect
            onChange={() => handleCloseModal()}
            idSelect="idBank"
            title="Banco"
            options={[
              { label: "ITAU", value: "teste" },
              { label: "BRADESCO", value: "te" },
              { label: "SAFRA", value: "te" },
              { label: "SANTANDER", value: "te" },
              { label: "CAIXA ECONOMICA DO BRASIL", value: "te" },
            ]}
          />

          <FloatLabelInput
            width="w-full"
            idInput="AccountInput"
            title="Conta"
            type="number"
            className="px-2.5 pb-4 pt-4"
          />
        </div>
        <div className="w-full flex gap-4">
          <FloatLabelInput
            width="w-full"
            idInput="AgencyInput"
            title="Agencia"
            type="number"
            className="px-2.5 pb-4 pt-4"
          />
          <FloatLabelInput
            width="w-full"
            idInput="AgencyDigittInput"
            title="Digito Agência"
            type="number"
            className="px-2.5 pb-4 pt-4"
          />
        </div>
        <div className="w-full flex gap-4">
          <FloatLabelInput
            width="w-2/5"
            idInput="AccountDigitInput"
            title="Digito Conta"
            type="number"
            className="px-2.5 pb-4 pt-4"
          />

          <div className="w-full relative flex flex-row rounded-2xl border-0 shadow-md dark:shadow-slate-900 appearance-none dark:text-white">
            <div className="relative w-full h-full flex flex-col px-2.5 pb-4 pt-4">
              <NumericFormat
                thousandSeparator={true}
                fixedDecimalScale={true}
                decimalScale={2}
                prefix="R$ "
                id="idBalanceAccount"
                className={`w-full block bg-transparent text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-0 peer`}
                placeholder=" "
              />
              <label
                htmlFor="idBalanceAccount"
                className="absolute select-none cursor-text text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-0 origin-[0] bg-transparent dark:bg-bgDefaultDark px-2 peer-focus:px-2 peer-focus:text-orangeSupport peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Saldo Inicial
              </label>
            </div>
            <label className="inline-flex items-center me-5 cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
            </label>
            <p className="absolute mt-14 right-0 text-xs text-gray-400">
              (Ative o botão para definir se o saldo é negativo.)
            </p>{" "}
          </div>
        </div>

        <div className="w-full flex flex-row justify-between px-2 gap-5">
          {/* Botões: voltar e Salvar */}
          <button className="rounded-xl w-full bg-gray-200 dark:bg-gray-700 shadow-2xl p-2 cursor-pointer hover:-translate-y-1 ease-in duration-75">
            <label className="text-sm text-orangeSupport cursor-pointer">
              Cancelar
            </label>
          </button>

          <button
            onClick={() => handleOpenModal()}
            className="rounded-xl w-full bg-gray-200 dark:bg-gray-700 shadow-2xl p-2 cursor-pointer hover:-translate-y-1 ease-in duration-75"
          >
            <label className="text-sm text-orangeSupport cursor-pointer">
              Salvar
            </label>
          </button>
        </div>
      </div>

      <div className="w-full h-full flex flex-col dark:shadow-slate-900 gap-2">
        <div className="shadow-2xl rounded-xl h-1/2">
          <MixedMultipleYExiosChart
            dashName="Teste"
            height={260}
            labels={["f"]}
            values={[{ name: "teste", type: "column", data: [12] }]}
          />
        </div>

        <div className="shadow-2xl h-1/2 p-2 overflow-auto">
          <div className="w-full flex flex-row justify-between ">
            <label className="select-none text-orangeSupport font-semibold">
              Contas Cadastradas
            </label>

            <Trash2 className="size-4 text-red-700 cursor-pointer hover:-translate-y-1 ease-in duration-75" />
          </div>

          {AccountsCards.map((account, index) => (
            <div
              key={index}
              className="group px-4 pt-3 hover:-translate-y-1 dark:text-white hover:text-orangeSupport ease-in duration-75"
            >
              <div className="w-full py-2 px-3 rounded-xl bg-white dark:bg-gray-800 shadow-2xl flex flew-row justify-between items-center gap-3">
                <div className="w-full flex flex-row gap-2">
                  <input
                    id={account.idAccount}
                    type="checkbox"
                    className="appearance-none h-6 w-6 border border-gray-300 rounded-sm checked:bg-red-500 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-red-300"
                  />
                  {account.AccountName}
                </div>

                <div className="flex flex-col items-center">
                  <label className="text-xs">Saldo</label>
                  <label className="text-xs">R${account.Balance}</label>
                </div>

                <div className="hidden group-hover:flex flex-row gap-2 pt-2">
                  <Pencil className="size-4 text-gray-600 cursor-pointer  hover:-translate-y-1 ease-in duration-75" />
                  <Trash2 className="size-4 text-red-700 cursor-pointer hover:-translate-y-1 ease-in duration-75" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewAccount;
