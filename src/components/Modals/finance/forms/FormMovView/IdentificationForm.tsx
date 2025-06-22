"use client"

import FloatLabelInput from "@/components/UI/FloatLabelInput/FloatLabelInput"


const IdentificationForm = () => {
    return (
        <>
            <div className="w-full flex flex-row justify-between gap-4 mt-2">
                <FloatLabelInput
                    width="w-full"
                    idInput="movType"
                    title="Tipo Mov."
                    type="text"
                    disabled={false}
                    className="px-2.5 pb-4 pt-4 mt-3"
                />

                <FloatLabelInput
                    width="w-full"
                    idInput="DocNumberDestiny"
                    title="N° Doc."
                    type="text"
                    disabled={false}
                    className="px-2.5 pb-4 pt-4 mt-3"
                />

            </div>

            <div className="w-full flex flex-row justify-between gap-4 mt-2">
                <FloatLabelInput
                    width="w-1/4"
                    idInput="valueInput"
                    title="Valor"
                    type="text"
                    disabled={false}
                    className="px-2.5 pb-4 pt-4 mt-3"
                />

                <FloatLabelInput
                    width="w-full"
                    idInput="recipientInput"
                    title="Beneficiário"
                    type="text"
                    disabled={false}
                    className="px-2.5 pb-4 pt-4 mt-3"
                />

            </div>

            <FloatLabelInput
                width="w-full mt-2"
                idInput="HistoryInput"
                title="Historico"
                type="text"
                disabled={false}
                className="px-2.5 pb-4 pt-4 mt-3"
            />

            <div className="w-4/12 flex flex-row items-center gap-5 mt-2">
                <FloatLabelInput
                    width="w-full"
                    idInput="DateInput"
                    title="Data"
                    type="date"
                    className="px-2.5 pb-4 pt-4 mt-3"
                />

            </div>
        </>
    )
}

export default IdentificationForm