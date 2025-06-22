"use client";

import AccountsPayable from "@/components/AccountsPayable/AccountsPayable";
import FilterLayout from "../../filterLayout";
import { useState } from "react";
import AccountsReceivable from "@/components/AccountsReceivable/AccountsReceivable";

const DetailsAccountToPay = () => {
  const [option, setOption] = useState<"payable" | "receivable">("payable");
  return (
    <>
      <FilterLayout option={option} setOption={setOption}>
        <DetailsAccount option={option} />
      </FilterLayout>
    </>
  );
};

const DetailsAccount = ({ option }: { option: "payable" | "receivable" }) => {
  const [isSettleFormOpen, setIsSettleFormOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const controlModal = (modal: "settle" | "view" | "filter") => {
    switch (modal) {
      case "settle":
        setIsSettleFormOpen(!isSettleFormOpen);
        break;
      case "view":
        setIsViewModalOpen(!isViewModalOpen);
        break;
      case "filter":
        setIsFilterModalOpen(!isFilterModalOpen);
        break;
    }
  };

  const accountsData = {
    accountsTitles: [
      {
        branch: "Agência A",
        prefix: "001",
        titleNumber: "123456",
        installment: "1/5",
        type: "Nota Fiscal",
        nature: "Serviço",
        bearer: "Banco X",
        supplier: "Fornecedor Y",
        issueDate: "2024-10-01",
        status: "Baixado",
      },
      {
        branch: "Agência B",
        prefix: "002",
        titleNumber: "654321",
        installment: "2/5",
        type: "Recibo",
        nature: "Produto",
        bearer: "Banco Z",
        supplier: "Fornecedor W",
        issueDate: "2024-09-15",
        status: "Baixado",
      },
      {
        branch: "Agência C",
        prefix: "003",
        titleNumber: "789012",
        installment: "3/5",
        type: "Fatura",
        nature: "Serviço",
        bearer: "Banco A",
        supplier: "Fornecedor V",
        issueDate: "2024-08-20",
        status: "Pendente",
      },
      {
        branch: "Agência D",
        prefix: "004",
        titleNumber: "345678",
        installment: "4/5",
        type: "Nota",
        nature: "Produto",
        bearer: "Banco B",
        supplier: "Fornecedor U",
        issueDate: "2024/10/05",
        status: "Proximo ao Vct",
      },
    ],
    pagination: {
      CurrentPage: 4,
      NextOffset: 8,
      qtdItensTotal: 100,
    },
  };

  const toggleSession = (option: "payable" | "receivable") => {
    switch (option) {
      case "payable":
        return (
          <AccountsPayable
            isSettleFormOpen={isSettleFormOpen}
            isViewModalOpen={isViewModalOpen}
            isFilterModalOpen={isFilterModalOpen}
            setIsSettleFormOpen={() => controlModal("settle")}
            setIsViewModalOpen={() => controlModal("view")}
            setIsFilterModalOpen={() => controlModal("filter")}
            accountsData={accountsData}
          />
        );

      case "receivable":
        return (
          <AccountsReceivable
            isViewModalOpen={isViewModalOpen}
            isFilterModalOpen={isFilterModalOpen}
            setIsViewModalOpen={() => controlModal("view")}
            setIsFilterModalOpen={() => controlModal("filter")}
            accountsData={accountsData}
          />
        );

      default:
        return;
    }
  };

  return <div className="pt-4">{toggleSession(option)}</div>;
};

export default DetailsAccountToPay;
