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
    {label && <label className="text-[#000000] text-sm font-bold">
        {label} <span className="text-red-500">*</span>
      </label>}
      <input 
        className="w-full border-2 border-[#707070] placeholder-[#707070]  rounded-s-2xl rounded-e-2xl "
        type={type} 
        placeholder={placeholder} 
        {...register} 
      />
      {error && <p className="text-red-500">{error.message}</p>}
    </>
  );
};

export default Input;
