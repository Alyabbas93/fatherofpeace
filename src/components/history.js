import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Calendar } from "lucide-react";

const recentSearches = [
  "What did Mother Moon say about family values?",
  "What did Mother Moon say about family values?",
  "What did Mother Moon say about family values?",
  "What did Mother Moon say about family values?",
  "What did Mother Moon say about family values?",
  "What did Mother Moon say about family values?",
];

const RecentSearches = () => {
  return (
    <ScrollArea className="w-full ">
      <h3 className="text-[20px] text-[#A0A0A0] font-medium
 mb-6 pt-2">Recent Searches</h3>
      <div className="space-y-9">
        {recentSearches.map((search, index) => (
          <div key={index} className="flex items-center w-full gap-3 ">
            <Calendar size={19} className=" text-[#828282]" />
            <span className="text-[16px] font-normal
 text-[#828282]">{search}</span>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default RecentSearches;
