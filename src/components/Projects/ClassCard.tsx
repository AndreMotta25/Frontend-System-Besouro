import Image from "next/image";
import { MapPin } from "lucide-react";

interface ClassCardProps {
  classId: string;
  address: string;
  startDate: {
    beginDate: string;
    endDate: string;
  };
  time: {
    beginAt: string;
    finishAt: string;
  };
  presenceList: string;
  status: string;
}

// Foto mockada
const imageUser =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwyXeKDN29AmZgZPLS7n0Bepe8QmVappBwZCeA3XWEbWNdiDFB";

const ClassCard: React.FC<ClassCardProps> = ({
  classId,
  address,
  startDate,
  time,
  presenceList,
  status,
}) => {
  const colorMap: any = {
    ZL: "bg-[#ff9190]",
    C: "bg-[#997567]",
    ZS: "bg-[#bea9f8]",
    ZN: "bg-[#fdbb64]",
    ZO: "bg-[#86b4cb]",
  };

  const hoverMap: any = {
    ZL: "hover:bg-[#ff9190] dark:hover:bg-[#ff9190]",
    C: "hover:bg-[#997567] dark:hover:bg-[#997567]",
    ZS: "hover:bg-[#bea9f8] dark:hover:bg-[#bea9f8]",
    ZN: "hover:bg-[#fdbb64] dark:hover:bg-[#fdbb64]",
    ZO: "hover:bg-[#86b4cb] dark:hover:bg-[#86b4cb]",
  };

  const pointerMap: any = {
    cancelado: "bg-red-500",
    agendado: "bg-orange-500",
    adiado: "bg-sky-500",
    confirmado: "bg-green-500",
  };

  return (
    <div
      className={`class-card w-full cursor-ew-resize hover:translate-x-2 h-[70svh] bg-[#033745] dark:bg-gray-800 dark:text-white transition ease-in-out delay-75 rounded-xl shadow-2xl flex flex-col justify-between`}
    >
      {/* id, nameSchool, addres, data, time */}

      <div className="w-full p-6 bg-white dark:bg-gray-900 h-[60%]">
        <div className="flex flex-row w-full justify-between items-center font-semibold text-[#1951A0] dark:text-grayTitle">
          <span className="font-semibold text-base">{classId}</span>
          <span className="font-semibold text-base">Escola Nome</span>
        </div>

        <div className="flex flex-col py-5 justify-between h-full">
          <div className="flex flex-col gap-2">
            <span className="font-bold">Endereço</span>
            <p>{address}</p>
          </div>

          <div className="flex flex-row w-full justify-between pt-5">
            <div className="flex flex-col justify-between">
              <span className="font-bold">Data</span>
              <span>
                {startDate.beginDate} - {startDate.endDate}
              </span>
            </div>

            <div className="flex flex-col">
              <span className="font-bold">Hora</span>
              <span>
                {time.beginAt} - {time.finishAt}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[40%] text-white p-6 flex flex-col justify-between">
        <div className="flex flex-row justify-between">
          <div className="flex items-center gap-2">
            <span>{status}</span>
            <span className="relative flex h-3 w-3">
              <span
                className={`animate-ping absolute inline-flex h-full w-full rounded-full ${pointerMap[status]} opacity-75`}
              ></span>
              <span
                className={`relative inline-flex rounded-full h-3 w-3 ${pointerMap[status]}`}
              ></span>
            </span>
          </div>
          <MapPin className="text-red-600" />
        </div>

        <div className="flex flex-row justify-between items-center">
          <a href="#" className="group">
            <button className="border transition ease-in-out delay-75 group-hover:bg-bgHouverOrange group-hover:-translate-y-2   hover:text-white border-bgHouverOrange rounded-full w-44 h-9 justify-between">
              <label className="text-xs">Lista de presença</label>
            </button>
          </a>
          <img
            src={imageUser}
            className="rounded-full"
            width={50}
            height={50}
            alt={"Perfil"}
          />
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
