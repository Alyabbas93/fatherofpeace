import React from 'react'
import { Button } from '../ui/button'
import { Plus, Search } from 'lucide-react'

const SocialHeader = ({title , desc}) => {
  return (
    <div className="flex justify-between items-center">
          
          <div>
            <h1 className="text-[#28303F] font-readexpro text-3xl lg:text-[40px] font-semibold leading-normal">
           {title}
          </h1>
          {desc &&
            (<p className="text-[#28303F] font-readexpro text-[20px] font-normal leading-normal">{desc}</p>)}
          </div>
          

          <div className="">
             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />

            <Button className="bg-[#5E8DE5] cursor-pointer flex w-[204px] h-[59px] p-[17px_15px] items-center gap-2 flex-shrink-0"> 
             <Plus/>  invite friends</Button>
          </div>
        </div>
  )
}

export default SocialHeader