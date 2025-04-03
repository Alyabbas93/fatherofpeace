import React from "react";

const AccountSecurity = () => {
  return (
    <div className="bg-white p-6 rounded-lg">
      <h2 className="text-[28px] text-[#28303F] font-semibold mb-4">Account Security</h2>
      <div className="flex flex-col gap-4">
        <label className="flex justify-between items-center text-gray-600 gap-2">
          <span className="  font-medium  text-[#828282] w-48">Current Password</span>
          <input
            type="password"
            className="focus:outline-none p-2 w-32 rounded-md"
          />
        </label>
        <label className="flex justify-between items-center text-gray-600 gap-2">
          <span className="  font-medium  text-[#828282] w-48">New Password</span>
          <input
            type="password"
            className="focus:outline-none p-2 w-32 rounded-md"
          />
        </label>
        <label className="flex justify-between items-center text-gray-600 gap-2">
          <span className="text-[#828282] font-medium w-48">Confirm New Password</span>
          <input
            type="password"
            className="focus:outline-none p-2 w-32 rounded-md"
          />
        </label>
      </div>
    </div>
  );
};

export default AccountSecurity;