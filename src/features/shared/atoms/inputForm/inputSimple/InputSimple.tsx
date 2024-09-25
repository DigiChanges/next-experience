import React, { ChangeEvent } from 'react';
import { UseFormRegister, FieldValues, DeepMap, FieldError, Path } from 'react-hook-form';

type Props<TFormValues extends FieldValues> = {
    type: 'text' | 'number' | 'email' | 'file' | 'password' | 'date' | 'datetime-local',
    name: Path<TFormValues>;
    label?: string;
    register: UseFormRegister<TFormValues>;
    errors: Partial<DeepMap<TFormValues, FieldError>>;
    id: string;
    maxDate?: string;
    className?: string;
    placeholder?: string;
    classNameError?: string;
    disabled?: boolean;
    value?: string | number;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const InputSimple = <TFormValues extends Record<string, unknown>>({
  type,
  name,
  register,
  errors,
  id,
  className,
  label,
  placeholder,
  classNameError,
  disabled,
  maxDate,
  onChange,
  value
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
      <div>
        <input
          type={type}
          id={id}
          {...register(name)}
          disabled={disabled}
          className={error ? classNameError : ''}
          max={maxDate}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
        />
      </div>
      {error && <p className={classNameError}>{error.message}</p>}
    </div>
  );
};
