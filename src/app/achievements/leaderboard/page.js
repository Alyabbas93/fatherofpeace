import Achievementleaderb from "@/components/achievements/leaderboardCard";
import Image from "next/image";
import React from "react";

const leaderboardData = [
  {
    id: 1,
    image: "/assets/achievements/Ellipse16.png",
    name: "John Doe",
    title: "Champion",
    level: 10,
    points: 1500,
    image2: "/assets/achievements/achivement.png",
  },
  {
    id: 2,
    image: "/assets/achievements/Ellipse16.png",
    name: "Jane Smith",
    title: "Top Scorer",
    level: 8,
    points: 1200,
    image2: "/assets/achievements/achivement 1.png",
  },
  {
    id: 3,
    image: "/assets/achievements/Ellipse16.png",
    name: "Alice Brown",
    title: "Elite Player",
    level: 7,
    points: 1100,
    image2: "/assets/achievements/achivement 1.png",
  },
  {
    id: 4,
    image: "/assets/achievements/Ellipse16.png",
    name: "Bob Williams",
    title: "Skilled Strategist",
    level: 6,
    points: 950,
  },
  {
    id: 5,
    image: "/assets/achievements/Ellipse16.png",
    name: "Charlie Green",
    title: "Rising Star",
    level: 5,
    points: 800,
  },
];

const Leaderboard = () => {
  return (
    <main className="flex flex-col items-center p-3 lg:p-6 w-full">
      <div className="flex flex-col gap-9 w-full">
        {/* title  */}
        <div>
          <h1 className="text-[#28303F] font-readexpro text-3xl lg:text-[40px] font-semibold leading-normal">
            Your Achievements
          </h1>
          <p className="text-[#28303F] font-readex-pro text-lg lg:text-[20px] font-normal leading-normal">
            John Doe
          </p>
        </div>
        {/* data  */}
        <div className="rounded-[12px] flex flex-col  border border-[rgba(217,217,217,0.10)] bg-white gap-4 lg:gap-8 p-2 lg:p-5">
          {/* for title  */}
          <div className="flex gap-2 lg:gap-3 ">
            {/* for logo  */}
            <div className="pt-1 lg:pt-2">
              <Image
                src="/assets/achievements/globe.png"
                alt="calender"
                width={25}
                height={25}
                className="w-6 h-6 lg:w-8 lg:h-8"
              />
            </div>
            {/* for title  */}
            <div>
              <h1 className="text-[#28303F] text-xl lg:text-[28px] font-medium leading-normal">
                Global Leaderboard
              </h1>
              <p className="text-[#828282] text-md lg:text-[16px] font-normal leading-normal">
                See how you rank among other users
              </p>
            </div>
          </div>
          {/* cards area d */}
          <div className="flex w-full flex-col gap-2 lg:gap-3 lg:px-5">
            {leaderboardData.map((item) => (
              <Achievementleaderb key={item.id} {...item} />
            ))}
          </div>
        </div>

        <div>
          <p className="text-[#5E8DE5] text-sm lg:text-[16px] font-normal leading-normal">
            Leaderboard updates daily. The top 3 users at the end of each month
            receive special rewards.{" "}
          </p>
        </div>
      </div>
    </main>
  );
};

export default Leaderboard;
