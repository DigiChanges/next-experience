'use client'
import React from 'react';
import { Button, Image } from '@nextui-org/react';
import style from './addItem.module.css';
import { icons } from '@/features/shared/hooks/icons';
import { ModalComponent } from '../../../shared/organisms/modal/ModalTemplate';
import { useOpen } from '@/features/shared/hooks/useOpen';


export const AddItem: React.FC = () => {

   const {isOpen, handleIsOpen } = useOpen();
   const { IconAdd } = icons();


   return (
      <>
      <div className={style.container} >
         <Button
            radius='full'
            isIconOnly color='success'
            aria-label='Like'
            onClick={handleIsOpen} >
            <Image src={IconAdd.src} width={100} height={100} alt={"add item"} className={style.btn}/>
         </Button>
      </div>
      {
         isOpen && <ModalComponent handleModal={handleIsOpen} subtitle={"Add item information"} textBtn={"Add item"}/>
      }
             </>
   )


}
