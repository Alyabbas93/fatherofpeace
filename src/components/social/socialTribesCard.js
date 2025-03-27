
import { Avatar } from '@radix-ui/react-avatar';
import { Plus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';


const dummyFriends = [
    {
      id: 1,
      name: "Peace Builders",
      status: "Active",
      members: "28 members",
      level: 8,
      desc:"A group dedicated to sharing and discussing True Mother's on peace",
  
      avatarSrc: "/assets/achievements/Ellipse16.svg",
    },
    {
      id: 2,
      name: "Family Values ",
      status: "Active",
      members: "42 members",
      level: 12,
      desc:"Exploring True Mother's wisdom on family and relationship",
      avatarSrc: "/assets/achievements/Ellipse16.svg",
    },
    {
      id: 3,
      name: "Youth Leadership ",
      status: "Active",
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
                <p className="text-xs lg:text-[10px] text-gray-500">
                  {user.status}
                </p>
              </div>

              <p className="text-[#828282] text-xs lg:text-[16px] font-normal mt-1">
                {user.desc}
              </p>

              <div className="flex gap-2 mt-2">
                <span className="px-2 py-0.5 rounded-full bg-[#28303F14] text-[#828282] text-xs lg:text-sm">
                  {user.members}
                </span>
                <span className="px-2 py-0.5 rounded-full text-[#5E8DE5] text-xs lg:text-sm">
                  Level {user.level}
                </span>
              </div>
            </div>
          </div>
          <hr />

          <div className="flex items-center justify-between gap-2 w-full">
            <div className="flex gap-2 flex-wrap sm:flex-nowrap">
              <Button className="flex items-center md:justify-start justify-center gap-1 border w-full border-[#28303F] text-[12px] px-2 md:px-3 sm:w-[9rem] bg-transparent text-[#28303F] hover:bg-gray-100">
                <Image 
                  src="/assets/social/chat02.svg" 
                  alt="Message" 
                  width={16} 
                  height={16} 
                  className="cursor-pointer rounded-full"
                />
                Message
              </Button>
              <Button className="flex items-center md:justify-start justify-center border gap-1 w-full border-[#28303F] text-[12px] px-2 md:px-3 sm:w-[9rem] bg-transparent text-[#28303F] hover:bg-gray-100">
                <Image 
                  src="/assets/social/loveGray.svg" 
                  alt="Blessing" 
                  width={16} 
                  height={16} 
                  className="cursor-pointer rounded-full"
                />
                Send a blessing
              </Button>
            </div>

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
          </div>
        </div>
      ))}
    </div>
      );
}

export default SocialTribesCard