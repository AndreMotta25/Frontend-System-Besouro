import { Button } from "@/components/UI/button";
import FloatLabelInput from "@/components/UI/FloatLabelInput/FloatLabelInput";
import { IUser } from "@/interfaces/UserInterfaces";
import { format } from "date-fns";
import { CircleUserRound } from "lucide-react";
import React from "react";

interface GeneralDataProps {
  user: IUser;
}

const ProfileGeneralData = ({ user }: GeneralDataProps) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-grayText dark:text-white text-xl">
          Editar foto do perfil
        </h1>
        <div className="flex items-center gap-4">
          <CircleUserRound className="w-16 h-16" />
          <Button>Editar</Button>
          <Button variant={"outline"}>Remover</Button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-grayText dark:text-white text-xl">
          Informações pessoais
        </h1>

        <div className="flex flex-col gap-8">
          <div className="flex gap-4">
            <FloatLabelInput
              idInput="idFullName"
              title="Nome completo"
              width="w-1/2"
              className="h-14"
              type="text"
              disabled={true}
              value={`${user?.name} ${user?.surname}`}
            />

            <FloatLabelInput
              idInput="idBirthDate"
              title="Data de nascimento"
              width="w-1/2"
              className="h-14"
              type="text"
              disabled={true}
              value={format(new Date(user?.birthDate), "dd/MM/yyyy")}
            />
          </div>

          <div className="flex gap-4">
            <FloatLabelInput
              idInput="idEmail"
              title="Email"
              width="w-1/2"
              className="h-14"
              type="text"
              disabled={true}
              value={user?.email}
            />

            <FloatLabelInput
              idInput="idSector"
              title="Setor"
              width="w-1/2"
              className="h-14"
              type="text"
              disabled={true}
              value={user?.sector}
            />
          </div>

          <div className="flex gap-4">
            <FloatLabelInput
              idInput="idRole"
              title="Função"
              width="w-1/2"
              className="h-14"
              type="text"
              disabled={true}
              value={user?.jobTitle}
            />

            <FloatLabelInput
              idInput="idTaxNumber"
              title="CPF/CNPJ"
              width="w-1/2"
              className="h-14"
              type="text"
              disabled={true}
              value={user?.taxNumber}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileGeneralData;
