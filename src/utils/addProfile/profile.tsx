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
   
           <div className="flex flex-col items-center justify-center space-x-5 mt-3">
             <h1 className='text-center text-2xl font-bold uppercase'>Create an Account</h1>
              <div>
                {previewImage && (
                  <Image
                    src={previewImage}
                    alt="Preview"
                    width={40}
                    height={40}
                    className="rounded-full mt-2 h-32 w-32"
                  />
                )}
              </div>
              
              <div className="flex  flex-col">
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
                  className="  font-bold p-2 rounded-lg text-center  cursor-pointer  "
                >
                  Upload Profile Image
                </label>

          
              </div>
            </div>
  
  </>
  );
};

export default ChooseProfilePicture;

