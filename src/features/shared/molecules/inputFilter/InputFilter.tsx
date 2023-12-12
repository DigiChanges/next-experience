import {Select, SelectItem} from "@nextui-org/react";
import React from "react";
import { Filter } from '../../interfaces/Filter';

interface Props {
    data: Filter[];
    setValue: React.Dispatch<React.SetStateAction<string>>
}


export const InputFilter = ({data, setValue}: Props) =>
{
    return(
        <Select
            labelPlacement={'outside'}
            label="Select InputFilter"
            className="max-w-xs"
        >
            {data.map(({value, label}) =>
                <SelectItem
                    onClick={() => setValue(value)}
                    key={value}>
                    {label}
                </SelectItem>
            )}
        </Select>
    )
}