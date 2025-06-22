"use client";

import React, { useState } from "react";
import { Button } from "../UI/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../UI/dialog";
import { Search } from "lucide-react";
import { paths } from "@/components/constants/paths";
import { useRouter } from "next/navigation";

const SearchModal = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const router = useRouter();

  // Função para remover acentos
  function removeAccents(searchValue: string) {
    return searchValue.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  // Filtrar dados
  let filteredData = paths.filter((item) => {
    const pathsWithoutAccents = removeAccents(item.title.toLowerCase());
    const searchWithoutAccents = removeAccents(searchValue.toLowerCase());

    return pathsWithoutAccents.includes(searchWithoutAccents);
  });

  const handleEnterKey = (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const path = filteredData.map((item) => {
        return item.path;
      });

      router.push(path[0]);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative hidden md:block w-10/12 drop-shadow-sm">
          <div className="w-full h-12 pr-10 p-2 pl-4 hover:bg-zinc-50 bg-white text-sm text-gray-900 border-none rounded-3xl dark:bg-gray-800 dark:text-white cursor-pointer flex items-center">
            Pesquisar...
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center focus:transpa pr-3 pointer-events-none">
            <Search className="w-5 text-[#3377FF]" />
          </div>
        </div>
      </DialogTrigger>
      <DialogTrigger asChild>
        <div className="block md:hidden">
          <Search className="w-5 text-[#3377ff]" />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-1/2 max-w-lg dark:bg-gray-800 ">
        <DialogHeader className="p-6">
          <DialogTitle>
            <div className="relative">
              <input
                className="py-2 px-2 w-full focus:outline-none bg-transparent"
                placeholder="Pesquisar..."
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
                onKeyDown={handleEnterKey}
              />
              <Search className="absolute top-1/2 -translate-y-[50%] right-0" />
            </div>
          </DialogTitle>
          <DialogDescription />
        </DialogHeader>

        <div className="border-y dark:border-y-gray-700 flex justify-start flex-col overflow-y-auto overflow-x-hidden h-40 max-h-40">
          {searchValue && filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <a
                key={index}
                href={item.path}
                className="hover:bg-zinc-100 dark:hover:bg-gray-700 py-2 px-5 flex items-center gap-2 "
              >
                <Search className="text-gray-500 w-5 h-5" /> {item.title}
              </a>
            ))
          ) : (
            <div className="h-full w-full flex items-center justify-center">
              <p>Nenhum dado encontrado...</p>
            </div>
          )}
        </div>

        <DialogFooter className="p-6">
          <DialogClose asChild>
            <Button variant="default" type="button">
              Fechar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SearchModal;
