import React from "react";

const userData = {
  name: "John Doe",
  role: "Peace Ambassador",
  level: 8,
  points: 1255,
  progress: 80,
  maxPoints: 1500,
  profilePic: "https://via.placeholder.com/50", 
  stats: [
    { label: "Day Streak", value: 12 },
    { label: "Quotes Shared", value: 24 },
    { label: "Blessings Sent", value: 8 },
  ],
};

const ProfileCard = () => {
  const storedImage = localStorage.getItem("profileImage");

  return (
    
    <div className=" mx-auto mb-9 py-5 ">
<h1 className="text-xl font-semibold text-[#1E2535] mb-4 self-start">
        Your Profile
      </h1>
      <div className="flex items-center gap-4">
      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 place-self-start border-2 border-yellow-400 rounded-full overflow-hidden flex-shrink-0">
  <img
    src={storedImage}
    alt="Profile"
    className="w-full h-full object-cover"
  />
</div>

      <div className="flex flex-col w-full">
          <h2 className="text-lg font-semibold">{userData.name}</h2>
          <p className="text-gray-500 text-sm">{userData.role}</p>
          <div className="flex text-[#5E8DE5]  gap-4 mt-3">
     
          <button className="px-6 py-0 flex  items-center text-xs bg-gray-100  rounded-full h-[19px]">
          {userData.level} 
        </button>
     
        <button className="px-6 items-center text-[#5E8DE5]  flex py-1 text-xs bg-gray-100  rounded-full h-[19px]">
          {userData.points} 
      
        </button>
   
        </div>
        <div className="flex   gap-[59px] px-[9px]">
        <span className="text-gray-400  text-xs">Level</span>
        <span className="text-gray-400  text-xs">Points</span>
        </div>
        </div>
      </div>

     

      <div className="mt-3">
        <div className="flex item-center justify-between">
        <p className="text-sm text-gray-500">Progress to Level {userData.level + 1}</p>
        <p className="text-xs text-right text-gray-500 mt-1">
          {userData.points}/{userData.maxPoints}
        </p>
        </div>
      
        <div className="w-full bg-gray-200 h-2.5 mt-1 rounded-full">
          <div
            className="bg-blue-500 h-2.5 rounded-full"
            style={{ width: `${userData.progress}%` }}
          ></div>
         
        </div>
       
      </div>

      <div className="flex justify-between mt-4 text-center">
        {userData.stats.map((stat, index) => (
          <div key={index}>
            <p className="text-lg font-semibold">{stat.value}</p>
            <p className="text-xs text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
