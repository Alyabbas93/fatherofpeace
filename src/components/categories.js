import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sparkles } from "lucide-react";

const categories = [
  { id: 1, title: "Family Values", count: 24 },
  { id: 2, title: "Peace Initiatives", count: 12 },
  { id: 3, title: "Unifications Principles", count: 11 },
  { id: 4, title: "Divine Femininity", count: 18 },
];

const CategoriesList = () => {
  return (
    <ScrollArea className="w-full  ">
      <h3 className="text-gray-700 font-semibold mb-2">Browse by Theme</h3>
      <div className="space-y-3">
        {categories.map(({ id, title, count }) => (
          <div key={id} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-gray-500" />
              <span className="text-sm text-gray-700">{title}</span>
            </div>
            <span className="px-2 py-0.5 text-xs bg-gray-200 rounded-full text-gray-700">
              {count}
            </span>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default CategoriesList;
