import React from 'react';
import { Select, SelectItem } from '@nextui-org/react';


export enum SelectColorType {
    DEFAULT = 'default',
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    SUCCESS = 'success',
    WARNING = 'warning',
    DANGER = 'danger',
}

type Props = {
    defaultSelectedKeys: string[];
    classNames: {
        base:string,
        mainWrapper: string,
        listbox: string,
        popoverContent:string,
        trigger:string,
    };
    data: { value:string, label:string }[];
    dataProps: {
        color: SelectColorType;
        classNames:{
            title: string
        };
        place:string;
    };
    func:(params: any)=>void;
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