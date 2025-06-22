"use client"

import FloatLabelInput from "@/components/UI/FloatLabelInput/FloatLabelInput"

const AccountsPayReport = () => {
    return (
        <>

            <div className="flex flex-row divide-x-2 justify-center py-2">

                <div className="pr-8">
                    <div className="flex flex-row gap-7 pt-4">
                        <FloatLabelInput
                            width="w-full"
                            idInput="NumberPt1"
                            title="De Número"
                            type="text"
                            disabled={false}
                            className="px-2.5 pb-4 pt-4 mt-3"
                        />

                        <FloatLabelInput
                            width="w-full"
                            idInput="NumberPt2"
                            title="Até Número"
                            type="text"
                            disabled={false}
                            className="px-2.5 pb-4 pt-4 mt-3"
                        />
                    </div>

                    <div className="flex flex-row gap-7 pt-4">
                        <FloatLabelInput
                            width="w-full"
                            idInput="PrefixoPt1"
                            title="De Prefixo"
                            type="text"
                            disabled={false}
                            className="px-2.5 pb-4 pt-4 mt-3"
                        />

                        <FloatLabelInput
                            width="w-full"
                            idInput="PrefixoPt2"
                            title="Até Prefixo"
                            type="text"
                            disabled={false}
                            className="px-2.5 pb-4 pt-4 mt-3"
                        />
                    </div>

                    <div className="flex flex-row gap-7 pt-4">
                        <FloatLabelInput
                            width="w-full"
                            idInput="NaturePt1"
                            title="De Natureza"
                            type="text"
                            disabled={false}
                            className="px-2.5 pb-4 pt-4 mt-3"
                        />

                        <FloatLabelInput
                            width="w-full"
                            idInput="NaturePt2"
                            title="Até Natureza"
                            type="text"
                            disabled={false}
                            className="px-2.5 pb-4 pt-4 mt-3"
                        />
                    </div>

                    <div className="flex flex-row gap-7 pt-4">
                        <FloatLabelInput
                            width="w-full"
                            idInput="VencimentoPt1"
                            title="De Vencimento"
                            type="text"
                            disabled={false}
                            className="px-2.5 pb-4 pt-4 mt-3"
                        />

                        <FloatLabelInput
                            width="w-full"
                            idInput="VencimentoPt2"
                            title="Até Vencimento"
                            type="text"
                            disabled={false}
                            className="px-2.5 pb-4 pt-4 mt-3"
                        />
                    </div>

                    <div className="flex flex-row gap-7 pt-4">
                        <FloatLabelInput
                            width="w-full"
                            idInput="BankPt1"
                            title="De Banco"
                            type="text"
                            disabled={false}
                            className="px-2.5 pb-4 pt-4 mt-3"
                        />

                        <FloatLabelInput
                            width="w-full"
                            idInput="BankPt2"
                            title="Até Banco"
                            type="text"
                            disabled={false}
                            className="px-2.5 pb-4 pt-4 mt-3"
                        />
                    </div>

                    <div className="flex flex-row gap-7 pt-4">
                        <FloatLabelInput
                            width="w-full"
                            idInput="FornecedorPt1"
                            title="De Fornecedor"
                            type="text"
                            disabled={false}
                            className="px-2.5 pb-4 pt-4 mt-3"
                        />

                        <FloatLabelInput
                            width="w-full"
                            idInput="FornecedorPt2"
                            title="Até Fornecedor"
                            type="text"
                            disabled={false}
                            className="px-2.5 pb-4 pt-4 mt-3"
                        />
                    </div>
                </div>

                <div className="pl-8">
                    <div className="flex flex-row gap-7 pt-4">
                        <FloatLabelInput
                            width="w-full"
                            idInput="EmissionPt1"
                            title="De Emissão"
                            type="text"
                            disabled={false}
                            className="px-2.5 pb-4 pt-4 mt-3"
                        />

                        <FloatLabelInput
                            width="w-full"
                            idInput="EmissionPt2"
                            title="Até Emissão"
                            type="text"
                            disabled={false}
                            className="px-2.5 pb-4 pt-4 mt-3"
                        />
                    </div>

                    <div className="flex flex-row gap-7 pt-4">
                        <FloatLabelInput
                            width="w-full"
                            idInput="CoinPt1"
                            title="Qual a moeda"
                            type="text"
                            disabled={false}
                            className="px-2.5 pb-4 pt-4 mt-3"
                        />

                        <FloatLabelInput
                            width="w-full"
                            idInput="CoinPt2"
                            title="Imprime provisórios"
                            type="text"
                            disabled={false}
                            className="px-2.5 pb-4 pt-4 mt-3"
                        />
                    </div>

                    <div className="flex flex-row gap-7 pt-4">
                        <FloatLabelInput
                            width="w-full"
                            idInput="DataContabilPt1"
                            title="Da Data Contábil"
                            type="text"
                            disabled={false}
                            className="px-2.5 pb-4 pt-4 mt-3"
                        />

                        <FloatLabelInput
                            width="w-full"
                            idInput="DataContabilPt2"
                            title="Até a Data Contabil"
                            type="text"
                            disabled={false}
                            className="px-2.5 pb-4 pt-4 mt-3"
                        />
                    </div>

                    <div className="flex flex-row gap-7 pt-4">
                        <FloatLabelInput
                            width="w-full"
                            idInput="RelatorioTypePt1"
                            title="Tipo Relatorio"
                            type="text"
                            disabled={false}
                            className="px-2.5 pb-4 pt-4 mt-3"
                        />

                        <FloatLabelInput
                            width="w-full"
                            idInput="RelatorioTypePt2"
                            title="Compoem Saldo Rotativo"
                            type="text"
                            disabled={false}
                            className="px-2.5 pb-4 pt-4 mt-3"
                        />
                    </div>

                    <div className="flex flex-row gap-7 pt-4">
                        <FloatLabelInput
                            width="w-full"
                            idInput="FilialPt1"
                            title="De Filial"
                            type="text"
                            disabled={false}
                            className="px-2.5 pb-4 pt-4 mt-3"
                        />

                        <FloatLabelInput
                            width="w-full"
                            idInput="FilialPt2"
                            title="Até Filial"
                            type="text"
                            disabled={false}
                            className="px-2.5 pb-4 pt-4 mt-3"
                        />
                    </div>

                    <div className="flex flex-row gap-7 pt-4">
                        <FloatLabelInput
                            width="w-full"
                            idInput="ConsidAdiantamentoPt1"
                            title="Considera Adiantamento"
                            type="text"
                            disabled={false}
                            className="px-2.5 pb-4 pt-4 mt-3"
                        />

                        <FloatLabelInput
                            width="w-full"
                            idInput="ConsidAdiantamentoPt2"
                            title="Imprime Nome"
                            type="text"
                            disabled={false}
                            className="px-2.5 pb-4 pt-4 mt-3"
                        />
                    </div>
                </div>

            </div>
        </>
    )
}

export default AccountsPayReport