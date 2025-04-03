import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bookmark, BookMarked, BookmarkIcon, Calendar, LucideBookmark } from "lucide-react";

const SavedData = [
  "What did Mother Moon say about family values?",
  "What did Mother Moon say about family values?",
  "What did Mother Moon say about family values?",
  "What did Mother Moon say about family values?",
  "What did Mother Moon say about family values?",
  "What did Mother Moon say about family values?",
];

const SavedCard = () => {
  return (
     <ScrollArea className="w-full ">
          <h3 className="text-[20px] text-[#A0A0A0] font-medium
 mb-6 pt-2">All</h3>
          <div className="space-y-9">
            {SavedData.map((search, index) => (
              <div key={index} className="flex items-center w-full gap-3 ">

<LucideBookmark size={19} stroke="#828282" fill="#828282" className="text-[#828282]" />

                <span className="text-[16px] font-normal
 text-[#828282]">{search}</span>
              </div>
            ))}
          </div>
        </ScrollArea>
  );
};

export default SavedCard;
