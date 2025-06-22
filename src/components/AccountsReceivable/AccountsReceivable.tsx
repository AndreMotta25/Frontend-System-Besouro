import React from "react";
import ListCard from "../ListCard/ListCard";
import FormViewModal from "../Modals/finance/FormViewModal";
import { Filter } from "lucide-react";
import FilterModal from "../Modals/FilterModal";

interface AccountsProps {
  isViewModalOpen: boolean;
  isFilterModalOpen: boolean;
  setIsViewModalOpen: () => void;
  setIsFilterModalOpen: () => void;
  accountsData: any;
}

const AccountsReceivable = ({
  isViewModalOpen,
  isFilterModalOpen,
  setIsViewModalOpen,
  setIsFilterModalOpen,
  accountsData,
}: AccountsProps) => {

  const filters = [
    {
      label: "Data conta a receber",
      options: [
        { label: "Mais recentes", value: "recent" },
        { label: "Mais antigos", value: "old" },
      ],
    }
  ];

  return (
    <>
      <FormViewModal
        isOpen={isViewModalOpen}
        mode="view"
        receivable={true}
        onClose={setIsViewModalOpen}
      />

      <FilterModal
        isOpen={isFilterModalOpen}
        onOpenChange={setIsFilterModalOpen}
        title="Filtros de contas a receber"
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
          dropDownOptions={["Visualizar Titulo"]}
          funcOptions={[setIsViewModalOpen]}
          receivable={true}
        />
      </div>
    </>
  );
};

export default AccountsReceivable;
