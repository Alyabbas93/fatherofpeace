"use client";

import React, { useEffect, useState } from "react";
import { Home, User, Bell, Award } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import LoginButton from "./LoginLogoutButton";
import { createClient } from "@/app/lib/supabase-browser";

const menuItems = [
  { name: "Profile Setting", icon: <Home size={16} />, key: "Profile Setting" },
  { name: "Social", icon: <User size={16} />, key: "Social" },
  { name: "Achievements", icon: <Award size={16} />, key: "Achievements" },
  { name: "Notifications", icon: <Bell size={16} />, key: "Notifications" },
];

const ProfilePopper = () => {
  const [active, setActive] = useState("Profile Setting");
  const [storedImage, setStoredImage] = useState(null);
  const [storedName, setStoredName] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const supabase = createClient();
      const { data, error } = await supabase.auth.getUser();

      if (data?.user) {
        const avatar = data.user.user_metadata?.avatar_url;
        const fullName = data.user.user_metadata?.full_name;
        const email = data.user.email;

        if (avatar) {
          localStorage.setItem("profileImage", avatar);
          setStoredImage(avatar);
        }
        if (fullName) {
          localStorage.setItem("fullName", fullName);
          setStoredName(fullName);
        }
        if (email) {
          setUser({ email });
        }
      } else {
        const localAvatar = localStorage.getItem("profileImage");
        const localName = localStorage.getItem("fullName");
        if (localAvatar) setStoredImage(localAvatar);
        if (localName) setStoredName(localName);
      }

      if (error) {
        console.error("Failed to fetch user:", error.message);
      }
    };

    fetchProfile();
  }, []);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src={storedImage || ""} alt="User" />
          <AvatarFallback>
            {storedName ? storedName.charAt(0) : "U"}
          </AvatarFallback>
        </Avatar>
      </PopoverTrigger>

      <PopoverContent className="w-72 bg-white m-4 shadow-md rounded-lg p-4">
        {/* Top user info */}
        <div className="flex items-center gap-3 mb-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src={storedImage || ""} alt="User" />
            <AvatarFallback>
              {storedName ? storedName.charAt(0) : "A"}
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-base font-semibold">
              {user?.email || "Guest"}
            </h2>
            <p className="text-sm text-gray-500">
              {user?.email ? "Logged in" : "Not logged in"}
            </p>
          </div>
        </div>

        {/* Menu Items */}
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li
              key={item.key}
              onClick={() => setActive(item.key)}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer ${
                active === item.key ? "bg-gray-200 font-medium text-black" : "text-gray-500"
              }`}
            >
              {item.icon}
              {item.name}
            </li>
          ))}
        </ul>

        <LoginButton />
      </PopoverContent>
    </Popover>
  );
};

export default ProfilePopper;
