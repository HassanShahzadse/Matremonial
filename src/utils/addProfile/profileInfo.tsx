// ProfileInfoComponent.tsx
import React from "react";
import InputField from "@/utils/addProfile/inputField";
import SelectField from "@/utils/addProfile/selectField";
import RadioButtonGroup from "@/utils/addProfile/radioButtonGroup";

interface ProfileInfoProps {
  profileInfoFields: Array<{ label: string; name: string; type: string; placeholder?: string; options?: Array<{ label: string; value: string }> }>;
  register: any; 
  errors:any;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ profileInfoFields, register , errors }) => {
  return (
    <div className="w-full p-5 mt-5">
      <h1 className="text-xl text-center font-bold ">Profile Info</h1>
      <div className="md:container mx-auto grid lg:grid-cols-1 md:grid-cols-1  grid-cols-1 gap-4 p-4">
        {profileInfoFields.map((field) => {
          switch (field.type) {
            case "input":
              return (
                <InputField
                  key={field.name}
                  label={field.label}
                  name={field.name}
                  placeholder={field.placeholder}
                  register={register}
                  errors={errors}
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
                  errors={errors}
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
                  errors={errors}
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

export default ProfileInfo;
