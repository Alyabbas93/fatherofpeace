"use client"
import CategoriesList from '@/components/categories';
import SubscribePopup from '@/components/dailyquotes';
import RecentSearches from '@/components/history';
import SavedCard from '@/components/saved';
import JourneyTabs from '@/components/tabscomponent';
import FamilyValues from '@/components/truemothermedia';
import { AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar } from '@radix-ui/react-avatar';
import { Bell, BellDot, BookOpen, Send, SquareArrowOutUpRight, Video } from 'lucide-react';
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

const Asktrumother = () => {

  const tabsData = [
    { label: "Categories", value: "Categories", content: <CategoriesList /> },
    { label: "History", value: "History", content: <RecentSearches /> },
    { label: "Saved", value: "Saved", content: <SavedCard /> },
  ];

  return (
    <div className="flex-1 p-6 bg-[#f8f8f8]">
     <div className="flex items-center justify-between gap-6">
  <div>
    <h1 className="text-[40px] font-semibold">Ask True Mother</h1>
    <p className="text-[20px] font-normal mb-4">
      Ask questions about Dr. Hak Ja Han Moon's teachings
    </p>
  </div>
  <div>
  <Dialog>
  <DialogTrigger>
  <button className="flex items-center gap-2 bg-[#5E8DE5] text-white text-[16px] font-medium px-4 py-4 rounded-lg text-lg font-medium hover:bg-blue-600 transition">
      <BellDot size={20} />
      Get Daily Quotes
    </button>
  </DialogTrigger>
  <DialogContent >
   <SubscribePopup/>
  </DialogContent>
</Dialog>

  </div>
</div>

      <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
        <div className="col-span-2 rounded-[15px]  bg-white p-4 space-y-6">
          <div className="space-y-4">
            <div className="flex gap-4">
              <Avatar className="w-12 h-12 ">
                <AvatarImage className="rounded-[150px]" src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="text-[#5E8DE5] text-[20px] font-medium">You</h4>
                <span className="text-[#28303F] font-normal
 text-[16px] ">
                  What did Mother Moon say about family values?
                </span>
              </div>
            </div>

            <div className="flex gap-4">
              <Avatar className="w-12 h-12">
                <AvatarImage className="rounded-[150px]" src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="space-y-8">
                <div>
                  <h4 className="text-[#28303F] text-[20px] font-medium">True Mother</h4>
                  <span className="text-[#828282] font-normal
 text-[16px]">
                    Here are teachings from Dr. Hak Ja Han Moon about family values:
                  </span>
                </div>

                <div className="flex gap-2 flex-col">
                  <span className='text-[16px] text-[#28303F] font-semibold'>Related Media Resources</span>
                  <div className="flex gap-4 flex-wrap">
                  <Button
  variant="outline"
  className="flex items-center gap-2 border border-[#28303F] text-[#28303F]"
>
  <Video size={20} strokeWidth={1.25} stroke="#28303F" />
  Family Value Address
  <SquareArrowOutUpRight size={20} strokeWidth={1.25} stroke="#28303F" />
</Button>

<Button
  variant="outline"
  className="flex items-center gap-2 border border-[#28303F] text-[#28303F]"
>
  <BookOpen size={20} strokeWidth={1.25} stroke="#28303F" />
  Family Value Address
  <SquareArrowOutUpRight size={20} strokeWidth={1.25} stroke="#28303F" />
</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <FamilyValues />
          </div>

          <div className="relative flex items-center w-full border border-[#F1F1F1] rounded-md">
  <Input
    placeholder="Type Content Here[]"
    className="pl-5 pr-7 border-none focus:ring-0 h-[55px] placeholder-[#A0A0A0]"
  />
<Send
  size={20}
  strokeWidth={1}
  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-[7px] fill-[#28303F]"
/>

</div>

        </div>

        <div className="h-full bg-white px-4 py-5  rounded-lg">
          <JourneyTabs tabs={tabsData} />
        </div>
      </div>
    </div>
  );
};

export default Asktrumother;
