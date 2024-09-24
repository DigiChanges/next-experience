'use client';
import React, { ChangeEvent, useState } from 'react';
import style from './form-create.module.css';
import { InputForm, InputType } from '@/features/shared/atoms/inputForm/InputForm';
import { useForm } from 'react-hook-form';
import { Item, ItemPayload } from '@/features/items/interfaces/itemsResponse';
import { yupResolver } from '@hookform/resolvers/yup';
import { modalSchema } from '@/features/items/validations/modalSchema';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { createItem, handleUploadFile } from '@/features/items/actions/ItemAction';
import { useTranslations } from 'next-intl';


export const FormCreate = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<Item>({
    resolver: yupResolver(modalSchema)
  });
  const t = useTranslations('Items');
  const s = useTranslations('Shared');
  const alert = useTranslations('ToastCreate');

  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const handleChange = async(event: ChangeEvent<HTMLInputElement>) => {
    setIsDisabled(true);
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      console.log(file);
      const id = await handleUploadFile(file);
      setValue('file', id);
    }
    setIsDisabled(false);
  };

  const createAction = async(data: ItemPayload) => {
    await toast.promise(createItem({ data }), {
      error: alert('error'),
      success: alert('success'),
      pending: alert('pending')
    });
  };

  return (
    <form className={style.form} onSubmit={handleSubmit(async(data) => { await createAction(data); })}>
      <div>
        <InputForm<Item>
          type={'text'}
          name={'name'}
          label={t('name')}
          register={register}
          errors={errors}
          id={'name'}
          className={style.inputBlock}
          input_type={InputType.SIMPLE}
          classNameError={style.inputError}
          disabled={isDisabled}
        />

        <InputForm<Item>
          type={'number'}
          name={'description'}
          label={t('description')}
          register={register}
          errors={errors}
          id={'description'}
          className={style.inputBlock}
          input_type={InputType.SIMPLE}
          classNameError={style.inputError}
          disabled={isDisabled}
        />

        <InputForm<Item>
          type={'text'}
          name={'file'}
          label={t('file')}
          register={register}
          errors={errors}
          id={'file'}
          className={style.input}
          input_type={InputType.FILE}
          classNameError={style.inputError}
          onChange={handleChange}
          disabled={isDisabled}
        />

      </div>
      <div className={style.containerBtn}>
        <div className={style.btnClose}>
          <Link href={'/items'}>
            <button type="button" className={style.close}>
              {s('cancel')}
            </button>
          </Link>
        </div>
        <div className={style.btnAdd}>
          <button type="submit" className={style.addItem}>{t('add')}</button>
        </div>
      </div>
    </form>
  );
};
