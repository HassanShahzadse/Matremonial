// ChooseProfilePicture.tsx
import React from 'react';
import { useState } from "react";
import Image from 'next/image';
import { Controller } from 'react-hook-form';
interface ChooseProfilePictureProps {
  control: any; 
}

const ChooseProfilePicture: React.FC<ChooseProfilePictureProps> = ({ control }) => {
  
  const [previewImage, setPreviewImage] = useState<string | null>(
    "/member2.png"
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: any) => {
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
           <div className="flex flex-row space-x-5">
              <div>
                {previewImage && (
                  <Image
                    src={previewImage}
                    alt="Preview"
                    width={150}
                    height={150}
                    className="rounded-full  h-44 w-44"
                  />
                )}
              </div>
              <div className="flex  flex-col">
                <h1 className="text-xl">Change Profile Picture</h1>
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
                  className="w-28 mt-5 p-2 rounded-lg text-center shadow-md cursor-pointer bg-green-300 hover:bg-[#fb1086] hover:text-white"
                >
                  Upload
                </label>

          
              </div>
            </div>
  
  </>
  );
};

export default ChooseProfilePicture;

