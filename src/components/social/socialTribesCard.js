
import { Avatar } from '@radix-ui/react-avatar';
import { Plus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';


const dummyFriends = [
    {
      id: 1,
      name: "Peace Builders",
      status: "Admin",
      members: "28 members",
      level: 8,
      desc:"A group dedicated to sharing and discussing True Mother's on peace",
  
      avatarSrc: "/assets/achievements/Ellipse16.svg",
    },
    {
      id: 2,
      name: "Family Values ",
      status: "Admin",
      members: "42 members",
      level: 12,
      desc:"Exploring True Mother's wisdom on family and relationship",
      avatarSrc: "/assets/achievements/Ellipse16.svg",
    },
    {
      id: 3,
      name: "Youth Leadership ",
      status: "Admin",
      members: "15 members",
      level: 5,
      desc:"Young leaders inspired by True Mother's vision",
      avatarSrc: "/assets/achievements/Ellipse16.svg",
    },
  
  ];
  

const SocialTribesCard = () => {
    return (
        <div className="flex flex-col gap-4 w-full">
      {dummyFriends.map((user) => (
        <div 
          key={user.id}
          className="flex flex-col px-1 lg:px-3 py-5 gap-4 justify-between border border-[rgba(40,48,63,0.08)] bg-white w-full rounded-xl h-[191px] flex-shrink-0"
        >
          <div className="flex lg:gap-4 w-full">
            <div className="w-20 h-15 flex justify-center">
              <Avatar className="relative">
                <Image
                  src={user.avatarSrc}
                  alt={user.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
              </Avatar>
            </div>

            <div className="flex flex-col px-2 w-full">
              <div className="flex justify-between items-center">
                <h3 className="text-[#28303F] text-sm lg:text-2xl font-medium truncate max-w-[120px] lg:max-w-none">
                  {user.name}
                </h3>

                <div className='flex items-center gap-5'>
                <p className="text-xs lg:text-[12px] text-white font-medium bg-[#FAC571] px-5 py-1 rounded-2xl">
                  {user.status}
                </p>
                <Image 
                  src="/assets/social/more-vertical.svg" 
                  alt="Message" 
                  width={24} 
                  height={24} 
                  className="cursor-pointer rounded-full"
                />


                </div>
               
              </div>

              <p className=" py-0.5 rounded-full  text-[#828282] text-xs lg:text-[16px] font-normal leading-normal">
              {user.members}
              </p>

              <div className="flex gap-2 mt-2">
                <span className="text-[#828282] text-xs lg:text-[14px] font-normal mt-1">
                {user.desc}
                </span>
                
              </div>
            </div>
          </div>
          <hr />

          <div className="flex items-center justify-between gap-2 w-full">
            <div className="flex gap-2 flex-wrap sm:flex-nowrap">
              <Button className="flex items-center md:justify-start justify-center gap-2 border w-full border-[#000] text-[14px] px-2 md:px-3 sm:w-[9rem] bg-transparent text-[#28303F] hover:bg-gray-100">
                <Image 
                  src="/assets/social/chatting.svg" 
                  alt="Message" 
                  width={20} 
                  height={20} 
                  className="cursor-pointer rounded-full"
                />
                Chats
              </Button>
              <Button className="flex items-center md:justify-start justify-center border gap-2 w-full border-[#000] text-[14px] px-2 md:px-3 sm:w-[9rem] bg-transparent text-[#28303F] hover:bg-gray-100">
                <Image 
                  src="/assets/social/users 02.svg" 
                  alt="Blessing" 
                  width={20} 
                  height={20} 
                  className="cursor-pointer rounded-full"
                />
                Members
              </Button>
            </div>

            <Link
              href="#"
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100"
            >
                <Image 
                  src="/assets/social/setting.svg" 
                  alt="Message" 
                  width={24} 
                  height={24} 
                  className="cursor-pointer rounded-full"
                />
              
            </Link>
          </div>
        </div>
      ))}
    </div>
      );
}

export default SocialTribesCard