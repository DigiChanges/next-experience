import React from 'react';
import style from './recoveryCode.module.css';
import { InputForm } from '@/features/shared/atoms/inputForm/InputForm';
import { ButtonAuth } from '@/features/shared/atoms/button/ButtonAuth';
import { IrecoveryCode } from '@/features/auth/recovery-code/interfaces/IrecoveryCode';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { recoveryCodeSchema } from '@/features/auth/recovery-code/validations/recoveryCodeSchema';
import { toast } from 'react-toastify';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { handleRecoveryCode } from '@/features/auth/recovery-code/actions/recoveryCodeAction';
import { useSearchParams } from 'next/navigation';

export const RecoveryCode: React.FC = () => {
  const { reset, register, handleSubmit, formState: { errors } } = useForm<IrecoveryCode>({
    resolver: yupResolver(recoveryCodeSchema)
  });
  const searchParams = useSearchParams();
  let email = searchParams.get('email');
  const t = useTranslations('RecoveryCode');
  const alerts = useTranslations('ToastLogin');

  const onSubmit = handleSubmit(async(data: IrecoveryCode) => {
    if (email === null) { email = ''; }
    await  toast.promise(handleRecoveryCode(email, data), {
      error: `${alerts('error')}`,
      success: `${alerts('success')}`,
      pending:`${alerts('pending')}`
    });
    reset();
  });
  return (
    <div className={style.container}>
      <h1>{t('title')}</h1>
      <h2>{t('description')}</h2>
      <h3>{t('description2')}</h3>
      <form className={style.form} onSubmit={(data) => onSubmit(data)}>
        <InputForm<IrecoveryCode> errors={errors} id={'code'} name={'code'} register={register}
          type={'text'} label={t('code')} className={style.input}
          placeholder={t('code')} classNameError={style.inputError}/>
        <ButtonAuth descriptionActive={t('send')}/>
        <div className={style.containerRegister}>
          <p>{t('singIn')}
            <Link href={'/auth/login'}>{t('singInLink')}</Link></p>
        </div>
        <div className={style.containerRegister}>
          <Link href={'/auth/recovery-code'}>{t('codeLink')}</Link>
        </div>
      </form>
    </div>
  );
};
