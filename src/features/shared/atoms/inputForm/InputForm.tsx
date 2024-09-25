import React, { ChangeEvent } from 'react';
import { UseFormRegister, FieldValues, DeepMap, FieldError, Path } from 'react-hook-form';
import { InputSimple } from '@/features/shared/atoms/inputForm/inputSimple/InputSimple';
import { InputFile } from '@/features/shared/atoms/inputForm/inputFile/InputFile';
import { InputSelect } from '@/features/shared/atoms/inputForm/inputSelect/InputSelect';

type Props<TFormValues extends FieldValues> = {
    type: 'text' | 'number' | 'email' | 'file' | 'password' | 'date' | 'datetime-local',
    input_type: InputType,
    name: Path<TFormValues>;
    label?: string;
    register?: UseFormRegister<TFormValues>;
    errors?: Partial<DeepMap<TFormValues, FieldError>>;
    id: string;
    maxDate?: string;
    className?: string;
    placeholder?: string;
    value?: string | number;
    multiple?:boolean;
    classNameError?: string;
    disabled?: boolean;
    options?: { value: string | number | boolean, label: string }[];
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export enum InputType {
    SIMPLE = 'SIMPLE',
    FILE = 'FILE',
    SELECT = 'SELECT'
}

const inputComponents = {
  [InputType.SIMPLE]: InputSimple,
  [InputType.FILE]: InputFile,
  [InputType.SELECT]: InputSelect
};

export const InputForm = <TFormValues extends Record<string, unknown>>(props: Props<TFormValues>) => {
  const InputComponent = inputComponents[props.input_type];
  return <InputComponent {...props} />;
};
