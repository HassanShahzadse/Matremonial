// ChooseProfilePicture.tsx
import React from 'react';
import Image from 'next/image';
import { Control, Controller } from 'react-hook-form';
interface ChooseProfilePictureProps {
  control: Control;
  previewImage: string | null;
  setPreviewImage: (file: File | null) => void;
  showPic: boolean;
  fieldName: string;
}
const GalleryPicture: React.FC<ChooseProfilePictureProps> = ({ control, previewImage, setPreviewImage, showPic, fieldName }) => {
  return (
    <div>
      <Controller
        name={fieldName}
        control={control}
        render={({ field }) => (
          <div className="relative">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files && e.target.files[0];
                setPreviewImage(file);
                field.onChange(file);
              }}
              className="hidden"
              id={`${fieldName}Input`}
            />
          </div>
        )}
      />
      {showPic ? (
        <label htmlFor={`${fieldName}Input`} className="bg-[#fb1086] xsm:w-[90px] flex items-center rounded-md justify-center">
          <span className="leading-normal text-4xl text-white">+</span>
        </label>
      ) : (
        <div>
          {previewImage && (
            <Image src={previewImage} alt="Preview" width={150} height={150} className="h-44 w-44" />
          )}
        </div>
      )}
    </div>
  );
};
export default GalleryPicture;
