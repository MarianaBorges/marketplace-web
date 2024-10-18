import { api } from "@/lib/axios"
import { useMutation } from "@tanstack/react-query"
import {
  SignInRequest,
  SignInResponse,
  AttachmentsRequest,
  AttachmentsResponse,
  SellersRequest,
  SellersResponse
} from "./types"

export const useSignIn = () => {
  return useMutation<SignInResponse, unknown, SignInRequest>({
    mutationFn: ({email, password}) => api.post('sellers/sessions', {email, password}).then(response => response.data)}
  )
}

export const useAttachments = () => {
  return useMutation<AttachmentsResponse,unknown,AttachmentsRequest>({
    mutationFn: (data) => api.post('attachments', data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
  )
})}

export const useNewSeller = () => {
  return useMutation<SellersResponse, unknown, SellersRequest>({
    mutationFn: (data) => api.post('sellers',data)
  })
}