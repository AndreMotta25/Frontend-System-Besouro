import { Button } from "@/components/UI/button";
import FloatLabelInput from "@/components/UI/FloatLabelInput/FloatLabelInput";
import { Switch } from "@/components/UI/switch";
import React from "react";

interface SettingsDataProps {
  user: any;
}

const ProfileSettings = ({ user }: SettingsDataProps) => {
  const function1 = () => {
    console.log("faça algo");
  };

  const accessibilityFunctions = [
    {
      name: "Função 1",
      function: function1(),
    },
    {
      name: "Função 1",
      function: function1(),
    },
    {
      name: "Função 1",
      function: function1(),
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-8">
        <h1 className="text-grayText dark:text-white text-xl">
          Atualizar a senha
        </h1>
        <div className="flex flex-col gap-8">
          <div className="flex gap-4">
            <FloatLabelInput
              idInput="idCurrentPasswod"
              title="Senha atual"
              width="w-1/2"
              className="h-14"
              type="password"
              value={""}
            />
          </div>

          <div className="flex gap-4">
            <FloatLabelInput
              idInput="idNewPassword"
              title="Nova senha"
              width="w-1/2"
              className="h-14"
              type="password"
              value={""}
            />

            <FloatLabelInput
              idInput="idConfirmNewPassword"
              title="Confirme a nova senha"
              width="w-1/2"
              className="h-14"
              type="password"
              value={""}
            />
          </div>
        </div>
        <div>
          <Button className="p-6">Atualizar Senha</Button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-grayText dark:text-white text-xl">
          Acessibilidade
        </h1>

        <div className="flex flex-col gap-4">
          {accessibilityFunctions &&
            accessibilityFunctions.map((item, index) => (
              <div
                key={index}
                className="border rounded-xl dark:border-white p-4 flex justify-between"
              >
                {item.name}
                <Switch onClick={() => item.function} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
