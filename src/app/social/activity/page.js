"use client"



import React, { useState } from "react";
import SocialLayout from "../socialLayout";
import FriendsActivity from "@/components/social/friendsActivity";
import SocialHeader from "@/components/social/social-header";


const leaderboardData = [
  {
    id: 1,
    image: "/assets/achievements/Ellipse16.svg",
    name: "Shahzad ",
    desc: "Shared a quote about family values",
    status:"2 hours ago"
  },
  {
    id: 2,
    image: "/assets/achievements/Ellipse16.svg",
    name: "Ali Smith",
    desc: "Shared a quote about family values",
    image2: "/assets/social/share.svg",
    status:"2 hours ago"
    },
  {
    id: 3,
    image: "/assets/achievements/Ellipse16.svg",
    name: "Alice Brown",
    desc: "Shared a quote about family values",
     status:"2 hours ago"
  },
 
];

const Activity = () => {
  
  const [filteredUsers , setFilteredUsers] = useState([]);
  
  return (
   
    <main className="flex flex-col items-center p-3 lg:p-6 w-full">
      <div className="flex flex-col gap-9 w-full">
        {/* title  */}
        <SocialHeader title="Social Hub" dummyFriends={leaderboardData} setFilteredUsers={setFilteredUsers}/>
        {/* data  */}
        <div className="rounded-[12px] flex  justify-between  gap-4 lg:gap-8 ">
          {/* first dev  */}

          
        <SocialLayout>
            <FriendsActivity leaderboardData={filteredUsers.length > 0 ? filteredUsers : leaderboardData}/>
        </SocialLayout>
        
          
      
        </div>
      </div>
    </main>
   
  )
}

export default Activity






























