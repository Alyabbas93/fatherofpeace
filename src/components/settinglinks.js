"use client";
import React, { useState } from "react";
import { Instagram, Linkedin, Facebook, Mail } from "lucide-react";

const LinkedAccounts = () => {
  const [accounts, setAccounts] = useState([
    { id: 1, name: "Instagram", icon: <Instagram size={18} />, connected: false },
    { id: 2, name: "LinkedIn", icon: <Linkedin size={18} />, connected: true },
    { id: 3, name: "Facebook", icon: <Facebook size={18} />, connected: true },
    { id: 4, name: "Gmail", icon: <Mail size={18} />, connected: true },
  ]);

  const toggleConnection = (id) => {
    setAccounts(accounts.map((acc) => (acc.id === id ? { ...acc, connected: !acc.connected } : acc)));
  };

  return (
    <div className="bg-white p-5 rounded-xl border shadow-sm min-h-[200px] flex flex-col justify-center">
      <h2 className="text-md font-semibold">Linked Accounts</h2>
      <p className="text-xs text-gray-500 mb-4">Connect other accounts to enhance your experience</p>
      
      {accounts.map((account) => (
        <div key={account.id} className="flex items-center justify-between py-2">
          <div className="flex items-center gap-3">
            <div className="bg-gray-100 p-2 rounded-md text-gray-600">{account.icon}</div>
            <span className="text-sm font-medium">{account.name}</span>
          </div>
          <button
            onClick={() => toggleConnection(account.id)}
            className={`px-3 py-1 text-sm border transition ${
              account.connected
                ? "bg-gray-100 text-gray-600 hover:bg-gray-200 border-gray-300"
                : "bg-white border-gray-400 text-gray-700 hover:bg-gray-100"
            }`}
          >
            {account.connected ? "Disconnect" : "Connect"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default LinkedAccounts;
