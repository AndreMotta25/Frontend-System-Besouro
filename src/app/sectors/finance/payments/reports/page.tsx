"use client";

import React, { useState } from "react";
import FinanceLayout from "../../financeLayout";
import { CircleHelp } from "lucide-react";
import { HoverCardLayout } from "@/components/HoverCardLayout/HoverCardLayout";
import ReportsForm from "@/components/Forms/ReportsForm/ReportsForm";
import usePost from "@/hooks/api/usePost";
import toast from "react-hot-toast";
import FinanceReportModal from "@/components/Modals/finance/FinanceReportModal";

const Reports = () => {
  return (
    <>
      <FinanceLayout>
        <ReportsArea />
      </FinanceLayout>
    </>
  );
};

const ReportsArea = () => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [formData, setFormData] = useState();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { postData } = usePost();
  const styleLabel =
    "px-4 py-1 rounded-3xl hover:bg-orangeSupport hover:text-white cursor-pointer transition-all";

  const onOpenChange = () => {
    setIsHover(!isHover);
  };

  const handleSendData = async () => {
    try {
      const res: any = await postData("test", formData);

      if (res.statusCode === 404) {
        return Promise.resolve("Nota criada com sucesso!");
      } else {
        return Promise.reject("Erro ao criar nota!");
      }
    } catch (error) {
      return Promise.reject("Erro ao conectar com o servidor!");
    }
  };

  const handleButtonClick = () => {
    toast.promise(
      handleSendData().then((message) => {
        setIsModalOpen(true);
        return message;
      }),
      {
        loading: "Enviando dados...",
        success: "Relatório gerado com sucesso!",
        error: "Erro ao criar relatório!",
      }
    );
  };

  const controlModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col gap-4 m-4">
      {/* Modal de visualização do relatório */}
      {/* <FinanceReportModal isOpen={isModalOpen} onOpenChange={controlModal} /> */}

      <div className="flex flex-col">
        <h1 className="text-2xl text-orangeSupport font-bold">
          Relatórios de contas a pagar
        </h1>
        <label className="text-grayText">
          Preencha os parâmetros para gerar o relatório
        </label>
      </div>

      <div className="w-full flex items-center justify-center gap-4 m-4">
        <ul className="min-w-[400px] rounded-3xl shadow-md bg-white flex py-2 px-8 gap-4 justify-between items-center">
          <li className={styleLabel}>PDF</li>
          <li className={styleLabel}>Arquivo</li>
          <li className={styleLabel}>Planilha</li>
          <li className={styleLabel}>Email</li>
        </ul>
        <HoverCardLayout
          trigger={<CircleHelp className="cursor-pointer" />}
          open={isHover}
          onOpenChange={onOpenChange}
        >
          Escolha o tipo de arquivo do relatório.
        </HoverCardLayout>
      </div>

      <ReportsForm setFormData={setFormData} />

      <div className="w-full flex justify-end">
        <button
          className="p-4 rounded-lg shadow-md bg-white text-orangeSupport"
          type="submit"
          onClick={handleButtonClick}
        >
          Gerar Relatório
        </button>
      </div>
    </div>
  );
};

export default Reports;
