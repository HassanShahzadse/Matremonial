// InputField.tsx
import React from 'react';
import { Control, UseFormRegister } from 'react-hook-form';
import { Placeholder } from 'reactstrap';
interface InputFieldProps {
  label: string;
  name: string;
  placeholder:string;
  register: UseFormRegister<any>;
}
const InputField: React.FC<InputFieldProps> = ({ label, name,placeholder, register }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-600">
        {label}
      </label>
      <input
        type="text"
        {...register(name)}
        id={name}
        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
