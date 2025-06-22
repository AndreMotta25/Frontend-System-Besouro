"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import CreditCard from "../CreditCard/CreditCard";

type CreditsCardType = { 
    bankInstitution:string;
    balanceCard: number;
    flagBank: string;
    numberCard:string    
}

interface CreditCards {
    cardsAccount: CreditsCardType[];
}

const CreditsCardsList: React.FC<CreditCards> = ({cardsAccount}) => {

    const [isVisible, setIsVisible] = useState(true);
    return (
        <div className="bg-white dark:bg-gray-800 dark:text-white w-96 h-4/5 right-10 rounded-xl flex flex-col shadow-md pb-5">
            <div className="w-full flex p-3 justify-between items-center rounded-2xl shadow-md text-gray-500">
                <span className="font-semibold text-orangeSupport select-none">Cartão de credito</span>
                {isVisible ? (
                    <Eye
                        className="cursor-pointer"
                        onClick={() => setIsVisible(false)}
                    />
                ) : (
                    <EyeOff
                        className="cursor-pointer"
                        onClick={() => setIsVisible(true)}
                    />
                )}
            </div>

            <div className="w-full h-full pt-9 px-5 max-h-full">
                <CreditCard bankInstitution={cardsAccount[0].bankInstitution} flagBank={cardsAccount[0].flagBank} numberCard={cardsAccount[0].numberCard} isVisible={isVisible} />
                <div className="relative w-full h-3/4">
                    <div className="w-full pt-8 flex flex-col gap-7 max-h-[73%] overflow-auto">
                        {cardsAccount.slice(1).map((card) => (
                            <div key={card.numberCard} className={`flex w-full text-gray-500 flex-row justify-between items-center ${!isVisible && "blur-sm"}`}>
                                <div>
                                    <span className="select-none">{card.bankInstitution}</span>
                                </div>
                                <div className="flex flex-col select-none justify-center items-center">
                                    <span className={`font-semibold text-sm"}`}>Saldo</span>
                                    <span>
                                        {isVisible ? `R$${card.balanceCard.toFixed(2)}` : "R$ XX.XXX,XX"}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreditsCardsList