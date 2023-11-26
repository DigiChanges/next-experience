import { Button, Image } from '@nextui-org/react';
import style from './addItem.module.css';
import { icons } from '@/features/shared/hooks/icons';

export const AddItem: React.FC = () =>{

    const { IconAdd } = icons();
 return(
    <div className={style.container}>
    <Button radius="full" isIconOnly color="success" aria-label="Like">
       <Image  src={IconAdd.src} width={100} height={100} alt={"add item"} />
    </Button>    
  </div>
 )
}