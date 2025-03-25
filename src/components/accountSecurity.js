import React from "react";

const AccountSecurity = () => {
  return (
    <div className=" border bg-white p-6 rounded-lg  ">
      <h2 className="text-lg font-semibold mb-4">Account Security</h2>
      <div className="flex flex-col gap-4">
        <label className="flex flex-col text-gray-600">
          Current Password
          <input
            type="password"
            className="border-b border-gray-300 focus:outline-none mt-1 p-1"
          />
        </label>
        <label className="flex flex-col text-gray-600">
          New Password
          <input
            type="password"
            className="border-b border-gray-300 focus:outline-none mt-1 p-1"
          />
        </label>
        <label className="flex flex-col text-gray-600">
          Confirm New Password
          <input
            type="password"
            className="border-b border-gray-300 focus:outline-none mt-1 p-1"
          />
        </label>
      </div>
    </div>
  );
};

export default AccountSecurity;