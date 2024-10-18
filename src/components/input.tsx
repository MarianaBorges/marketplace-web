import { ElementType } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
  register?: any;
  error?: FieldError | undefined;
  RightIcon?: ElementType;
  LeftIcon?: ElementType;
}

export default function Input({
  LeftIcon,
  RightIcon,
  label,
  placeholder,
  error = undefined,
  register = null,
  ...rest
}: InputProps) {
  return (
    <div className="mt-5">
      <label className="font-poppins font-medium text-gray-300 text-xs">{label.toLocaleUpperCase()}</label>
      <div className="flex justify-between border-b-[1px] border-gray-300 py-3">
        {LeftIcon ? <LeftIcon className="w-6 h-6 text-gray-300 mr-1" /> : null}
        <input {...register} className="w-full placeholder-gray-200 font-poppins font-medium text-base" placeholder={placeholder} {...rest}/>
        {RightIcon ? <RightIcon className="w-6 h-6 text-gray-200"/> : null}
      </div>
      {error && <span className="font-poppins font-normal text-red-600 text-xs">
        {error.message}
      </span>}
    </div>
  )
}