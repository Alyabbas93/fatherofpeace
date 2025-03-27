
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";
import SocialLayout from "../socialLayout";
import { Search} from "lucide-react";


const Tribes = () => {
  return (
    <SocialLayout>
    <main className="flex flex-col items-center p-3 lg:p-6 w-full">
      <div className="flex flex-col gap-9 w-full">
        {/* title  */}
        <div className="flex justify-between items-center">
          
          <div>
            <h1 className="text-[#28303F] font-readexpro text-3xl lg:text-[40px] font-semibold leading-normal">
            Social Hub
          </h1>
          <p className="text-[#28303F] font-readexpro text-[20px] font-normal leading-normal">Yout Tribes</p>
          </div>
          

          <div className="">
             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />

            <Button className="bg-[#5E8DE5] cursor-pointer flex w-[204px] h-[59px] p-[17px_15px] items-center gap-2 flex-shrink-0"> 
             <Plus/>  invite friends</Button>
          </div>
        </div>
        {/* data  */}
        <div className="rounded-[12px] flex  justify-between  gap-4 lg:gap-8 ">
          {/* first dev  */}

          
          
        
          
      
        </div>
      </div>
    </main>
    </SocialLayout>
  )
}

export default Tribes