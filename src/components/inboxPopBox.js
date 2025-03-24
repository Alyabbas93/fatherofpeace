import React from "react";
import { Mail, MoreVertical } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const messages = [
  {
    id: 1,
    name: "Jessica",
    message: "Dr. Hak Ja Han Moon, International Day of Families Celebration, 2015",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    time: "2 days ago",
  },
  {
    id: 2,
    name: "Jessica",
    message: "Dr. Hak Ja Han Moon, International Day of Families Celebration, 2015",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    time: "2 weeks ago",
  },
  {
    id: 3,
    name: "Jessica",
    message: "Dr. Hak Ja Han Moon, International Day of Families Celebration, 2015",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    time: "5 days ago",
  },
];

const InboxPopover = () => {
  const inboxCount = messages.length;

  return (
    <Popover>
      <PopoverTrigger>
        <Mail className="text-gray-600 cursor-pointer hover:text-black" size={20} />
      </PopoverTrigger>

      <PopoverContent className="w-80 bg-white m-4 shadow-md rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold">Inbox</h3>
          {inboxCount > 0 && (
            <Badge className="bg-green-500 text-white px-2 py-0.5 text-xs">{inboxCount}</Badge>
          )}
        </div>

        <div className="space-y-4">
          {messages.length > 0 ? (
            messages.map((message) => (
              <div key={message.id} className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={message.image} alt="User" />
                  <AvatarFallback>J</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-semibold">{message.name}</p>
                  <p className="text-sm text-gray-500">{message.message}</p>
                </div>
                <div className="text-xs text-gray-500">{message.time}</div>
                <MoreVertical className="text-gray-500 cursor-pointer" size={18} />
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 text-sm">No new messages</p>
          )}
        </div>

        {messages.length > 0 && (
          <div className="mt-4">
            <Button variant="outline" className="w-full text-gray-700">
              Load More
            </Button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default InboxPopover;
