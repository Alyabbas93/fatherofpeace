import NotificationPreferences from '@/components/notification';
import React from 'react';

const Navigations = () => {
  return (
    <div className='p-6'>
    <div className='pb-5'>
    <h1 className="text-2xl font-bold pb-2">Profile</h1>
    <p className="text-gray-500 text-sm">Notification</p>
    </div>
    <div className="grid  grid-cols-2 h-screen"> 
      <div >
        <NotificationPreferences />
      </div>
      
    </div>
    </div>

   
  );
};

export default Navigations;