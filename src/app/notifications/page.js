import NotificationPreferences from '@/components/notification';
import React from 'react';

const Navigations = () => {
  return (
    <div className="p-6">
      <div className="pb-8">
        <h1 className="text-[40px] text-[#28303F] font-semibold ">Profile</h1>
        <p className="text-[20px] text-[#28303F] font-normal">Notification</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-auto lg:h-screen">
        <div className="w-full">
          <NotificationPreferences />
        </div>
        
        <div className="hidden lg:block w-full"></div>
      </div>
    </div>
  );
};

export default Navigations;
