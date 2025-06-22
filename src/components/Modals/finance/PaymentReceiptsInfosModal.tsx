"use client";

import { BesouroIcon } from "@/icons/BesouroIcon";
import { Download, Info, X } from "lucide-react";
import React, { useState } from "react";
import { format } from "date-fns";
import { HoverCardLayout } from "@/components/HoverCardLayout/HoverCardLayout";
import ShadModalLayout from "../ShadModalLayout";

interface PaymentReceiptsProps {
  isOpen: boolean;
  props: any;
  controlModal: () => void;
}

const propsData = {
  created_data: new Date(),
  email: "besouro@gmail.com",
  contact: "1191234-5678",
  transfer_made_by: "João Silva",
  transfer_date: "10/10/2023",
  destination_bank: "Itaú",
};

const PaymentReceiptsInfosModal = ({
  props,
  isOpen,
  controlModal,
}: PaymentReceiptsProps) => {
  return (
    <ShadModalLayout
      isOpen={isOpen}
      onOpenChange={controlModal}
      width="max-w-[90vw] w-[750px]"
    >
      <PaymentReceiptsInfosArea controlModal={controlModal} props={props} />
    </ShadModalLayout>
  );
};

interface PaymentReceiptsInfosAreaProps {
  controlModal: () => void;
  props: any;
}

const PaymentReceiptsInfosArea = ({
  controlModal,
  props,
}: PaymentReceiptsInfosAreaProps) => {
  const day = format(propsData.created_data, "dd/MM/yyyy");
  const time = format(propsData.created_data, "HH:mm:ss");
  const [isHover, setIsHover] = useState<boolean>(false);

  const onOpenChange = () => {
    setIsHover(!isHover);
  };

  return (
    <div className="flex flex-col gap-4 p-6 max-w-[90vw]">
      <div className="flex flex-col w-full text-orangeSupport gap-2">
        <div className="flex justify-between items-center">
          <h1 className="text-lg">Comprovante de pagamento</h1>
          <X
            onClick={() => controlModal()}
            className="text-orangeSupport cursor-pointer"
          />
        </div>

        <div className="w-full flex justify-end">
          <Download className="cursor-pointer" />
        </div>
      </div>

      <div className="rounded-2xl border border-grayTitle h-auto p-4 overflow-x-auto relative">
        <div className="flex flex-col gap-4 w-[650px]">
          <div className="w-full flex items-start">
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <BesouroIcon className="w-4 h-10" />
                <span className="inline-block text-bettleOrange font-black text-2xl self-center whitespace-nowrap">
                  BESOURO
                </span>
              </div>
              <div className="flex flex-col text-sm text-grayText dark:text-white">
                <span>Grupo Besouro</span>
                <span>CNPJ: 00.000.0001/00</span>
                <span>Contato: (11)91234-5678</span>
                <span>besouro@email.com.br</span>
              </div>
            </div>

            <div className="flex-1 flex flex-col items-center -translate-x-10">
              <h1 className="text-grayText dark:text-white text-xl">
                Comprovante de pagamento
              </h1>
              <span className="text-sm text-grayTitle">
                Gerado em {day} às {time}
              </span>
            </div>

            <HoverCardLayout
              trigger={<Info className="cursor-pointer" />}
              open={isHover}
              onOpenChange={onOpenChange}
            >
              Visualização com informações reduzidas, baixe o comprovante para
              ver todos os dados.
            </HoverCardLayout>
          </div>

          <div className="h-[1px] bg-grayTitle/50 dark:bg-white w-full" />

          <div>
            <div className="inline-block">
              <span className="text-grayText dark:text-white">
                Transferência efetuada por:
              </span>
              <p className="text-right text-grayTitle">{props.company_name}</p>
            </div>
          </div>

          <div className="h-[1px] bg-grayTitle/50 dark:bg-white w-full" />

          <div className="flex flex-col gap-4">
            <div className="inline-block">
              <span className="text-grayText dark:text-white">
                Valor tranferido:
              </span>
              <span className="text-grayTitle"> {props.value}</span>
            </div>
            <div className="inline-block">
              <span className="text-grayText dark:text-white">
                Data da transferência:
              </span>
              <span className="text-grayTitle"> {propsData.transfer_date}</span>
            </div>
            <div className="inline-block">
              <span className="text-grayText dark:text-white">
                Banco de destino:
              </span>
              <span className="text-grayTitle">
                {" "}
                {propsData.destination_bank}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentReceiptsInfosModal;
