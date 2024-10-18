import { User } from '@/features/users/interfaces/usersResponse';

export type ICreateUser = User & {
  role: string;
  account_active: boolean;
};
