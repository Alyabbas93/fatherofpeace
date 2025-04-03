"use client";
import React, { useState } from "react";

const NotificationPreferences = () => {
  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    appNotifications: true,
    dailyQuote: true,
    eventsChallenges: false,
  });

  const descriptions = {
    emailNotifications: "Receive important updates via email.",
    appNotifications: "Get notifications directly on the app.",
    dailyQuote: "Receive an inspiring quote every day.",
    eventsChallenges: "Be notified about upcoming events and challenges.",
  };

  const togglePreference = (key) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-white p-6 rounded-xl  mx-auto">
      <h2 className="text-[28px] text-[#28303F]  font-medium mb-4">Notification Preferences</h2>
      <div className="space-y-4">
        {Object.entries(preferences).map(([key, value]) => (
          <div key={key} className="flex items-center pb-3 justify-between">
            <div>
              <p className="font-bold text-[#28303F] text-[16px] pb-1.5 capitalize">
                {key.replace(/([a-z])([A-Z])/g, "$1 $2")}
              </p>
              <p className="text-[#828282] text-[14px] font-normal">{descriptions[key]}</p>
            </div>
            <button
              onClick={() => togglePreference(key)}
              className={`relative w-14 h-6 flex border items-center bg-white-300 rounded-full p-1 transition-all ${
                value ? "bg-white" : "bg-white"
              }`}
            >
              <div
                className={`w-4 h-4  rounded-full shadow-md transition-transform ${
                  value ? "translate-x-7.5 bg-[#5E8DE5]" : " translate-x-0  bg-[#828282]"
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationPreferences;
