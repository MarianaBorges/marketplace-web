import { api } from "@/lib/axios"
import { useMutation } from "@tanstack/react-query"

interface SignInRequest {
  email: string;
  password: string;
}

interface SignInResponse {
  accessToken: string;
}

export const useSignIn = () => {
  return useMutation<SignInResponse, unknown, SignInRequest>({
    mutationFn: ({email, password}) => api.post('sellers/sessions', {email, password}).then(response => response.data)}
  )
}
