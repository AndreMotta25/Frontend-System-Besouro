import React, { useState } from "react";
import ShadModalLayout from "./ShadModalLayout";
import { Button } from "../UI/button";

interface RejectionModalProps {
  modal: boolean;
  controlModal: () => void;
  sendGuestSituation: (
    isApproved: boolean,
    rejectionMessage: string | null
  ) => void;
}

const RejectionModal = ({
  modal,
  controlModal,
  sendGuestSituation,
}: RejectionModalProps) => {
  return (
    <ShadModalLayout isOpen={modal} onOpenChange={controlModal}>
      <RejectionModalArea
        modal={modal}
        controlModal={controlModal}
        sendGuestSituation={sendGuestSituation}
      />
    </ShadModalLayout>
  );
};

const RejectionModalArea = ({
  modal,
  controlModal,
  sendGuestSituation,
}: RejectionModalProps) => {
  const [rejectionMessage, setRejectionMessage] = useState<string | null>("");

  return (
    <>
      <ShadModalLayout
        isOpen={modal}
        onOpenChange={controlModal}
        width="w-[500px]"
      >
        <div className="p-6 flex flex-col gap-4">
          <div className="">
            <h1 className="font-bold mb-4">
              Qual o motivo da reprovação do usuário?
            </h1>
            <textarea
              onChange={(e) => setRejectionMessage(e.target.value)}
              className="rounded-md w-full border min-h-[35px] max-h-[200px] border-grayText/30 py-1 px-2"
            />
          </div>
          <div>
            <Button onClick={controlModal}>Cancelar</Button>{" "}
            <Button
              variant={"destructive"}
              onClick={() => sendGuestSituation(false, rejectionMessage)}
            >
              Enviar
            </Button>
          </div>
        </div>
      </ShadModalLayout>
    </>
  );
};

export default RejectionModal;
