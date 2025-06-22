"use client";

import React, { useEffect, useState } from "react";
import FloatLabelInput from "@/components/UI/FloatLabelInput/FloatLabelInput";
import { IAccount } from "@/interfaces/RegisterUserInterfaces";

interface AccountDataProps {
  changeData: (data: any) => void;
  initialData?: IAccount;
}

const Account = ({ changeData, initialData }: AccountDataProps) => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({}); // Criando a variável de erros
  const [errorsList, setErrorsList] = useState<{ [key: string]: string[] }>({}); // Criando variável de erros para a senha
  const [formData, setFormData] = useState<IAccount>({
    // Criando variável para receber todos os valores dessa etapa do formulário
    email: "",
    password: "",
    ...initialData,
  });

  const handleChange = (field: string, value: any) => {
    validateInput(field, value);
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const validateInput = (field: string, value: string) => {
    // Tratamento de erros dos campos
    let error = "";
    let errorsList: string[] = [""];

    switch (field) {
      case "email":
        if (!value) {
          error = "E-mail é obrigatório.";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = "E-mail inválido.";
        }
        break;

      case "password":
        if (!value) {
          errorsList.push("Senha é obrigatória.");
        } else {
          if (value.length < 8) {
            errorsList.push("Mínimo 8 caracteres.");
          }
          if (!/[A-Z]/.test(value)) {
            errorsList.push("Mínimo uma letra maiúscula.");
          }
          if (!/[0-9]/.test(value)) {
            errorsList.push("Mínimo um número.");
          }
          if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
            errorsList.push("Mínimo um caractere especial (!@#...)");
          } else {
            errorsList.pop();
          }
        }
        break;

      case "confirmPassword":
        if (!value) {
          error = "Confirmação de senha é obrigatória.";
        } else if (value !== formData.password) {
          error = "As senhas não correspondem.";
        }
        break;

      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: error,
    }));
    setErrorsList((prev) => ({
      ...prev,
      [field]: errorsList,
    }));
  };

  useEffect(() => {
    // Criando uma cópia de formData sem a propriedade confirmPassword
    const { confirmPassword, ...dataWithoutConfirmPassword } = formData;
    changeData(dataWithoutConfirmPassword);
  }, [formData]);

  return (
    <div className="flex flex-col md:flex-row gap-5 w-full">
      <div className="relative w-full">
        <FloatLabelInput
          width="w-full"
          idInput="idEmail"
          title="E-mail (cadastre o e-mail desejado)"
          type="email"
          className={`transition-all px-4 py-4 bg-white basis-1/4 ${
            errors.email ? "border-2 border-red-500" : ""
          }`}
          onChange={(e) => handleChange("email", e.target.value)}
          value={formData.email}
        />
        {errors.email && (
          <span
            style={{ transform: "translateX(-50%)" }}
            className="transition-all left-1/2 text-sm text-white font-bold w-60 top-16 absolute bg-red-500 border-2 border-red-500 p-2 z-10 rounded-2xl shadow-lg"
          >
            {errors.email}
          </span>
        )}
      </div>

      <div className="relative w-full">
        <FloatLabelInput
          width="w-full"
          idInput="idPassword"
          title="Senha"
          type="password"
          className={`transition-all px-4 py-4 bg-white basis-1/4 ${
            errorsList.password?.length > 0 ? "border-2 border-red-500" : ""
          }`}
          onChange={(e) => handleChange("password", e.target.value)}
          value={formData.password}
        />

        {errorsList.password?.length > 0 && (
          <span
            style={{ transform: "translateX(-50%)" }}
            className="transition-all left-1/2 text-sm text-white font-bold w-60 top-16 absolute bg-red-500 border-2 border-red-500 p-2 z-10 rounded-2xl shadow-lg"
          >
            <ul>
              {errorsList.password.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </span>
        )}
      </div>

      <div className="relative w-full">
        <FloatLabelInput
          width="w-full"
          idInput="idConfirmPassword"
          title="Confirme sua Senha"
          type="password"
          className={`transition-all px-4 py-4 bg-white basis-1/4 ${
            errors.confirmPassword ? "border-2 border-red-500" : ""
          }`}
          onChange={(e) => handleChange("confirmPassword", e.target.value)}
          value={formData.confirmPassword}
        />
        {errors.confirmPassword && (
          <span
            style={{ transform: "translateX(-50%)" }}
            className="transition-all left-1/2 text-sm text-white font-bold w-60 top-16 absolute bg-red-500 border-2 border-red-500 p-2 z-10 rounded-2xl shadow-lg"
          >
            {errors.confirmPassword}
          </span>
        )}
      </div>
    </div>
  );
};

export default Account;
