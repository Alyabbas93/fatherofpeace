import SocialRight from '@/components/social/socialRight'
import React from 'react'

const SocialLayout = ({children}) => {
  return (
    <div className="md:px-6 md:py-2 px-2 py-4">
      <div className="xl:mt-4 xl:flex xl:gap-6 xl:justify-between">
        <div className="w-full">{children}</div>
        <SocialRight/>
      </div>
    </div>
  )
}

export default SocialLayout