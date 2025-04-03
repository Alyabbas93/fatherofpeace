"use client"


import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";
import SocialLayout from "../socialLayout";
import FriendsActivity from "@/components/social/friendsActivity";
import SocialHeader from "@/components/social/social-header";

const Activity = () => {
  return (
   
    <main className="flex flex-col items-center p-3 lg:p-6 w-full">
      <div className="flex flex-col gap-9 w-full">
        {/* title  */}
        <SocialHeader title="Social Hub"/>
        {/* data  */}
        <div className="rounded-[12px] flex  justify-between  gap-4 lg:gap-8 ">
          {/* first dev  */}

          
        <SocialLayout>
            <FriendsActivity/>
        </SocialLayout>
        
          
      
        </div>
      </div>
    </main>
   
  )
}

export default Activity