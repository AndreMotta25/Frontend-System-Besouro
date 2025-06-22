import React from "react";
import ListCard from "../ListCard/ListCard";
import FormSettleModal from "../Modals/finance/FormSettleModal";
import FormViewModal from "../Modals/finance/FormViewModal";
import FilterModal from "../Modals/FilterModal";
import { Filter } from "lucide-react";

interface AccountsProps {
  isSettleFormOpen: boolean;
  isViewModalOpen: boolean;
  isFilterModalOpen: boolean;
  setIsFilterModalOpen: () => void;
  setIsSettleFormOpen: () => void;
  setIsViewModalOpen: () => void;
  accountsData: any;
}

const AccountsPayable = ({
  isSettleFormOpen,
  isViewModalOpen,
  isFilterModalOpen,
  setIsFilterModalOpen,
  setIsSettleFormOpen,
  setIsViewModalOpen,
  accountsData,
}: AccountsProps) => {
  const filters = [
    {
      label: "Data conta a pagar",
      options: [
        { label: "Mais recentes", value: "recent" },
        { label: "Mais antigos", value: "old" },
      ],
    },
  ];

  return (
    <>
      {" "}
      <FormSettleModal
        isOpen={isSettleFormOpen}
        onClose={setIsSettleFormOpen}
      />
      <FormViewModal
        isOpen={isViewModalOpen}
        mode="view"
        onClose={setIsViewModalOpen}
      />
      <FilterModal
        isOpen={isFilterModalOpen}
        onOpenChange={setIsFilterModalOpen}
        title="Filtros de contas a pagar"
        filters={filters}
      />
      <div className="animate-fadeIn">
        <Filter
          onClick={setIsFilterModalOpen}
          className="text-orangeSupport hover:scale-125 transition-all"
        />

        <ListCard
          tabHead={[
            "Filial",
            "Prefixo",
            "N Titulo",
            "Parcela",
            "Tipo",
            "Natureza",
            "Portador",
            "Fornecedor",
            "Data Emissão",
          ]}
          tabContent={accountsData.accountsTitles}
          pagination={accountsData.pagination}
          dropDownOptions={["Baixar Titulo", "Visualizar Titulo"]}
          funcOptions={[setIsSettleFormOpen, setIsViewModalOpen]}
        />
      </div>
    </>
  );
};

export default AccountsPayable;
