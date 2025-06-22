"use client"

import FloatLabelInput from "@/components/UI/FloatLabelInput/FloatLabelInput";
import { ICardInvoice, ICardData } from "@/interfaces/AddCreditCardt";
import { useState, useEffect } from "react";
import { AmexIcon, DiscoverIcon, EloIcon, MasterCardIcon, VisaIcon } from "@/icons/bankFlags";


interface CardInvoiceProps {
    changeData: (data: any) => void;
    cardData?: ICardData;
    initialData?: ICardInvoice;
}

const CardInvoice: React.FC<CardInvoiceProps> = ({ changeData, initialData, cardData }) => {
    const [formData, setFormData] = useState<ICardInvoice>({
        dayClose: initialData?.dayClose || "",
        dayExpiration: initialData?.dayExpiration || "",
        ...initialData,
    });

    const handleChange = (field: string, value: any) => {        
        // validateInput(field, value);

        // if (!errors[field]) {
        // Atualiza o estado apenas se não houver erro
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
        // }
    };

    useEffect(() => {
        changeData(formData);
    }, [formData]);

    const showBankFlag = () => {
        switch (cardData?.cardFlag) {
            case 'amex':
                return (<AmexIcon className="size-10 bg-blue-500"/>)
            case 'discover':
                return (<DiscoverIcon className="size-10"/>)
            case 'elo':
                return (<EloIcon className="size-10"/>)
            case 'mastercard':
                return (<MasterCardIcon className="size-7"/>)
            case 'visa':
                return (<VisaIcon className="size-8"/>)
            default:
                return null;
        }
    }


    return (
        <>
            <div className="w-full bg-white dark:bg-gray-900 rounded-md p-4 shadow-xl">
                <div className="flex flex-row justify-between items-center px-4 text-gray-600 dark:text-white">
                    <div className="flex flex-col gap-1 text-sm">
                        <label>Cartão de Credito</label>
                        <label>{cardData?.cardDescribe}</label>
                    </div>
                    <div>
                        {showBankFlag()}
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-row justify-between gap-5 mt-4">
                <FloatLabelInput
                    width="w-full"
                    idInput="dayClose"
                    title="Dia do Fechamento"
                    type="date"
                    className={`transition-all px-4 py-4 bg-white`}
                    onChange={(e) => handleChange("dayClose", e.target.value)}
                    value={formData.dayClose}
                />

                <FloatLabelInput
                    width="w-full"
                    idInput="dayExpiration"
                    title="Dia do Vencimento"
                    type="date"
                    className={`transition-all px-4 py-4 bg-white`}
                    onChange={(e) => handleChange("dayExpiration", e.target.value)}
                    value={formData.dayExpiration}
                />
            </div>
        </>
    )
}


export default CardInvoice