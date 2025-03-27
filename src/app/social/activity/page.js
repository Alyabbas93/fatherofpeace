import InviteFriends from "@/components/invitecard";
import FriendRequests from "@/components/requestscard";
import FriendList from "@/components/social/friendList";
import PeopleUmN from "@/components/social/peopleUmN";
import SocialRight from "@/components/social/socialRight";
import SuggTribes from "@/components/social/suggTribes";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";
import SocialLayout from "../socialLayout";
import FriendsContent from "@/components/social/friendsContent";

const Activity = () => {
  return (
   
    <main className="flex flex-col items-center p-3 lg:p-6 w-full">
      <div className="flex flex-col gap-9 w-full">
        {/* title  */}
        <div className="flex justify-between items-center">
          <h1 className="text-[#28303F] font-readexpro text-3xl lg:text-[40px] font-semibold leading-normal">
            Social Hub
          </h1>

          <div className="">
            <Button className="bg-[#5E8DE5] cursor-pointer flex w-[204px] h-[59px] p-[17px_15px] items-center gap-2 flex-shrink-0"> 
             <Plus/>  invite friends</Button>
          </div>
        </div>
        {/* data  */}
        <div className="rounded-[12px] flex  justify-between  gap-4 lg:gap-8 ">
          {/* first dev  */}

          
          <SocialLayout>
     
        </SocialLayout>
        
          
      
        </div>
      </div>
    </main>
   
  )
}

export default Activity