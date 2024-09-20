import React, { ChangeEvent } from 'react';
import style from './input-form.module.css';
import { UseFormRegister, FieldValues, DeepMap, FieldError, Path } from 'react-hook-form';

type Props<TFormValues extends FieldValues> = {
    name: Path<TFormValues>;
    label?: string;
    register: UseFormRegister<TFormValues>;
    errors: Partial<DeepMap<TFormValues, FieldError>>;
    id: string;
    className?: string;
    placeholder?: string;
    classNameError?: string;
    disabled?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const InputFile = <TFormValues extends Record<string, unknown>>({
  name,
  register,
  errors,
  id,
  className,
  label,
  placeholder,
  classNameError,
  disabled,
  onChange
}: Props<TFormValues>) => {
  const error = errors[name];

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className={className}>
      {label && <label htmlFor={id}>{label}</label>}
      <div className={style.containerFile}>
        <input
          type="file"
          id={id}
          {...register(name)}
          className={error ? classNameError : ''}
          disabled={disabled}
          onChange={handleChange}
        />
        {placeholder && <p>{placeholder}</p>}
      </div>
      {error && <p className={classNameError}>{error.message}</p>}
    </div>
  );
};
