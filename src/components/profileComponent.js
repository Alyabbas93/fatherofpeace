"use client"
import { useState,useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Instagram, Linkedin, Mail } from "lucide-react";

export default function ProfileCard() {
  const [image, setImage] = useState("/default-profile.png");

  useEffect(() => {
    const storedImage = localStorage.getItem("profileImage");
    if (storedImage) {
      setImage(storedImage);
    }
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
        localStorage.setItem("profileImage", e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };


  return (
    <Card className="max-w-sm mx-auto border rounded-xl p-4 text-center shadow-lg">
      <div className="relative w-32 h-32 mx-auto">
        <label htmlFor="imageUpload" className="cursor-pointer">
          <img
            src={image}
            alt="Profile"
            className="w-32 h-32 rounded-full border-2 border-gray-300 object-cover"
          />
          <div className="absolute bottom-0 right-0 bg-black p-1 rounded-full">
            <Camera className="w-4 h-4 text-white" />
          </div>
        </label>
        <input
          id="imageUpload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageUpload}
        />
      </div>
      <h2 className="text-xl font-semibold mt-3">Jessica Mathew</h2>
      <p className="text-gray-500 text-sm">Peace Ambassador</p>
      <p className="mt-2 text-gray-600 text-sm">
        Passionate about peace initiatives and family values. I love sharing
        True Mother’s teachings with my community.
      </p>
      <div className="flex justify-center space-x-4 mt-4">
        <Instagram className="w-5 h-5 text-gray-500 cursor-pointer" />
        <Linkedin className="w-5 h-5 text-gray-500 cursor-pointer" />
        <Mail className="w-5 h-5 text-gray-500 cursor-pointer" />
      </div>
      <p className="text-xs text-gray-400 mt-4">Member since January 2023</p>
    </Card>
  );
}
