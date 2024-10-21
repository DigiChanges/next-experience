import React from 'react';
import { UseFormRegister, FieldValues, DeepMap, FieldError, Path } from 'react-hook-form';

import { InputFile } from '@/features/shared/atoms/inputForm/inputFile/InputFile';
import { InputSelect } from '@/features/shared/atoms/inputForm/inputSelect/InputSelect';
import { InputSimple } from '@/features/shared/atoms/inputForm/inputSimple/InputSimple';

type Props<TFormValues extends FieldValues> = {
  type: 'text' | 'number' | 'email' | 'file' | 'password' | 'date' | 'datetime-local';
  input_type: InputType;
  name: Path<TFormValues>;
  label?: string;
  register: UseFormRegister<TFormValues>;
  errors: Partial<DeepMap<TFormValues, FieldError>>;
  id: string;
  maxDate?: string;
  className?: string;
  placeholder?: string;
  value?: string | number;
  multiple?: boolean;
  classNameError?: string;
  disabled?: boolean;
  options?: { value: string | number | boolean; label: string }[];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export enum InputType {
  SIMPLE = 'SIMPLE',
  FILE = 'FILE',
  SELECT = 'SELECT',
}

const inputComponents = {
  [InputType.SIMPLE]: InputSimple,
  [InputType.FILE]: InputFile,
  [InputType.SELECT]: InputSelect,
};

export const InputForm = <TFormValues extends Record<string, unknown>>(props: Props<TFormValues>) => {
  const InputComponent = inputComponents[props.input_type];

  // @ts-expect-error Some inputs require obligatory the onChange and some not, so it gives conflicts
  // TODO: Solve conflicts.
  return <InputComponent {...props} />;
};
