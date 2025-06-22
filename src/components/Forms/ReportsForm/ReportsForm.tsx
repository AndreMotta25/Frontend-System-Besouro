import FloatLabelInput from "@/components/UI/FloatLabelInput/FloatLabelInput";
import FloatLabelSelect from "@/components/UI/FloatLabelSelect/FloatLabelSelect";
import React from "react";

interface ReportsFormArea {
  setFormData: React.Dispatch<React.SetStateAction<undefined>>;
}

const ReportsForm = ({ setFormData }: ReportsFormArea) => {
  const inputStyle = "p-4 focus:outline-none";

  const handleChange = (field: string, value: any) => {
    setFormData((prevData: any) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <>
      <div className="flex justify-between px-12 py-6 bg-white rounded-2xl gap-4">
        <div className="w-1/2">
          <div className="grid grid-cols-2 gap-4">
            <FloatLabelInput
              title="De Número"
              idInput="ofNumber"
              type="text"
              width=""
              className={inputStyle}
              onChange={(e) => handleChange("ofNumber", e.target.value)}
            />

            <FloatLabelInput
              title="Até Número"
              idInput="upToNumber"
              type="text"
              width=""
              className={inputStyle}
              onChange={(e) => handleChange("upToNumber", e.target.value)}
            />

            <FloatLabelInput
              title="De Prefixo"
              idInput="ofPrefix"
              type="text"
              width=""
              className={inputStyle}
              onChange={(e) => handleChange("ofPrefix", e.target.value)}
            />

            <FloatLabelInput
              title="Até Prefixo"
              idInput="upToPrefix"
              type="text"
              width=""
              className={inputStyle}
              onChange={(e) => handleChange("upToPrefix", e.target.value)}
            />

            <FloatLabelInput
              title="De Natureza"
              idInput="ofNature"
              type="text"
              width=""
              className={inputStyle}
              onChange={(e) => handleChange("ofNature", e.target.value)}
            />

            <FloatLabelInput
              title="Até a Natureza"
              idInput="upToNature"
              type="text"
              width=""
              className={inputStyle}
              onChange={(e) => handleChange("upToNature", e.target.value)}
            />

            <FloatLabelInput
              title="De Vencimento"
              idInput="ofMaturity"
              type="date"
              width=""
              className={inputStyle}
              onChange={(e) => handleChange("ofMaturity", e.target.value)}
            />

            <FloatLabelInput
              title="Até o Vencimento"
              idInput="upToMaturity"
              type="date"
              width=""
              className={inputStyle}
              onChange={(e) => handleChange("upToMaturity", e.target.value)}
            />

            <FloatLabelInput
              title="Do Banco"
              idInput="ofBank"
              type="text"
              width=""
              className={inputStyle}
              onChange={(e) => handleChange("ofBank", e.target.value)}
            />

            <FloatLabelInput
              title="Até o Banco"
              idInput="upToBank"
              type="text"
              width=""
              className={inputStyle}
              onChange={(e) => handleChange("upToBank", e.target.value)}
            />

            <FloatLabelInput
              title="De Fornecedor"
              idInput="ofSupplier"
              type="text"
              width=""
              className={inputStyle}
              onChange={(e) => handleChange("ofSupplier", e.target.value)}
            />

            <FloatLabelInput
              title="Até o Fornecedor"
              idInput="upToSupplier"
              type="text"
              width=""
              className={inputStyle}
              onChange={(e) => handleChange("upToSupplier", e.target.value)}
            />
          </div>
        </div>
        <div className="w-[1px] min-h-full bg-grayTitle/20" />
        <div className="w-1/2 flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <FloatLabelInput
              title="Da Emissão"
              idInput="ofEmission"
              type="date"
              width="w-full"
              className={inputStyle}
              onChange={(e) => handleChange("ofEmission", e.target.value)}
            />

            <FloatLabelInput
              title="Até a Emissão"
              idInput="upToEmission"
              type="date"
              width="w-full"
              className={inputStyle}
              onChange={(e) => handleChange("upToEmission", e.target.value)}
            />

            <FloatLabelSelect
              title="Qual a Moeda"
              idSelect="currency"
              options={[]}
              onChange={(value) => handleChange("currency", value)}
              width="w-full"
              bgColor="bg-white"
            />

            <FloatLabelSelect
              title="Imprime provisórios"
              idSelect="printProvisionals"
              options={[]}
              onChange={(value) => handleChange("printProvisionals", value)}
              width="w-full"
              bgColor="bg-white"
            />

            <FloatLabelInput
              title="Da Data Contábil"
              idInput="ofAccountingDate"
              type="date"
              width="w-full"
              className={inputStyle}
              onChange={(e) => handleChange("ofAccountingDate", e.target.value)}
            />

            <FloatLabelInput
              title="Até a Data Contábil"
              idInput="upToAccountingDate"
              type="date"
              width="w-full"
              className={inputStyle}
              onChange={(e) =>
                handleChange("upToAccountingDate", e.target.value)
              }
            />

            <FloatLabelSelect
              title="Tipo de Relatório"
              idSelect="reportType"
              options={[]}
              onChange={(value) => handleChange("reportType", value)}
              width="w-full"
              bgColor="bg-white"
            />

            <FloatLabelSelect
              title="Compõem Saldo Rotativo"
              idSelect="revolvingBalance"
              options={[]}
              onChange={(value) => handleChange("revolvingBalance", value)}
              width="w-full"
              bgColor="bg-white"
            />

            <FloatLabelInput
              title="Da Filial"
              idInput="ofBranch"
              type="text"
              width="w-full"
              className={inputStyle}
              onChange={(e) => handleChange("ofBranch", e.target.value)}
            />

            <FloatLabelInput
              title="Até Filial"
              idInput="upToBranch"
              type="text"
              width="w-full"
              className={inputStyle}
              onChange={(e) => handleChange("upToBranch", e.target.value)}
            />

            <FloatLabelSelect
              title="Considera Adiantamento"
              idSelect="considerAdvance"
              options={[]}
              onChange={(value) => handleChange("considerAdvance", value)}
              width="w-full"
              bgColor="bg-white"
            />

            <FloatLabelSelect
              title="Imprime nome"
              idSelect="printName"
              options={[]}
              onChange={(value) => handleChange("printName", value)}
              width="w-full"
              bgColor="bg-white"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col px-12 py-6 bg-white rounded-2xl gap-4">
        <div className="grid grid-cols-4 grid-rows-2 gap-4">
          <FloatLabelInput
            title="Outras Moedas"
            idInput="otherCurrencies"
            type="text"
            width="w-full"
            className={inputStyle}
            onChange={(e) => handleChange("otherCurrencies", e.target.value)}
          />

          <FloatLabelInput
            title="Imprimir Tipos"
            idInput="printTypes"
            type="text"
            width="w-full"
            className={inputStyle}
            onChange={(e) => handleChange("printTypes", e.target.value)}
          />

          <FloatLabelInput
            title="Data Base"
            idInput="baseData"
            type="date"
            width="w-full"
            className={inputStyle}
            onChange={(e) => handleChange("baseData", e.target.value)}
          />

          <FloatLabelSelect
            title="Compõe Saldos por"
            idSelect="balances"
            options={[]}
            onChange={(value) => handleChange("balances", value)}
            width="w-full"
            bgColor="bg-white"
          />

          <FloatLabelSelect
            title="Quanto a taxa"
            idSelect="taxes"
            options={[]}
            onChange={(value) => handleChange("taxes", value)}
            width="w-full"
            bgColor="bg-white"
          />

          <FloatLabelSelect
            title="Tit. Emissão Fatura"
            idSelect="issueTitle"
            options={[]}
            onChange={(value) => handleChange("issueTitle", value)}
            width="w-full"
            bgColor="bg-white"
          />

          <FloatLabelSelect
            title="Seleciona Filiais"
            idSelect="selectBranches"
            options={[]}
            onChange={(value) => handleChange("selectBranches", value)}
            width="w-full"
            bgColor="bg-white"
          />

          <FloatLabelSelect
            title="Considera Títulos Excluídos"
            idSelect="considerExcludedTitles"
            options={[]}
            onChange={(value) => handleChange("considerExcludedTitles", value)}
            width="w-full"
            bgColor="bg-white"
          />
        </div>
      </div>
    </>
  );
};

export default ReportsForm;
