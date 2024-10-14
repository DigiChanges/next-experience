'use client';
import React from 'react';

import { useDisclosure } from '@nextui-org/react';

import { useTranslations } from 'next-intl';
import { toast } from 'react-toastify';

import { ButtonForm } from '@/features/shared/atoms/button/ButtonForm';
import { ModalComponent } from '@/features/shared/atoms/modal/Modal';
import { icons } from '@/features/shared/hooks/icons';
import { useOpen } from '@/features/shared/hooks/useOpen';
import { deleteUser } from '@/features/users/actions/usersAction';

import style from './delete-user.module.css';

type Props = {
  id: string;
};

export const DeleteUserBtn = (props: Props) => {
  const { isOpen, handleIsOpen } = useOpen();
  const { onOpen } = useDisclosure();
  const alerts = useTranslations('ToastDelete');
  const s = useTranslations('Shared');
  const t = useTranslations('UserList');

  const handleDelete = async (id: string) => {
    await toast.promise(deleteUser(id), {
      error: `${alerts('error')}`,
      success: `${alerts('success')}`,
      pending: `${alerts('pending')}`,
    });
    handleIsOpen();
    onOpen();
  };

  const { IoTrashOutline } = icons();

  return (
    <>
      <ButtonForm isIconOnly className={style.btnDelete} onClick={handleIsOpen}>
        <p>{t('delete')}</p>
        <IoTrashOutline />
      </ButtonForm>
      {isOpen && (
        <ModalComponent
          displayButton={false}
          isOpen={isOpen}
          onOpen={onOpen}
          onOpenChange={handleIsOpen}
          description={t('deleteAlert')}
          success={s('accept')}
          cancel={s('cancel')}
          isOnClick={() => handleDelete(props.id)}
        />
      )}
    </>
  );
};
