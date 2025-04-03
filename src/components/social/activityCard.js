import React from "react";
import { Avatar } from "@/components/ui/avatar";
import Image from "next/image"

const ActivityCard = (
    {  id, 
        image, 
        name, 
        title, 
        level, 
        points, 
        desc,
        status,
        image2 }
) => {
    return (
      <div className="flex justify-between w-full mb-2 border-b-2 border-[#28303F0F]   py-4 lg:px-2 lg:py-6">
        {/* profile */}
        <div className="flex items-center gap-2 lg:gap-10">
          <div className="flex lg:gap-4 items-center">
            <div>
              <Avatar className="relative w-[40px] h-[40px] lg:w-[54px] lg:h-[55px]">
                <Image
                  src={image}
                  alt="Avatar"
                  layout="fill"
                  className="rounded-full object-cover"
                />
              </Avatar>
            </div>

            <div className="flex flex-col px-2">
              <p className="text-[#28303F] lg:text-[24px] font-medium">
                {name}
              </p>

              <div className="flex gap-1 lg:gap-3 items-center">
                <p className=" text-[#828282] font-readexpro text-[12px] lg:text-base font-normal leading-normal">
                  {desc}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* trophy section */}
        <div className="flex  items-center h-fit gap-2 ">
          <div className="relative flex flex-col  justify-baseline items-end  gap-5">
            <p className="text-[#828282] font-readexpro text-[10px] lg:text-sm font-normal leading-normal">
              {status}
            </p>

            {image2 &&(<Image
              src={image2}
              alt="share"
              width={20}
              height={20}
              className="rounded-sm w-[20px] h-[20px]"
            />)}
          </div>
        </div>
      </div>
    );
}

export default ActivityCard