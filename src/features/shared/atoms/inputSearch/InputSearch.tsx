import { Input } from '@nextui-org/input';
import React, { ChangeEvent } from 'react';


type Props = {
    type:string
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    classNames: { input: string[], inputWrapper: string[], mainWrapper?: string[]}
    startContent: React.ReactNode;
}

export const InputSearch = ({ type, onChange, placeholder, classNames, startContent }: Props) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <Input
      type={type}
      onChange={handleChange}
      placeholder={placeholder}
      classNames={classNames}
      startContent={
        startContent
      }
    />
  );
};
