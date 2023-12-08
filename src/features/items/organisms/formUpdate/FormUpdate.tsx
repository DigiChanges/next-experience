'use client';
import React from 'react';
import style from './formUpdate.module.css';
import { InputForm } from '@/features/shared/atoms/inputForm/InputForm';
import {  useForm } from 'react-hook-form';
import { Item, ItemPayload } from '@/features/items/interfaces/itemsResponse';
import { yupResolver } from '@hookform/resolvers/yup';
import { modalSchema } from '@/features/items/validations/modalSchema';
import Link from 'next/link';
import { updateItem } from '@/features/items/actions/ItemAction';
import { toast } from 'react-toastify';
import {useRouter} from "next/navigation";

interface IProps{
    id: string;
    data:{ name: string, type: number}
}
export const FormUpdate: React.FC<IProps> = ({ id, data }) => {
  const router = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm<Item>({
    defaultValues:{
      name : data.name,
      type: data.type
    },
    resolver: yupResolver(modalSchema)
  });

  const updateAction = async(data: ItemPayload) => {
    await  toast.promise(updateItem({ id, data }), {
      error: 'Oops, something went wrong',
      success: 'The item was updated correctly',
      pending:'Updating item...'
    });
    router.push('/items')
  };
  return (
    <form  onSubmit={handleSubmit(async(data) => { await updateAction(data); })}>
      <div>
        <InputForm<Item>
          type={'text'}
          name={'name'}
          register={register}
          errors={errors}
          id={'name'}
          className={style.inputBlock}
        />

        <InputForm<Item>
          type={'number'}
          name={'type'}
          register={register}
          errors={errors}
          id={'type'}
          className={style.inputBlock}
        />
      </div>
      <div className={style.containerBtn}>
        <div className={style.btnAdd}>
          <button type="submit" className={style.addItem}>Update item</button>
        </div>
        <div className={style.btnClose}>
          <Link href={'/items'}>
            <button type="button" className={style.close}>
                        Cancel
            </button>
          </Link>
        </div>
      </div>
    </form>
  );
};
