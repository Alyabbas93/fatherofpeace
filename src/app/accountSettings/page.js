import PersonalInfoForm from '@/components/settingform';
import ProfileImageUploader from '@/components/settingimage';
import LinkedAccounts from '@/components/settinglinks';
import React from 'react';

const Page = () => {
  return (
    <div className='p-6 bg-gray-100'>
    <div className='pb-5'>
    <h1 className="text-2xl font-bold pb-2">Profile</h1>
    <p className="text-gray-500 text-sm">Account Settings</p>
    </div>
    <div className=" min-h-screen flex justify-center">
     
      <div className="grid grid-cols-16 gap-6 w-full ">
        <div className="col-span-5  space-y-6">
          <ProfileImageUploader />
          <LinkedAccounts />
        </div>

        <div className="col-span-8 ">
          <PersonalInfoForm />
        </div>

      </div>
    </div>
    </div>
  );
};

export default Page;
