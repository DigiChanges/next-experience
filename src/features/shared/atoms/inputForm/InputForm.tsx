import React from 'react';
import {
  UseFormRegister,
  FieldErrors
} from 'react-hook-form';

interface IProps {
    type: 'text' | 'number' | 'email' | 'password';
    name: string; // Usa keyof T para garantizar que el nombre sea una clave válida de T
    label?: string;
    register: UseFormRegister<any>;
    errors: FieldErrors<any>;
    id: string;
    className?: string;
    placeholder?: string;
    value?: string | number;
}


export const InputForm: React.FC<IProps> = ({
  value,
  type,
  name,
  register,
  errors,
  id,
  className,
  label,
  placeholder
}) => {
  const error = errors[name];
  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <input {...register(name)} type={type} name={name} id={id} placeholder={placeholder} value={value ? value : ''}/>
      {error && <p>{error.message as string}</p>}
    </div>
  );
};