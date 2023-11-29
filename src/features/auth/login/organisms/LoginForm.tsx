import React from "react";
import style from './loginForm.module.css';


import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { InputForm } from "@/features/shared/atoms/inputForm/InputForm";
import { ILoginForm } from "../interfaces/IloginForm";
import { handleSignIn } from "../actions/loginAction";
import { loginSchema } from "../validations/loginSchema";



export const LoginForm: React.FC = () =>{
    const { register, handleSubmit , formState: { errors }, reset} = useForm<ILoginForm>({
        resolver: yupResolver(loginSchema), 
    })
    const onSubmit = handleSubmit( async (data:ILoginForm)=>{
     await   handleSignIn(data);
     reset();
    })
    return(
       
        <div className={style.container}>
        <div className={style.left}>
            <form className={style.form} onSubmit={(data)=>onSubmit(data)}>
                <div className={style.inputBlock}>
                <InputForm  errors={errors} id={"username"} name={"username"} register={register} type={"email"} label={"Username"}/>
                </div>
                <div className={style.inputBlock}>
                <InputForm errors={errors} id={"password"} name={"password"} register={register} type={"password"} label={"Password"}/>
                </div>
                <div className={style.inputBlock}>
<span className={style.forgot}><a href="#">Forgot Password?</a></span>
                <button type="submit">Submit</button>
            </div>
            </form>
        </div>
        <div className={style.right}>
            <div className={style.img}>imagen</div>
        </div>
    </div>
    )
}