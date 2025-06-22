"use client"

import FloatLabelInput from "@/components/UI/FloatLabelInput/FloatLabelInput";

interface FormProp {
  data: any;
  isEdit: boolean;
  onChange: (field:any, value:any) => void
}

const BankForm = (props:FormProp) => {
  return (
    <>
      <div className="w-full flex flex-col gap-3 pt-3">
        <div className="w-full flex flex-row gap-4">
          <FloatLabelInput
            width="w-1/4"
            idInput="CarrierInput"
            title="Portador"
            type="text"
            value={props.data.Carrier || ''}
            disabled={props.isEdit}
            onChange={e => props.onChange('Carrier',e.target.value )}
            className={`px-2.5 pb-4 pt-4`}
          />

          <FloatLabelInput
            width="w-1/4"
            idInput="ModPayInput"
            title="Mod. Pagto."
            type="text"
            value={props.data.ModPay || ''}
            disabled={props.isEdit}
            onChange={e => props.onChange('ModPay',e.target.value )}
            className={`px-2.5 pb-4 pt-4`}
          />

          <FloatLabelInput
            width="w-1/2"
            idInput="CodBarsInput"
            title="Cód. Barras"
            type="text"
            value={props.data.CodBars || ''}
            disabled={props.isEdit}
            onChange={e => props.onChange('CodBars',e.target.value )}
            className={`px-2.5 pb-4 pt-4`}
          />
        </div>

        <div className="w-full flex flex-row gap-4">
          <FloatLabelInput
            width="w-full"
            idInput="DigLineInput"
            title="Linha Dig."
            type="text"
            value={props.data.DigLine || ''}
            disabled={props.isEdit}
            onChange={e => props.onChange('DigLine',e.target.value )}
            className={`px-2.5 pb-4 pt-4`}
          />

          <FloatLabelInput
            width="w-full"
            idInput="BankForInput"
            title="Banco For."
            type="text"
            value={props.data.BankFor || ''}
            disabled={props.isEdit}
            onChange={e => props.onChange('BankFor',e.target.value )}
            className={`px-2.5 pb-4 pt-4`}
          />

          <FloatLabelInput
            width="w-full"
            idInput="AgenciaForInput"
            title="Agência For."
            type="text"
            value={props.data.AgencyFor || ''}
            disabled={props.isEdit}
            onChange={e => props.onChange('AgencyFor',e.target.value )}
            className={`px-2.5 pb-4 pt-4`}
          />

          <FloatLabelInput
            width="w-full"
            idInput="AgencyDVInput"
            title="DV. Agência"
            type="text"
            value={props.data.AgencyDv || ''}
            disabled={props.isEdit}
            onChange={e => props.onChange('AgencyDv',e.target.value )}
            className={`px-2.5 pb-4 pt-4`}
          />
        </div>

        <div className="w-full flex flex-row gap-4 mt-12">
          <FloatLabelInput
            width="w-full"
            idInput="AccountForInput"
            title="Conta For."
            type="text"
            value={props.data.AccountFor || ''}
            disabled={props.isEdit}
            onChange={e => props.onChange('AccountFor',e.target.value )}
            className={`px-2.5 pb-4 pt-4`}
          />

          <FloatLabelInput
            width="w-full"
            idInput="AccountDvInput"
            title="DV. Conta"
            type="text"
            value={props.data.AccountDv || ''}
            disabled={props.isEdit}
            onChange={e => props.onChange('AccountDv',e.target.value )}
            className={`px-2.5 pb-4 pt-4`}
          />

          <FloatLabelInput
            width="w-full"
            idInput="FormPayInput"
            title="Forma Pagto."
            type="text"
            value={props.data.FormPay || ''}
            disabled={props.isEdit}
            onChange={e => props.onChange('FormPay',e.target.value )}
            className={`px-2.5 pb-4 pt-4`}
          />

          <FloatLabelInput
            width="w-full"
            idInput="AgendaDateInput"
            title="Data Agenda."
            type="text"
            value={props.data.AgendaDate || ''}
            disabled={props.isEdit}
            onChange={e => props.onChange('AgendaDate',e.target.value )}
            className={`px-2.5 pb-4 pt-4`}
          />
        </div>
      </div>
    </>
  );
};
export default BankForm;
