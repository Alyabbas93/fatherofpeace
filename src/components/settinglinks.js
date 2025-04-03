"use client";
import React, { useState } from "react";
import { Instagram, Linkedin, Facebook, Mail, X, Plus } from "lucide-react";
import { Button } from "./ui/button";

const LinkedAccounts = () => {
  const [accounts, setAccounts] = useState([
    { id: 1, name: "Instagram", icon: <Instagram size={19}  />, connected: false },
    { id: 2, name: "LinkedIn", icon: <Linkedin size={19} />, connected: true },
    { id: 3, name: "Facebook", icon: <Facebook size={19} />, connected: true },
    { id: 4, name: "Gmail", icon: <Mail size={19} />, connected: true },
  ]);

  const toggleConnection = (id) => {
    setAccounts(accounts.map((acc) => (acc.id === id ? { ...acc, connected: !acc.connected } : acc)));
  };

  return (
    <div className="bg-white p-5 rounded-xl   min-h-[200px] flex flex-col justify-center">
      <h2 className="text-[20px] pb-1.5 font-semibold">Linked Accounts</h2>
      <p className="text-[14px] text-[#828282] mb-4">Connect other accounts to enhance your experience</p>
      
      {accounts.map((account) => (
      
        <div key={account.id} className="flex items-center  justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="bg-[#D9D9D9] p-2 rounded-full text-gray-600">{account.icon}</div>
            <span className="text-[16px] font-normal">{account.name}</span>
          </div>
          <Button
  onClick={() => toggleConnection(account.id)}
  variant="outline"
  className="text-sm rounded-sm h-11 flex items-center gap-2"
>
  {account.connected ? (
    <div className="flex items-center gap-2">
      <X className="text-[#828282]" size={18} />
      <p className="text-[#828282]">Disconnect</p>
    </div>
  ) : (
    <div className="flex items-center gap-2">
      <Plus size={18} />
      <p>Connect</p>
    </div>
  )}
</Button>

        </div>
      
      ))}
    </div>
  );
};

export default LinkedAccounts;
