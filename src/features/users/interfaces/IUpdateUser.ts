export type User = {
  first_name: string;
  last_name: string;
  phone?: number;
  email: string;
  role: string;
  account_active: boolean;
};

export type IUpdateUser = User & {
  role: string;
  account_active: boolean;
};

export interface UserUpdatePayload extends User {}
