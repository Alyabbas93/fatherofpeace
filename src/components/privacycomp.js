"use client";
import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";

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
    <div className="bg-white p-6 rounded-xl shadow-md border max-w-lg">
      <h2 className="text-lg font-semibold mb-4">Privacy Settings</h2>

      <div className="space-y-4">
        {[
          { key: "email", label: "Show Email Address", desc: "Allow others to see your email address" },
          { key: "phone", label: "Show Phone Number", desc: "Allow others to see your phone number" },
          { key: "birthdate", label: "Show Birthdate", desc: "Allow others to see your birthdate" },
          { key: "activity", label: "Show Activity", desc: "Allow others to see your recent activity" },
        ].map((item) => (
          <div key={item.key} className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">{item.label}</p>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </div>
            <Switch checked={settings[item.key]} onCheckedChange={() => toggleSetting(item.key)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacySettings;
