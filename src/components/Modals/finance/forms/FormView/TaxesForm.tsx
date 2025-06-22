"use client"

import FloatLabelInput from "@/components/UI/FloatLabelInput/FloatLabelInput";

interface FormProp {
  data: any;
  isEdit: boolean;
  onChange: (field:any, value:any) => void
}

const TaxesForm = (props:FormProp) => {
  return (
    <>
      <div className="w-full flex flex-col gap-6 pt-3">
        <div className="w-full grid grid-cols-5 gap-4">
          <FloatLabelInput
            width="w-full"
            idInput="IssInput"
            title="ISS"
            type="text"
            value={props.data.ISS || ''}
            disabled={props.isEdit}
            onChange={e => props.onChange('Iss',e.target.value )}
            className={`px-2.5 pb-4 pt-4`}
          />

          <FloatLabelInput
            width="w-full"
            idInput="IrInput"
            title="IR"
            type="text"
            value={props.data.IR || ''}
            disabled={props.isEdit}
            onChange={e => props.onChange('IR',e.target.value )}
            className={`px-2.5 pb-4 pt-4`}
          />

          <FloatLabelInput
            width="w-full"
            idInput="PISInput"
            title="PIS - Pasep"
            type="text"
            value={props.data.Inss || ''}
            disabled={props.isEdit}
            onChange={e => props.onChange('Inss',e.target.value )}
            className={`px-2.5 pb-4 pt-4`}
          />

          <FloatLabelInput
            width="w-full"
            idInput="CSLLInput"
            title="CSLL"
            type="text"
            value={props.data.CSLL || ''}
            disabled={props.isEdit}
            onChange={e => props.onChange('CSLL',e.target.value )}
            className={`px-2.5 pb-4 pt-4`}
          />

          <FloatLabelInput
            width="w-full"
            idInput="CofinsInput"
            title="Cofins"
            type="text"
            value={props.data.Cofins || ''}
            disabled={props.isEdit}
            onChange={e => props.onChange('Cofins',e.target.value )}
            className={`px-2.5 pb-4 pt-4`}
          />

        </div>

      </div>
    </>
  );
};
export default TaxesForm;
