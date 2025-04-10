import React, { useEffect, useState } from "react";
import { Home, User, Bell, Award, LogOut } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import LoginButton from "./LoginLogoutButton";

const menuItems = [
  { name: "Profile Setting", icon: <Home size={16} />, key: "Profile Setting" },
  { name: "Social", icon: <User size={16} />, key: "Social" },
  { name: "Achievements", icon: <Award size={16} />, key: "Achievements" },
  { name: "Notifications", icon: <Bell size={16} />, key: "Notifications" },
];

const ProfilePopper = () => {
  const [active, setActive] = useState("Profile Setting");
  const [storedImage, setStoredImage] = useState(null);

  useEffect(() => {
    const image = localStorage.getItem("profileImage");
    if (image) {
      setStoredImage(image);
    }
  }, []);

  return (
    <Popover>
      <PopoverTrigger asChild>
      <Avatar className="cursor-pointer">
          <AvatarImage src={storedImage} alt="User" />
  
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </PopoverTrigger>

      <PopoverContent className="w-72 bg-white m-4 shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-4">Profile</h2>

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

        {/* <Button variant="outline" className="w-full mt-4 flex items-center gap-2 text-gray-700">
          <LogOut size={16} />
          Log out
        </Button> */}
        <LoginButton/>
      </PopoverContent>
    </Popover>
  );
};

export default ProfilePopper;
