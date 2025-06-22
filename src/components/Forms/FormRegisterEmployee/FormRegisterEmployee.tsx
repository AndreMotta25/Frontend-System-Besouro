"use client";

import React, { useEffect, useState } from "react";
import GeneralData from "@/components/FormRegisterUser/FormSteps/GeneralData";
import Account from "@/components/FormRegisterUser/FormSteps/Account";
import Address from "@/components/FormRegisterUser/FormSteps/Address";
import { IUserRegisterData } from "@/interfaces/RegisterUserInterfaces";
import { changeMultiStep } from "@/functions/ChangeMultiStep";


interface FormRegisterEmployeeProps {
  step: number;
  setUserData: (item: IUserRegisterData) => void;
  progressData: any;
  setProgressData: (item: any) => void;
}

const FormRegisterEmployee = ({
  step,
  setUserData,
  progressData,
  setProgressData,
}: FormRegisterEmployeeProps) => {
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
    const { generalData = {}, address = {}, account = {} } = userData;

    return {
      ...generalData,
      address,
      ...account,
    };
  };

  // Envia os dados do formulário para o componente pai
  useEffect(() => {
    setUserData(formatUserData(formData));
  }, [formData]);

  // Atualiza os cards de multi etapa do formulário
  useEffect(() => {
    setProgressData(changeMultiStep(progressData, formData));
  }, [formData]);

  return (
    <div className="flex flex-col gap-5">
      {step === 1 && (
        <GeneralData
          changeData={(data) => changeFormData(data, "generalData")}
          initialData={formData.generalData}
        />
      )}

      {step === 2 && (
        <Address
          changeData={(data) => changeFormData(data, "address")}
          initialData={formData.address}
        />
      )}
      {step === 3 && (
        <Account
          changeData={(data) => changeFormData(data, "account")}
          initialData={formData.account}
        />
      )}
    </div>
  );
};

export default FormRegisterEmployee;
