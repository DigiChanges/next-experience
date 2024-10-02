import React, { ChangeEvent } from 'react';
import { UseFormRegister, FieldValues, DeepMap, FieldError, Path } from 'react-hook-form';

type Props<TFormValues extends FieldValues> = {
    name: Path<TFormValues>;
    label?: string;
    register: UseFormRegister<TFormValues>;
    errors:  Partial<DeepMap<TFormValues, FieldError>>;
    id: string;
    className?: string;
    placeholder?: string;
    classNameError?: string;
    disabled?: boolean;
    onChange?: (event: React. ChangeEvent<HTMLInputElement>, data?: { file?: object | null | undefined; }) => Promise<any>
    multiple?:boolean;
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
  multiple
}: Props<TFormValues>) => {
  // TODO: arreglar tipado, Type 'Path<TFormValues>' cannot be used to index type 'Partial<DeepMap<TFormValues, FieldError>>'.
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
          {...register(name)}
          className={error ? classNameError : ''}
          disabled={disabled}
          placeholder={placeholder}
          onChange={handleChange}
        />
        {/* {value && <p>{value}</p>} */}
      </div>
      {error && <p className={classNameError}>{error.message}</p>}
    </div>
  );
};
