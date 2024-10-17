'use client';
import React from 'react';
import { useDisclosure } from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import { toast } from 'react-toastify';

import { ButtonForm } from '@/features/shared/atoms/button/ButtonForm';
import { ModalComponent } from '@/features/shared/atoms/modal/Modal';
import { icons } from '@/features/shared/hooks/icons';
import { useOpen } from '@/features/shared/hooks/useOpen';

import PayloadProps from '@/features/shared/interfaces/PayloadProps';

import style from './delete-entity.module.css';

type Props = {
  id: string;
  handleDelete: ({ id }: PayloadProps) => Promise<void>;
};

export const DeleteItemBt = (props: Props) => {
  const { isOpen, handleIsOpen } = useOpen();
  const { onOpen } = useDisclosure();
  const { IoTrashOutline } = icons();
  const alerts = useTranslations('ToastDelete');
  const s = useTranslations('Shared');
  const t = useTranslations('Items');

  const handleDelete = async (id: string) => {
    await toast.promise(props.handleDelete({ id }), {
      error: `${alerts('error')}`,
      success: `${alerts('success')}`,
      pending: `${alerts('pending')}`,
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
      {isOpen && (
        <ModalComponent
          displayButton={true}
          description={t('deleteAlert')}
          success={s('accept')}
          cancel={s('cancel')}
          isOpen={isOpen}
          onOpen={onOpen}
          onOpenChange={handleIsOpen}
          isOnClick={() => handleDelete(props.id)}
        />
      )}
    </>
  );
};
