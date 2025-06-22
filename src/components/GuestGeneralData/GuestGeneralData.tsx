"use client";

import FloatLabelInput from "@/components/UI/FloatLabelInput/FloatLabelInput";
import FloatLabelSelect from "@/components/UI/FloatLabelSelect/FloatLabelSelect";
import {
  IGeneralData,
  IGuestGeneralData,
} from "@/interfaces/RegisterUserInterfaces";
import React, { useEffect, useState } from "react";
import {
  ethnicities,
  genders,
  roles,
  sectors,
} from "@/components/constants/data";
import FloatLabelMaskedInput from "@/components/UI/FloatLabelMaskedInput/FloatLabelMaskedInput";
import { cnpj, cpf } from "cpf-cnpj-validator";

interface GeneralDataProps {
  changeData: (data: any) => void;
  initialData?: IGeneralData;
}

const GuestGeneralData = ({ changeData, initialData }: GeneralDataProps) => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({}); // Criando variável para receber os erros
  const [formData, setFormData] = useState<IGuestGeneralData>({
    // Criando variável para receber todos os valores dessa etapa do formulário
    name: "",
    surname: "",
    gender: "",
    ethnicity: "",
    birthDate: "",
    cpf: "",
    mobilePhone: "",
    ...initialData,
  });

  const validateInput = (field: string, value: any) => {
    // Tratamento de erros dos campos
    let error = "";

    switch (field) {
      case "name":
        if (!value) {
          error = "Nome é obrigatório.";
        } else if (/\d/.test(value) || /[^\w\sÀ-ÿ]/i.test(value)) {
          error = "Nome inválido.";
        }
        break;
      case "surname":
        if (!value) {
          error = "Sobrenome é obrigatório.";
        } else if (/\d/.test(value) || /[^\w\sÀ-ÿ]/i.test(value)) {
          error = "Sobrenome inválido.";
        }
        break;

      case "position":
        if (!value) {
          error = "Função é obrigatório.";
        }
        break;
      case "gender":
        if (!value) {
          error = "Gênero é obrigatório.";
        }
      case "mobilePhone":
        if (!value) {
          error = "Celular não pode ser vazio!";
        }
        break;
      case "jobTitle":
        if (!value) {
          error = "Descrição da vaga não pode ser vazio!";
        }
        break;
      case "cpf":
        if (!value) {
          error = "CPF/CNPJ não pode ser vazio!";
        } else if (value.length <= 11 && !cpf.isValid(value)) {
          error = "CPF inválido!";
        }
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: error,
    }));
  };

  const handleChange = (field: string, value: any) => {

    if (field === "mobilePhone" || field === "cpf") {
      value = value.replace(/[^a-zA-Z0-9 ]/g, "");
    }

    validateInput(field, value);

    // Atualiza o estado apenas se não houver erro
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  useEffect(() => {
    // Envia os dados dessa etapa para o componente pai (FormRegisterUser)
    changeData(formData);
  }, [formData]);

  return (
    <div className="flex flex-col w-full gap-5 h-full">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="relative w-full basis-1/3">
          <FloatLabelInput
            width="w-full"
            idInput="idName"
            title="Nome"
            type="text"
            className={`transition-all px-4 py-4 bg-white ${
              errors.name && "border-2 border-red-500"
            }`}
            onChange={(e) => handleChange("name", e.target.value)}
            value={formData.name}
          />
          {errors.name && (
            <span
              style={{ transform: "translateX(-50%)" }}
              className="transition-all left-1/2 text-white font-bold w-60 top-16 absolute bg-red-500 border-2 border-red-500 p-5 z-10 rounded-2xl shadow-lg"
            >
              {errors.name}
            </span>
          )}
        </div>

        <div className="relative w-full basis-1/3">
          <FloatLabelInput
            width="w-full"
            idInput="idSurName"
            title="Sobrenome"
            type="text"
            className={`transition-all px-4 py-4 bg-white ${
              errors.surname && "border-2 border-red-500"
            }`}
            onChange={(e) => handleChange("surname", e.target.value)}
            value={formData.surname}
          />
          {errors.surname && (
            <span
              style={{ transform: "translateX(-50%)" }}
              className="transition-all left-1/2 text-white font-bold w-60 top-16 absolute bg-red-500 border-2 border-red-500 p-5 z-10 rounded-2xl shadow-lg"
            >
              {errors.surname}
            </span>
          )}
        </div>

        <div className="relative w-full basis-1/3">
          <FloatLabelMaskedInput
            width="w-full"
            idInput="idCpf"
            title="CPF/CNPJ"
            mask="999.999.999-99"
            type="text"
            className={`transition-all px-4 py-4 bg-white ${
              errors.cpf && "border-2 border-red-500"
            }`}
            onChange={(e) => handleChange("cpf", e.target.value)}
            value={formData.cpf}
          />
          {errors.cpf && (
            <span
              style={{ transform: "translateX(-50%)" }}
              className="transition-all left-1/2 text-white font-bold w-60 top-16 absolute bg-red-500 border-2 border-red-500 p-5 z-10 rounded-2xl shadow-lg"
            >
              {errors.cpf}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-5">
        <div className="relative w-full basis-1/3">
          <FloatLabelSelect
            idSelect="idGender"
            title="Gênero"
            placeHolder="Selecione o gênero"
            bgColor="bg-white"
            width="w-full"
            options={genders}
            onChange={(e) => handleChange("gender", e)}
            value={formData.gender}
          />
          {errors.gender && (
            <span
              style={{ transform: "translateX(-50%)" }}
              className="transition-all left-1/2 text-white font-bold w-60 top-16 absolute bg-red-500 border-2 border-red-500 p-5 z-10 rounded-2xl shadow-lg"
            >
              {errors.gender}
            </span>
          )}
        </div>

        <div className="relative w-full basis-1/2">
          <FloatLabelSelect
            idSelect="idEthnicity"
            title="Etnia"
            placeHolder="Selecione a etnia"
            bgColor="bg-white"
            width="w-full"
            options={ethnicities}
            onChange={(e) => handleChange("ethnicity", e)}
            value={formData.ethnicity}
          />
          {errors.ethnicity && (
            <span
              style={{ transform: "translateX(-50%)" }}
              className="transition-all left-1/2 text-white font-bold w-60 top-16 absolute bg-red-500 border-2 border-red-500 p-5 z-10 rounded-2xl shadow-lg"
            >
              {errors.ethnicity}
            </span>
          )}
        </div>

        <div className="relative w-full basis-1/3">
          <FloatLabelInput
            width="w-full"
            idInput="idBirthDate"
            title="Data de nascimento"
            type="date"
            className={`transition-all px-4 py-4 bg-white ${
              errors.birthDate && "border-2 border-red-500"
            }`}
            onChange={(e) => handleChange("birthDate", e.target.value)}
            value={formData.birthDate}
          />
          {errors.birthDate && (
            <span
              style={{ transform: "translateX(-50%)" }}
              className="transition-all left-1/2 text-white font-bold w-60 top-16 absolute bg-red-500 border-2 border-red-500 p-5 z-10 rounded-2xl shadow-lg"
            >
              {errors.birthDate}
            </span>
          )}
        </div>
      </div>

      <div className="relative md:w-1/2 w-full">
        <FloatLabelMaskedInput
          width="w-full"
          idInput="idMobilePhone"
          title="Celular"
          type="text"
          className={`transition-all px-4 py-4 bg-white ${
            errors.mobilePhone && "border-2 border-red-500"
          }`}
          onChange={(e) => handleChange("mobilePhone", e.target.value)}
          value={formData.mobilePhone}
          mask={"(99)99999-9999"}
        />
        {errors.mobilePhone && (
          <span
            style={{ transform: "translateX(-50%)" }}
            className="transition-all left-1/2 text-white font-bold w-60 top-16 absolute bg-red-500 border-2 border-red-500 p-5 z-10 rounded-2xl shadow-lg"
          >
            {errors.mobilePhone}
          </span>
        )}
      </div>
    </div>
  );
};

export default GuestGeneralData;
