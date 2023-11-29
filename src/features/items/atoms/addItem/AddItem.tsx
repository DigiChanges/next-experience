'use client'
import { Button, Image } from '@nextui-org/react';
import style from './addItem.module.css';
import { icons } from '@/features/shared/hooks/icons';
import { ModalComponent } from '../../organisms/modal/ModalTemplate';
import { useState } from 'react';

export const AddItem: React.FC = (props) => {
   const [showModal, setShowModal] = useState<any>(false);
   const { IconAdd } = icons();
   return (
      <>
      <div className={style.container} >
         <button  
            onClick={() => setShowModal(true)} >
            <Image src={IconAdd.src} width={100} height={100} alt={"add item"} className={style.btn}/>
         </button>
        
      </div>
       <ModalComponent isVisible={showModal} onClose={()=> setShowModal(false)}/>
     
      
       </>
   )
   

}