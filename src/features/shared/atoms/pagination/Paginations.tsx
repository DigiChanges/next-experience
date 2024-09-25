import React from 'react';
import { Pagination } from '@nextui-org/react';
import { SelectColorType } from '@/features/shared/atoms/select/SelectForm';

type Props = {
    onChange: (page: number) => void;
    page: number;
    total: number;
    color: SelectColorType;
}

export const PaginationComponent = ({ onChange, page, total, color }: Props) => {
  const handleOnChange = (newPage: number) => {
    if (onChange) {
      onChange(newPage);
    }
  };

  return (
    <Pagination onChange={handleOnChange} page={page} total={total} color={color} />
  );
};
