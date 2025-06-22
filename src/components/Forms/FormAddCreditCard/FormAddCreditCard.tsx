"use client";

import React, { useEffect, useState } from "react";
import CardData from "./CardData/CardData";
import CardInvoice from "./CardInvoice/CardInvoice";
import { ICreditCardData } from "@/interfaces/AddCreditCardt";
import { AmexIcon, DiscoverIcon, EloIcon, MasterCardIcon, VisaIcon } from "@/icons/bankFlags";
import { changeMultiStep } from "@/functions/ChangeMultiStep";

interface FormAddCreditCardProps {
  step: number;
  setCardData: (item: ICreditCardData) => void;
  progressData: any;
  setProgressData: (item: any) => void;
}

const FormAddCreditCard = ({
  step,
  setCardData,
  progressData,
  setProgressData,
}: FormAddCreditCardProps) => {
  const [formData, setFormData] = useState<ICreditCardData>({});

  // Mantém os dados atualizados após a mudança de componente
  const changeFormData = (newData: any, section: string) => {
    setFormData((prevData: any) => ({
      ...prevData,
      [section]: { ...prevData[section], ...newData },
    }));
  };

  // Desestruturando os dados para o envio do formulário para a api
  const formatUserData = (userData: ICreditCardData) => {
    const { cardData = {}, cardInvoice = {} } = userData;
    return {
      ...cardData,
      ...cardInvoice,
    };
  };

  const showBankFlag = () => {
    switch (formData?.cardData?.cardFlag) {
      case 'amex':
        return (<AmexIcon className="size-10 bg-blue-500" />)
      case 'discover':
        return (<DiscoverIcon className="size-10" />)
      case 'elo':
        return (<EloIcon className="size-10" />)
      case 'mastercard':
        return (<MasterCardIcon className="size-7" />)
      case 'visa':
        return (<VisaIcon className="size-8" />)
      default:
        return null;
    }
  }


  // Envia os dados do formulário para o componente pai (/register/page.tsx)
  useEffect(() => {
    setCardData(formatUserData(formData));
  }, [formData]);

  // Atualiza os cards de multi etapa do formulário
  useEffect(() => {
    setProgressData(changeMultiStep(progressData, formData));
  }, [formData]);

  return (
    <div>
      {step === 1 && (
        <CardData
          changeData={(data) => changeFormData(data, "cardData")}
          initialData={formData?.cardData}
        />
      )}
      {step === 2 && (
        <CardInvoice
          changeData={(data) => changeFormData(data, "cardInvoice")}
          cardData={formData?.cardData}
          initialData={formData?.cardInvoice}
        />
      )}
      {step === 3 && (
        <div className="w-full bg-white dark:bg-gray-900 rounded-md p-4 shadow-xl">
          <div className="flex flex-col gap-1 text-sm justify-center items-center text-gray-600 dark:text-white">
            <label className="text-green-500">Confirme para cadastrar o cartão</label>
            <label>{formData?.cardData?.cardDescribe}</label>
            {showBankFlag()}
          </div>
        </div>
      )}
    </div>
  );
};

export default FormAddCreditCard;
