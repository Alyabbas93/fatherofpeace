
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";
import SocialLayout from "../socialLayout";
import FriendsContent from "@/components/social/friendsContent";
import SocialHeader from "@/components/social/social-header";


const Friends = () => {
  return (

    
    <main className="flex flex-col items-center p-3 lg:p-6 w-full">
      <div className="flex flex-col gap-9 w-full">
        {/* title  */}
        <SocialHeader title="Social Hub"/>
        {/* data  */}
        <SocialLayout>
        <div className="rounded-[12px] flex  justify-between  gap-4 lg:gap-8 ">
          <FriendsContent/>  
        </div>
        </SocialLayout>
      </div>
    </main>
    
  )
}

export default Friends