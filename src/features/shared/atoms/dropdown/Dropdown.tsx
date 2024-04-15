import React from 'react';
import style from './Dropdown.module.css';
import { motion } from 'framer-motion';
import { DeleteItemBtn } from '@/features/items/atoms/deleteItem/DeleteItemBtn';
import { EditItemBtn } from '@/features/items/atoms/editItem/EditItemBtn';
import {icons} from "@/features/shared/hooks/icons";


interface Props {
    isDropdownOpen: boolean,
    handleDropdown: () => void,
    id: string
}
export const Dropdown: React.FC<Props> = (props) => {
    const { IoEllipsisVertical } = icons();

    return (
    <div className={style.container}>
      <div className={style.containerIconUser}>
        <button onClick={props.handleDropdown} className={`${style.iconUser}`}>
          <IoEllipsisVertical />
        </button>
      </div>
      <motion.ul
        initial={{ height: 0 }}
        animate={{ height: props.isDropdownOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
        className={style.containerPerfil}
      >
        <div className={style.perfil}>
          <div className={style.perfilSections}>
            <EditItemBtn id={props.id} />
          </div>
          <div className={style.perfilSections}>
            <DeleteItemBtn
              id={props.id}/>
          </div>
        </div>
      </motion.ul>
    </div>
  );
};
