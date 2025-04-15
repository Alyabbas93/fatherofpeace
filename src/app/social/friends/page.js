"use client"



import SocialLayout from "../socialLayout";
import FriendsContent from "@/components/social/friendsContent";
import SocialHeader from "@/components/social/social-header";
import { useState } from "react";


const dummyFriends = [
  {
    id: 1,
    name: "Terry",
    lastActive: "2 hours ago",
    role: "Peace Ambassador",
    level: 8,

    avatarSrc: "/assets/achievements/Ellipse16.svg",
  },
  {
    id: 2,
    name: "Alex ",
    lastActive: "15 minutes ago",
    role: "Meditation Master",
    level: 12,

    avatarSrc: "/assets/achievements/Ellipse16.svg",
  },
  {
    id: 3,
    name: "Jamie ",
    lastActive: "1 day ago",
    role: "Wisdom Seeker",
    level: 5,
    avatarSrc: "/assets/achievements/Ellipse16.svg",
  },
  {
    id: 4,
    name: "Terry ",
    lastActive: "1 day ago",
    role: "Wisdom Seeker",
    level: 5,
    avatarSrc: "/assets/achievements/Ellipse16.svg",
  },

];

const dummyFriends2 = [
  {
    id: 1,
    name: "Terry",
    lastActive: "2 hours ago",
    role: "Peace Ambassador",
    level: 8,
    avatarSrc: "/assets/achievements/Ellipse16.svg",
    pin: "/assets/social/pin.svg",
    dots:"/assets/social/more-vertical.svg"

  },
  {
    id: 2,
    name: "Alex ",
    lastActive: "15 minutes ago",
    role: "Meditation Master",
    level: 12,

    avatarSrc: "/assets/achievements/Ellipse16.svg",
    pin: "/assets/social/pin.svg",
    dots:"/assets/social/more-vertical.svg"

  },
  {
    id: 3,
    name: "Jamie ",
    lastActive: "1 day ago",
    role: "Wisdom Seeker",
    level: 5,
    avatarSrc: "/assets/achievements/Ellipse16.svg",
    pin: "/assets/social/pin.svg",
    dots:"/assets/social/more-vertical.svg"

  },
  {
    id: 4,
    name: "Terry ",
    lastActive: "1 day ago",
    role: "Wisdom Seeker",
    level: 5,
    avatarSrc: "/assets/achievements/Ellipse16.svg",
    pin: "/assets/social/pin.svg",
    dots:"/assets/social/more-vertical.svg"
  },
  {
    id: 5,
    name: "Ali ",
    lastActive: "1 day ago",
    role: "Wisdom Seeker",
    level: 5,
    avatarSrc: "/assets/achievements/Ellipse16.svg",
    pin: "/assets/social/pin.svg",
    dots:"/assets/social/more-vertical.svg"
  },
  {
    id: 6,
    name: "Ajmal ",
    lastActive: "1 day ago",
    role: "Wisdom Seeker",
    level: 5,
    avatarSrc: "/assets/achievements/Ellipse16.svg",
    pin: "/assets/social/pin.svg",
    dots:"/assets/social/more-vertical.svg"
  }
 
];


const Friends = () => {

    const [filteredUsers , setFilteredUsers] = useState([]);
    const [filteredUsers2, setFilteredUsers2] = useState([]);


  return (

    
    <main className="flex flex-col items-center p-3 lg:p-6 w-full">
      <div className="flex flex-col gap-9 w-full">
        {/* title  */}
        <SocialHeader
          title="Social Hub"
          dummyFriends={dummyFriends}
          dummyFriends2={dummyFriends2}
          setFilteredUsers={setFilteredUsers}
          setFilteredUsers2={setFilteredUsers2}
        />
        {/* data  */}
        <SocialLayout>
        <div className="rounded-[12px] flex  justify-between  gap-4 lg:gap-8 ">
        <FriendsContent
              dummyFriends={filteredUsers.length > 0 ? filteredUsers : dummyFriends}
              dummyFriends2={filteredUsers2.length > 0 ? filteredUsers2 : dummyFriends2}
            />
        </div>
        </SocialLayout>
      </div>
    </main>
    
  )
}

export default Friends