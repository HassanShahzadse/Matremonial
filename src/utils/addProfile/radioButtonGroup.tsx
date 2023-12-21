// RadioButtonGroup.tsx
import React from 'react';
import { UseFormRegister } from 'react-hook-form';

interface RadioButtonGroupProps {
  label: string;
  name: string;
  options?: { label: string; value: string }[];
  register: UseFormRegister<any>;
}

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({ label, name, options=[], register }) => {
  return (
    <div className="mb-1 md:flex items-center md:space-x-20">
      <label className="block text-sm font-medium text-gray-600">{label}</label>
      <div className="flex items-center space-x-4 mt-1">
        {options.map((option) => (
          <div key={option.value} className="flex items-center">
            <input
              type="radio"
              id={option.value}
              {...register(name)}
              value={option.value}
              className="focus:ring-[#fb1086] accent-[#fb1086] h-4 w-4 text-[#fb1086]"
            />
            <label htmlFor={option.value} className="ml-2 text-sm text-gray-700">
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioButtonGroup;
