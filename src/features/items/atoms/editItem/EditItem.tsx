'use client'
import { Button, Image, } from '@nextui-org/react';
import style from './editItem.module.css'
import { icons } from '@/features/shared/hooks/icons';
import { useModal } from '@/features/shared/hooks/useModal';
import { ModalComponent } from '../../../shared/organisms/modal/ModalTemplate';

export const EditItem: React.FC = () => {

   const {showModal, handleModal } = useModal();

    const { EditIcon } = icons();
    return (
        <>
            <div className={style.container} >
                <Button isIconOnly className={style.btnEdit} onClick={handleModal}>
                    <Image src={EditIcon.src} width={100} height={100} alt={"edit"} />
                </Button>
                {
                    showModal && <ModalComponent 
                        handleModal={handleModal} 
                        subtitle={"Edit item information"} 
                        textBtn={"Edit item"} />
                }

            </div>

        </>
    )


}