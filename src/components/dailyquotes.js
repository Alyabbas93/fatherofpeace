import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function SubscribePopup() {
  const [theme, setTheme] = useState("");
  const [frequency, setFrequency] = useState({ daily: true, weekly: false, monthly: false });
  const [notification, setNotification] = useState({ email: true, app: false, both: false });

  const handleFrequencyChange = (option) => {
    setFrequency((prev) => ({ ...prev, [option]: !prev[option] }));
  };

  const handleNotificationChange = (option) => {
    if (option === "both") {
      setNotification({
        email: true,
        app: true,
        both: true,
      });
    } else {
      setNotification((prev) => {
        const updatedState = { ...prev, [option]: !prev[option] };
        updatedState.both = updatedState.email && updatedState.app;
        return updatedState;
      });
    }
  };

  const CustomSwitch = ({ checked, onChange }) => (
    <button
      onClick={onChange}
      className={`relative w-11 h-5 flex border items-center bg-white-300 rounded-full p-1 transition-all ${
        checked ? "bg-white" : "bg-white"
      }`}
    >
      <div
        className={`w-3 h-3 rounded-full shadow-md transition-transform ${
          checked ? "translate-x-5.5 bg-[#5E8DE5]" : "translate-x-0 bg-[#828282]"
        }`}
      />
    </button>
  );

  return (
    <div className="bg-white  rounded-lg">
      <h2 className="text-[24px] font-semibold text-[#28303F]">Subscribe to Daily Quotes</h2>
      <p className="text-[16px] text-[#828282] font-normal mt-2">
        Receive inspirational quotes from Dr. Hak Ja Han Moon based on themes you select.
      </p>
      <div className="mt-8 mb-3">
        <Label className="text-[16px] font-semibold text-[#28303F]">Select Theme</Label>
        <Input
          placeholder="Select"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="mt-3 px-3 py-6 border focus:outline-0 border-[#28303F] rounded-lg"
        />
      </div>
<span className="text-[#828282] text-[14px] font-normal ">You'll receive quotes related to your selected theme.</span>
      <div className="mt-4">
        <Label className="text-[16px] font-semibold pt-7 pb-5 text-[#28303F]">Frequency</Label>
        <div className="flex flex-col gap-3 mt-2">
          <div className="flex items-center gap-3">
            <CustomSwitch checked={frequency.daily} onChange={() => handleFrequencyChange("daily")} />
            <Label className="text-[15px] font-normal text-[#28303F]">Daily</Label>
          </div>
          <div className="flex items-center gap-3">
            <CustomSwitch checked={frequency.weekly} onChange={() => handleFrequencyChange("weekly")} />
            <Label className="text-[15px] font-normal text-[#28303F]">Weekly (Sunday)</Label>
          </div>
          <div className="flex items-center gap-3">
            <CustomSwitch checked={frequency.monthly} onChange={() => handleFrequencyChange("monthly")} />
            <Label className="text-[15px] font-normal text-[#28303F]">Monthly (1st day)</Label>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex flex-col gap-3 pt-9">
          <div className="flex items-center gap-3">
            <CustomSwitch checked={notification.email} onChange={() => handleNotificationChange("email")} />
            <Label className="text-[15px] font-normal text-[#28303F]">Email</Label>
          </div>
          <div className="flex items-center gap-3">
            <CustomSwitch checked={notification.app} onChange={() => handleNotificationChange("app")} />
            <Label className="text-[15px] font-normal text-[#28303F]">App Notification</Label>
          </div>
          <div className="flex items-center gap-3">
            <CustomSwitch checked={notification.both} onChange={() => handleNotificationChange("both")} />
            <Label className="text-[15px] font-normal text-[#28303F]">Both</Label>
          </div>
        </div>
      </div>
<div className="text-right pt-4">
<Button className="w-[233px] h-[59px]  mt-4 py-2 bg-[#5E8DE5] text-white text-[16px] font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Subscribe to Daily Quotes
      </Button>
</div>
     
    </div>
  );
}
