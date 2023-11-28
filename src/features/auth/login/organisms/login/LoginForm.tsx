'use client'
import React, { useState } from "react";
import style from './loginForm.module.css';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { InputForm } from "@/features/shared/atoms/inputForm/InputForm";
import { ILoginForm } from "../../interfaces/IloginForm";
import { handleSignIn } from "../../actions/loginAction";
import { loginSchema } from "../../validations/loginSchema";
import Link from "next/link";
import { icons } from "@/features/shared/hooks/icons";
import { ButtonAuth } from "@/features/shared/atoms/button/ButtonAuth";




export const LoginForm: React.FC = () => {
    const { IconRocket } = icons();
    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, formState: { errors }, reset } = useForm<ILoginForm>({
        resolver: yupResolver(loginSchema),
    })
   

    const onSubmit = handleSubmit(async (data: ILoginForm) => {
        setLoading(true)
      const res=  await handleSignIn(data);
        reset();
        setLoading(false)            
    })
    return (

        <div className={style.container}>

            <form className={style.form} onSubmit={(data) => onSubmit(data)}>
                <div className={style.containerInputs}>
                    <InputForm errors={errors} id={"username"} name={"username"} register={register} type={"email"} label={"Username"} className={style.input} />
                    <InputForm errors={errors} id={"password"} name={"password"} register={register} type={"password"} label={"Password"} className={style.input} />
                </div> 
               <ButtonAuth alt={"icon next experience"} descriptionInactive={'Loggin In...'} descriptionActive={'Sing In'} disable={loading}  img={IconRocket.src} />
                <div className={style.containerRegister}>
                    <Link href={'/auth/register'}>Create Account</Link>
                </div>
            </form>
        </div>
    )
}

