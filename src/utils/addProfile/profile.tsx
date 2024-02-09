// ChooseProfilePicture.tsx
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { Controller } from "react-hook-form";
interface ChooseProfilePictureProps {
  control: any;
}

const ChooseProfilePicture: React.FC<ChooseProfilePictureProps> = ({
  control,
}) => {
  const [previewImage, setPreviewImage] = useState<string | null>(
    "/member2.png"
  );

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: any
  ) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    } else {
      setPreviewImage(null);
    }

    field.onChange(file);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center position-relative space-x-5 mt-3">
        <div>
          {previewImage && (
            <Image
              src={previewImage}
              alt="Preview"
              width={100}
              height={100}
              className="rounded-full mt-2 "
            />
          )}
        </div>

        <div style={{margin:'0px',background:'rgba(0,0,0,0.5)',borderRadius:'50%'}} className="flex absolute px-1 text-white flex-col">
          <Controller
            name="profilePicture"
            control={control}
            render={({ field }) => (
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, field)}
                  className="hidden"
                  id="profilePictureInput"
                />
              </div>
            )}
          />
          <label
            htmlFor="profilePictureInput"
            className=" text-2xl  font-bold p-0 rounded-lg text-center  cursor-pointer  "
          >
            +
          </label>
        </div>
      </div>
    </>
  );
};

export default ChooseProfilePicture;
