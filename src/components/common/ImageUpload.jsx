import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUploadCloud, FiXCircle } from "react-icons/fi";
 

const ImageUpload = ({ onUpload }) => {
  const [imagePreview, setImagePreview] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    onUpload(file);

    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  }, [onUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="flex flex-col items-center text-center">
      <div
        {...getRootProps()}
        className={`border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md cursor-pointer px-6 pt-5 pb-6 ${isDragActive ? 'bg-gray-200' : ''}`}
      >
        <input {...getInputProps()} accept="image/*" className="hidden" />
        <span className="mx-auto flex justify-center">
          <FiUploadCloud className="text-3xl text-emerald-500" />
        </span>
        <p className="text-sm mt-2">{isDragActive ? 'Drop your images here' : 'Drag your images here'}</p>
        <em className="text-xs text-gray-400">(Only *.jpeg, *.webp, and *.png images will be accepted)</em>
      </div>
      {imagePreview && (
        <div className="mt-4">
          <img src={imagePreview} alt="Preview" className="max-w-xs max-h-xs" />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
