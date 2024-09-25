import React, { ChangeEvent } from 'react';
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
    value?: string | number;
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
          type="file"
          id={id}
          value={value}
          {...register(name)}
          className={error ? classNameError : ''}
          disabled={disabled}
          placeholder={placeholder}
          onChange={handleChange}
        />
      </div>
      {error && <p className={classNameError}>{error.message}</p>}
    </div>
  );
};
