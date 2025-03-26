import { UserRound } from "lucide-react";
import Image from "next/image";
import React from "react";
import FriendCard from "./friendCard";

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

const FriendList = () => {
  return (
    <main className="border-[rgba(217,217,217,0.10)] bg-white">
      <div className="bg-white p-6 rounded-[12px] flex flex-col gap-8">
        {/* title  */}
        <div className="flex justify-between">
          <div className="flex gap-2">
            {/* loggo */}

            <div className="flex justify-center items-center gap-3">
              {/* <UserRound /> */}
              <Image src="/assets/social/user.svg" width={25} height={25} />
              <h1 className="text-[#28303F] font-readex-pro text-[28px] font-medium leading-normal">
                Friends List
              </h1>
            </div>

            <span className="text-[#828282] font-readex-pro text-[16px] font-medium leading-normal">
              4
            </span>
          </div>

          {/* buton  */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" stroke="#28303F" stroke-width="1.5"/>
            <path d="M14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4Z" stroke="#28303F" stroke-width="1.5"/>
            <path d="M14 20C14 21.1046 13.1046 22 12 22C10.8954 22 10 21.1046 10 20C10 18.8954 10.8954 18 12 18C13.1046 18 14 18.8954 14 20Z" stroke="#28303F" stroke-width="1.5"/>
          </svg>
          </div>
        </div>
        {/* cards cont */}
        <div className="flex justify-between">
          {/* cards 4  */}
          <div className="grid lg:grid-cols-2 gap-8 ">
            {dummyFriends.map((friend) => (
              <FriendCard
                key={friend.id}
                name={friend.name}
                lastActive={friend.lastActive}
                role={friend.role}
                level={friend.level}
                points={friend.points}
                avatarSrc={friend.avatarSrc}
              />
            ))}
          </div>

          <div className="flex items-end lg:gap-6 justify-center p-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 -8.74228e-07C4.47715 -1.35705e-06 1.35705e-06 4.47715 8.74228e-07 10C3.91405e-07 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 -3.91405e-07 10 -8.74228e-07ZM8.46967 13.5303L5.46967 10.5303C5.17678 10.2374 5.17678 9.76256 5.46967 9.46967L8.46967 6.46967C8.76256 6.17678 9.23744 6.17678 9.53033 6.46967C9.82322 6.76256 9.82322 7.23744 9.53033 7.53033L7.81066 9.25L14 9.25C14.4142 9.25 14.75 9.58579 14.75 10C14.75 10.4142 14.4142 10.75 14 10.75L7.81066 10.75L9.53033 12.4697C9.82322 12.7626 9.82322 13.2374 9.53033 13.5303C9.23744 13.8232 8.76256 13.8232 8.46967 13.5303Z"
                  fill="#EAEAEA"
                />
              </svg>
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM11.5303 6.46967L14.5303 9.46967C14.8232 9.76256 14.8232 10.2374 14.5303 10.5303L11.5303 13.5303C11.2374 13.8232 10.7626 13.8232 10.4697 13.5303C10.1768 13.2374 10.1768 12.7626 10.4697 12.4697L12.1893 10.75H6C5.58579 10.75 5.25 10.4142 5.25 10C5.25 9.58579 5.58579 9.25 6 9.25H12.1893L10.4697 7.53033C10.1768 7.23744 10.1768 6.76256 10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967Z"
                  fill="#828282"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FriendList;
