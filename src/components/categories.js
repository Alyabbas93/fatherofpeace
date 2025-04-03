import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Pin, Sparkles } from "lucide-react";

const categories = [
  { id: 1, title: "Family Values", count: 24 },
  { id: 2, title: "Peace Initiatives", count: 12 },
  { id: 3, title: "Unifications Principles", count: 11 },
  { id: 4, title: "Divine Femininity", count: 18 },
];

const CategoriesList = () => {
  return (
    <ScrollArea className="w-full  ">
      <h3 className="text-[20px] text-[#A0A0A0] font-medium
 mb-6 pt-2">Browse by Theme</h3>
      <div className="space-y-9">
        {categories.map(({ id, title, count }) => (
          <div key={id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Pin size={19} className="text-gray-500" />
              <span className="text-[16px] text-[#828282] font-medium">{title}</span>
            </div>
            <span className="px-5 py-0.4 text-[16px] bg-[#28303F14] text-black font-medium rounded-full ">
              {count}
            </span>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default CategoriesList;
