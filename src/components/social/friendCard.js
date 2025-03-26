import { Avatar } from '@radix-ui/react-avatar';
import { EllipsisVertical, HeartCrackIcon, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const FriendCard = ({ 
    name, 
    lastActive, 
    role, 
    level, 
    points,
    avatarSrc 
  }) => {
    return (
      <div className="flex flex-col gap-5 justify-between border border-[rgba(40,48,63,0.08)] rounded-xl px-1 lg:px-4 py-2 mb-3 w-[363px] h-[191px] flex-shrink-0">
        <div className="flex lg:gap-4 w-full">
          <div className="w-20 h-15">
            <Avatar className="relative w-9 h-9 lg:w-full lg:h-full">
              <Image
                src={avatarSrc}
                alt={`${name}'s avatar`}
                width={15}
                height={15}
                className="rounded-full object-cover w-full h-full"
              />
            </Avatar>
          </div>

          <div className="flex flex-col px-2 w-full">
            <div className="flex justify-between items-center">
              <h3 className="text-[#28303F] text-sm lg:text-2xl font-medium truncate max-w-[120px] lg:max-w-none">
                {name}
              </h3>
              <p className="text-xs lg:text-[10px] text-gray-500">
                Active {lastActive}
              </p>
            </div>

            <p className="text-[#828282] text-xs lg:text-[16px] font-normal mt-1">
              {role}
            </p>

            <div className="flex gap-2 mt-2">
              <span className="px-2 py-0.5 rounded-full bg-[#28303F14] text-[#828282] text-xs lg:text-sm">
                Level {level}
              </span>
              {points && (
                <span className="px-2 py-0.5 rounded-full text-[#5E8DE5] text-xs lg:text-sm">
                  {points} Points
                </span>
              )}
            </div>
          </div>
        </div>
        <hr />
        <div className="flex items-center justify-between gap-2 w-full ">
          {/* Message Button - 48% width (accounts for gap) */}
          <div className="flex flex-2 items-center rounded-[7px] border border-[#28303F] px-4 py-2 gap-3">
            <MessageCircle className="w-4 h-4" />
            <p className="text-[#28303F] font-[Readex_Pro] text-[12px] font-normal leading-normal">Message</p>
          </div>

          {/* Blessing Button - 48% width (accounts for gap) */}
          <div className="flex flex-2 items-center rounded-[7px] border border-[#28303F] px-4 py-2 gap-2">
            <HeartCrackIcon className="w-4 h-4" />
            <p className="text-[#28303F] font-[Readex_Pro] text-[12px] font-normal leading-normal ">Send a blessing</p>
          </div>

          {/* Overflow Menu - Fixed small width */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" stroke="#28303F" stroke-width="1.5"/>
            <path d="M14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4Z" stroke="#28303F" stroke-width="1.5"/>
            <path d="M14 20C14 21.1046 13.1046 22 12 22C10.8954 22 10 21.1046 10 20C10 18.8954 10.8954 18 12 18C13.1046 18 14 18.8954 14 20Z" stroke="#28303F" stroke-width="1.5"/>
          </svg>
          </div>
        </div>
      </div>
    );
  };
export default FriendCard