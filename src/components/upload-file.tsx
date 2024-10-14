import { TbBookUpload } from "react-icons/tb";

interface UploadFile extends React.InputHTMLAttributes<HTMLInputElement>{
  register?: any;
  error?: string;
}

export default function UploadFile({register, error, ...rest}: UploadFile) {

  return(
    <div className="space-y-4 mt-5">
      <label className="w-[7.5rem] aspect-square overflow-hidden bg-shape rounded-xl flex items-center justify-center ">
        <TbBookUpload className="size-8 text-orangebase"/>
        <input className="hidden" type="file" {...register} {...rest} />
      </label>
      {error && (
        <span className="text-danger">
          {error}
        </span>
      )}
    </div>
  )
}