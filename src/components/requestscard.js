"use client";

import { useState } from "react";
import { Check, X, MoreVertical, UserRound } from "lucide-react";

export default function FriendRequests() {
  const [requests, setRequests] = useState([
    { id: 1, name: "Jessica", mutualFriends: 3, avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
    { id: 2, name: "Scarlet", mutualFriends: 3, avatar: "https://randomuser.me/api/portraits/women/45.jpg" },
    { id: 3, name: "Mai", mutualFriends: 3, avatar: "https://randomuser.me/api/portraits/women/46.jpg" },
  ]);

  return (
    <div className="rounded-lg p-4 bg-white w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <UserRound className="h-5 w-5 sm:h-6 sm:w-6 text-[#28303F]" />
          <h2 className="text-[28px] font-semibold text-[#28303F]">Friend Requests</h2>
          <span className="bg-[#4AB794] text-white text-[12px] sm:text-[14px] w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] flex items-center justify-center rounded-full">
            {requests.length}
          </span>
        </div>
      </div>

      <div>
        {requests.map((request) => (
          <div key={request.id} className="flex items-center justify-between py-3  last:border-0">
            <div className="flex items-center gap-2 sm:gap-3">
              <img
                src={request.avatar}
                alt={request.name}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full"
              />
              <div>
                <p className="text-[18px] sm:text-[24px] font-medium text-[#28303F]">{request.name}</p>
                <p className="text-[14px] sm:text-[16px] text-[#828282]">{request.mutualFriends} mutual friends</p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border border-[#FA8171] text-red-500 rounded-full hover:bg-red-200">
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              <button className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-[#4AB794] rounded-full hover:bg-green-200">
                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </button>
              <button className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-gray-500 hover:text-[#28303F]">
                <MoreVertical className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 p-3 sm:p-4 border border-[#28303F] text-[14px] sm:text-[16px] font-medium rounded-lg hover:bg-gray-100">
        Load More
      </button>
    </div>
  );
}
