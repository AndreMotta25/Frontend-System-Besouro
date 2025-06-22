"use client"

import FloatLabelInput from "@/components/UI/FloatLabelInput/FloatLabelInput";
import FloatLabelSelect from "@/components/UI/FloatLabelSelect/FloatLabelSelect";
import { ICardData } from "@/interfaces/AddCreditCardt";
import { useState, useEffect } from "react";
import { FlagTriangleRight, ChevronDown } from 'lucide-react';
// flags
import { AmexIcon, DiscoverIcon, EloIcon, MasterCardIcon, VisaIcon } from "@/icons/bankFlags";


interface CardDataProps {
    changeData: (data: any) => void;
    initialData?: ICardData;
}

interface CardFlags {
    icon: React.ReactNode;
    label:string;
    value:string;
}

const CardData: React.FC<CardDataProps> = ({ changeData, initialData }) => {
    const [formData, setFormData] = useState<ICardData>({
        cardAccount: "",
        cardDescribe: "",
        cardIssue: "",
        cardNumber: null,
        cardFlag: "",
        ...initialData,
    });

    const cardIssues = [
        { label: "Emissor A", value: "A" },
        { label: "Emissor B", value: "B" },
        { label: "Emissor C", value: "C" },
        { label: "Emissor D", value: "D" },
        { label: "Emissor E", value: "E" },
    ];

    const cardAccounts = [
        { label: "Conta A", value: "A" },
        { label: "Conta B", value: "B" },
        { label: "Conta C", value: "C" },
        { label: "Conta D", value: "D" },
        { label: "Conta E", value: "E" },
    ];

    const cardFlags: CardFlags[]  = [
        { icon: <DiscoverIcon className="size-10 rounded-full" />, label: 'Discover', value: 'discover' },
        { icon: <AmexIcon className="size-7 bg-blue-600 rounded-full" />, label: 'Amex', value: 'amex' },
        { icon: <EloIcon className="size-9 rounded-full" />, label: 'Elo', value: 'elo' },
        { icon: <MasterCardIcon className="size-4 rounded-full" />, label: 'Master Card', value: 'mastercard' },
        { icon: <VisaIcon className="size-7 rounded-full" />, label: 'Visa', value: 'visa' },
    ]

    const [cardFlagSelect, setCardFlagSelect] = useState<CardFlags | null>(null);
    const [flagSelectOpen, setFlagSelectOpen] = useState(false);

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
        if (initialData?.cardFlag) {
            const selectedFlag = cardFlags.find(flag => flag.value === initialData.cardFlag);
            setCardFlagSelect(selectedFlag || null); // Define o flag selecionado ou null se não encontrar
        }
    }, [initialData?.cardFlag])

    useEffect(() => {
        changeData(formData);
    }, [formData]);

    return (
        <>
            <FloatLabelInput
                width="w-full"
                idInput="describeCreditCardInput"
                title="Descrição do cartão de crédito"
                type="text"
                // className="px-2.5 pb-4 pt-4 mt-3"
                className={`transition-all px-4 py-4 bg-white`}
                onChange={(e) => handleChange("cardDescribe", e.target.value)}
                value={formData.cardDescribe}
            />

            <div className="w-full flex flex-row justify-between gap-5 mt-4 items-center">
                <FloatLabelInput
                    width="w-full"
                    idInput="cardNumber"
                    title="Número do Cartão"
                    type="number"
                    // className="px-2.5 pb-4 pt-4 mt-3"
                    className={`transition-all px-4 py-4 bg-white`}
                    onChange={(e) => handleChange("cardNumber", e.target.value)}
                    value={formData.cardNumber}
                />

                <div className="relative w-3/4">

                <button onClick={() => setFlagSelectOpen(!flagSelectOpen)} className="w-full flex items-center text-sm pe-1 rounded-full dark:text-white gap-1" type="button">
                    <div className="w-10 h-10 flex rounded-full items-center justify-center center">
                        {!cardFlagSelect? (<FlagTriangleRight className="size-4 dark:text-white" />) : 
                        (cardFlagSelect.icon)}
                    </div>
                    {/* <label>{!cardFlagSelect? 'Bandeira do cartão' : `${cardFlagSelect.label}`}</label> */}
                    <ChevronDown />
                </button>

                {flagSelectOpen && (
                    <div className="absolute z-10 bg-white dark:bg-gray-700 w-full max-h-48 overflow-auto">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                            {cardFlags.map((flag, index) => (
                                <li key={index} className="hover:bg-gray-200" onClick={() => {setCardFlagSelect(flag); handleChange("cardFlag", flag.value)}}>
                                    <div className="flex flex-row items-center justify-start gap-4 px-10 cursor-pointer" >
                                        <div className="w-9 h-9 flex rounded-full items-center justify-center center">
                                            {flag.icon}
                                        </div>
                                        <label className="left-0 select-none cursor-pointer">{flag.label}</label>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                </div>

            </div>

            <div className="w-full flex flex-row justify-between gap-5 mt-4">
                <FloatLabelSelect
                    idSelect="cardIssue"
                    title="Emissor do Cartão"
                    placeHolder="Selecione um emissor"
                    bgColor="bg-white"
                    width="w-full"
                    options={cardIssues}
                    onChange={(e) => handleChange("cardIssue", e)}
                    value={formData.cardIssue}
                />

                <FloatLabelSelect
                    idSelect="cardAccount"
                    title="Conta padrão para pagamento"
                    placeHolder="Selecione uma conta"
                    bgColor="bg-white"
                    width="w-full"
                    options={cardAccounts}
                    onChange={(e) => handleChange("cardAccount", e)}
                    value={formData.cardAccount}
                />
            </div>
        </>
    )
}


export default CardData