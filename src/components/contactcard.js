import { useState } from "react";
import { Plus, MoreVertical, Mail } from "lucide-react";

export default function Contactcard() {
  const contacts = ["Blessing Giver", "Blessing Giver", "Blessing Giver", "Blessing Giver"];

  return (
    <div className="mt-9 mx-auto bg-white  ">
      <div className="flex justify-between items-center mb-4">
        <div>
        <h1 className="text-xl font-semibold text-[#1E2535]  self-start">
        Your Contacts
      </h1>
          <p className="text-gray-500 text-sm">People to share blessings with</p>
        </div>
        <button className="p-2 bg-gray-200 rounded-full">
          <Plus className="w-5 h-5 text-gray-600" />
        </button>
      </div>
      {contacts.map((contact, index) => (
        <div key={index} className="flex items-center justify-between py-2 border-b last:border-b-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            <div>
              <p className="text-sm font-medium">{contact}</p>
              <p className="text-xs text-gray-500">Send 10 blessings</p>
            </div>
          </div>
          <button>
            <MoreVertical className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      ))}
       <button className="w-full flex items-center justify-center gap-2 bg-[#5f91f2] text-white py-2 rounded-lg mt-4 text-sm font-medium shadow-md">
        <Mail className="w-5  " /> Import From Gmail
      </button>
    </div>
  );
}