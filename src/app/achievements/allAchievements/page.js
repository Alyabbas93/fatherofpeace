import AchievementCards2 from '@/components/achievements/achievementCards2';
import React from 'react'




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
    title: "Knowledge Seeker",
    description: "Search for 20 different topics",
    completed: 20,
    total: 20,
    points: 75,
    status: "Completed", // New field for status
  },
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
    title: "Knowledge Seeker",
    description: "Search for 20 different topics",
    completed: 20,
    total: 20,
    points: 75,
    status: "Completed", // New field for status
  },
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
    title: "Knowledge Seeker",
    description: "Search for 20 different topics",
    completed: 20,
    total: 20,
    points: 75,
    status: "Completed", // New field for status
  },
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
    title: "Knowledge Seeker",
    description: "Search for 20 different topics",
    completed: 20,
    total: 20,
    points: 75,
    status: "Completed", // New field for status
  }, {
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
  
  // Add more items as needed (up to 14)
];



const All_Achievements = () => {

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
        <div className="flex flex-col gap-5  ">
          
          <AchievementCards2 achievementData={achievementData} />
          
          
        </div>
      </div>
    </main>
  )
}

export default All_Achievements