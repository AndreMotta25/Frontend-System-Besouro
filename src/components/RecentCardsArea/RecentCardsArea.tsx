"use client";

import RandomColorGenerator from "@/functions/RandomColorGenerator";
import React, { useEffect, useState } from "react";
import RecentCard from "../RecentCard/RecentCard";
import SkeletonCard from "../UI/SkeletonCard/SkeletonCard";
import { ICardsRecentAccess } from "@/interfaces/CardsInterfaces";
import { usePathname } from "next/navigation";

interface RecentCardsAreaProps {
  props: ICardsRecentAccess[];
}

const RecentCardsArea = ({ props }: RecentCardsAreaProps) => {
  const router = usePathname();
  const [cardsData, setCardsData] = useState<ICardsRecentAccess[]>(props);
  const [isClient, setIsClient] = useState(false);

  const recentCardsData: ICardsRecentAccess[] = [
    {
      bgColor: RandomColorGenerator(),
      text: "Contas a pagar",
      path: "projects",
    },
    {
      bgColor: RandomColorGenerator(),
      text: "Setor",
      path: "sectors",
    },
    {
      bgColor: RandomColorGenerator(),
      text: "Projetos",
      path: "projects",
    },
    {
      bgColor: RandomColorGenerator(),
      text: "Minha área",
      path: "",
    },
  ];

  const getFavoritesCards = () => {  // Recebe todos os cards
    const favorites = localStorage.getItem("favoriteCards");
    const favoritesCardsData: ICardsRecentAccess[] = favorites
      ? JSON.parse(favorites)
      : [];
    return favoritesCardsData;
  };

  useEffect(() => { // Muda os cards para a dashboard (favoritos) ou para acessos recentes (todos os cards)
    setIsClient(true);

    if (isClient) {
      const myFavorites = getFavoritesCards();
      if (router === "/") {
        setCardsData(myFavorites);
      } else {
        setCardsData(recentCardsData);
      }
    }
  }, [router, isClient]);

  return cardsData.length >= 1 ? (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
      {cardsData.map((item, index) => (
        <RecentCard key={index} props={item} />
      ))}
    </div>
  ) : ( // se não tiver nenhum card, retorna um esqueleto (efeito visual dos cards sem dados)
    <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
};

export default RecentCardsArea;
