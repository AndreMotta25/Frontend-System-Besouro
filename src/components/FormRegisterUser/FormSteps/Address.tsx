"use client";

import React, { useEffect, useState } from "react";
import FloatLabelInput from "@/components/UI/FloatLabelInput/FloatLabelInput";
import { IAddress } from "@/interfaces/RegisterUserInterfaces";
import FloatLabelMaskedInput from "@/components/UI/FloatLabelMaskedInput/FloatLabelMaskedInput";
import FloatLabelSelect from "@/components/UI/FloatLabelSelect/FloatLabelSelect";
import { zones } from "@/components/constants/data";
import useGet from "@/hooks/api/useGet";

interface AddressDataProps {
  changeData: (data: any) => void;
  initialData?: IAddress;
}

const Address = ({ changeData, initialData }: AddressDataProps) => {
  const { getData } = useGet();
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({}); // Criando variável para receber os erros
  const [formData, setFormData] = useState<IAddress>({
    // Criando variável para receber todos os valores dessa etapa do formulário
    complement: "",
    number: "",
    postalCode: "",
    zone: "",
    street: "",
    district: "",
    city: "",
    state: "",
    country: "Brasil",
    ...initialData,
  });

  const getAddressData = async (cep: string) => {
    setLoading(true);

    // Requisição da api de cep, pelo viaCEP
    await new Promise((resolve) => setTimeout(resolve, 1000));
    try {
      const res = await getData(`https://viacep.com.br/ws/${cep}/json/`);

      if (res?.statusCode != 200) {
        throw new Error("Erro ao buscar dados do CEP");
      }

      setFormData((prevData) => ({
        ...prevData,
        street: res.response.logradouro || "",
        district: res.response.bairro || "",
        city: res.response.localidade || "",
        state: res.response.uf || "",
        country: "Brasil",
      }));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCepChange = (value: string) => {
    // Passa o valor do cep para a variável que engloba todos os dados e quando o valor do cep for do tamanho de 8 faz a requisição da api, se não limpa todos os dados
    validateInput("postalCode", value);

    let formattedCep = value.replace("-", "");

    setFormData((prevData) => ({
      ...prevData,
      postalCode: formattedCep,
    }));

    if (value.length === 9) {
      getAddressData(formattedCep);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        number: "",
        district: "",
        city: "",
        state: "",
        country: "Brasil",
      }));
    }
  };

  const handleChange = (field: string, value: string) => {
    // pegando as informações dos inputs, primeiro parâmetro é a variável de cada input, o segundo é o valor em si
    validateInput(field, value);

    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  useEffect(() => {
    // enviando os dados para o componente pai (FormRegisterUser)
    changeData(formData);
  }, [formData]);

  const validateInput = (field: string, value: any) => {
    // Tratamento de erros dos campos
    let error = "";

    switch (field) {
      case "adrres_number":
        if (!value) {
          error = "Número do endereço é obrigatório.";
        }
        break;
      case "cep":
        if (!value) {
          error = "CEP é obrigatório.";
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

  return (
    <div className="flex flex-col gap-5 w-full h-full">
      <div className="flex flex-col md:flex-row gap-5 md:gap-3">
        <div className="w-full basis-1/2">
          <FloatLabelInput
            width="w-full"
            idInput="idStreet"
            title="Endereço"
            type="text"
            className="px-4 py-4 bg-zinc-200 cursor-not-allowed dark:bg-[#14222e]"
            disabled={true}
            value={loading ? "Carregando..." : formData.street}
            onChange={(value) =>
              setFormData((prev: any) => ({
                ...prev,
                address: { ...prev.address, street: value },
              }))
            }
          />
        </div>

        <div className="relative w-full basis-1/6">
          <FloatLabelInput
            width="w-full"
            idInput="idNumber"
            title="Número"
            type="number"
            className={`transition-all px-4 py-4 bg-white ${
              errors.number && "border-2 border-red-500"
            }`}
            onChange={(e) => handleChange("number", e.target.value)}
            value={formData.number}
          />
          {errors.numner && (
            <span
              style={{ transform: "translateX(-50%)" }}
              className="transition-all left-1/2 text-white font-bold w-60 top-16 absolute bg-red-500 border-2 border-red-500 p-5 z-10 rounded-2xl shadow-lg"
            >
              {errors.number}
            </span>
          )}
        </div>

        <div className="w-full basis-1/6">
          <FloatLabelInput
            width="w-full"
            idInput="idComplement"
            title="Complemento"
            type="text"
            className="px-4 py-4 bg-white"
            onChange={(e) => handleChange("complement", e.target.value)}
            value={formData.complement}
          />
        </div>

        <div className="w-full relative basis-1/6">
          <FloatLabelMaskedInput
            width="w-full"
            idInput="idPostalCode"
            title="CEP"
            type="text"
            className={`transition-all px-4 py-4 bg-white ${
              errors.postalCode && "border-2 border-red-500"
            }`}
            onChange={(e) => handleCepChange(e.target.value)}
            value={formData.postalCode}
            mask={"99999-999"}
            placeholder=""
          />
          {errors.cep && (
            <span
              style={{ transform: "translateX(-50%)" }}
              className="transition-all left-1/2 text-white font-bold w-60 top-16 absolute bg-red-500 border-2 border-red-500 p-5 z-10 rounded-2xl shadow-lg"
            >
              {errors.cep}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-5 md:gap-3">
        <div className="w-full basis-1/4">
          <FloatLabelInput
            width="w-full"
            idInput="idCountry"
            title="País"
            type="text"
            disabled={true}
            className="px-4 py-4 bg-zinc-200 cursor-not-allowed dark:bg-[#14222e]"
            value={loading ? "Carregando..." : formData.country}
            onChange={(value) =>
              setFormData((prev: any) => ({
                ...prev,
                address: { ...prev.address, country: value },
              }))
            }
          />
        </div>

        <div className="w-full basis-1/4">
          <FloatLabelInput
            width="w-full"
            idInput="idState"
            title="Estado"
            type="text"
            disabled={true}
            className="px-4 py-4 bg-zinc-200 cursor-not-allowed dark:bg-[#14222e]"
            value={loading ? "Carregando..." : formData.state}
            onChange={(value) =>
              setFormData((prev: any) => ({
                ...prev,
                address: { ...prev.address, state: value },
              }))
            }
          />
        </div>

        <div className="w-full basis-1/6">
          <FloatLabelInput
            width="w-full"
            idInput="idCity"
            title="Cidade"
            type="text"
            disabled={true}
            className="px-4 py-4 bg-zinc-200 cursor-not-allowed dark:bg-[#14222e]"
            value={loading ? "Carregando..." : formData.city}
            onChange={(value) =>
              setFormData((prev: any) => ({
                ...prev,
                address: { ...prev.address, city: value },
              }))
            }
          />
        </div>

        <div className="w-full basis-1/6">
          <FloatLabelInput
            width="w-full"
            idInput="idDistrict"
            title="Bairro"
            type="text"
            disabled={true}
            className="px-4 py-4 bg-zinc-200 cursor-not-allowed dark:bg-[#14222e]"
            value={loading ? "Carregando..." : formData.district}
            onChange={(value) =>
              setFormData((prev: any) => ({
                ...prev,
                address: { ...prev.address, district: value },
              }))
            }
          />
        </div>

        <div className="w-full basis-1/6">
          <FloatLabelSelect
            idSelect="idZone"
            title="Zona"
            placeHolder="Selecione a zona"
            bgColor="bg-white"
            width="w-full"
            options={zones}
            onChange={(e) => handleChange("zone", e)}
            value={formData.zone}
          />
          {errors.zone && (
            <span
              style={{ transform: "translateX(-50%)" }}
              className="transition-all left-1/2 text-white font-bold w-60 top-16 absolute bg-red-500 border-2 border-red-500 p-5 z-10 rounded-2xl shadow-lg"
            >
              {errors.zone}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Address;
