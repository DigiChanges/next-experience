import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputForm } from '@/features/shared/atoms/inputForm/InputForm';
import Image from 'next/image';
import { icons } from '@/features/shared/hooks/icons';
import { Item, ItemPayload, ItemsResponse } from '@/features/items/interfaces/itemsResponse';
import { modalSchema } from '@/features/items/validations/modalSchema';
import style from './modal.module.css';

interface IProps {
    item: ItemsResponse;
    handleModal: () => void;
    handleUpdateAction: (data: ItemPayload) => void;
}
export const ModalUpdate: React.FC<IProps> = ({ handleModal, handleUpdateAction, item }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<Item>({
    defaultValues: {
      name: item.data.name,
      type: item.data.type
    },
    resolver: yupResolver(modalSchema)
  });
  const { IconInformation } = icons();

  return (
    <div className={style.containerModal}>
      <div className={style.subContainer} id="wrapper">
        <div className={style.modal}>
          <div className={style.subTitle}>
            <Image src={IconInformation.src} width={50} height={50} alt='icon information'/>
            <h2>Edit item information</h2>
          </div>

          <form className={style.form} onSubmit={handleSubmit(async(data) => handleUpdateAction(data)
          )}>
            <InputForm
              type={'text'}
              name={'name'}
              register={register}
              errors={errors}
              id={'name'}
              className={style.inputBlock}
            />

            <InputForm
              type={'number'}
              name={'type'}
              register={register}
              errors={errors}
              id={'type'}
              className={style.inputBlock}
            />
            {
            }
            <div className={style.btn}>
              <button type="submit" className={style.addItem}>Edit Item</button>
            </div>
          </form>
          <div className={style.btnClose}>
            <button onClick={handleModal} className={style.close}>
                            Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
