// SelectField.tsx
import React from 'react';
import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form';

interface SelectFieldProps {
  label: string;
  name: string;
  options?: { label: string; value: string }[];
  register: UseFormRegister<FieldValues>;
  errors?: any;
  required?: boolean;
}

const SelectField: React.FC<SelectFieldProps> = ({ label, name, options=[], register, errors, required }) => {
  return (
    <div className=" mb-4 md:flex items-center ">
      <label htmlFor={name} className="block text-xl font-medium text-gray-600">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        {...register(name, { required: required && 'This field is required' })}
        id={name}
        className={`mt-1 bg-white p-2 border ${errors?.[name] ? 'border-red-500' : 'border-gray-300'} rounded-md w-full`}
      >
        <option value=""  disabled selected>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errors?.[name] && (
        <p className="text-red-500 text-sm mt-1">{errors[name]?.message || 'This field is required'}</p>
      )}
    </div>
  );
};

export default SelectField;
