"use client";

import { BesouroIcon } from "@/icons/BesouroIcon";
import CleanLayout from "@/app/cleanLayout";
import Image from "next/image";
import { useState } from "react";
import MessageModal from "@/components/Modals/ModalMessages/MessageModal";
import { useSearchParams } from "next/navigation";
import ForgetPasswordRequest from "@/components/ForgetPasswordRequest/ForgetPasswordRequest";
import ForgetPasswordResponse from "@/components/ForgetPasswordResponse/ForgetPasswordResponse";

const ForgetPasswordPage = () => {
  return (
    <CleanLayout pageTitle="" subTitle="">
      <FogetPasswordArea />
    </CleanLayout>
  );
};

const FogetPasswordArea = () => {
  const [modal, setModal] = useState({
    isOpen: false,
    message: "",
    status: "",
  });

  const params = useSearchParams();

  const changePss = params.get("changePss");

  return (
    <div className="flex gap-8 flex-col justify-center items-center h-full">
      {/* Imagem de fundo */}
      <div className="fixed w-full top-0 h-full -z-10">
        <Image
          className="w-full h-full object-cover"
          src={"/assets/backgroundVetorLogin.svg"}
          width={0}
          height={0}
          alt="papel de parede"
        />
      </div>

      {/* Modal com a mensagem de retorno da api */}
      <MessageModal
        isOpen={modal.isOpen}
        onClose={() => setModal({ ...modal, isOpen: false })}
        text={modal.message}
        status={modal.status}
      />

      {changePss ? (
        <ForgetPasswordResponse setModal={setModal} changePss={changePss}/>
      ) : (
        <ForgetPasswordRequest setModal={setModal} />
      )}

      <div className="flex items-center gap-2">
        <BesouroIcon className="w-6 h-12" />
        <span className="titleNav self-center whitespace-nowrap">BESOURO</span>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
