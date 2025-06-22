"use client"

import FloatLabelInput from "@/components/UI/FloatLabelInput/FloatLabelInput"

const DestityForm = () => {
    return (
        <>
            <div className="w-full grid grid-cols-2 mt-2 gap-3">

                <FloatLabelInput
                    width="w-full"
                    idInput="BankInputDestiny"
                    title="Banco"
                    type="text"
                    disabled={true}
                    className="px-2.5 pb-4 pt-4 mt-3"
                />

                <FloatLabelInput
                    width="w-full"
                    idInput="AgencyInputDestiny"
                    title="Agência"
                    type="text"
                    disabled={true}
                    className="px-2.5 pb-4 pt-4 mt-3"
                />

                <FloatLabelInput
                    width="w-full"
                    idInput="AccountInputDestiny"
                    title="Conta"
                    type="text"
                    disabled={true}
                    className="px-2.5 pb-4 pt-4 mt-3"
                />

                <FloatLabelInput
                    width="w-full"
                    idInput="NatureInputDestiny"
                    title="Natureza"
                    type="text"
                    disabled={true}
                    className="px-2.5 pb-4 pt-4 mt-3"
                />

            </div>
        </>
    )
}

export default DestityForm