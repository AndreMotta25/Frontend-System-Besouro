import CalendarArea from "@/components/CalendarArea/CalendarArea";
import UserWelcomeArea from "@/components/UserWelcomeArea/UserWelcomeArea";
import PercentageChart from "@/components/PercentageChart/PercentageChart";
import PageLayout from "./pageLayout";
import RecentCardsArea from "@/components/RecentCardsArea/RecentCardsArea";
import { Skeleton } from "@/components/UI/skeleton";
import { useUserContext } from "@/contexts/UserContext";

const FinanceHome = () => {
  const imageUser =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwyXeKDN29AmZgZPLS7n0Bepe8QmVappBwZCeA3XWEbWNdiDFB";

  const videoOnboarding =
    "https://www.youtube.com/embed/wQrGdRsMGEI?si=Lv07D9l4Y8PWkHdq";

  const imageBesouro =
    "https://images.vexels.com/media/users/3/180292/isolated/preview/c2a75b3d475cc78bd411658c05c0cff0-icone-de-besouro-azul.png";

  return (
    <>
      <PageLayout pageTitle="">
        {FinanceHomeArea(imageUser, imageBesouro, videoOnboarding)}
      </PageLayout>
    </>
  );
};
const FinanceHomeArea = (
  imageUser: string,
  imageBesouro: string,
  videoOnboarding: string
) => {
  const profileData = {
    fotoUser: imageUser,
    cargo: "Financeiro",
    setor: "ERP",
    tarefas: 16,
    nome: "Colaborador",
    porcentagemTrampo: 73,
    favoritos: [
      {
        bgColor: "",
        text: "",
        path: "",
      },
    ],
  };

  return (
    <>
      <div className="w-full rounded-xl p-2 mt-2 flex gap-16 flex-col justify-center lg:flex-row">
        <div className="dark:bg-gray-800 rounded-2xl shadow-inner drop-shadow w-full border">
          {profileData ? (
            <UserWelcomeArea props={profileData} />
          ) : (
            <Skeleton className="w-full h-full rounded-2xl" />
          )}
        </div>

        <div className="dark:bg-gray-800 rounded-2xl shadow-inner drop-shadow border flex justify-center lg:items-center">
          <CalendarArea />
        </div>
      </div>

      <div className="w-full flex p-2 mt-2 gap-10 flex-col lg:flex-row">
        <div className="w:full lg:w-1/4">
          <label className="font-bold text-lg dark:text-white uppercase text-grayTitle">
            Dashboard meu trampo
          </label>

          <div className="dark:bg-gray-800 border rounded-2xl shadow-inner drop-shadow h-80 flex justify-center items-center">
            {profileData.porcentagemTrampo >= 0 ? (
              <PercentageChart percentage={profileData.porcentagemTrampo} />
            ) : (
              <Skeleton className="w-full h-full rounded-2xl" />
            )}
          </div>
        </div>

        <div className="w:full lg:w-4/5">
          <label className="font-bold text-lg dark:text-white uppercase text-grayTitle">
            Favoritos
          </label>
          <div>
            <RecentCardsArea props={profileData.favoritos} />
          </div>
        </div>
      </div>

      <div className="flex gap-10 flex-col lg:flex-row">
        <div className="w:full lg:w-1/3 h-96">
          {imageBesouro ? (
            <img
              className="w-full h-full rounded-2xl object-contain"
              src={imageBesouro}
              alt="gif onboarding"
            />
          ) : (
            <Skeleton className="w-full h-full rounded-2xl" />
          )}
        </div>

        <div className="w:full lg:w-4/5 flex flex-col justify-center">
          <label className="font-bold text-lg dark:text-white uppercase text-grayTitle">
            onboarding
          </label>
          <div className="w-full h-96 pb-5">
            {videoOnboarding ? (
              <iframe
                className="w-full h-full rounded-2xl"
                width="560"
                src={`${videoOnboarding}?autoplay=1&mute=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            ) : (
              <Skeleton className="w-full h-full rounded-2xl" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FinanceHome;
