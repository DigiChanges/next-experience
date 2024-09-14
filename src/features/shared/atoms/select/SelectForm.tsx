import React from 'react';
import { Select, SelectItem } from '@nextui-org/react';

type Props = {
    defaultSelectedKeys: any[],
    classNames?: any,
    data: any[],
    dataProps: any,
    func:any,
}

export const SelectForm = ({ defaultSelectedKeys, classNames, data, dataProps, func } : Props) => {
  return (
    <Select
      defaultSelectedKeys={defaultSelectedKeys}
      classNames={classNames}
    >
      {data.map(({ value, label }) =>
        <SelectItem
          color={dataProps.color}
          classNames={dataProps.classNames}
          onClick={() => {
            const params = dataProps.place === 'InputKeysFilter' ? { key:value } : { term:value };
            func(params);
          }}
          key={value}
        >
          {label}
        </SelectItem>
      )}
    </Select>
  );
};
