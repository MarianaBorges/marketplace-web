export interface SignInRequest {
  email: string;
  password: string;
}

export interface SignInResponse {
  accessToken: string;
}

export interface AttachmentsRequest {
  files: FormData[];
}

export interface AttachmentsResponse {
  attachments: {
    id: string;
    url: string;
  }[]
}

export interface SellersRequest {
  name: string;
  phone: string;
  email: string;
  avatarId: string | null;
  password: string;
  passwordConfirmation: string;
}

export interface SellersResponse {
  id: string;
  name: string;
  phone: string;
  email: string;
  avatar: {
    id: string;
    url: string;
  }
}