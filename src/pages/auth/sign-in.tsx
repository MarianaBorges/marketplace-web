import { MdArrowRightAlt } from "react-icons/md";
import { z } from 'zod'
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";

import PageTitle from "@/components/page-title";
import PasswordInput from "@/components/password-Input";
import EmailInput from "@/components/email-input";
import { Button } from "@/components/ui/button";

import { useSignIn } from "@/service/auth.service";
import { useToast } from "@/hooks/use-toast";

const signInForm = z.object({
  email: z.string().email(),
  password: z.string()
}).required()

export type SignInType = z.infer<typeof signInForm>

export default function SignIn(){
  const {
    register,
    handleSubmit,
  } = useForm<SignInType>()
  const { toast } = useToast()
  const navigate = useNavigate()

  const { mutateAsync: authenticate } = useSignIn()

  const onSubmit = async ({email, password}: SignInType) => {
    try {
      const response = await authenticate({email, password})
      // console.log(response)
      navigate('/app/dashboard')
      toast({
        title: 'Bem vindo a plataforma!'
      })
    } catch (error) {
      toast({
        title: 'Algo deu errado!',
        variant: "destructive",
        description: "Verifique seu e-mail e a senha e tente novamente",
      })
    }
  }

  return (
    <div className="bg-white flex-1 p-20 rounded-lg">
      <div className="flex h-full flex-col justify-between">
        <div>
          <PageTitle 
            title='Acesse sua conta' 
            subTitle='Informe seu e-mail e senha para entrar'
            />

          <form  onSubmit={handleSubmit(onSubmit)} className="mt-12">
            <EmailInput register={register('email')}/>
            <PasswordInput register={register('password')} />

            <Button type="submit" className="w-full mt-12 p-5 rounded-md flex justify-between " variant='orange'>
              <span className="font-poppins text-base font-medium">Acessar</span> 
              <MdArrowRightAlt className="w-6 h-6 text-white"/>
            </Button>      
          </form>
        </div>

        <div>
          <span className="font-poppins text-base font-normal text-gray-300">
            Ainda não tem uma conta?
          </span>

          <Button onClick={() => onSubmit({email: 'mary@gmail.com', password: '123dcfrvgt'})} className="mt-5 w-full p-5 rounded-md flex justify-between" variant='outline'>
            <span className="font-poppins text-base text-orangebase font-medium">Cadastrar</span> 
            <MdArrowRightAlt className="w-6 h-6 text-orangebase hover:text-orangedark"/>
          </Button> 
        </div>
      </div>
    </div>
  )
}
