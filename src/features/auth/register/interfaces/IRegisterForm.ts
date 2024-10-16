export type IRegisterForm = {
  name: string;
  lastname: string;
  phone?: number | null;
  email: string;
  password: string;
  confirmPassword: string;
};
