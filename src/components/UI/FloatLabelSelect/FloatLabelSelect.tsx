import { Lock } from "lucide-react";

interface FloatLabelSelectProps {
  title: string;
  idSelect?: string;
  placeHolder?: string;
  bgColor?: string;
  width?: string;
  options: { value: any; label: string }[];
  onChange: (value: any) => void;
  value?: any;
  disabled?: boolean;
}

const FloatLabelSelect = (props: FloatLabelSelectProps) => {
  const disabledStyle = "bg-gray-300/40 cursor-not-allowed pr-12";

  const bgColor = props.disabled ? disabledStyle : props.bgColor;

  return (
    <>
      <div className="relative w-full">
        <select
          id={props.idSelect}
          className={`${bgColor} ${props.width} px-2.5 pb-4 pt-4 block bg-black dark:bg-bgDefaultDark text-sm text-gray-900 rounded-2xl border focus:border-gray-200 border-gray-200 dark:border-transparent shadow-md dark:shadow-slate-900 appearance-none dark:text-white focus:ring-0 peer`}
          onChange={(e) => props.onChange(e.target.value)}
          value={props.value}
          disabled={props.disabled}
        >
          <option value="" selected disabled>
            {props.placeHolder}
          </option>
          {props.options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {props?.disabled && (
          <Lock className="absolute right-8 top-1/2 -translate-y-1/2 cursor-not-allowed text-gray-600" />
        )}
        <label
          htmlFor={props.idSelect}
          className="absolute select-none cursor-text text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-0 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:text-[#EC671A] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          {props.title}
        </label>
      </div>
    </>
  );
};
export default FloatLabelSelect;
