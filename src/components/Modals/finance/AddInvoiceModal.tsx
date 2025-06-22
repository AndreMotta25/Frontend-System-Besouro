import React, { useState } from "react";
import InvoiceForm from "./forms/InvoiceForm";
import { IInvoice } from "@/interfaces/InvoiceInterfaces";
import ShadModalLayout from "../ShadModalLayout";
import usePost from "@/hooks/api/usePost";
import { LoaderCircle } from "lucide-react";
import toast from "react-hot-toast";

interface addInvoiceModalProps {
  isOpen: boolean;
  controlModal: () => void;
}

const AddInvoiceModal = ({ controlModal, isOpen }: addInvoiceModalProps) => {
  const [formData, setFormData] = useState<IInvoice[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { postData } = usePost();

  const handleSendData = async () => {
    setLoading(true);
    const res: any = await postData("test", formData);
    
    if(res.statusCode === 201) {
      toast.success("Nota criada com sucesso!");
    } else {
      toast.error("Erro!");
    }

    setLoading(false);
  };

  return (
    <ShadModalLayout
      isOpen={isOpen}
      onOpenChange={controlModal}
      title="Adicionar Nota Fiscal"
      onSave={handleSendData}
    >
      {loading ? (
        <div className="h-[500px] flex items-center justify-center">
          <LoaderCircle className="animate-spin text-gray-600 h-12 w-12" />
        </div>
      ) : (
        <AddInvoiceModalArea setFormData={setFormData} />
      )}
    </ShadModalLayout>
  );
};

interface AddInvoiceModalAreaProps {
  setFormData: React.Dispatch<React.SetStateAction<IInvoice[]>>;
}

const AddInvoiceModalArea = ({ setFormData }: AddInvoiceModalAreaProps) => {
  return (
    <div className="max-h-[500px] relative p-6 overflow-y-auto">
      <InvoiceForm setFormData={setFormData} />
    </div>
  );
};

export default AddInvoiceModal;
