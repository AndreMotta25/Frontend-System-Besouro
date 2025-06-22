"use client";

import React, { useState } from "react";
import { Download, Filter } from "lucide-react";
import ListCard from "@/components/ListCard/ListCard";
import { ShadDropDown } from "@/components/ShadDropDown/ShadDropDown";
import FinanceLayout from "../../financeLayout";
import PaymentReceiptsInfosModal from "@/components/Modals/finance/PaymentReceiptsInfosModal";
import FilterModal from "@/components/Modals/FilterModal";

const accountsData = {
  accountsTitles: [
    {
      cnpj: "09582058103958",
      receipt_number: "001",
      company_name: "Instituto Besouro",
      nature: "AB",
      value: "R$100,00",
      emission_date: "15/11/2024",
    },
    {
      cnpj: "09582058103958",
      receipt_number: "002",
      company_name: "Instituto Besouro",
      nature: "AB",
      value: "R$150,00",
      emission_date: "15/11/2024",
    },
    {
      cnpj: "09582058103958",
      receipt_number: "003",
      company_name: "Instituto Besouro",
      nature: "AB",
      value: "R$120,00",
      emission_date: "15/11/2024",
    },
    {
      cnpj: "09582058103958",
      receipt_number: "004",
      company_name: "Instituto Besouro",
      nature: "AB",
      value: "R$180,00",
      emission_date: "15/11/2024",
    },
  ],
  pagination: {
    CurrentPage: 4,
    NextOffset: 8,
    qtdItensTotal: 100,
  },
};

const PaymentReceipts = () => {
  return (
    <>
      <FinanceLayout>
        <PaymentReceiptsArea />
      </FinanceLayout>
    </>
  );
};

const PaymentReceiptsArea = () => {
  const dropDownValues = ["Adicionar recibo manual", "Buscar arquivo"];

  const [receiptModal, setReceiptModal] = useState(false);
  const [filterModal, setFilterModal] = useState(false);
  const [infosModal, setInfosModal] = useState();

  const controlModal = (modal: "receipts" | "filter") => {
    switch (modal) {
      case "receipts":
        setReceiptModal(!receiptModal);
        break;
      case "filter":
        setFilterModal(!filterModal);
        break;
    }
  };

  const filters = [
    {
      label: "Data recibo",
      options: [
        { label: "Mais recentes", value: "recent" },
        { label: "Mais antigos", value: "old" },
      ],
    },
    {
      label: "Número recibo",
      options: [
        { label: "Valor crescente", value: "asc" },
        { label: "Valor decrescente", value: "desc" },
      ],
    },
  ];

  return (
    <>
      {/* Modal de comprovantes */}
      <PaymentReceiptsInfosModal
        isOpen={receiptModal}
        props={infosModal}
        controlModal={() => controlModal("receipts")}
      />
      {/* Modal de filtragem de dados */}
      <FilterModal
        isOpen={filterModal}
        onOpenChange={() => controlModal("filter")}
        title="Filtros de recibos de pagamento"
        filters={filters}
      />

      <div className="flex flex-col gap-5">
        <div className="flex w-full items-center justify-between py-5">
          <h1 className="text-orangeSupport text-2xl font-bold">Recibos</h1>

          <div className="flex gap-4 items-center">
            <Filter
              onClick={() => controlModal("filter")}
              className="text-orangeSupport hover:scale-125 transition-all"
            />

            <ShadDropDown
              buttonText="Adicionar recibo"
              className="bg-white p-4 rounded-xl shadow-lg text-orangeSupport flex gap-2 dark:bg-gray-700"
              values={dropDownValues}
              buttonIcon={<Download className="rotate-180" />}
              actions={[]}
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 mb-5">
          <ListCard
            tabHead={[
              "CNPJ",
              "N° do recibo",
              "Nome da empresa",
              "Natureza",
              "Valor",
              "Data Emissão",
            ]}
            tabContent={accountsData.accountsTitles}
            pagination={accountsData.pagination}
            onModalChange={() => controlModal("receipts")}
            setInfosTabCard={setInfosModal}
          />
        </div>
      </div>
    </>
  );
};

export default PaymentReceipts;
