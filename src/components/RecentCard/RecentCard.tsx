"use client";

import FilledStar from "@/icons/FilledStar";
import Star from "@/icons/Star";
import Tag from "@/icons/Tag";
import { ICardsRecentAccess } from "@/interfaces/CardsInterfaces";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface RecentCardsProps {
  props: ICardsRecentAccess;
}

const RecentCard = ({ props }: RecentCardsProps) => {
  const router = useRouter();
  const [isFavorite, setIsFavorite] = useState(false); // Verifica se o card é favorito ou não

  const handlePushToRoute = () => {
    router.push(`/${props.path}`);
  }; // função para ir para a página que o card está se referindo

  const updateFavorites = (favoritesArray: ICardsRecentAccess[]) => {
    localStorage.setItem("favoriteCards", JSON.stringify(favoritesArray));
  }; // função para atualizar os cards no localStorage

  const addToFavorite = (infos: ICardsRecentAccess) => {
    const currentFavorites = localStorage.getItem("favoriteCards");
    const favoritesArray = currentFavorites ? JSON.parse(currentFavorites) : [];

    if (isFavorite) {
      // verifica se o card atual é favorito, se for, retira o status de favorito
      const updatedFavorites = favoritesArray.filter(
        (favorite: ICardsRecentAccess) => favorite.text !== infos.text
      );
      updateFavorites(updatedFavorites);
      setIsFavorite(false);
    } else {
      // se não for favorito, adiciona ao objeto, mas até 4 favoritos
      if (favoritesArray.length >= 4) {
        alert("Limite de 4 favoritos atingido.");
        return;
      } else {
        // adiciona o card clicado para
        favoritesArray.push(infos);
        updateFavorites(favoritesArray);
        setIsFavorite(true);
      }
    }
  };

  useEffect(() => {
    const currentFavorites = localStorage.getItem("favoriteCards");
    const favoritesArray = currentFavorites ? JSON.parse(currentFavorites) : [];

    const isAlreadyFavorite = favoritesArray.some(
      (favorite: ICardsRecentAccess) => favorite.text === props.text
    );
    setIsFavorite(isAlreadyFavorite);
  }, [props.text]); // verifica se o card é ou não favorito

  return (
    <div className="dark:bg-gray-800 border shadow-inner drop-shadow rounded-2xl w-full h-40 relative hover:scale-105 transition-all hover:shadow-lg hover:brightness-90">
      <div
        style={{ backgroundColor: props.bgColor }}
        className={`absolute inset-0 h-2/3 bg-gradient-to-b rounded-t-2xl -z-10`}
      />
      <div
        className="absolute top-5 right-5 cursor-pointer hover:scale-150 transition-all"
        onClick={() => addToFavorite(props)}
      >
        {isFavorite ? <FilledStar className="text-yellow-300" /> : <Star className="" />}
      </div>

      <div className="flex h-full flex-col px-5 py-5 justify-end gap-5">
        <div>
          <Tag />
        </div>
        <p className="cursor-pointer" onClick={() => handlePushToRoute()}>
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default RecentCard;
