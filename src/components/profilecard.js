import { createClient } from "@/utils/supabase/client";
import React, { useState, useEffect } from "react";

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
  const [storedImage, setStoredImage] = useState(null);
  const [storedName, setStoredName] = useState(null);

  useEffect(() => {

    const fetchProfile = async () => {
      const supabase = createClient();
      const {data ,error } = await supabase.auth.getUser();


      if(data?.user){
        const avatar = data.user.user_metadata?.avatar_url;
        const fullName = data.user.user_metadata?.full_name;
        const email = data.user.email;
     

      if (avatar){
        localStorage.setItem("profileImage", avatar);
        setStoredImage(avatar);

      }

      if (fullName){
        localStorage.setItem("fullName", fullName);
        setStoredName(fullName);
        console.log("Full Name: ", storedName);
      }



      }
      else{
        const localAvatar = localStorage.getItem("profileImage");
        const localName  = localStorage.getItem("fullName");
        if(localAvatar) setStoredImage(localAvatar);
        if(localName) setStoredName(localName);
      }


    }

    

    fetchProfile();
  }, []);

  console.log(storedName);
  

  return (
    <div className="mx-auto mb-9 border-b border-[#28303F0F] pb-12 py-5">
      <h1 className="text-[28px] font-medium text-[#28303F] mb-4 self-start">
        Your Profile
      </h1>
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 sm:w-12 sm:h-12 md:w-18 md:h-18 place-self-start border-2 border-yellow-400 rounded-full overflow-hidden flex-shrink-0">
          <img
            src={storedImage || userData.profilePic} // Use default if no stored image
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col w-full">
          <h2 className="text-[28px] font-medium text-[#28303F]">{storedName}</h2>
          <p className="text-[#828282] font-normal text-[14px]">{userData.role}</p>
          <div className="flex text-[#5E8DE5] gap-4 mt-3">
            <button className="px-6 py-1 flex items-center justify-center text-xs bg-[#28303F14] rounded-full h-[19px]">
              {userData.level}
            </button>
            <button className="px-6 items-center text-[#5E8DE5] justify-center flex py-1 text-xs bg-[#28303F14] rounded-full h-[19px]">
              {userData.points}
            </button>
          </div>
          <div className="flex gap-[50px] px-[9px]">
            <span className="text-[#828282] text-[14px] font-normal">Level</span>
            <span className="text-[#828282] text-[14px] font-normal">Points</span>
          </div>
        </div>
      </div>

      <div className="mt-3">
        <div className="flex items-center justify-between">
          <p className="text-[14px] text-[#828282] font-normal">
            Progress to Level {userData.level + 1}
          </p>
          <p className="text-xs text-right">
            <span className="text-[14px] font-normal text-[#5E8DE5]">{userData.points}</span>
            <span className="text-[14px] font-normal text-[#828282]">/{userData.maxPoints}</span>
          </p>
        </div>
        <div className="w-full bg-gray-200 h-2 mt-1 rounded-full">
          <div
            className="bg-[#5E8DE5] h-2 rounded-full"
            style={{ width: `${userData.progress}%` }}
          ></div>
        </div>
      </div>

      <div className="flex justify-between mt-6 text-center">
        {userData.stats.map((stat, index) => (
          <div key={index}>
            <p className="text-[24px] text-[#28303F] font-normal">{stat.value}</p>
            <p className="text-[14px] text-[#828282] font-normal">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
