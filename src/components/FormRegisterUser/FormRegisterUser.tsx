"use client";

import React, { useEffect, useState } from "react";
import Account from "./FormSteps/Account";
import { IUserRegisterData } from "@/interfaces/RegisterUserInterfaces";
import { changeMultiStep } from "@/functions/ChangeMultiStep";
import GuestGeneralData from "../GuestGeneralData/GuestGeneralData";

interface FormRegisterUserProps {
  step: number;
  setInfosUser: (item: IUserRegisterData) => void;
  progressData: any;
  setProgressData: (item: any) => void;
}

const FormRegisterUser = ({
  step,
  setInfosUser,
  progressData,
  setProgressData,
}: FormRegisterUserProps) => {
  const [formData, setFormData] = useState<IUserRegisterData>({});

  // Mantém os dados atualizados após a mudança de componente
  const changeFormData = (newData: any, section: string) => {
    setFormData((prevData: any) => ({
      ...prevData,
      [section]: { ...prevData[section], ...newData },
    }));
  };

  // Desestruturando os dados para o envio do formulário para a api
  const formatUserData = (userData: IUserRegisterData) => {
    const { generalData = {}, account = {} } = userData;
    return {
      ...generalData,
      ...account,
    };
  };

  // Envia os dados do formulário para o componente pai (/register/page.tsx)
  useEffect(() => {
    setInfosUser(formatUserData(formData));
  }, [formData]);

  // Atualiza os cards de multi etapa do formulário
  useEffect(() => {
    setProgressData(changeMultiStep(progressData, formData));
  }, [formData]);

  return (
    <>
      {step === 1 && (
        <GuestGeneralData
          changeData={(data) => changeFormData(data, "generalData")}
          initialData={formData.generalData}
        />
      )}
      {step === 2 && (
        <Account
          changeData={(data) => changeFormData(data, "account")}
          initialData={formData.account}
        />
      )}
    </>
  );
};

export default FormRegisterUser;
