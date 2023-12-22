// ReligionComponent.tsx
import React from "react";
import InputField from "@/utils/addProfile/inputField";
import SelectField from "@/utils/addProfile/selectField";
import RadioButtonGroup from "@/utils/addProfile/radioButtonGroup";

interface ReligionProps {
  religiousInfoFields: Array<{ label: string; name: string; type: string; placeholder?: string; options?: Array<{ label: string; value: string }> }>;
  register: any; 
}

const Religion: React.FC<ReligionProps> = ({ religiousInfoFields, register }) => {
  return (
    <div className="w-full  p-5 mt-5">
      <h1 className="text-xl font-bold  text-center ">Religion</h1>
      <div className="md:container mx-auto grid lg:grid-cols-1 md:grid-cols-1  grid-cols-1 gap-4 p-4">
        {religiousInfoFields.map((field) => {
          switch (field.type) {
            case "input":
              return (
                <InputField
                  key={field.name}
                  label={field.label}
                  name={field.name}
                  placeholder={field.placeholder}
                  register={register}
                />
              );
            case "select":
              return (
                <SelectField
                  key={field.name}
                  label={field.label}
                  name={field.name}
                  options={field.options || []}
                  register={register}
                />
              );
            case "radio":
              return (
                <RadioButtonGroup
                  key={field.name}
                  label={field.label}
                  name={field.name}
                  options={field.options || []}
                  register={register}
                />
              );
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default Religion;
