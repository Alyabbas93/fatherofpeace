"use client";
import React, { useState } from "react";

const PrivacySettings = () => {
  const [settings, setSettings] = useState({
    email: false,
    phone: true,
    birthdate: true,
    activity: true,
  });

  const toggleSetting = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-white p-6 rounded-xl  ">
      <h2 className="text-[28px] text-[#28303F] font-medium mb-4">Privacy Settings</h2>

      <div className="space-y-4">
        {[
          { key: "email", label: "Show Email Address", desc: "Allow others to see your email address" },
          { key: "phone", label: "Show Phone Numberr", desc: "Allow others to see your phone number" },
          { key: "birthdate", label: "Show Birthdate", desc: "Allow others to see your birthdate" },
          { key: "activity", label: "Show Activity", desc: "Allow others to see your recent activity" },
        ].map((item) => (
          <div key={item.key} className="flex items-center  justify-between">
            <div className="flex flex-col pb-3 gap-1.5">
              <p className="text-[16px] text-[#28303F] font-bold">{item.label}</p>
              <p className="text-[14px] text-[#828282]">{item.desc}</p>
            </div>
            <button
              onClick={() => toggleSetting(item.key)}
              className={`relative w-14 h-6 flex border items-center bg-white-300 rounded-full p-1 transition-all ${settings[item.key] ? "bg-white" : "bg-white"}`}
            >
              <div
                className={`w-4 h-4 rounded-full shadow-md transition-transform ${settings[item.key] ? "translate-x-7.5 bg-[#5E8DE5]" : "translate-x-0 bg-[#828282]"}`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacySettings;
