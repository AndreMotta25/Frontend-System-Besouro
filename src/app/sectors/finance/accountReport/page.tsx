"use client"

import FinanceLayout from "../financeLayout"
import { CircleHelp } from 'lucide-react';
import AccountsPayReport from "@/components/Forms/AccountsPayReport/AccountsPayReport";
import FloatLabelInput from "@/components/UI/FloatLabelInput/FloatLabelInput";
import { useState } from "react";


const AccountReport = () => {
    return (
        <>
            <FinanceLayout >
                <AccountReportArea/>
            </FinanceLayout>
        </>
    )
}

const AccountReportArea = () => {

    const [typeDownload, setTypeDownload] = useState('')
    const [helperTooltipOpen, setHelperTooltipOpen] = useState(false)

    return (
        <>
            <div className="flex flex-col w-full">
                <span className="font-semibold text-2xl text-orangeSupport">Relatórios de Contas a Pagar</span>
                <span className="text-gray-500 ">Preencha os parametros para gerar o relatório</span>
            </div>

            <div className="w-full flex flex-row justify-center items-center gap-4">

                <div className="w-1/5 flex flex-row bg-white dark:bg-gray-800 text-orangeSupport justify-between py-3 px-8 rounded-full">
                    <label onClick={() => setTypeDownload('PDF')} className={`cursor-pointer p-2 rounded-3xl text-base select-none ${typeDownload == 'PDF' && 'bg-orangeSupport text-white'}`}>PDF</label>
                    <label onClick={() => setTypeDownload('CSV')} className={`cursor-pointer p-2 rounded-3xl text-base select-none ${typeDownload == 'CSV' && 'bg-orangeSupport text-white'}`}>CSV</label>
                    <label onClick={() => setTypeDownload('XLSX')} className={`cursor-pointer p-2 rounded-3xl text-base select-none ${typeDownload == 'XLSX' && 'bg-orangeSupport text-white'}`}>XLSX</label>
                </div>

                <CircleHelp
                    data-tooltip-target={`tooltip-bottom-helper`}
                    data-tooltip-placement="right"
                    onMouseEnter={() => setHelperTooltipOpen(true)}
                    onMouseLeave={() => setHelperTooltipOpen(false)}
                    className="cursor-pointer text-gray-500" />
                <div
                    id={`tooltip-bottom-helper`}
                    role="tooltip"
                    className={`absolute z-10 border-2 ${helperTooltipOpen ? "inline-block" : "invisible"} 
                        bg-white dark:bg-gray-800 w-72
                        px-3 py-2 text-sm font-medium text-center rounded-lg shadow-xl tooltip`}
                >
                    <label className="font-semibold">Escolha o Formato da exportação</label><br />
                    <p className="text-justify font-light mt-1">Selecione entre os tipos de formato para a exportação do  Relatorio</p>
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
            </div>


            {/* Formulario 1 */}
            <div className="w-11/12 mt-7 mx-auto bg-white dark:bg-gray-800 rounded-xl">
                <AccountsPayReport />
            </div>

            {/* Formulario 2 */}
            <div className="w-11/12 mt-4 mx-auto bg-white dark:bg-gray-800 rounded-xl">

                <div className="grid grid-cols-4 gap-5 justify-center py-6 px-12">
                    <FloatLabelInput
                        width="w-full"
                        idInput="OtherCoin"
                        title="Outra moedas"
                        type="text"
                        disabled={false}
                        className="px-2.5 pb-4 pt-4 mt-3"
                    />

                    <FloatLabelInput
                        width="w-full"
                        idInput="ImprimirTipos"
                        title="Imprimir tipos"
                        type="text"
                        disabled={false}
                        className="px-2.5 pb-4 pt-4 mt-3"
                    />

                    <FloatLabelInput
                        width="w-full"
                        idInput="dataBase"
                        title="Data Base"
                        type="text"
                        disabled={false}
                        className="px-2.5 pb-4 pt-4 mt-3"
                    />

                    <FloatLabelInput
                        width="w-full"
                        idInput="CompoeSaldoPor"
                        title="Compoe Saldo por"
                        type="text"
                        disabled={false}
                        className="px-2.5 pb-4 pt-4 mt-3"
                    />

                    <FloatLabelInput
                        width="w-full"
                        idInput="QuantoATaxa"
                        title="Quanto a Taxa"
                        type="text"
                        disabled={false}
                        className="px-2.5 pb-4 pt-4 mt-3"
                    />

                    <FloatLabelInput
                        width="w-full"
                        idInput="TitEmissionFatura"
                        title="Tit. Emissão Fatura"
                        type="text"
                        disabled={false}
                        className="px-2.5 pb-4 pt-4 mt-3"
                    />

                    <FloatLabelInput
                        width="w-full"
                        idInput="SelectFilial"
                        title="Selecionar Filiais"
                        type="text"
                        disabled={false}
                        className="px-2.5 pb-4 pt-4 mt-3"
                    />

                    <FloatLabelInput
                        width="w-full"
                        idInput="ConsidTitulosExlu"
                        title="Considera Titulos Excluidos"
                        type="text"
                        disabled={false}
                        className="px-2.5 pb-4 pt-4 mt-3"
                    />
                </div>

            </div>


            <button className="rounded-xl fixed bottom-4 right-5 p-5 bg-white dark:bg-gray-700 shadow-2xl cursor-pointer hover:-translate-y-1 ease-in duration-75">
                <label className="text-sm text-orangeSupport cursor-pointer">
                    Gerar Relatorio
                </label>
            </button>
        </>
    )
}


export default AccountReport