"use client";

import { Plus, Search } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent, DialogFooter, DialogClose, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import CreateTribe from "./createTribe";
import { usePathname } from "next/navigation";

const SocialHeader = ({ title, desc }) => {
  const pathname = usePathname();

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

  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-[#28303F] font-readexpro text-3xl lg:text-[40px] font-semibold leading-normal">{title}</h1>
        {desc && <p className="text-[#28303F] font-readexpro text-[20px] font-normal leading-normal">{desc}</p>}
      </div>

      <div className="flex items-center gap-4">
        {/* Search - assuming this is part of a search input */}
        <div className="relative flex">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
          <input type="text" placeholder="Search..." className="pl-10 pr-4 py-2 border bg-white rounded-lg" />
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-[#5E8DE5] hover:bg-[#4a7bd3] h-[40px] px-4 gap-2">
              <Plus size={16} />
              {buttonText}
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogTitle className="text-lg font-medium">{dialogTitle}</DialogTitle>
            <CreateTribe mode={mode} />
            <DialogFooter className="flex justify-end gap-2 mt-6">
              <DialogClose asChild>
                <Button type="button" variant="outline" className="text-black border-gray-300">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="button" className="bg-[#5E8DE5] hover:bg-[#4a7bd3]">
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