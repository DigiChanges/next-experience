import React, { ChangeEvent } from 'react';
import style from './inputForm.module.css';
import { UseFormRegister, FieldValues, DeepMap, FieldError, Path } from 'react-hook-form';

type Props<TFormValues extends FieldValues> = {
    type: 'text' | 'number' | 'email' | 'password' | 'file' | 'date' | 'datetime-local',
    type_input?: 'select' | 'simple' | 'file'
    name: Path<TFormValues>;
    label?: string;
    register: UseFormRegister<TFormValues>;
    errors: Partial<DeepMap<TFormValues, FieldError>>;
    id: string;
    maxDate?: string;
    className?: string;
    placeholder?: string;
    value?: string | number;
    classNameError?: string;
    disabled?: boolean;
    options?: { value: string | number | boolean, label: string }[];
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
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
  classNameError,
  disabled,
  type_input = 'simple',
  options,
  maxDate,
  onChange,
  value
}: Props<TFormValues>) => {
  // TODO: Investigar mas este error de tipo.
  const error = errors[name];

  const renderOptions = () => {
    if (options && options.length > 0) {
      return options.map(option => (
        <option key={String(option.value)} value={String(option.value)}>{option.label}</option>
      ));
    }
    return null;
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <div className={type === 'file' ? style.containerFile : ''}>
        {type_input === 'select' ? (
          <select disabled={disabled} className={error && classNameError} {...register(name)} id={id}>
            {renderOptions()}
          </select>
        ) : (
          <input
            disabled={disabled}
            className={error && classNameError}
            {...register(name)}
            type={type}
            max={maxDate}
            value={value}
            name={name}
            id={id}
            placeholder={placeholder}
            onChange={handleChange}
          />
        )}
        {type === 'file' && <p>{placeholder}</p>}

      </div>
      {error && <p>{error.message as string}</p>}
    </div>
  );
};
