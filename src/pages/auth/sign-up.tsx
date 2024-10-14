import { z } from "zod";
import { HiOutlineUser, HiOutlinePhone } from "react-icons/hi2";
import { HiEye } from "react-icons/hi";
import { MdArrowRightAlt } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

import Input from "@/components/input";
import PageTitle from "@/components/page-title";
import UploadFile from "@/components/upload-file";
import EmailInput from "@/components/email-input";
import PasswordInput from "@/components/password-Input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ACCEPTED_IMAGE_TYPE = ['image/pbg']

const fileUploadForm = z.object({
  file: z
    .custom<FileList>()
    .refine((files) => {
      return Array.from(files ?? []).length !== 0;
    }, "A imagem do produto é obrigatória.")
    .refine((files) => {
      return Array.from(files ?? []).every((file) => 
        ACCEPTED_IMAGE_TYPE.includes(file.type)
      )
    })
})

type FileUploadForm = z.infer<typeof fileUploadForm>

export default function SignUp() {
  const navigate = useNavigate()

  return (
    <div className="bg-white w-full p-20 mb-5 rounded-lg">
      <PageTitle 
        title='Crie sua conta' 
        subTitle='Informe os seus dados pessoais e de acesso'
      />

      <form action="" className="mt-10 mb-20">
        <fieldset className="mt-12">
          <legend className="font-dmsans text-lg font-bold">Perfil</legend>
          <UploadFile />
          <Input 
            placeholder="Seu nome completo" 
            label="Nome" 
            LeftIcon={HiOutlineUser} 
          />
          <Input 
            placeholder="(00) 00000-0000" 
            label="Telefone" 
            type="tel"
            LeftIcon={HiOutlinePhone} 
          />
        </fieldset>
        <fieldset className="my-12">
          <legend className="font-dmsans text-lg font-bold">Acesso</legend>
          <EmailInput />
          <PasswordInput />
          <Input 
            type="password" 
            label="Confirmar senha"
            placeholder="Confirme a senha" 
            LeftIcon={RiLockPasswordLine}
            RightIcon={HiEye}
          />
        </fieldset>
        <Button type="submit" className="w-full p-5 rounded-md flex justify-between " variant='orange'>
          <span className="font-poppins text-base font-medium">
            Cadastrar
          </span> 
          <MdArrowRightAlt className="w-6 h-6 text-white"/>
        </Button>    
      </form>

      <div>
        <span className="font-poppins text-base font-normal text-gray-300">
          Já tem uma conta?
        </span>

        <Button onClick={() => navigate('/sign-in')} className="mt-5 w-full p-5 rounded-md flex justify-between" variant='outline'>
          <span className="font-poppins text-base text-orangebase font-medium">
            Acessar
          </span> 
          <MdArrowRightAlt className="w-6 h-6 text-orangebase hover:text-orangedark"/>
        </Button> 
      </div>
    </div>
  )
}