import React from 'react'
import { Progress } from '@/components/ui/progress'

const AchievementCards2 = ({ achievementData }) => {
  return (
    <>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-[100%]">
          {achievementData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col bg-white p-3 rounded-[12px] border border-[rgba(40,48,63,0.08)] gap-3"
            >
              {/* Top Section: Icon and Status Badge */}
              <div className="flex justify-between items-start">
                {/* Icon */}
                <span className="w-9 h-9">
                  <img
                    src="/assets/achievements/chatting.png"
                    className="bg-[#D9D9D9] rounded-full p-[4.2px] w-auto h-auto"
                    alt="chatting"
                  />
                </span>

                {/* Status Badge */}
                {item.status && (
                <span
                  className={`text-sm font-medium px-2 py-1 rounded-full ${
                    item.status === "Completed"
                      ? "bg-[#FAC571] text-black"
                      : "bg-[#EAEAEA] text-black"
                  }`}
                >
                  {item.status}
                </span>
                )}
              </div>

              {/* Middle Section: Title and Description */}
              <div>
                <h1 className="text-[#28303F] text-[16px] font-medium leading-normal">
                  {item.title}
                </h1>
                <div className="flex justify-between">
                  <p className="text-[#828282] text-[12px] font-normal leading-normal">
                    {item.description}
                  </p>
                  <h3 className="text-[#5E8DE5] text-sm">
                    {item.completed}{" "}
                    <span className="text-[#828282] text-[14px] font-normal leading-normal">
                      / {item.total}
                    </span>
                  </h3>
                </div>
              </div>

              {/* Bottom Section: Progress Bar and Points */}
              <div className="flex flex-col">
                <Progress
                  value={(item.completed / item.total) * 100}
                  className="h-2 bg-gray-200"
                  colorClass="bg-[#5E8DE5]"
                />
                <p className="text-sm text-[#5E8DE5]">
                  +{item.points} points when completed
                </p>
              </div>
            </div>
          ))}
        </div>
     
    </>
  );




















    // return (
    //     <div 
    //       className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full" 
    //     >
    //       {achievementData.map((item, index) => (
    //         <div
    //           key={index}
    //           className="flex flex-col bg-white p-3 rounded-md gap-3"
    //         >
    //             {/* Icon */}
    //             <span className='w-9 h-9'>
    //                 <img 
    //                     src="/assets/achievements/chatting.png" 
    //                     className="bg-[#D9D9D9] rounded-full p-[4.2px] w-auto h-auto" 
    //                     alt="chatting" 
    //                 />
    //             </span>

    //             {/* Subheading */}
    //             <div>
    //               <h1 className="text-[#28303F] font-readex text-[16px] font-medium leading-normal">{item.title}</h1>
    //               <div className="flex justify-between">
    //                 <p className="text-[#828282] font-readex text-[12px] font-normal leading-normal">{item.description}</p>
    //                 <h3 className="text-[#5E8DE5] text-sm">
    //                   {item.completed} <span className="text-[#828282] font-readex text-[14px] font-normal leading-normal">/ {item.total}</span>
    //                 </h3>
    //               </div>
    //             </div>
    
    //             {/* Progress Bar */}
    //             <div className="flex flex-col">
    //               <Progress
    //                 value={(item.completed / item.total) * 100}
    //                 className="h-2 bg-gray-200"
    //                 colorClass="bg-[#5E8DE5]"
    //               />
    //               <p className="text-sm text-[#5E8DE5]">
    //                 +{item.points} points when completed
    //               </p>
    //             </div>
    //         </div>
    //       ))}
    //     </div>
    // )
}

export default AchievementCards2