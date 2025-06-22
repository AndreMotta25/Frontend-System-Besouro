"use client";

import PageLayout from "@/app/pageLayout";
import ClassCard from "@/components/Projects/ClassCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const ProjectDetails = () => {
  return (
    <PageLayout pageTitle={"Turmas"}>{CardsGrid()}</PageLayout>
  );
};

const CardsGrid = () => {
  const classes = [
    {
      address: "Rua Augusta, 123 - São Paulo, SP",
      classId: "T848",
      presenceList: "ZL",
      startDate: { beginDate: "01/10", endDate: "07/10" },
      time: { beginAt: "08:00", finishAt: "12:00" },
      status: "confirmado",
    },
    {
      address: "Av. Paulista, 1000 - São Paulo, SP",
      classId: "T849",
      presenceList: "ZN",
      startDate: { beginDate: "08/10", endDate: "14/10" },
      time: { beginAt: "09:00", finishAt: "13:00" },
      status: "confirmado",
    },
    {
      address: "Praça da Liberdade, 45 - Belo Horizonte, MG",
      classId: "T850",
      presenceList: "ZS",
      startDate: { beginDate: "15/10", endDate: "21/10" },
      time: { beginAt: "10:00", finishAt: "14:00" },
      status: "cancelado",
    },
    {
      address: "Rua XV de Novembro, 200 - Curitiba, PR",
      classId: "T851",
      presenceList: "ZN",
      startDate: { beginDate: "22/10", endDate: "28/10" },
      time: { beginAt: "11:00", finishAt: "15:00" },
      status: "agendado",
    },
    {
      address: "Av. Getúlio Vargas, 300 - Porto Alegre, RS",
      classId: "T852",
      presenceList: "ZL",
      startDate: { beginDate: "29/10", endDate: "05/11" },
      time: { beginAt: "12:00", finishAt: "16:00" },
      status: "adiado",
    },
    {
      address: "Av. Brasil, 400 - Rio de Janeiro, RJ",
      classId: "T853",
      presenceList: "C",
      startDate: { beginDate: "06/11", endDate: "12/11" },
      time: { beginAt: "13:00", finishAt: "17:00" },
      status: "cancelado",
    },
  ];
  

  return (
    <>
      <Swiper
        slidesPerView={1}
        // centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper cursor-ew-resize"
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {classes.map((classItem, index) => (
          <SwiperSlide
          key={index}>
            <ClassCard
              key={index}
              address={classItem.address}
              classId={classItem.classId}
              presenceList={classItem.presenceList}
              startDate={{
                beginDate: classItem.startDate.beginDate,
                endDate: classItem.startDate.endDate,
              }}
              time={{
                beginAt: classItem.time.beginAt,
                finishAt: classItem.time.finishAt,
              }}
              status={classItem.status}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProjectDetails;
