import AccountLevel from '@/components/accountlevel';
import AccountSecurity from '@/components/accountSecurity';
import InviteFriends from '@/components/invitecard';
import ProfileCard from '@/components/profileComponent';
import FriendRequests from '@/components/requestscard';
import AccountDetails from '@/components/userdataprofile';
import React from 'react';

const ProfilePage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6  w-full">
        
        <div className="md:col-span-1">
          <div >
            <ProfileCard />
          </div>
        </div>

        <div className="md:col-span-1 space-y-6">
          <div >
            <AccountDetails />
          </div>
          <div className="bg-white shadow ">
            <AccountSecurity />
          </div>
          <div className="bg-white shadow rounded-lg p-4">
            <InviteFriends />
          </div>
        </div>

        <div className="md:col-span-1 space-y-6">
          <div >
            <AccountLevel />
          </div>
          <div >
            <FriendRequests />
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;
