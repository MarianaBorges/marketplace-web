import { HiOutlineMail } from "react-icons/hi";
import Input from "./input";

interface EmailInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function EmailInput({ ...rest }: EmailInputProps) {
  return (
      <Input 
        {...rest}
        type="email" 
        label="E-mail" 
        placeholder="Seu e-mail cadastrado" 
        LeftIcon={HiOutlineMail}
      />
  )
}