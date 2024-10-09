import { HiEye } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";

import Input from "./input";

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function PasswordInput({ label = 'Senha', ...rest }: PasswordInputProps) {
  return (
      <Input 
        {...rest}
        type="password" 
        label={label}
        placeholder="Sua senha de acesso" 
        LeftIcon={RiLockPasswordLine}
        RightIcon={HiEye}
      />
  )
}