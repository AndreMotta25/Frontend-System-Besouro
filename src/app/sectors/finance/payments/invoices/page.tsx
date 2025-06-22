"use client";

import React, { useState } from "react";
import FinanceLayout from "../../financeLayout";
import ListInvoiceCard from "@/components/ListInvoiceCard/ListInvoiceCard";
import { Filter, TicketX } from "lucide-react";
import AddInvoiceModal from "@/components/Modals/finance/AddInvoiceModal";
import FilterModal from "@/components/Modals/FilterModal";

const invoiceData: any[] = [
  {
    description: "Descrição do produto",
    product: "Produto Exemplo",
    invoiceItem: "00123",
    unit: "UN",
    quantity: "10",
    unitPrice: "5.00",
    totalAmount: "50.00",
  },
  {
    description: "Descrição do produto",
    product: "Produto Exemplo",
    invoiceItem: "Item NF 123",
    unit: "Unidade",
    quantity: "10",
    unitPrice: "5.00",
    totalAmount: "50.00",
  },
  {
    description: "Descrição do produto",
    product: "Produto Exemplo",
    invoiceItem: "Item NF 123",
    unit: "Unidade",
    quantity: "10",
    unitPrice: "5.00",
    totalAmount: "50.00",
  },
];

const Invoices = () => {
  return (
    <>
      <FinanceLayout>
        <InvoicesArea />
      </FinanceLayout>
    </>
  );
};

const InvoicesArea = () => {
  const [invoiceModal, setInvoiceModal] = useState<boolean>(false);
  const [filterModal, setFilterModal] = useState<boolean>(false);

  const controlModal = (modal: "invoice" | "filter") => {
    switch (modal) {
      case "invoice":
        setInvoiceModal(!invoiceModal);
        break;
      case "filter":
        setFilterModal(!filterModal);
        break;
    }
  };

  const filters = [
    {
      label: "Data nota fiscal",
      options: [
        { label: "Mais recentes", value: "recent" },
        { label: "Mais antigos", value: "old" },
      ],
    },
    {
      label: "Valor nota fiscal",
      options: [
        { label: "Valor crescente", value: "asc" },
        { label: "Valor decrescente", value: "desc" },
      ],
    },
  ];

  return (
    <>
      {/* Modal de adicionar nova NF */}
      <AddInvoiceModal
        controlModal={() => controlModal("invoice")}
        isOpen={invoiceModal}
      />
      {/* Modal de filtragem de dados */}
      <FilterModal
        isOpen={filterModal}
        onOpenChange={() => controlModal("filter")}
        title="Filtros de notas fiscais"
        filters={filters}
      />

      <div className="flex flex-col gap-5">
        <div className="flex w-full items-center justify-between py-5">
          <h1 className="text-orangeSupport text-xl font-bold">
            Documento de entrada
          </h1>

          <div className="flex gap-4 items-center">
            <Filter
              onClick={() => controlModal("filter")}
              className="text-orangeSupport hover:scale-125 transition-all"
            />
            <button
              type="button"
              className="bg-white py-4 px-3 rounded-xl shadow-xl text-orangeSupport dark:bg-gray-800"
              onClick={() => controlModal("invoice")}
            >
              Adicionar nova NF
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-5 mb-5">
          {invoiceData.length > 0 ? (
            invoiceData.map((item, index) => (
              <div key={index}>
                <ListInvoiceCard props={item} />
              </div>
            ))
          ) : (
            <div className="flex flex-col justify-center items-center h-[40vh]">
              <TicketX className="h-20 w-20 text-red-700" />
              <span>Nenhuma nota fiscal encontrada!</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Invoices;
