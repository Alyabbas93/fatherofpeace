"use client";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

export default function ProfileCard() {
  const profiles = [
    {
      id: 1,
      name: "Jessica Mathew",
      role: "Peace Ambassador",
      description:
        "Passionate about peace initiatives and family values. I love sharing True Mother's teachings with my community.",
      joined: "January 2023",
      image: "/default-profile.png",
    },
  ];

  const [profile, setProfile] = useState(profiles[0]);

  useEffect(() => {
    const storedImage = localStorage.getItem("profileImage");
    if (storedImage) {
      setProfile((prev) => ({ ...prev, image: storedImage }));
    }
  }, []);

  return (
    <Card className="mx-auto rounded-xl p-5 border-none shadow-none text-center flex flex-col items-center">
      <div className="relative w-36 h-36">
        <img
          src={profile.image}
          alt="Profile"
          className="w-36 h-36 rounded-full border-2 border-gray-300 object-cover"
        />
      </div>
      <div>
        <h2 className="text-[25px] text-[#28303F] font-semibold ">
          {profile.name}
        </h2>
        <p className="text-gray-500 text-[14px] pt-1.5">{profile.role}</p>
      </div>
      <hr className="w-full border-[#28303F]/[0.03]" />
      <p className="text-[#828282] text-[14px]">{profile.description}</p>
      <hr className="w-full border-[#28303F]/[0.03] mt-9" />
      <div className="flex flex-col items-center">
        <p className="text-[14px] text-[#28303F] font-semibold">Social Accounts</p>
        <div className="flex items-center justify-center space-x-4 mt-2">
          <Instagram className="w-5 h-5 text-gray-500 cursor-pointer" />
          <Linkedin className="w-5 h-5 text-gray-500 cursor-pointer" />
          <Mail className="w-5 h-5 text-gray-500 cursor-pointer" />
          <Facebook className="w-5 h-5 text-gray-500 cursor-pointer" />
        </div>
      </div>
      <p className="text-xs text-[#828282]">Member since {profile.joined}</p>
    </Card>
  );
}
