import InviteFriends from "@/components/invitecard";
import FriendRequests from "@/components/requestscard";
import FriendList from "@/components/social/friendList";
import PeopleUmN from "@/components/social/peopleUmN";
import React from "react";

const Social = () => {
  return (
    <main className="flex flex-col items-center p-3 lg:p-6 w-full">
      <div className="flex flex-col gap-9 w-full">
        {/* title  */}
        <div className="flex justify-between items-center">
          <h1 className="text-[#28303F] font-readexpro text-3xl lg:text-[40px] font-semibold leading-normal">
            Social Hub
          </h1>

          <div className="">
            <button> invite friends</button>
          </div>
        </div>
        {/* data  */}
        <div className="rounded-[12px] flex   justify-between  gap-4 lg:gap-8 ">
          {/* first dev  */}
          <div className="w-[90%] flex  flex-col gap-4">
            {/* friends list  */}
            <FriendList/>
            {/* people u know  */}
            <div>
              <PeopleUmN />
            </div>
          </div>
          {/* side dev  */}
          <div className="flex flex-col gap-3">
            {/* friend reqs */}
            <div className="border-[rgba(217,217,217,0.10)] bg-white">
              <FriendRequests />
            </div>
            {/* suggested tribes  */}
            <div className="border-[rgba(217,217,217,0.10)] bg-white">
              <FriendRequests />
            </div>
            {/* invite friends */}
            <div className="border-[rgba(217,217,217,0.10)] bg-white"></div>
            <InviteFriends />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Social;
