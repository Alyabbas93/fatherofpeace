"use client";

import { useState } from "react";

export default function AccountLevel() {
  const userData = {
    level: 8,
    currentXP: 1255,
    maxXP: 1500,
    stats: [
      { label: "Day Streak", value: 12 },
      { label: "Quotes Shared", value: 24 },
      { label: "Blessings Sent", value: 8 },
    ],
  };

  const { level, currentXP, maxXP, stats } = userData;
  const progress = (currentXP / maxXP) * 100;

  return (
    <div className="border rounded-lg p-6 bg-white shadow-sm w-full ">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Account level</h2>
        <span className="text-xl font-bold">{level}</span>
      </div>

      <p className="text-sm text-gray-500">Progress to Level {level + 1}</p>

      <div className="flex items-center mt-2">
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <span className="text-sm text-gray-500 ml-2">{currentXP}/{maxXP}</span>
      </div>

      <div className="flex justify-between mt-4 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <p className="text-lg font-semibold">{stat.value}</p>
            <p className="text-sm text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
