"use client";

import { useState } from "react";
import { Check, X, MoreVertical, UserPlus } from "lucide-react";

export default function FriendRequests() {
  const [requests, setRequests] = useState([
    {
      id: 1,
      name: "Jessica",
      mutualFriends: 3,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      name: "Scarlet",
      mutualFriends: 3,
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      id: 3,
      name: "Mai",
      mutualFriends: 3,
      avatar: "https://randomuser.me/api/portraits/women/46.jpg",
    },
  ]);

  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm w-full ">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <UserPlus className="h-5 w-5 text-gray-600" />
          <h2 className="text-lg font-semibold">Friend Requests</h2>
          <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            {requests.length}
          </span>
        </div>
      </div>

      <div>
        {requests.map((request) => (
          <div
            key={request.id}
            className="flex items-center justify-between py-3 border-b last:border-0"
          >
            <div className="flex items-center space-x-3">
              <img
                src={request.avatar}
                alt={request.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-sm font-medium">{request.name}</p>
                <p className="text-xs text-gray-500">{request.mutualFriends} mutual friends</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 bg-red-100 text-red-500 rounded-full hover:bg-red-200">
                <X className="h-4 w-4" />
              </button>
              <button className="p-2 bg-green-100 text-green-500 rounded-full hover:bg-green-200">
                <Check className="h-4 w-4" />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700">
                <MoreVertical className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <button className="w-full mt-4 p-2 border text-sm font-medium rounded-lg hover:bg-gray-100">
        Load More
      </button>
    </div>
  );
}
