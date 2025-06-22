"use client";

import React, { useState } from "react";
import ShadModalLayout from "../Modals/ShadModalLayout";
import { Button } from "../UI/button";
import { IGuest } from "@/interfaces/UserInterfaces";
import usePost from "@/hooks/api/usePost";
import toast from "react-hot-toast";
import RejectionModal from "../Modals/RejectionModal";
import { cpf } from "cpf-cnpj-validator";
import { getLabelFromValue } from "@/functions/GetLabelFromValue";
import { useUserContext } from "@/contexts/UserContext";

interface GuestUserProps {
  user: IGuest;
}

export const GuestUserCard = ({ user }: GuestUserProps) => {
  const [detailsModal, setDetailsModal] = useState<boolean>(false);
  const [disapproveModal, setDisapproveModal] = useState<boolean>(false);
  const {decodedUser} = useUserContext();
  const { postData } = usePost();

  const controlDetailsModal = () => {
    setDetailsModal(!detailsModal);
  };

  const controlDisapproveModal = () => {
    setDisapproveModal(!disapproveModal);
  };

  const fetchGuestData = async (
    approve: boolean,
    rejectionMessage: string | null
  ) => {

    const rejectionReason = {
      rejectionReason: rejectionMessage
    }

    try {
      const res: any = await postData(
        `/guests/approve/${user.userId}?employeeId=${decodedUser?.userId}&approved=${approve}`,
        rejectionReason,
      );

      if (res.statusCode === 200) {
        return Promise.resolve();
      } else {
        return Promise.reject();
      }
    } catch {
      return Promise.reject("Erro inesperado!");
    }
  };

  const sendGuestSituation = (
    approve: boolean,
    rejectionMessage: string | null
  ) => {
    if (rejectionMessage && rejectionMessage?.length > 144) {
      toast.error("Máximo de 144 caractéres.");
      return;
    }

    toast.promise(
      fetchGuestData(approve, rejectionMessage).then((message) => {
        return message;
      }),
      {
        loading: "Carregando...",
        success: "Situação do convidado atualizada com sucesso!",
        error: "Erro ao atulizar o estado do convidado!",
      }
    );
  };

  return (
    <div className="flex items-center dark:bg-gray-800 rounded-2xl border shadow-sm bg-white justify-between gap-3 p-4 w-full">
      <div className="truncate w-1/3">
        <span>
          Nome: {user.name} {user.surname}
        </span>
      </div>

      <div className="w-1/3 flex justify-center">
        <Button variant="secondary" onClick={controlDetailsModal}>
          Detalhes
        </Button>

        <ShadModalLayout
          isOpen={detailsModal}
          onOpenChange={controlDetailsModal}
          width="w-[500px]"
        >
          <div className="p-6 flex flex-col gap-4">
            <div className="">
              <div>
                Nome: {user.name} {user.surname}
              </div>
              <div>CPF: {cpf.format(user.cpf)}</div>
              <div>E-Mail: {user.email}</div>
              <div>Celular: {user.mobilePhone}</div>
              <div>Gênero: {getLabelFromValue(user.gender, "gender")}</div>
            </div>
            <Button onClick={controlDetailsModal}>Fechar</Button>
          </div>
        </ShadModalLayout>
      </div>

      <div className="flex items-center justify-around gap-4 text-white w-1/3">
        <button type="button" className="py-2 px-4 bg-green-600 rounded-lg" onClick={() => sendGuestSituation(true, null)}>
          Aprovar
        </button>
        <button
          type="button"
          className="py-2 px-4 bg-red-600 rounded-lg"
          onClick={controlDisapproveModal}
        >
          Reprovar
        </button>

        <RejectionModal
          modal={disapproveModal}
          controlModal={controlDisapproveModal}
          sendGuestSituation={sendGuestSituation}
        />
      </div>
    </div>
  );
};
