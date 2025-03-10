// InputField.tsx
import React from 'react';
import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form';

interface InputFieldProps {
  label: string;
  name: string;
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
  errors?: any;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ label, name, placeholder=' ', register, errors, required }) => {
  return (
    <>
    <div className="mb-1 md:flex items-center">
      <label htmlFor={name} className="block text-xl font-medium mr-2 text-gray-600">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type="text"
        {...register(name)}
        id={name}
        className={`mt-1 p-2 border ${errors?.[name] ? 'border-red-500' : 'border-gray-300'} rounded-md w-full`}
        placeholder={placeholder}
      />
    </div>
     {errors?.[name] && (
      <p className="text-red-500 text-sm mt-1">{errors[name]?.message || 'This field is required'}</p>
    )}
    </>
  );
};

export default InputField;
