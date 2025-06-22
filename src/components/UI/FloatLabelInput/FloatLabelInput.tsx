import { Lock } from "lucide-react";

interface FloatLabelProps {
  title: string;
  idInput: string;
  type: string;
  width: string;
  className: string;
  value?: any;
  onChange?: (e: any) => void;
  disabled?: boolean;
  maxLength?: number;
  minLength?: number;
  required?: boolean;
}

const FloatLabelInput = (props: FloatLabelProps) => {
  const disabledStyle = props.disabled ? "bg-gray-300/40 cursor-not-allowed pr-12" : "";

  return (
    <>
      <div className={`relative ${props.width}`}>
        <input
          type={props.type}
          id={props.idInput}
          className={`${props.className} ${disabledStyle} dark:bg-bgDefaultDark w-full block text-sm text-gray-900 rounded-2xl border focus:border-gray-200 border-gray-200 dark:border-transparent shadow-md dark:shadow-slate-900 appearance-none dark:text-white focus:ring-0 peer`}
          placeholder=""
          onChange={props.onChange}
          value={props.value}
          disabled={props.disabled}
          maxLength={props.maxLength}
          minLength={props.minLength}
          required={props.required}
        />
        {props?.disabled && <Lock className="absolute right-5 top-1/2 cursor-not-allowed -translate-y-1/2 text-gray-600"/>}
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
export default FloatLabelInput;
