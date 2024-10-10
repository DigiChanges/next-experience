import React from 'react';
import { UseFormRegister, FieldValues, DeepMap, FieldError, Path } from 'react-hook-form';

type Props<TFormValues extends FieldValues> = {
  name: Path<TFormValues>;
  label?: string;
  register: UseFormRegister<TFormValues>;
  errors: Partial<DeepMap<TFormValues, FieldError>>;
  id: string;
  className?: string;
  classNameError?: string;
  disabled?: boolean;
  options?: { value: string | number | boolean; label: string }[];
};

export const InputSelect = <TFormValues extends Record<string, unknown>>({
  name,
  register,
  errors,
  id,
  className,
  label,
  classNameError,
  disabled,
  options,
}: Props<TFormValues>) => {
  const error = errors[name];

  const renderOptions = () => {
    return (
      options?.map((option) => (
        <option key={String(option.value)} value={String(option.value)}>
          {option.label}
        </option>
      )) || null
    );
  };

  return (
    <div className={className}>
      {label && <label htmlFor={id}>{label}</label>}
      <div>
        <select disabled={disabled} className={error ? classNameError : ''} {...register(name)} id={id}>
          {renderOptions()}
        </select>
      </div>
      {error && <p className={classNameError}>{error.message}</p>}
    </div>
  );
};
