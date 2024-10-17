export interface UsersResponse {
  id: string;
  name: string;
  lastName: string;
  email: string;
  phone?: number;
  password: string;
  createdAt: number;
  updatedAt: number;
}

export type User = {
  name: string;
  lastName: string;
  phone?: number;
  email: string;
  password: string;
};

export interface UserPayload extends User {}
