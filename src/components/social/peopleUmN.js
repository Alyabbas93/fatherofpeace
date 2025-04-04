"use client"

import React from 'react'
import PeopleUmN1 from './peopleUmN1'
import FriendList from './friendList'
import FriendCard from './friendCard'
import { Pin } from 'lucide-react';



const PeopleUmN = ({dummyFriends2}) => {
  return (
    <main className=' flex flex-col gap-8'>

      {/* title   */}

        <div className='flex flex-col gap-1'>
            <h1 className='text-[#28303F] font-[Readex_Pro] text-[28px] font-medium leading-none'>
              People You May Know
            </h1>
            <p className='text-[#828282] font-[Readex_Pro] text-[16px] font-normal leading-none'>
              Contact with more friends
            </p>
        </div>

        {/* people you know  */}
        <div className="grid w-full gap-8 ">
            {dummyFriends2.map((friend) => (
              <FriendCard
                key={friend.id}
                name={friend.name}
                role={friend.role}
                level={friend.level}
                avatarSrc={friend.avatarSrc}
                pin={friend.pin}
                dots={friend.dots}

              />
            ))}
          </div>
    </main>
  )
}

export default PeopleUmN