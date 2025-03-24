import { Calendar, Info, Share2 } from "lucide-react";

export default function QuoteCard() {
  return (
    <div className="bg-[#ffffff] p-4 rounded-lg border w-full">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <Calendar className="h-5 w-5 text-[#D9D9D91A]" />
          <h2 className="text-[16px] font-semibold text-[#1D1D1D]">Quote of the Day</h2>
        </div>
        <p className="text-[12px] text-gray-500">March 7, 2025</p>
      </div>

      <p className="text-[12px] text-gray-500 mb-2">
        Daily inspiration from Dr. Hak Ja Han Moon
      </p>

      <div className="bg-[#F7F9FC] p-4 rounded-lg">
        <p className="text-[14px] font-medium text-[#1D1D1D] leading-[1.4]">
          “The family is the school of love where we learn to love all humanity in its wide variety.”
        </p>
        <p className="text-[12px] text-gray-500 mt-1">
          - Dr. Hak Ja Han Moon, International Day of Families Celebration, 2015
        </p>
      </div>

      <div className="flex items-center text-[#2563EB] mt-3 space-x-2 item-center">
        <Info className="h-4 w-4" />
        <p className="text-[12px] cursor-pointer hover:underline">
          How can your family become a better school of love for yourself and others?
        </p>
        <div className="flex justify-end items-center space-x-3 mt-3">
        <button className="flex items-center px-3 py-1.5 text-[12px] border rounded-md hover:bg-gray-100">
          <Share2 className="h-4 w-4 mr-1" />
          Share
        </button>
        <button className="px-4 py-2 text-[12px] bg-[#2563EB] text-white rounded-md hover:bg-blue-700">
          Reflect
        </button>
      </div>
      </div>

     
    </div>
  );
}
