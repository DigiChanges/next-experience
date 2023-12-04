'use client'
import React from 'react';
import { Button, Image, } from '@nextui-org/react';
import style from './editItem.module.css'
import { icons } from '@/features/shared/hooks/icons';
import { useOpen } from '@/features/shared/hooks/useOpen';
import { ModalComponent } from '../../../shared/organisms/modal/ModalTemplate';

export const EditItem: React.FC = () => {

   const {isOpen, handleIsOpen } = useOpen();

    const { EditIcon } = icons();
    return (
        <>
            <div>
                <Button isIconOnly className={style.btnEdit} onClick={handleIsOpen}>
                    <Image src={EditIcon.src} width={100} height={100} alt={"edit"} />
                </Button>
                {
                    isOpen && <ModalComponent
                        handleModal={handleIsOpen}
                        subtitle={"Edit item information"}
                        textBtn={"Edit item"} />
                }

            </div>

        </>
    )


}
