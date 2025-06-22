"use client";

import PageLayout from "@/app/pageLayout";
import { GuestUserCard } from "@/components/GuestUserCard/GuestUserCard";
import useGet from "@/hooks/api/useGet";
import { IGuest } from "@/interfaces/UserInterfaces";
import { LoaderCircle, UserRoundX } from "lucide-react";
import { useEffect, useState } from "react";

const approvalUsers = () => {
  return (
    <>
      <PageLayout pageTitle="Usuários para aprovação">
        <UsersArea />
      </PageLayout>
    </>
  );
};

const UsersArea = () => {
  const [guestData, setGuestData] = useState<IGuest[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { getData } = useGet();

  const fetchGuestData = async () => {
    setLoading(true);

    try {
      const res: any = await getData(`/guests/disabled`);

      if (res.statusCode === 200) {
        setGuestData(res.response);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGuestData();
  }, []);

  return (
    <div className="flex mt-5 p-1 gap-10">
      <div className="w-full py-5 max-h-[75vh] overflow-auto flex flex-col gap-4">
        {guestData.length > 0 ? (
          guestData.map((item, index) => (
            <GuestUserCard key={index} user={item} />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center h-[60vh] gap-4">
            {loading ? (
              <>
                <LoaderCircle className="text-grayText h-24 w-24 animate-spin" />
                <span>Carregando dados...</span>
              </>
            ) : (
              <>
                <UserRoundX className="text-red-500 h-24 w-24" />
                <span>Nenhum usuário para aprovação encontrado!</span>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default approvalUsers;
