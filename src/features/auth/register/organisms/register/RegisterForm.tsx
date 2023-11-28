import React from "react";
import {useForm} from "react-hook-form";
import {IRegisterForm} from "@/features/auth/register/interfaces/IRegisterForm";
import {yupResolver} from "@hookform/resolvers/yup";
import {registerSchema} from "@/features/auth/register/validations/registerSchema";
import {handleSignUp} from "@/features/auth/register/actions/registerAction";
import {InputForm} from "@/features/shared/atoms/inputForm/InputForm";
import style from './register.module.css';
import Link from "next/link";
import Image from "next/image";
import {icons} from "@/features/shared/hooks/icons";

export const RegisterForm: React.FC = () => {
    const {IconRocket} = icons();

    const {register, handleSubmit, formState: {errors}, reset} = useForm<IRegisterForm>({
        resolver: yupResolver(registerSchema),
    })
    const onSubmit = handleSubmit(async (data: IRegisterForm) => {
        await handleSignUp(data);
        reset();
    })

    return(
        <div className={style.container}>
        <form  className={style.form}  onSubmit={(data)=>onSubmit(data)}>
            <div className={style.containerInputs}>
                <InputForm errors={errors} id={"username"} name={"username"} register={register} type={"email"} label={"Username"} className={style.input}/>
                <InputForm errors={errors} id={"password"} name={"password"} register={register} type={"password"} label={"Password"} className={style.input}/>
                <InputForm errors={errors} id={"confirmPassword"} name={"confirmPassword"} register={register} type={"password"} label={"Confirm Password"} className={style.input}/>
            </div>
            <div className={style.containerBtn}>
                <button className={style.btn}>
                    <Image width={100} height={100} src={IconRocket} alt={'icon next experience'}/>
                    <span>Confirm!</span>
                </button>
            </div>
            <div className={style.containerRegister}>
                <Link href={'/auth/login'}>Already have an account?</Link>
            </div>
        </form>
        </div>
    )
}

