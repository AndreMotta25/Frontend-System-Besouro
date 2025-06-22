"use client";

import { useRouter } from "next/navigation";
import BankFlag from "../BankFlag/BankFlag";


interface CardProp {
    bankInstitution: string;
    flagBank: string; // visa, masterCard...
    numberCard: string;
    isVisible: boolean;
}


const CreditCard: React.FC<CardProp> = ({ bankInstitution, flagBank, numberCard, isVisible }) => {

    const router = useRouter();

    return (
        <div className="flex flex-row items-end gap-2">
            <div className={`relative w-72 h-36 bg-gray-700 p-5 rounded-md text-white ${!isVisible && "blur-sm"} hover:skew-x-3`}>

                <div className="flex flex-row justify-between">
                    <label>
                        {isVisible ? `${bankInstitution}` : "institution"}
                    </label>
                    <BankFlag flagBank={flagBank} />
                </div>

                <div className="absolute bottom-5 left-5">
                    <label>
                    {isVisible ? `${numberCard}` : "XXX XXX XXX XXX"}
                    </label>
                </div>
            </div>
            <button 
                className="w-10 h-10 bg-orangeSupport rounded-md text-xl text-white hover:brightness-75 ease-in duration-75" 
                onClick={() => router.push('/sectors/finance/payments/addCreditCard')}
                >+
            </button>
        </div>
    )
}

export default CreditCard