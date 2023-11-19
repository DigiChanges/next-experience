import React from 'react';
import {
  FieldValues,
  RegisterOptions,
  UseFormRegister,
  FieldErrors
} from 'react-hook-form';

interface IProps {
  type: 'text' | 'number' | 'email' | 'password';
  name: string;
  label?: string;
  register: UseFormRegister<FieldValues>;
  validations: RegisterOptions<FieldValues, string>;
  errors: FieldErrors<FieldValues>;
  id: string;
  className?: string;
  placeholder?: string;
}

export const InputForm: React.FC<IProps> = ({
  type,
  name,
  register,
  validations,
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
      <input {...register(name, validations)} type={type} name={name} id={id} placeholder={placeholder} />
      {error && <p>{error.message as string}</p>}
    </div>
  );
};
