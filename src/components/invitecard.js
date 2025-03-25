"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Clipboard } from "lucide-react";

export default function InviteFriends() {
  const inviteLink = "https://asktm.org/invite/johndoe";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(inviteLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); 
  };

  return (
    <div className="border rounded-lg p-6 bg-white shadow-sm">
      <h2 className="text-lg font-semibold">Invite Friends</h2>
      <p className="text-sm text-gray-500">Grow your network</p>
      <p className="text-sm text-gray-500 mt-1">
        Share askTrueMother with your friends and family to help spread True Mother's teachings.
      </p>

      <div className="mt-4 flex items-center border rounded-md overflow-hidden">
        <Input
          type="text"
          value={inviteLink}
          readOnly
          className="flex-1 p-2 text-gray-700 bg-gray-100 border-none"
        />
        <Button
          onClick={handleCopy}
          className="bg-gray-200 hover:bg-gray-300 px-4 py-2 flex items-center"
        >
          <Clipboard className="h-5 w-5 text-gray-700" />
          {copied ? " Copied!" : " Copy"}
        </Button>
      </div>
    </div>
  );
}
