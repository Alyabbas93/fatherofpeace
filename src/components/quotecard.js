import { BadgeInfo, Calendar, CalendarRange, Cloud, Info, MessageCircle, MessageCircleCode, Share2 } from "lucide-react";

export default function QuoteCard() {
  return (
    <div className="bg-[#ffffff] p-4 rounded-lg  w-full">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
        <CalendarRange size={28} strokeWidth={0.85} />

          <h2 className="text-[28px] font-medium text-[#28303F]">Quote of the Day</h2>
        </div>
        <p className="text-[14px] text-[#28303F] font-normal">March 7, 2025</p>
      </div>

      <p className="text-[16px] pl-9 text-[#828282] mb-4">
        Daily inspiration from Dr. Hak Ja Han Moon
      </p>

      <div className="bg-[#F7F9FC] p-4 rounded-lg">
        <p className="text-[20px] font-semibold text-[#28303F] leading-[1.4] pb-2">
          “The family is the school of love where we learn to love all humanity  <br/>in its wide variety.”
        </p>
        <p className="text-[14px] text-[#828282] font-normal
 mt-1">
          - Dr. Hak Ja Han Moon, International Day of Families Celebration, 2015
        </p>
      </div>

      <div className="flex items-center justify-between w-full mt-3">
  <div className="flex flex-col text-[#2563EB] space-y-1">
    <div className="flex items-center space-x-2">
    <BadgeInfo size={26} strokeWidth={1.75} />
      <p className="text-[16px] font-medium">Reflection Question</p>
    </div>
    <p className="text-[14px] font-normal
 cursor-pointer hover:underline pl-8.5">
      How can your family become a better school of love for yourself and others?
    </p>
  </div>

  <div className="flex items-center space-x-3">
  <div className="flex items-center space-x-3">
  <button className=" cursor-pointer flex items-center justify-center h-[38px] w-[115px] text-[16px] font-medium border border-[#28303F] text-black rounded-md hover:bg-gray-100">
    <Share2 className="h-5 w-5 mr-2" /> 
    <span>Share</span>
  </button>
  <button className=" cursor-pointer flex items-center justify-center h-[38px] w-[115px] text-[16px] font-medium bg-[#5E8DE5] text-white rounded-md hover:bg-blue-700">
    <MessageCircle size={28}  className="h-5 w-5 mr-2" /> 
    
    
    <span>Reflect</span>
  </button>
</div>

  </div>
</div>


     
    </div>
  );
}
