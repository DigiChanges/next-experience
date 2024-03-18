import React from 'react';
import { UseFormRegister, FieldValues, DeepMap, FieldError, Path } from 'react-hook-form';

interface FormInputProps<TFormValues extends FieldValues>  {
    type: 'text' | 'number' | 'email' | 'password';
    name: Path<TFormValues>
    label?: string;
    register?: UseFormRegister<TFormValues>;
    errors?: Partial<DeepMap<TFormValues, FieldError>>;
    id: string;
    className?: string;
    placeholder?: string;
    value?: string | number;
    classNameError?: string;
}

export const InputForm = <TFormValues extends Record<string, unknown>>({
  type,
  name,
  register,
  errors,
  id,
  className,
  label,
  placeholder,
  classNameError
}: FormInputProps<TFormValues>) => {
  const error = errors[name];
  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <input className={error && classNameError} {...register(name)} type={type} name={name} id={id} placeholder={placeholder} />
      {error && <p>{error.message as string}</p>}
    </div>
  );
};
