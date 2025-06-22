"use client"

import FloatLabelInput from "@/components/UI/FloatLabelInput/FloatLabelInput"

const LowBaixa = () => {
    return (
        <>
            <div className="grid grid-cols-5 gap-3">

                <FloatLabelInput
                    width="w-full"
                    idInput="dateMovInput"
                    title="Data Mov."
                    type="date"
                    className="px-2.5 pb-4 pt-4 mt-3"
                />

                <FloatLabelInput
                    width="w-full"
                    idInput="BankInputDestiny"
                    title="Numerario"
                    type="text"
                    className="px-2.5 pb-4 pt-4 mt-3"
                />

                <FloatLabelInput
                    width="w-full"
                    idInput="movValueInput"
                    title="Valor Movimento"
                    type="text"
                    className="px-2.5 pb-4 pt-4 mt-3"
                />

                <FloatLabelInput
                    width="w-full"
                    idInput="natureInput"
                    title="Nature"
                    type="text"
                    className="px-2.5 pb-4 pt-4 mt-3"
                />

                <FloatLabelInput
                    width="w-full"
                    idInput="chequeNumberInput"
                    title="Numero Cheque"
                    type="text"
                    className="px-2.5 pb-4 pt-4 mt-3"
                />

                <FloatLabelInput
                    width="w-full"
                    idInput="BankInput"
                    title="Banco"
                    type="text"
                    className="px-2.5 pb-4 pt-4 mt-3"
                />

                <FloatLabelInput
                    width="w-full"
                    idInput="BankAccountInput"
                    title="Conta Banco"
                    type="text"
                    className="px-2.5 pb-4 pt-4 mt-3"
                />

                <FloatLabelInput
                    width="w-full"
                    idInput="DebAccountInput"
                    title="Conta Debito"
                    type="text"
                    className="px-2.5 pb-4 pt-4 mt-3"
                />


                <FloatLabelInput
                    width="w-full"
                    idInput="CredAccountInput"
                    title="Conta Crédito"
                    type="text"
                    className="px-2.5 pb-4 pt-4 mt-3"
                />

                <FloatLabelInput
                    width="w-full"
                    idInput="DocInput"
                    title="Documento"
                    type="text"
                    className="px-2.5 pb-4 pt-4 mt-3"
                />

            </div>

            <div className="flex flex-col mt-5 gap-3">
                
                <div className="flex flex-row gap-3">

                    <FloatLabelInput
                        width="w-full"
                        idInput="BeneficiarioInput"
                        title="Beneficiario"
                        type="text"
                        className="px-2.5 pb-4 pt-4 mt-3"
                    />

                    <FloatLabelInput
                        width="w-full"
                        idInput="HistoryInput"
                        title="Historico"
                        type="text"
                        className="px-2.5 pb-4 pt-4 mt-3"
                    />

                    <FloatLabelInput
                        width="w-full"
                        idInput="LacamentoTipo"
                        title="TipoLancamento"
                        type="text"
                        className="px-2.5 pb-4 pt-4 mt-3"
                    />
                </div>

                <div className="grid grid-cols-5 gap-3">
                    <FloatLabelInput
                        width="w-full"
                        idInput="BankInputDestiny"
                        title="Rateio"
                        type="text"
                        className="px-2.5 pb-4 pt-4 mt-3"
                    />

                    <FloatLabelInput
                        width="w-full"
                        idInput="BankInputDestiny"
                        title="Modalidade SPB"
                        type="text"
                        className="px-2.5 pb-4 pt-4 mt-3"
                    />

                    <FloatLabelInput
                        width="w-full"
                        idInput="BankInputDestiny"
                        title="Série Recibo"
                        type="text"
                        className="px-2.5 pb-4 pt-4 mt-3"
                    />


                    <FloatLabelInput
                        width="w-full"
                        idInput="BankInputDestiny"
                        title="Movimento"
                        type="text"
                        className="px-2.5 pb-4 pt-4 mt-3"
                    />


                    <FloatLabelInput
                        width="w-full"
                        idInput="BankInputDestiny"
                        title="Processo Transferencia"
                        type="text"
                        className="px-2.5 pb-4 pt-4 mt-3"
                    />
                </div>

            </div>

            <div className="grid grid-cols-5 mt-5 gap-3">

                <FloatLabelInput
                    width="w-full"
                    idInput="BankInputDestiny"
                    title="SEQ. Diario"
                    type="text"
                    className="px-2.5 pb-4 pt-4 mt-3"
                />

                <FloatLabelInput
                    width="w-full"
                    idInput="BankInputDestiny"
                    title="Cod. Diário"
                    type="text"
                    className="px-2.5 pb-4 pt-4 mt-3"
                />

                <FloatLabelInput
                    width="w-full"
                    idInput="BankInputDestiny"
                    title="St. DMED"
                    type="text"
                    className="px-2.5 pb-4 pt-4 mt-3"
                />

                <FloatLabelInput
                    width="w-full"
                    idInput="BankInputDestiny"
                    title="Prov. INSS"
                    type="text"
                    className="px-2.5 pb-4 pt-4 mt-3"
                />

                <FloatLabelInput
                    width="w-full"
                    idInput="BankInputDestiny"
                    title="Prov. ISS"
                    type="text"
                    className="px-2.5 pb-4 pt-4 mt-3"
                />

                <FloatLabelInput
                    width="w-full"
                    idInput="BankInputDestiny"
                    title="Data Cancel. BX"
                    type="text"
                    className="px-2.5 pb-4 pt-4 mt-3"
                />

                <FloatLabelInput
                    width="w-full"
                    idInput="BankInputDestiny"
                    title="ID Movimento"
                    type="text"
                    className="px-2.5 pb-4 pt-4 mt-3"
                />

                <FloatLabelInput
                    width="w-full"
                    idInput="BankInputDestiny"
                    title="Centro de Custo"
                    type="text"
                    className="px-2.5 pb-4 pt-4 mt-3"
                />

                <FloatLabelInput
                    width="w-full"
                    idInput="BankInputDestiny"
                    title="Ent. Deb. 05"
                    type="text"
                    className="px-2.5 pb-4 pt-4 mt-3"
                />

                <FloatLabelInput
                    width="w-full"
                    idInput="BankInputDestiny"
                    title="Ent. Cred. 05"
                    type="text"
                    className="px-2.5 pb-4 pt-4 mt-3"
                />
            </div>

        </>
    )
}


export default LowBaixa