
"use client";

import React, { useState } from "react";
import ShadModalLayout from "./ShadModalLayout";
import FloatLabelInput from "../UI/FloatLabelInput/FloatLabelInput";
import { Button } from "../UI/button";

interface AddStudentModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
  onSave: (studentData: {
    name: string;
    email: string;
    phone: string;
  }) => void;
}

const AddStudentModal: React.FC<AddStudentModalProps> = ({
  isOpen,
  onOpenChange,
  onSave,
}) => {
  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentPhone, setStudentPhone] = useState("");

  const handleSave = () => {
    if (studentName.trim() && studentEmail.trim() && studentPhone.trim()) {
      onSave({
        name: studentName,
        email: studentEmail,
        phone: studentPhone,
      });
      // Clear form
      setStudentName("");
      setStudentEmail("");
      setStudentPhone("");
      onOpenChange();
    }
  };

  const handleCancel = () => {
    setStudentName("");
    setStudentEmail("");
    setStudentPhone("");
    onOpenChange();
  };

  const isFormValid = studentName.trim() && studentEmail.trim() && studentPhone.trim();

  return (
    <ShadModalLayout
      isOpen={isOpen}
      onOpenChange={handleCancel}
      title="Adicionar Novo Aluno"
      editMode={true}
      width="w-[500px]"
      onSave={handleSave}
    >
      <div className="p-6 flex flex-col gap-4">
        <FloatLabelInput
          title="Nome Completo"
          idInput="studentName"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          type="text"
          required
        />

        <FloatLabelInput
          title="Email"
          idInput="studentEmail"
          value={studentEmail}
          onChange={(e) => setStudentEmail(e.target.value)}
          type="email"
          required
        />

        <FloatLabelInput
          title="Telefone"
          idInput="studentPhone"
          value={studentPhone}
          onChange={(e) => setStudentPhone(e.target.value)}
          type="tel"
          required
        />

        <div className="flex gap-2 justify-end mt-4">
          <Button variant="outline" onClick={handleCancel}>
            Cancelar
          </Button>
          <Button
            onClick={handleSave}
            disabled={!isFormValid}
            className="bg-orangeSupport hover:bg-orangeSupport/90"
          >
            Adicionar Aluno
          </Button>
        </div>
      </div>
    </ShadModalLayout>
  );
};

export default AddStudentModal;
