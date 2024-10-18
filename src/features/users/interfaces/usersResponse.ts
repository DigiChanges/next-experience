export interface UsersResponse {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone?: number;
  password: string;
  createdAt: number;
  updatedAt: number;
}

export type User = {
  first_name: string;
  last_name: string;
  phone?: number;
  email: string;
  password: string;
  role: string;
  account_active: boolean;
};

export interface UserPayload extends User {}
