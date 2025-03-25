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
      <h3 className="text-gray-700 font-semibold mb-2">Recent Searches</h3>
      <div className="space-y-3">
        {recentSearches.map((search, index) => (
          <div key={index} className="flex items-center w-full gap-2 text-gray-700">
            <Calendar size={16} className="text-gray-500" />
            <span className="text-sm">{search}</span>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default RecentSearches;
