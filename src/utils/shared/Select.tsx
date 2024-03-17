import React from "react";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  label?: string;
  register?: any;
  options: Option[];
  error?: any;
  placeholder?: string;
}

const Select: React.FC<SelectProps> = ({
  label,
  register,
  options,
  error,
  placeholder,
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-bold mb-1">
          {label} <span className="text-red-500">*</span>
        </label>
      )}
      <select
        className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        {...register}
      >
        {placeholder && ( 
          <option value="" disabled={placeholder === undefined}>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default Select;
