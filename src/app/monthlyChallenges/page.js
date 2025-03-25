import AchievementCards2 from '@/components/achievements/achievementCards2';
import Image from 'next/image';



const achievementData = [
  {
    title: "Mediation Master",
    description: "Complete 30 Meditations",
    completed: 25,
    total: 30,
    points: 75,
    status: "In Progress", // New field for status
  },
  {
    title: "Blessing Giver",
    description: "Send 10 blessings",
    completed: 6,
    total: 10,
    points: 75,
    status: "In Progress", // New field for status
  },
   {
    title: "Mediation Master",
    description: "Complete 30 Meditations",
    completed: 25,
    total: 30,
    points: 75,
    status: "In Progress", // New field for status
  },

  
  // Add more items as needed (up to 14)
];

const MonthlyChallenges = () => {

  return (
    <main className="flex flex-col items-center p-6 w-full">
      <div className="flex flex-col gap-9 w-full">
        {/* title  */}
        <div>
          <h1 className="text-[#28303F] font-readexpro text-[40px] font-semibold leading-normal">
            Your Achievements
          </h1>
          <p className='text-[#28303F] font-readex-pro text-[20px] font-normal leading-normal'>John Doe</p>
        </div>
        {/* data  */}
        <div className="rounded-[12px] flex flex-col  border border-[rgba(217,217,217,0.10)] bg-white gap-8  p-5">
            {/* for title  */}
            <div className="flex gap-2 ">
              {/* for logo  */}
              <div className="pt-2">
                <Image
                  src="/assets/achievements/calendar.png"
                  alt="calender"
                  width={25}
                  height={25}
                />
              </div>
              {/* for title  */}
              <div>
                <h1 className="text-[#28303F] text-[28px] font-medium leading-normal">
                  May 2025 Challenges
                </h1>
                <p className="text-[#828282] text-[16px] font-normal leading-normal">
                  Complete these challenges before the end of the month to earn special rewards
                </p>
              </div>
            </div>
            {/* cards area d */}
            <div className="flex w-full px-5">
             
           <AchievementCards2 achievementData={achievementData}/>
            </div>
          </div>
      </div>
    </main>
  )
}

export default MonthlyChallenges