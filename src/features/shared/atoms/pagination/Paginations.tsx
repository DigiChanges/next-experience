import React from 'react';
import { Pagination } from '@nextui-org/react';
import { SelectColorType } from '@/features/shared/atoms/select/SelectForm';

type Props = {
    onChange: (event:any) => void;
    page: number;
    total: number;
    color: SelectColorType
}

export const PaginationComponent = ({ onChange, page, total, color }: Props) => {
  const handleOnChange = (event:any) => {
    if (onChange) { onChange(event); }
  };
  return (
    <Pagination onChange={handleOnChange} page={page} total={total}
      color={color}/>
  );
};
