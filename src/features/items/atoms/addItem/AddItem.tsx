'use client'
import { Button, Image } from '@nextui-org/react';
import style from './addItem.module.css';
import { icons } from '@/features/shared/hooks/icons';
import { ModalComponent } from '../../../shared/organisms/modal/ModalTemplate';
import { useModal } from '@/features/shared/hooks/useModal';

export const AddItem: React.FC = () => {
   
   const {showModal, handleModal } = useModal();
   const { IconAdd } = icons();

  
   return (
      <>
      <div className={style.container} >
         <Button  
            radius='full'
            isIconOnly color='success'
            aria-label='Like'
            onClick={handleModal} >
            <Image src={IconAdd.src} width={100} height={100} alt={"add item"} className={style.btn}/>
         </Button> 
      </div>
      {
         showModal && <ModalComponent handleModal={handleModal} subtitle={"Add item information"} textBtn={"Add item"}/>
      }
       
       </>
   )
   

}