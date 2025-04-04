import { Link } from "lucide-react";
import Image from "next/image";
import React from "react";
import ActivityCard from "./activityCard";



const FriendsActivity = ({leaderboardData}) => {
  return (
    <main className="bg-white p-2 lg:p-6 rounded-[12px] flex flex-col gap-5">
      
       
          <div className="flex flex-col gap-1">
            <h1 className="text-[#28303F] font-readexpro text-lg  lg:text-[24px] font-medium leading-normal">
              Friends Activity
            </h1>
            <p className="text-[#828282] font-readexpro text-[12px] lg:text-[16px] font-normal leading-normal">
              See what your friends are up to
            </p>
          </div>

          <div className="flex w-full flex-col gap-2 lg:gap-6 ">
            {leaderboardData.map((item) => (
              <ActivityCard key={item.id} {...item} />
            ))}
          </div>
       
    
    </main>
  );
};

export default FriendsActivity;
