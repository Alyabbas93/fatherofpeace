import React from "react";
import { Bell, Check, MoreVertical, X } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const notifications = [
  {
    id: 1,
    name: "Jessica",
    message: "3 mutual friends",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "Jessica",
    message: "Send 10 blessings",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 3,
    name: "Jessica",
    message: "Dr. Hak Ja Han Moon, International Day of Families Celebration, 2015",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
];

const NotificationPopover = () => {
  return (
    <Popover className="relative">
      <PopoverTrigger>
        <div className="relative">
          <Bell className="text-gray-600 cursor-pointer hover:text-black" size={20} />
          
        </div>
      </PopoverTrigger>

      <PopoverContent className="w-80 bg-white m-4 top-[6rem]  shadow-md rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold">Notifications</h3>
          <Badge className="bg-green-500 text-white px-2 py-0.5 text-xs">3</Badge>
        </div>

        <div className="space-y-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={notification.image} alt="User" />
                <AvatarFallback>J</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-semibold">{notification.name}</p>
                <p className="text-sm text-gray-500">{notification.message}</p>
              </div>
              <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="p-1 rounded-full text-red-500 border-gray-300">
                  <X size={16} />
                </Button>
                <Button variant="outline" size="icon" className="p-1 rounded-full text-green-500 border-gray-300">
                  <Check size={16} />
                </Button>
                
                <MoreVertical className="text-gray-500 cursor-pointer" size={18} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <Button variant="outline" className="w-full text-gray-700">
            Load More
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default NotificationPopover;
