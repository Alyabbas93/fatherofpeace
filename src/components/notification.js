"use client"
import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";

const NotificationPreferences = () => {
  const [preferences, setPreferences] = useState({
    email: true,
    app: true,
    dailyQuote: true,
    events: false,
  });

  const togglePreference = (key) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md  mx-auto">
      <h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>
      <div className="space-y-4">
        {Object.entries(preferences).map(([key, value]) => (
          <div key={key} className="flex items-center justify-between">
            <div>
              <p className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}</p>
              <p className="text-gray-500 text-sm">Allow others to see your {key}</p>
            </div>
            <Switch
              checked={value}
              onCheckedChange={() => togglePreference(key)}
              color="primary"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationPreferences;