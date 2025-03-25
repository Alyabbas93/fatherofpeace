"use client";
import React, { useState, useEffect } from "react";
import { Pencil, SquarePen } from "lucide-react";

const ProfileImageUploader = () => {
  const [image, setImage] = useState(localStorage.getItem("profileImage") || null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageData = reader.result;
        setImage(imageData);
        localStorage.setItem("profileImage", imageData);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white p-6 rounded-xl border h-[17rem] relative ">
      <label htmlFor="imageUpload" className="relative cursor-pointer">
        <div className="w-45 h-45 rounded-full bg-green-500 flex items-center justify-center text-white text-2xl font-bold overflow-hidden">
          {image ? (
            <img src={image} alt="Profile" className="w-full h-full object-cover" />
          ) : (
            "JM"
          )}
        </div>

        <div className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md border">
          <SquarePen size={18} className="text-gray-600" />
        </div>
        
        <input id="imageUpload" type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
      </label>

      <p className="text-xs text-gray-500 mt-3">Image max and min size description</p>
    </div>
  );
};

export default ProfileImageUploader;
