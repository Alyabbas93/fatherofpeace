import { Avatar } from '@radix-ui/react-avatar';
import { EllipsisVertical, Heart, HeartCrackIcon, MessageCircle, MessageCircleMore, Plus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Button } from '../ui/button';

const FriendCard = ({ 
    name, 
    lastActive, 
    role, 
    level, 
    points,
    avatarSrc, 
    pin,
    dots
  }) => {
    return (
      <div className="flex flex-col px-1 lg:px-3 py-5   gap-4 justify-between border border-[rgba(40,48,63,0.08)] bg-white w-full rounded-xl  h-[191px] flex-shrink-0">
        <div className="flex lg:gap-4 w-full">
          <div className="w-20 h-15 flex justify-center">
            <Avatar className="relative ">
            <Image
                src={avatarSrc}
                alt="@shadcn"
                width={60}
                height={60}
                className="rounded-full"
              />
            </Avatar>
          </div>

          <div className="flex flex-col px-2 w-full">
            <div className="flex justify-between items-center">
              <h3 className="text-[#28303F] text-sm lg:text-2xl font-medium truncate max-w-[120px] lg:max-w-none">
                {name}
              </h3>

              <div className=''>
                {lastActive && (
                  <p className="text-xs lg:text-[10px] text-gray-500">
                    Active {lastActive}
                  </p>
                )}
                { pin && (
                  <div className='flex gap-5'>
                    <Image className='cursor-pointer rounded-full  ' src={pin} alt="pin" width={25} height={25} />

                    <Image className='cursor-pointer rounded-full  ' src={dots} alt="dots" width={25} height={25} />
                  </div>
                )}
              </div>
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


        <div className="flex items-center justify-between gap-2 w-[100%] ">
          {/* wann die Active ist online  */}
          {lastActive && (
  <section className="flex gap-2 w-full ">
    {/* Message Button */}
    <div >

    
    <Button className="flex cursor-pointer  flex-1 items-center justify-center md:justify-start gap-1 border border-[#28303F] text-xs px-2 md:px-3 bg-transparent text-[#28303F] hover:bg-gray-100 min-w-0">
      <Image 
        className="rounded-full" 
        src="/assets/social/chat02.svg" 
        alt="Message" 
        width={16} 
        height={16} 
      />
      <span className="truncate">Message</span>
    </Button>
    </div>
    
    {/* Blessing Button */}
    <div>
    <Button className="flex cursor-pointer flex-1 items-center text-center justify-center md:justify-start gap-1 border border-[#28303F] text-xs px-2 md:px-4 bg-transparent text-[#28303F] hover:bg-gray-100 min-w-0">
      <Image 
        className=" rounded-full" 
        src="/assets/social/loveGray.svg" 
        alt="Send blessing" 
        width={16} 
        height={16} 
      />
      <span className="text-[12px]">Send a blessing</span>
    </Button>
    </div>
    
  </section>
)}

            {/* wann die pin ist in der props  */}
          { pin && (
            <div className="flex items-center w-full sm:justify-between flex-wrap-reverse sm:flex-nowrap gap-2">
            <div className="flex items-center justify-end sm:justify-start">
              <div className="relative w-10 h-10 flex  pr-20 ">
                <Image
                  src="/assets/achievements/Ellipse16.svg"
                  alt="Mutual Friend"
                  width={40}
                  height={40}
                  className="rounded-full object-cover left-12 absolute border-[2px] border-white"
                />
                <Image
                  src="/assets/achievements/Ellipse16.svg"
                  alt="Mutual Friend"
                  width={39.5}
                  height={39.5}
                  className="rounded-full object-cover left-8 absolute border-[2px] border-white"
                />
                <Image
                  src="/assets/achievements/Ellipse16.svg"
                  alt="Mutual Friend"
                  width={39.3}
                  height={39.3}
                  className="rounded-full object-cover left-4 absolute border-[2px] border-white"
                />
                <Image
                  src="/assets/achievements/Ellipse16.svg"
                  alt="Mutual Friend"
                  width={39}
                  height={39}
                  className="rounded-full object-cover left-0 absolute border-[2px] border-white"
                />
              </div>
              <div>
                <Button className="flex gap-0.5 text-[#828282] text-[14px] bg-transparent hover:text-black hover:bg-transparent">
                  <Plus
                    size={18}
                    strokeWidth={2}
                    className="text-[#828282] hover:text-black"
                  />
                  <p> 15 mutual</p>
                </Button>
              </div>
            </div>
            <div className="flex sm:gap-6 justify-between sm:justify-end items-center w-full">
            <Image className='cursor-pointer rounded-full  ' src="/assets/social/love.svg" alt="pin" width={25} height={25} />
              <Button className="flex items-center cursor-pointer border border-[#28303F] text-[12px] text-[#28303F] bg-transparent hover:bg-gray-100">
                <Plus size={20} strokeWidth={2} className="text-[#28303F]" />
                Send add request
              </Button>
            </div>
          </div>
          )}
          {/* Message Button - 48% width (accounts for gap) */}
       

          {/* Overflow Menu - Fixed small width */}
         { lastActive && (
          <Link
            href="#"
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
                stroke="#28303F"
                strokeWidth="1.5"
              />
              <path
                d="M14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4Z"
                stroke="#28303F"
                strokeWidth="1.5"
              />
              <path
                d="M14 20C14 21.1046 13.1046 22 12 22C10.8954 22 10 21.1046 10 20C10 18.8954 10.8954 18 12 18C13.1046 18 14 18.8954 14 20Z"
                stroke="#28303F"
                strokeWidth="1.5"
              />
            </svg>
          </Link>
  )}
        </div>
      </div>
    );
  };
export default FriendCard