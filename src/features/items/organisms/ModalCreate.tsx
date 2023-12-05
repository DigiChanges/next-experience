import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputForm } from '@/features/shared/atoms/inputForm/InputForm';
import Image from 'next/image';
import { icons } from '@/features/shared/hooks/icons';
import { Item } from '@/features/items/interfaces/itemsResponse';
import style from './modal.module.css';
import { modalSchema } from '@/features/items/validations/modalSchema';
import { modalData } from '@/features/items/constants/modalData';

interface IProps {
    handleModal: () => void;
    handleCreateAction: (data: Item) => void;
}

export const ModalCreate: React.FC<IProps> = ({ handleModal, handleCreateAction }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<Item>({
    resolver: yupResolver(modalSchema)
  });

  const { IconInformation } = icons();

  return (
    <div className={style.containerModal}>
      <div className={style.subContainer} id="wrapper">
        <div className={style.modal}>
          <div className={style.subTitle}>
            <Image src={IconInformation.src} width={50} height={50} alt='icon information'/>
            <h2>Add Item information</h2>
          </div>

          <form className={style.form} onSubmit={handleSubmit(async(data) => {
            handleCreateAction(data);
          })}>
            {
              modalData.map((data) => <InputForm key={data.id}
                errors={errors}
                id={data.id}
                name={data.name}
                register={register}
                type={data.type}
                label={data.label}
                className={style.inputBlock}
              />)
            }
            <div className={style.btn}>
              <button type="submit" className={style.addItem}>Add item</button>
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
