// SelectField.tsx
import React from 'react';
import { UseFormRegister } from 'react-hook-form';

interface SelectFieldProps {
  label: string;
  name: string;
  options: { label: string; value: string }[];
  register: UseFormRegister<any>;
}

const SelectField: React.FC<SelectFieldProps> = ({ label, name, options, register }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-600">
        {label}
      </label>
      <select
        {...register(name)}
        id={name}
        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
