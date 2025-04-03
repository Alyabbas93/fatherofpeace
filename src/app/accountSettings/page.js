import PersonalInfoForm from '@/components/settingform';
import ProfileImageUploader from '@/components/settingimage';
import LinkedAccounts from '@/components/settinglinks';
import React from 'react';

const Page = () => {
  return (
    <div className='p-6 bg-gray-100'>
      <div className='pb-5'>
        <h1 className="text-[40px] text-[#28303F] font-semibold">Profile</h1>
        <p className="text-[20px] text-[#28303F] font-normal">Account Settings</p>
      </div>

      <div className="min-h-screen flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-14 gap-6 w-full">
          
          <div className="lg:col-span-4 sm:col-span-2 space-y-6">
            <ProfileImageUploader />
            <LinkedAccounts />
          </div>

          <div className="lg:col-span-7 sm:col-span-2">
            <PersonalInfoForm />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Page;
