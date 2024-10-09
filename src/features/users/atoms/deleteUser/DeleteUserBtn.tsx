'use client';
import React from 'react';
import { ButtonForm } from '@/features/shared/atoms/button/ButtonForm';
import { useDisclosure } from '@nextui-org/react';
import style from './delete-user.module.css';
import { icons } from '@/features/shared/hooks/icons';
import { useOpen } from '@/features/shared/hooks/useOpen';
import { toast } from 'react-toastify';
import { useTranslations } from 'next-intl';
import { ModalComponent } from '@/features/shared/atoms/modal/Modal';
import { deleteUser } from '@/features/users/actions/usersAction';

type Props = {
    id: string;
}

export const DeleteUserBtn = (props: Props) => {
  const { isOpen, handleIsOpen } = useOpen();
  const { onOpen } = useDisclosure();
  const { IoTrashOutline } = icons();
  const alerts = useTranslations('ToastDelete');
  const s = useTranslations('Shared');
  const t = useTranslations('UserList');

  const handleDelete = async(id: string) => {
    await  toast.promise(deleteUser(id), {
      error: `${alerts('error')}`,
      success: `${alerts('success')}`,
      pending:`${alerts('pending')}`
    });
    handleIsOpen();
    onOpen();
  };

  return (
    <>
      <ButtonForm isIconOnly className={style.btnDelete} onClick={handleIsOpen}>
        <p>{t('delete')}</p>
        <IoTrashOutline />
      </ButtonForm>
      {
        isOpen && <ModalComponent
          description={t('deleteAlert')}
          success={s('accept')}
          cancel={s('cancel')}
          displayButton={false}
          isOpen={isOpen}
          onOpen={onOpen}
          onOpenChange={handleIsOpen}
          isOnClick={() => handleDelete(props.id)}
        />
      }
    </>
  );
};
