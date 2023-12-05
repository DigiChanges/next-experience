import { ILoginForm } from '@/features/auth/login/interfaces/IloginForm';

export interface IRegisterForm extends ILoginForm{
    confirmPassword : string
}
