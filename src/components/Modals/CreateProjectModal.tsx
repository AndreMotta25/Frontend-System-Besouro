
"use client";

import React, { useState } from "react";
import ShadModalLayout from "./ShadModalLayout";
import FloatLabelInput from "../UI/FloatLabelInput/FloatLabelInput";
import { Button } from "../UI/button";

interface CreateProjectModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
  onSave: (name: string, description: string) => void;
  editMode?: boolean;
  initialData?: {
    name: string;
    description: string;
  };
}

const CreateProjectModal: React.FC<CreateProjectModalProps> = ({
  isOpen,
  onOpenChange,
  onSave,
  editMode = false,
  initialData,
}) => {
  const [projectName, setProjectName] = useState(initialData?.name || "");
  const [projectDescription, setProjectDescription] = useState(initialData?.description || "");

  // Atualizar estados quando initialData mudar
  React.useEffect(() => {
    if (initialData) {
      setProjectName(initialData.name);
      setProjectDescription(initialData.description);
    } else {
      setProjectName("");
      setProjectDescription("");
    }
  }, [initialData]);

  const handleSave = () => {
    if (projectName.trim() && projectDescription.trim()) {
      onSave(projectName, projectDescription);
      setProjectName("");
      setProjectDescription("");
      onOpenChange();
    }
  };

  const handleCancel = () => {
    setProjectName("");
    setProjectDescription("");
    onOpenChange();
  };

  return (
    <ShadModalLayout
      isOpen={isOpen}
      onOpenChange={handleCancel}
      title={editMode ? "Editar Projeto" : "Criar Novo Projeto"}
      editMode={true}
      width="w-[500px]"
      onSave={handleSave}
    >
      <div className="p-6 flex flex-col gap-4">
        <FloatLabelInput
          label="Nome do Projeto"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          type="text"
          required
        />
        
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Descrição
          </label>
          <textarea
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            className="rounded-md w-full border min-h-[100px] max-h-[200px] border-grayText/30 py-2 px-3 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Digite a descrição do projeto..."
            required
          />
        </div>

        <div className="flex gap-2 justify-end mt-4">
          <Button variant="outline" onClick={handleCancel}>
            Cancelar
          </Button>
          <Button 
            onClick={handleSave}
            disabled={!projectName.trim() || !projectDescription.trim()}
            className="bg-orangeSupport hover:bg-orangeSupport/90"
          >
            {editMode ? "Salvar Alterações" : "Criar Projeto"}
          </Button>
        </div>
      </div>
    </ShadModalLayout>
  );
};

export default CreateProjectModal;
