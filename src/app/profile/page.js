import AccountLevel from '@/components/accountlevel';
import AccountSecurity from '@/components/accountSecurity';
import InviteFriends from '@/components/invitecard';
import ProfileCard from '@/components/profileComponent';
import FriendRequests from '@/components/requestscard';
import AccountDetails from '@/components/userdataprofile';
import React from 'react';
import { Share2, Edit } from "lucide-react";

const ProfilePage = () => {
  return (
    <div className='p-6 bg-gray-100 flex flex-col gap-5'>
      <div className='flex items-center justify-between flex-wrap gap-3'>
        <h1 className="text-2xl font-semibold">Profile</h1>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full bg-transparent hover:bg-gray-200 transition">
            <Share2 className="w-5 h-5 text-gray-600" />
          </button>
          <button className="flex items-center gap-2 bg-[#5E8DE5] text-white px-3 py-2 rounded-md font-medium hover:bg-blue-600 transition">
            <Edit className="w-5 h-5" />
            Edit profile
          </button>
        </div>
      </div>

      <div className="min-h-screen flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-14 gap-6 w-full">
          
          <div className="lg:col-span-4 sm:col-span-2">
            <ProfileCard />
          </div>

          <div className="lg:col-span-6 sm:col-span-2 space-y-6">
            <AccountDetails />
            <AccountSecurity />
            <InviteFriends />
          </div>

          <div className="lg:col-span-4 sm:col-span-2 space-y-6">
            <AccountLevel />
            <FriendRequests />
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
