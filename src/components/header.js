'use client'
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Languages, Search, Sun} from "lucide-react";
import NotificationPopover from "./notifications";
import InboxPopover from "./inboxPopBox";
import ProfilePopper from "./profilePopBox";
import { useParams, usePathname } from "next/navigation";

const Header = () => {

  const pathname = usePathname();
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(true);
  
    useEffect(() => {

      if(pathname.includes('/social')){
        setIsSearchBarVisible(false);

      }else {
        setIsSearchBarVisible(true)
      }
    },[pathname])


  return (
    <header className="w-full bg-[#EAEAEA] g-20px px-4 py-2 flex items-center justify-between">
      <div className="relative bg-[#ffffff] w-1/3 max-w-sm rounded-md">
        {isSearchBarVisible && (
          <>
            <Input placeholder="Search" className="pl-10 b-none" />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              size={16}
            />
          </>
        )}
      </div>

      <div className="flex items-center gap-6">
        <InboxPopover />

        <Sun className="text-gray-600 cursor-pointer hover:text-black" />
        <Languages className="text-gray-600 cursor-pointer hover:text-black" />
        <NotificationPopover />

        <ProfilePopper />
      </div>
    </header>
  );
};

export default Header;
