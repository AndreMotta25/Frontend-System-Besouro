
"use client";

import React, { useState } from "react";
import ShadModalLayout from "./ShadModalLayout";
import FloatLabelInput from "../UI/FloatLabelInput/FloatLabelInput";
import FloatLabelSelect from "../UI/FloatLabelSelect/FloatLabelSelect";
import { Button } from "../UI/button";

interface CreateClassModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
  onSave: (classData: {
    name: string;
    date: string;
    status: string;
    startTime: string;
    endTime: string;
    address: string;
  }) => void;
}

const CreateClassModal: React.FC<CreateClassModalProps> = ({
  isOpen,
  onOpenChange,
  onSave,
}) => {
  const [className, setClassName] = useState("");
  const [classDate, setClassDate] = useState("");
  const [classStatus, setClassStatus] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [address, setAddress] = useState("");

  const statusOptions = [
    { value: "confirmado", label: "Confirmado" },
    { value: "cancelado", label: "Cancelado" },
    { value: "agendado", label: "Agendado" },
    { value: "adiado", label: "Adiado" },
  ];

  const handleSave = () => {
    if (className.trim() && classDate && classStatus && startTime && endTime && address.trim()) {
      onSave({
        name: className,
        date: classDate,
        status: classStatus,
        startTime,
        endTime,
        address,
      });
      // Limpar formulário
      setClassName("");
      setClassDate("");
      setClassStatus("");
      setStartTime("");
      setEndTime("");
      setAddress("");
      onOpenChange();
    }
  };

  const handleCancel = () => {
    setClassName("");
    setClassDate("");
    setClassStatus("");
    setStartTime("");
    setEndTime("");
    setAddress("");
    onOpenChange();
  };

  const isFormValid = className.trim() && classDate && classStatus && startTime && endTime && address.trim();

  return (
    <ShadModalLayout
      isOpen={isOpen}
      onOpenChange={handleCancel}
      title="Criar Nova Turma"
      editMode={true}
      width="w-[600px]"
      onSave={handleSave}
    >
      <div className="p-6 flex flex-col gap-4">
        <FloatLabelInput
          label="Nome da Turma"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          type="text"
          required
        />

        <div className="flex gap-4">
          <div className="flex-1">
            <FloatLabelInput
              label="Data"
              value={classDate}
              onChange={(e) => setClassDate(e.target.value)}
              type="date"
              required
            />
          </div>
          
          <div className="flex-1">
            <FloatLabelSelect
              label="Status"
              value={classStatus}
              onChange={(e) => setClassStatus(e.target.value)}
              options={statusOptions}
              required
            />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <FloatLabelInput
              label="Horário de Início"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              type="time"
              required
            />
          </div>
          
          <div className="flex-1">
            <FloatLabelInput
              label="Horário de Fim"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              type="time"
              required
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Endereço
          </label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="rounded-md w-full border min-h-[80px] max-h-[120px] border-grayText/30 py-2 px-3 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Digite o endereço da turma..."
            required
          />
        </div>

        <div className="flex gap-2 justify-end mt-4">
          <Button variant="outline" onClick={handleCancel}>
            Cancelar
          </Button>
          <Button 
            onClick={handleSave}
            disabled={!isFormValid}
            className="bg-orangeSupport hover:bg-orangeSupport/90"
          >
            Criar Turma
          </Button>
        </div>
      </div>
    </ShadModalLayout>
  );
};

export default CreateClassModal;
