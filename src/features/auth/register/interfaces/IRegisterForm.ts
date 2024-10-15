export type IRegisterForm = {
  name: string;
  lastname: string;
  phone?: number | null;
  username: string;
  password: string;
  confirmPassword: string;
};
