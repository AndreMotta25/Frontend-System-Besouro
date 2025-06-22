import InputMask from "react-input-mask";
import { Lock } from "lucide-react";

interface FloatLabelProps {
  title: string;
  idInput: string;
  type: string;
  width: string;
  className: string;
  value?: string;
  onChange: (e: any) => void;
  disabled?: boolean;
  required?: boolean;
  mask: string;
  placeholder?: string;
}

const FloatLabelMaskedInput = (props: FloatLabelProps) => {
  const disabledStyle = props.disabled
    ? "bg-gray-300/40 cursor-not-allowed pr-12"
    : "";

  return (
    <>
      <div className={`relative ${props.width}`}>
        <InputMask
          type={props.type}
          id={props.idInput}
          className={`${props.className} ${disabledStyle} dark:bg-bgDefaultDark w-full block bg-transparent text-sm text-gray-900 rounded-2xl border-0 shadow-md dark:shadow-slate-900 appearance-none dark:text-white focus:outline-none focus:ring-0 peer`}
          onChange={props.onChange}
          value={props.value}
          disabled={props.disabled}
          required={props.required}
          mask={props.mask}
          maskChar={""}
          placeholder={props.placeholder}
        />
        {props?.disabled && (
          <Lock className="absolute right-5 top-1/2 -translate-y-1/2 cursor-not-allowed text-gray-600" />
        )}
        <label
          htmlFor={props.idInput}
          className="absolute select-none cursor-text text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-0 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:text-[#EC671A] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          {props.title}
        </label>
      </div>
    </>
  );
};
export default FloatLabelMaskedInput;
