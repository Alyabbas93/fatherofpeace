import DataPermissions from '@/components/datapermission'
import PrivacySettings from '@/components/privacycomp'
import React from 'react'

const Privacy = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="pb-8">
        <h1 className="text-[40px] text-[#28303F] font-semibold">Profile</h1>
        <p className="text-[20px] text-[#28303F] font-normal">Privacy</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-40">
        <div className="flex flex-col gap-6 w-full lg:w-[791px]">
          <PrivacySettings />
          <DataPermissions />
        </div>
        <div className="w-full lg:w-[calc(100%-641px)]"></div>
      </div>
    </div>
  )
}

export default Privacy
