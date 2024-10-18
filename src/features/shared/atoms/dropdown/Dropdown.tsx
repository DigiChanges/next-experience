import React from 'react';
import { motion } from 'framer-motion';

import { DeleteItemBt } from '@/features/shared/atoms/deleteEntity/DeleteEntityBtn';
import { EditEntityBtn } from '@/features/shared/atoms/editEntity/EditEntityBtn';
import { icons } from '@/features/shared/hooks/icons';

import PayloadProps from '@/features/shared/interfaces/PayloadProps';

import style from './Dropdown.module.css';

type Props = {
  handleDelete: ({ id }: PayloadProps) => Promise<void>;
  isDropdownOpen: boolean;
  handleDropdown: () => void;
  id: string;
  editPath: string;
};
export const Dropdown = (props: Props) => {
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
        id={props.id}
      >
        <div className={style.perfil} id={props.id}>
          <div className={style.perfilSections}>
            <EditEntityBtn editPath={props.editPath} id={props.id} />
          </div>
          <div className={style.perfilSections}>
            <DeleteItemBt handleDelete={props.handleDelete} id={props.id} />
          </div>
        </div>
      </motion.ul>
    </div>
  );
};
