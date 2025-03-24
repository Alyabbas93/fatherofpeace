import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, Share2, MessageCircle, Heart } from "lucide-react";

const achievementsData = [
  { id: 1, title: "First Steps", description: "Complete your first search", progress: 10, total: 10, icon: <Search size={16} /> },
  { id: 2, title: "Sharing is Caring", description: "Share 5 quotes", progress: 10, total: 10, icon: <Share2 size={16} /> },
  { id: 3, title: "Discussion Leader", description: "Create 3 group discussions", progress: 5, total: 10, icon: <MessageCircle size={16} /> },
  { id: 4, title: "Blessing Giver", description: "Send 10 blessings", progress: 4, total: 10, icon: <Heart size={16} /> },
  { id: 5, title: "New Achievement", description: "Unlock new levels", progress: 2, total: 10, icon: <Heart size={16} /> },
  { id: 6, title: "Explorer", description: "Visit 50 pages", progress: 25, total: 50, icon: <Search size={16} /> },
  { id: 7, title: "Connector", description: "Connect with 10 people", progress: 7, total: 10, icon: <MessageCircle size={16} /> },
  { id: 8, title: "Super Sharer", description: "Share 20 quotes", progress: 15, total: 20, icon: <Share2 size={16} /> },
  { id: 9, title: "Kind Heart", description: "Send 50 blessings", progress: 30, total: 50, icon: <Heart size={16} /> },
];

const AchievementsCard = () => {
  return (
    <ScrollArea className="w-full h-65 pr-3.5">
      <div >
        {achievementsData.map(({ id, title, description, progress, total, icon }) => {
          const isCompleted = progress === total;

          return (
            <div key={id} className="flex items-center gap-3 py-2 border-b last:border-b-0">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full 
                  ${isCompleted ? "bg-[#5E8DE5] text-white" : "bg-gray-300 text-gray-600"}`}
              >
                {icon}
              </div>

              <div className="flex-1">
                <p className="text-sm font-semibold">{title}</p>
                <p className="text-xs text-gray-500">{description}</p>

                {total > 1 && (
                  <div className="relative w-full h-1.5 bg-gray-300 rounded-full mt-1">
                    <div
                      className="absolute h-full bg-[#5E8DE5] rounded-full transition-all"
                      style={{ width: `${(progress / total) * 100}%` }}
                    ></div>
                  </div>
                )}
              </div>

              {isCompleted ? (
                <button className="bg-[#5E8DE5] text-white text-xs px-3 py-1 rounded-full">
                  Complete
                </button>
              ) : (
                <p className="text-xs text-gray-500 min-w-[40px] text-right">
                  {progress}/{total}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </ScrollArea>
  );
};

export default AchievementsCard;
