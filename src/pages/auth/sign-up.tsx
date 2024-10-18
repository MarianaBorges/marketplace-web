import { z } from "zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
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
import { useNewSeller } from "@/service/auth.service";
import { toast } from "@/hooks/use-toast";

// const ACCEPTED_IMAGE_TYPE = ['image/pbg']

// const fileUploadForm = z.object({
//   file: z
//     .custom<FileList>()
//     .refine((files) => {
//       return Array.from(files ?? []).length !== 0;
//     }, "A imagem do produto é obrigatória.")
//     .refine((files) => {
//       return Array.from(files ?? []).every((file) => 
//         ACCEPTED_IMAGE_TYPE.includes(file.type)
//       )
//     })
// })

const sellersForm = z.object({
  name: z.string(),
  phone: z.string().min(11, {message: 'Verifique se o telefone está correto'}).max(11, {message: 'Verifique se o telefone está correto'}),
  email: z.string().email({message: 'Email inválido'}),
  avatarId: z.string().nullable(),
  password: z.string(),
  passwordConfirmation: z.string()
})

// type FileUploadForm = z.infer<typeof fileUploadForm>

type SellersForm = z.infer<typeof sellersForm>

export default function SignUp() {

  const navigate = useNavigate()
  const { register, handleSubmit, formState: {errors} } = useForm<SellersForm>()

  const { mutateAsync: createNewSeller } = useNewSeller()

  const onSubmit = async (data: SellersForm) => { 
    const newSeller = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      avatarId: null,
      password: data.password,
      passwordConfirmation: data.passwordConfirmation
    }
    console.log(newSeller)
    try {
      await createNewSeller(newSeller)

      toast({
        title: 'Cadastro efetuado com sucesso!'
      })
      
      navigate('/sign-in')
    } catch (error) {
      
      if (error.response.status === 400) {
        toast({
          title: 'Algo deu errado!',
          variant: "destructive",
          description: "Verifique seus dados e tente novamente",
        })
      }
      if (error.response.status === 404) {
        toast({
          title: 'Algo deu errado!',
          variant: "destructive",
          description: "Verifique seus dados e tente novamente",
        })
      }
      if (error.response.status === 409) {
        toast({
          title: 'Algo deu errado!',
          variant: "destructive",
          description: "Email já cadastrado",
        })
      }
    }
  }


  return (
    <div className="bg-white w-full p-20 mb-5 rounded-lg">
      <PageTitle 
        title='Crie sua conta' 
        subTitle='Informe os seus dados pessoais e de acesso'
      />

      <form onSubmit={handleSubmit(onSubmit)} className="mt-10 mb-20">
        <fieldset className="mt-12">
          <legend className="font-dmsans text-lg font-bold">Perfil</legend>
          <UploadFile />
          <Input 
            placeholder="Seu nome completo" 
            label="Nome" 
            LeftIcon={HiOutlineUser} 
            register={register('name')}
            error={errors.name}
          />
          <Input 
            placeholder="(00) 00000-0000" 
            label="Telefone" 
            type="tel"
            LeftIcon={HiOutlinePhone}
            register={register('phone')}
          />
        </fieldset>
        <fieldset className="my-12">
          <legend className="font-dmsans text-lg font-bold">Acesso</legend>
          <EmailInput register={register('email')} />
          <PasswordInput register={register('password')} />
          <Input 
            type="password" 
            label="Confirmar senha"
            placeholder="Confirme a senha" 
            LeftIcon={RiLockPasswordLine}
            RightIcon={HiEye}
            register={register('passwordConfirmation')}
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
