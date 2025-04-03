"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Clipboard, Upload } from "lucide-react";

export default function InviteFriends() {
  const inviteLink = "https://asktm.org/invite/johndoe";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(inviteLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); 
  };

  return (
    <div className=" rounded-lg p-6 bg-white">
      <h2 className="text-[28px] text-[#28303F] pb-2 font-semibold">Invite Friends</h2>
      <p className="text-[16px] text-[#828282] font-normal
 pb-2">Grow your network</p>
      <p className="text-[#828282]  text-[14px] font-normal
 mt-1">
        Share askTrueMother with your friends and family to help spread True Mother's teachings.
      </p>

      <div className="mt-4 gap-2 flex items-center rounded-md overflow-hidden">
  <Input
    type="text"
    value={inviteLink}
    readOnly
    className="flex-1 text-[#828282] p-2 border border-[#28303F]"
  />
  <Button
    onClick={handleCopy}
    className="bg-white border border-[#28303F] text-black px-4 py-2 flex items-center"
  >
    <Upload  className="h-5 w-5 text-black" />
    {copied ? " Copied!" : " Copy"}
  </Button>
</div>

    </div>
  );
}
