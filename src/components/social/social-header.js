"use client";

import { Plus, Search, Users } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent, DialogFooter, DialogClose, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import CreateTribe from "./createTribe";
import { usePathname } from "next/navigation";
import { useState } from "react";

const SocialHeader = ({ title, desc , dummyFriends, dummyFriends2, setFilteredUsers, setFilteredUsers2 }) => {
  const pathname = usePathname();
  const [searchInput , setSearchInput] = useState("");

  const getActionConfig = () => {
    if (pathname.includes('friends')) {
      return {
        buttonText: 'Invite Friends',
        dialogTitle: 'Invite Friends to Tribe',
        mode: 'invite'
      };
    } else if (pathname.includes('activity')) {
      return {
        buttonText: 'Create Tribe',
        dialogTitle: 'Create New Tribe',
        mode: 'create'
      };
    }
    return {
      buttonText: 'Create Tribe',
      dialogTitle: 'Create New Tribe',
      mode: 'create'
    };
  };

  const { buttonText, mode, dialogTitle } = getActionConfig();


  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);

    if (value.trim() === "") {
      setFilteredUsers([]);
      setFilteredUsers2([]);
    } else {
      const filteredFriends = dummyFriends.filter(user =>
        user.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredUsers(filteredFriends);

      const filteredFriends2 = dummyFriends2.filter(user =>
        user.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredUsers2(filteredFriends2);
    }
  };

  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-[#28303F] font-readexpro text-3xl lg:text-[40px] font-semibold leading-normal">{title}</h1>
        {desc && <p className="text-[#28303F] font-readexpro text-[20px] font-normal leading-normal">{desc}</p>}
      </div>

      <div className="flex items-center gap-4">
            

        <div className="relative">
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
          <input type="text"
            placeholder="Search..."
            className="pl-4 pr-10 py-2 border bg-white rounded-lg"
            value={searchInput}
            onChange={handleSearchChange}/>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-[#5E8DE5] hover:bg-[#4a7bd3] h-[40px] px-4 gap-2 cursor-pointer">
              <Plus size={16} />
              {buttonText}
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogTitle className="text-lg font-medium">{dialogTitle}</DialogTitle>
            <CreateTribe mode={mode} />
            <DialogFooter className="flex justify-end gap-2 mt-6">
              <DialogClose asChild>
                <Button type="button" variant="outline" className="text-black border-gray-300 cursor-pointer">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="button" className="bg-[#5E8DE5] hover:bg-[#4a7bd3] cursor-pointer">
                Create Tribe
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default SocialHeader;