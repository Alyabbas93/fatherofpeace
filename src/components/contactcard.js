import { useState } from "react";
import { Plus, MoreVertical, Mail } from "lucide-react";

export default function Contactcard() {
  const contacts = ["Blessing Giver", "Blessing Giver", "Blessing Giver", "Blessing Giver"];

  return (
    <div className="mt-9 mx-auto bg-white  ">
      <div className="flex justify-between items-center mb-4">
        <div>
        <h1 className="text-[28px] font-medium text-[#28303F]  self-start">
        Your Contacts
      </h1>
          <p className="text-[#828282] text-[14px] font-normal">People to share blessings with</p>
        </div>
    
        <button className="w-10 h-10 flex items-center justify-center bg-[#232938] rounded-lg cursor-pointer">
  <Plus className="w-5 h-5 text-white" />
</button>

      </div>
      {contacts.map((contact, index) => (
        <div key={index} className="flex items-center justify-between border-b border-[#28303F0F]  py-3 ">
          <div className="flex items-center gap-3">
            <div className="bg-gray-300  w-9 h-9 flex items-center justify-center rounded-full"></div>
            <div>
              <p className="text-[16px] font-medium text-[#28303F]">{contact}</p>
              <p className="text-[12px] font-normal text-[#828282]">Send 10 blessings</p>
            </div>
          </div>
          <button>
            <MoreVertical className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      ))}
       <button className="cursor-pointer w-full flex items-center justify-center gap-2 bg-[#5f91f2] text-white py-2 rounded-lg mt-4 text-sm font-medium shadow-md">
        <Mail className="w-5  " /> Import From Gmail
      </button>
    </div>
  );
}