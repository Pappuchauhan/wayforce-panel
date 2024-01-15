import React, { useState } from 'react';
import { FiUploadCloud, FiXCircle } from "react-icons/fi";
const ImageUpload = ({ onUpload }) => {
  const [image, setImage] = useState(null); 

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    handleFile(file);
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    onUpload(file);
   // console.log(sdfsdf)
    handleFile(file);
  };

  const handleFile = (file) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result); 
      };
      reader.readAsDataURL(file);
    }
  };
 

  return (
    <div className="flex flex-col items-center text-center">
      <label
        htmlFor="fileInput"
        className="border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md cursor-pointer px-6 pt-5 pb-6"
        onDrop={handleDrop}
        onDragOver={(event) => event.preventDefault()}
      >
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileInputChange}
        />
        <span className="mx-auto flex justify-center">
          <FiUploadCloud className="text-3xl text-emerald-500" />
        </span>
        <p className="text-sm mt-2">Drag your images here</p>
        <em className="text-xs text-gray-400">(Only *.jpeg, *.webp and *.png images will be accepted)</em>
      </label>
      {image && (
        <div className="mt-4">
          <img src={image} alt="Preview" className="max-w-xs max-h-xs" />
        </div>
      )} 
    </div>
  );
};

export default ImageUpload;
