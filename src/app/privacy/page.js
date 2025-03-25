import DataPermissions from '@/components/datapermission'
import PrivacySettings from '@/components/privacycomp'
import React from 'react'

const Privacy = () => {
  return (
    <div className='p-6 bg-gray-100 min-h-screen'>
      <div className='pb-5'>
        <h1 className="text-2xl font-bold pb-2">Profile</h1>
        <p className="text-gray-500 text-sm">Privacy</p>
      </div>

      <div className="grid  gap-6">
        <PrivacySettings />
        <DataPermissions />
      </div>
    </div>
  )
}

export default Privacy
