export interface UserResponse {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  image_id: string;
  account_active: boolean;
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
