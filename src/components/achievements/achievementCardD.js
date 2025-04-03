import React from 'react';
import { Progress } from '@/components/ui/progress';

const AchievementCard1 = ({ title, description, completed, total, points, status }) => {
    return (



        <div className="flex flex-col bg-white p-3 rounded-md gap-3">
            {/* Top Section: Icon and Status Badge */}
            <div className="flex justify-between items-start">
                <span className="w-9 h-9">
                    <img
                        src="/assets/achievements/chatting.png"
                        className="bg-[#D9D9D9] rounded-full p-[4.2px] w-auto h-auto"
                        alt="chatting"
                    />
                </span>

                <span
                    className={`text-sm font-medium px-2 py-1 rounded-full ${
                        status === "Completed"
                            ? "bg-[#FAC571] text-black"
                            : "bg-[#EAEAEA] text-black"
                    }`}
                >
                    {status}
                </span>
            </div>

            {/* Middle Section: Title and Description */}
            <div>
                <h1 className="text-[#28303F] font-readex text-[16px] font-medium leading-normal">
                    {title}
                </h1>
                <div className="flex justify-between">
                    <p className="text-[#828282] font-readex text-[12px] font-normal leading-normal">
                        {description}
                    </p>
                    <h3 className="text-[#5E8DE5] text-sm">
                        {completed}{" "}
                        <span className="text-[#828282] font-readex text-[14px] font-normal leading-normal">
                            / {total}
                        </span>
                    </h3>
                </div>
            </div>

            {/* Bottom Section: Progress Bar and Points */}
            <div className="flex flex-col">
                <Progress
                    value={(completed / total) * 100}
                    className="h-2 bg-gray-200"
                    colorClass="bg-[#5E8DE5]"
                />
                <p className="text-sm text-[#5E8DE5]">
                    +{points} points when completed
                </p>
            </div>
        </div>
    );
};

export default AchievementCard1;
