"use client"

import React from 'react'
import FriendRequests from '../requestscard'
import SuggTribes from './suggTribes'
import InviteFriends from '../invitecard'

const SocialRight = () => {
  return (
    <div className='flex flex-col gap-2 xl:max-w-[24rem] md:min-w-[22rem]'>
        <FriendRequests/>
        <SuggTribes/>
        <InviteFriends/>
    </div>
  )
}

export default SocialRight