"use client";

import FinanceLayout from "../financeLayout";
import ListCard from "@/components/ListCard/ListCard";
import FilterModal from "@/components/Modals/FilterModal";
import FormMovViewModal from "@/components/Modals/finance/FormMovViewModal";
import OtherOptionsModal from "@/components/Modals/finance/OtherOptionsModal";
import PayMovModal from "@/components/Modals/finance/PayMovModal";
import { Filter } from "lucide-react";
import { useState } from "react";

type CardData = {
  branch: string;
  movement_date: string;
  number: string;
  movement_value: number;
  nature: string;
  bank: string;
  agency: string;
  check_number: string;
  document: string;
  status: string;
};

const bankTransitions = () => {
  return (
    <>
      <FinanceLayout>
        <BankTransitionsArea />
      </FinanceLayout>
    </>
  );
};

const BankTransitionsArea = () => {
  const accountsData = {
    accountsTitles: [
      {
        branch: "Filial 001",
        movement_date: "2024-10-10",
        number: "12345",
        movement_value: 1800.99,
        nature: "Pagamento",
        bank: "Banco do Brasil",
        agency: "1234",
        check_number: "987654",
        document: "DOC-001",
        status: "Parcial",
      },
      {
        branch: "Filial 002",
        movement_date: "2024-10-11",
        number: "12346",
        movement_value: 2500.75,
        nature: "Recebimento",
        bank: "Caixa Econômica",
        agency: "5678",
        check_number: "987655",
        document: "DOC-002",
        status: "Baixado",
      },
      {
        branch: "Filial 003",
        movement_date: "2024-10-12",
        number: "12347",
        movement_value: 3500.0,
        nature: "Transferência",
        bank: "Itaú",
        agency: "9101",
        check_number: "987656",
        document: "DOC-003",
        status: "Proximo ao Vct",
      },
      {
        branch: "Filial 004",
        movement_date: "2024-10-13",
        number: "12348",
        movement_value: 4000.5,
        nature: "Empréstimo",
        bank: "Santander",
        agency: "1122",
        check_number: "987657",
        document: "DOC-004",
        status: "Pendente",
      },
    ],
    pagination: {
      CurrentPage: 4,
      NextOffset: 8,
      qtdItensTotal: 100,
    },
  };

  const [isOpenFormMovViewModal, setIsOpenFormMovModal] = useState(false);
  const [isOpenOtherOptionsModal, setIsOpenOtherOptionModal] = useState(false);
  const [isOpenPayMovModal, setIsOpenPayMovModal] = useState(false);
  const [isOpenFilterModal, setIsOpenFilterModal] = useState(false);

  const [selectedCardData, setSelectedCardData] = useState<CardData | null>(
    null
  );

  const handleOptionClick = (funcOption: any, cardId: number) => {
    const cardData = accountsData.accountsTitles[cardId];
    setSelectedCardData(cardData);
    funcOption(true);
  };

  const controlModal = (modal: "view" | "other" | "pay" | "filter") => {
    switch (modal) {
      case "view":
        setIsOpenFormMovModal(!isOpenFormMovViewModal);
        break;
      case "other":
        setIsOpenOtherOptionModal(!isOpenOtherOptionsModal);
        break;
      case "pay":
        setIsOpenPayMovModal(!isOpenPayMovModal);
        break;
      case "filter":
        setIsOpenFilterModal(!isOpenFilterModal);
        break;
    }
  };

  const filters = [
    {
      label: "Data Movimentação",
      options: [
        { label: "Mais recentes", value: "recent" },
        { label: "Mais antigos", value: "old" },
      ],
    },
    {
      label: "Valor Movimentação",
      options: [
        { label: "Valor crescente", value: "asc" },
        { label: "Valor decrescente", value: "desc" },
      ],
    },
  ];
  

  return (
    <>
      {isOpenFormMovViewModal && (
        <FormMovViewModal onClose={() => controlModal("view")} />
      )}
      {isOpenOtherOptionsModal && (
        <OtherOptionsModal
          onClose={() => controlModal("other")}
          cardData={selectedCardData}
        />
      )}
      {isOpenPayMovModal && <PayMovModal onClose={() => controlModal("pay")} />}

      <FilterModal
        isOpen={isOpenFilterModal}
        onOpenChange={() => controlModal("filter")}
        title="Filtros de Movimentações Bancárias"
        filters={filters}
      />

      <div className="w-full flex flex-row justify-between items-center">
        <label className="text-orangeSupport font-bold text-xl">
          Movimentações Bancarias
        </label>
        <div className="flex justify-center items-center gap-4">
          <Filter
            onClick={() => controlModal("filter")}
            className="text-orangeSupport hover:scale-125 transition-all"
          />
          <button className="p-3 bg-white dark:bg-gray-800 text-orangeSupport shadow-sm rounded-2xl cursor-pointer hover:shadow-lg ease-in duration-100">
            Baixar em Lote
          </button>
        </div>
      </div>
      <ListCard
        tabHead={[
          "Filial",
          "Data Movimentação",
          "Número",
          "Valor Movimento",
          "Natureza",
          "Banco",
          "Agencia",
          "Numero Cheque",
          "Documento",
        ]}
        tabContent={accountsData.accountsTitles}
        pagination={accountsData.pagination}
        dropDownOptions={["Pagar Mov", "Visualizar Mov", "Outras Opções"]}
        funcOptions={[
          (open, cardId) => handleOptionClick(setIsOpenPayMovModal, cardId),
          (open, cardId) => handleOptionClick(setIsOpenFormMovModal, cardId),
          (open, cardId) =>
            handleOptionClick(setIsOpenOtherOptionModal, cardId),
        ]}
      />
    </>
  );
};

export default bankTransitions;
