import React from "react";

interface RadioProps {
  label: string;
  options: { value: string; label: string }[];
  register: any;
  error: any;
}

const Radio: React.FC<RadioProps> = ({ label, options, register, error }) => {
  return (
    <div>
      <label className="text-[#000000] text-sm font-bold">
        {label} <span className="text-red-500">*</span>
      </label>
      <div className="flex flex-row"> 
        {options.map((option, index) => (
          <div key={index} className="me-2"> 
            <input
              type="radio"
              id={option.value}
              value={option.value}
              {...register}
              className="mr-1 placeholder-[#707070]"
            />
            <label htmlFor={option.value}>
              {option.label}
            </label>
          </div>
        ))}
      </div>
      {error && <p className="text-red-500">{error.message}</p>}
    </div>
  );
};

export default Radio;
