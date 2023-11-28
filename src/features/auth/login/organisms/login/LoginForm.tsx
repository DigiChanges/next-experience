
import React from "react";
import style from './loginForm.module.css';


import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import {InputForm} from "@/features/shared/atoms/inputForm/InputForm";
import {ILoginForm} from "../../interfaces/IloginForm";
import {handleSignIn} from "../../actions/loginAction";
import {loginSchema} from "../../validations/loginSchema";
import Link from "next/link";
import Image from "next/image";
import {icons} from "@/features/shared/hooks/icons";

export const LoginForm: React.FC = () => {
    const {IconRocket} = icons();

    const {register, handleSubmit, formState: {errors}, reset} = useForm<ILoginForm>({
        resolver: yupResolver(loginSchema),
    })
    const onSubmit = handleSubmit(async (data: ILoginForm) => {
        await handleSignIn(data);
        console.log(data, "existe la data")
        reset();
    })
    return (

<div className={style.container}>

    <form  className={style.form}  onSubmit={(data)=>onSubmit(data)}>
        <div className={style.containerInputs}>
            <InputForm errors={errors} id={"username"} name={"username"} register={register} type={"email"} label={"Username"} className={style.input}/>
            <InputForm errors={errors} id={"password"} name={"password"} register={register} type={"password"} label={"Password"} className={style.input}/>
        </div>
        <div className={style.containerBtn}>
            <button className={style.btn}>
                <Image width={100} height={100} src={IconRocket} alt={'icon next experience'}/>
                <span>Sing In </span>
            </button>
        </div>
        <div className={style.containerRegister}>
            <Link href={'/auth/register'}>Create Account</Link>
        </div>
    </form>
</div>
)
}

