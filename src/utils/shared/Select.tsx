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
        <label className="block text-[#000000] text-sm font-bold ">
          {label} <span className="text-red-500">*</span>
        </label>
      )}
      <select
        className="w-full border-2 border-[#707070]  placeholder-[#707070] rounded-s-2xl rounded-e-2xl "
        {...register}
      >
        {placeholder && ( 
          <option value="" className="placeholder-[#707070]" disabled={placeholder === undefined}>
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
