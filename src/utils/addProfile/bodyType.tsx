// BodyTypeComponent.tsx
import React from "react";
import InputField from "@/utils/addProfile/inputField";
import SelectField from "@/utils/addProfile/selectField";
interface BodyTypeProps {
  bodyTypeFields: Array<{ label: string; name: string; type: string; placeholder?: string; options?: Array<{ label: string; value: string }> }>;
  register: any;
}
const BodyType: React.FC<BodyTypeProps> = ({ bodyTypeFields, register }) => {
  return (
    <div className="w-full  p-5 mt-5">
      <h1 className="text-xl font-bold text-center ">Body Type</h1>
      <div className="md:container mx-auto grid lg:grid-cols-1 md:grid-cols-1  grid-cols-1 gap-4 p-4">
        {bodyTypeFields.map((field) => (
          <React.Fragment key={field.name}>
            {field.type === "input" && (
              <InputField
                label={field.label}
                name={field.name}
                placeholder={field.placeholder}
                register={register}
              />
            )}
            {field.type === "select" && (
              <SelectField
                label={field.label}
                name={field.name}
                options={field.options || []}
                register={register}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
export default BodyType;
