"use client"




import React, { useState } from "react";
import SocialLayout from "../socialLayout";
import SocialHeader from "@/components/social/social-header";
import SocialTribesCard from "@/components/social/socialTribesCard";




const dummyFriends = [
  {
    id: 1,
    name: "Peace Builders",
    status: "Admin",
    members: "28 members",
    level: 8,
    desc:"A group dedicated to sharing and discussing True Mother's on peace",

    avatarSrc: "/assets/achievements/Ellipse16.svg",
  },
  {
    id: 2,
    name: "Family Values ",
    status: "Admin",
    members: "42 members",
    level: 12,
    desc:"Exploring True Mother's wisdom on family and relationship",
    avatarSrc: "/assets/achievements/Ellipse16.svg",
  },
  {
    id: 3,
    name: "Youth Leadership ",
    status: "Admin",
    members: "15 members",
    level: 5,
    desc:"Young leaders inspired by True Mother's vision",
    avatarSrc: "/assets/achievements/Ellipse16.svg",
  },

];

const Tribes = () => {

  const [filteredUsers , setFilteredUsers] = useState([]);


  return (
    <main className=" relative flex flex-col items-center p-3 lg:p-6 w-full">
      <div className="flex flex-col gap-9 w-full">
        {/* title  */}
        <SocialHeader title="Social Hub" desc="Your Tribes" dummyFriends={dummyFriends}  setFilteredUsers={setFilteredUsers}/>
        {/* data  */}
        <div className="rounded-[12px] flex items-center lg:w-full  justify-between  gap-4 lg:gap-8 ">
          {/* first dev  */}
          <SocialLayout>
            <SocialTribesCard dummyFriends={filteredUsers.length > 0 ? filteredUsers : dummyFriends} />
          </SocialLayout>
        </div>
      </div>
    </main>
  );
}

export default Tribes