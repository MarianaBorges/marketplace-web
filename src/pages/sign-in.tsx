import { MdArrowRightAlt } from "react-icons/md";
import PageTitle from "@/components/page-title";
import PasswordInput from "@/components/password-Input";
import EmailInput from "@/components/email-input";
import { Button } from "@/components/ui/button";

export default function SignIn(){
  return (
    <div className="bg-white flex-1 p-20 rounded-lg">
      <div className="flex h-full flex-col justify-between">
        <div>
          <PageTitle 
            title='Acesse sua conta' 
            subTitle='Informe seu e-mail e senha para entrar'
            />

          <form action="" className="mt-12">
            <EmailInput />
            <PasswordInput />

            <Button className="w-full mt-12 p-5 rounded-md flex justify-between " variant='orange'>
              <span className="font-poppins text-base font-medium">Acessar</span> 
              <MdArrowRightAlt className="w-6 h-6 text-white"/>
            </Button>      
          </form>
        </div>

        <div>
          <span className="font-poppins text-base font-normal text-gray-300">
            Ainda não tem uma conta?
          </span>

          <Button className="mt-5 w-full p-5 rounded-md flex justify-between" variant='outline'>
            <span className="font-poppins text-base text-orangebase font-medium">Cadastrar</span> 
            <MdArrowRightAlt className="w-6 h-6 text-orangebase hover:text-orangedark"/>
          </Button> 
        </div>
      </div>
    </div>
  )
}