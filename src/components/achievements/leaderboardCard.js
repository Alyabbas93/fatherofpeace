import React from "react";
import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";

export default function Achievementleaderb({ 
  id, 
  image, 
  name, 
  title, 
  level, 
  points, 
  image2 
}) {
  return (
    <div className="flex justify-between w-full border-[#28303F0F] rounded-xl px-1 lg:px-4 py-2">
      {/* profile */}
      <div className="flex items-center gap-2 lg:gap-10">
        {/* for seq */}
        <div>
          <span
            className={`rounded-full text-center text-[12px] lg:text-sm py-1 px-2 ${
              id === 1
                ? "bg-[#FAC571] text-white"
                : id === 2
                ? "bg-green-500 text-white"
                : id === 3
                ? "bg-blue-500 text-white"
                : "bg-none text-black"
            }`}
          >
            {id}
          </span>
        </div>

        <div className="flex lg:gap-4 items-center">
          <div>
            <Avatar className="relative w-[54px] h-[55px]">
              <Image
                src={image}
                alt="Avatar"
                layout="fill"
                className="rounded-full object-cover"
              />
            </Avatar>
          </div>

          <div className="flex flex-col px-2">
            <p className="text-[#28303F] lg:text-[24px] font-medium">{name}</p>

            <div className="flex gap-1 lg:gap-3 items-center">
              <p className=" px-1 lg:px-3 mt-1 rounded-full w-fit py-0.5 text-[#828282] bg-[#28303F14] text-[11px] lg:text-[14px] font-normal leading-normal">
                Level {level}
              </p>
              <p className="px-1 lg:px-3 mt-1 rounded-full w-fit py-0.5 text-[#5E8DE5] text-[11px] lg:text-[12px]">
                {points} Points
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* trophy section */}
      <div className="flex items-center h-fit">
        <div className="relative lg:w-[54px] lg:h-[55px]  w-[40px] h-[40px]">
        {image2 && (
    <div className="relative lg:w-[54px] lg:h-[55px] w-[40px] h-[40px]">
      <Image
        src={image2}
        alt="Avatar"
        layout="fill"
        className="rounded-full object-cover bg-transparent "
      />
    </div>
  )}
        </div>
      </div>
    </div>
  );
}
