"use client";

import { Progress } from "@/components/ui/progress";

export default function AccountLevel() {
  const userData = {
    level: 8,
    currentXP: 1255,
    maxXP: 1500,
    stats: [
      { label: "Day Streak", value: 12 },
      { label: "Quotes Shared", value: 24 },
      { label: "Blessings Sent", value: 8 },
    ],
  };

  const { level, currentXP, maxXP, stats } = userData;
  const progress = Math.min((currentXP / maxXP) * 100, 100);

  return (
    <div className="rounded-lg p-6 bg-white w-full">
      <div className="flex justify-between items-center">
        <h2 className="text-[28px] text-[#28303F] font-semibold">Account level</h2>
        <span className="text-[28px] text-[#28303F] font-semibold">{level}</span>
      </div>

      <div className="flex justify-between text-gray-500 text-sm mb-1 pt-2">
        <p className="text-[14px] font-normal text-[#828282]">Progress to Level {level + 1}</p>
        <div className="flex">
          <span className="text-[14px] font-normal text-[#5E8DE5]">{currentXP}</span>/
          <span className="text-[14px] font-normal text-[#828282]">{maxXP}</span>
        </div>
      </div>

      <div className="relative w-full h-2.5 bg-gray-300 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#5E8DE5] rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="flex justify-between mt-5 text-center">
  {stats.map((stat, index) => (
    <div key={index}>
      <p className="text-[18px] md:text-[24px] text-[#28303F] font-normal">{stat.value}</p>
      <p className="text-[12px] md:text-[14px] text-[#828282] font-normal">{stat.label}</p>
    </div>
  ))}
</div>

    </div>
  );
}
