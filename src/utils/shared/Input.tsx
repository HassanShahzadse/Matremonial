import React from "react";

interface InputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  register?: any;
  error?: any;
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  placeholder,
  register,
  error,
}) => {
  return (
    <>
    {label && <label>
        {label} <span className="text-red-500">*</span>
      </label>}
      <input 
        className="w-full border-b-2 outline-none border-gray-300 rounded "
        type={type} 
        placeholder={placeholder} 
        {...register} 
      />
      {error && <p className="text-red-500">{error.message}</p>}
    </>
  );
};

export default Input;
