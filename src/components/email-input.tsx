import { HiOutlineMail } from "react-icons/hi";
import Input from "./input";

interface EmailInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  register?: any;
}

export default function EmailInput({ register = null, ...rest }: EmailInputProps) {
  return (
      <Input 
        {...rest}
        type="email" 
        label="E-mail" 
        placeholder="Seu e-mail cadastrado" 
        LeftIcon={HiOutlineMail}
        register={register}
      />
  )
}