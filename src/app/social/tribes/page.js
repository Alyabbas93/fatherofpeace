
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";
import SocialLayout from "../socialLayout";
import { Search} from "lucide-react";
import SocialHeader from "@/components/social/social-header";
import SocialTribesCard from "@/components/social/socialTribesCard";


const Tribes = () => {
  return (
  
    <main className="flex flex-col items-center p-3 lg:p-6 w-full">
      <div className="flex flex-col gap-9 w-full">
        {/* title  */}
        <SocialHeader title="Social Hub" desc="Your Tribes"/>
        {/* data  */}
        <div className="rounded-[12px] flex items-center lg:w-full  justify-between  gap-4 lg:gap-8 ">
          {/* first dev  */}
          <SocialLayout>
          <SocialTribesCard/>
          </SocialLayout>
        </div>
      </div>
    </main>
    
  )
}

export default Tribes