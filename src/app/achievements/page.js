import { Progress } from "../../components/ui/progress";
// import { Progress } from '@/components/ui/progress'
import React from "react";
import Image from "next/image";
import StreakAchievement from "@/components/achievements/streakAchievement";
import AchievementCards2 from "@/components/achievements/achievementCards2";
import AchievementCard1 from "@/components/achievements/achievementCardD";
// import AchievementCards2 from "@//achievementCards2";

const achievementData = [
  {
    title: "Mediation Master",
    description: "Complete 30 Meditations",
    completed: 25,
    total: 30,
    points: 75,
  },
  {
    title: "Blessing Giver",
    description: "Send 10 blessings",
    completed: 6,
    total: 10,
    points: 75,
  },
  {
    title: "Knowledge Seeker",
    description: "Search for 20 different topics",
    completed: 15,
    total: 20,
    points: 75,
  },
];

const dataVlaue = [
  {
    value: 248,
    text: "Searches",
  },
  {
    value: 87,
    text: "Quotes Shared ",
  },
  {
    value: 37,
    text: "Discussions",
  },
  {
    value: 64,
    text: "Blesings sent",
  },
  {
    value: 45,
    text: "Mediations",
  },
];

const Achievements = () => {
  const currentPoints = 1255;
  const maxPoints = 1500;

  const progressValue = (currentPoints / maxPoints) * 100;

  return (
    <main className="flex flex-col items-center p-6 w-full">
      <div className="flex flex-col gap-9 w-full">
        {/* title  */}
        <div>
          <h1 className="text-[#28303F] font-readexpro text-[40px] font-semibold leading-normal">
            Your Achievements
          </h1>
        </div>
        {/* data  */}
        <div className="flex flex-col gap-5  ">
          {/* first comp streak and others */}
          <div className="flex w-full">
            <StreakAchievement />
          </div>

          {/* 2nd component level progress comp  */}
          <div className=" flex flex-col gap-8 p-5 rounded-[12px] border border-[rgba(217,217,217,0.10)] bg-white">
            {/* title section  */}
            <div className="flex flex-col">
              <h1 className="text-[#28303F] font-[Readex Pro] text-[28px] font-medium leading-normal">
                Level Progress
              </h1>
              <p className="text-[#828282] font-[Readex Pro] text-[16px] font-normal leading-normal">
                Your're making great progress! Keep with True Mother's to earn
                more points.
              </p>
            </div>
            {/* progress section  */}
            <div className="flex flex-col gap-2">
              {/* headings  */}
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <h1 className="text-[#28303F] font-[Readex Pro] text-[28px] font-medium">
                    8
                  </h1>
                  <p className="text-[#28303F] font-[Readex Pro] text-[20px] font-medium">
                    Peace Ambassador
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <p className="text-[#5E8DE5] font-[Readex Pro] text-[24px] font-normal leading-normal">
                    {currentPoints}{" "}
                    <span className="text-[#828282]"> /{maxPoints}</span>
                  </p>
                  <h1 className="text-[#28303F] font-[Readex Pro] text-[28px] font-medium">
                    9
                  </h1>
                </div>
              </div>
              {/* progresss  */}
              <div>
                <Progress value={progressValue} />
              </div>
            </div>
            {/* values sents  */}
            <div className="flex gap-6 justify-around mb-10">
              {dataVlaue.map((values) => (
                <div
                  key={values.value}
                  className="flex  flex-col justify-center items-center "
                >
                  <h1 className="text-[#28303F] font-readex-pro text-[36px] font-normal leading-normal">
                    {values.value}
                  </h1>
                  <p className="text-[#828282] font-readex-pro text-[24px] font-normal leading-normal">
                    {values.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 3rd component almost there */}
          <div className="flex w-full flex-col gap-8 p-5 rounded-[12px] border border-[rgba(217,217,217,0.10)] bg-[#28303F] ">
            {/* for title  */}
            <div className="flex gap-2 ">
              {/* for logo  */}
              <div className="pt-2">
                <Image
                  src="/assets/achievements/star.png"
                  alt="Star Achievement"
                  width={25}
                  height={25}
                />
              </div>
              {/* for title  */}
              <div>
                <h1 className="text-white font-readex-pro text-[28px] font-medium leading-normal">
                  Almost There!
                </h1>
                <p className="text-white font-readex-pro text-[16px] font-normal leading-normal">
                  Your're close to earning these achievements
                </p>
              </div>
            </div>
            {/* cards area d */}
            <div className="flex w-full">
             
           <AchievementCards2 achievementData={achievementData}/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Achievements;
