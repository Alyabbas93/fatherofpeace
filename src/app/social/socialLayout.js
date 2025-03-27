import SocialRight from '@/components/social/socialRight'
import React from 'react'

const SocialLayout = ({children}) => {
  return (
    <div className="lg:px-0 md:lg:px-0 px-2 py-0 w-full">
      <div className="xl:flex xl:gap-6 xl:justify-between ">
        <div className="w-full">{children}</div>
        <SocialRight/>
      </div>
    </div>
  )
}

export default SocialLayout