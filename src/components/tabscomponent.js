import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const JourneyTabs = ({ tabs }) => {
  return (
    <div className="w-full flex flex-col">
      <Tabs defaultValue={tabs[0]?.value} className="w-full flex flex-col">
        <div className="flex justify-center w-full">
          <TabsList className="bg-[#1E2535] p-1 rounded-full overflow-hidden flex w-full">
            {tabs.map(({ label, value }) => (
              <TabsTrigger
                key={value}
                value={value}
                className="data-[state=active]:bg-white data-[state=active]:text-black cursor-pointer
                           px-4 py-2 rounded-full text-white transition flex-1 text-center"
              >
                {label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <div className="w-full mt-1 flex-1">
          {tabs.map(({ value, content }) => (
            <TabsContent key={value} value={value} className="w-full">
              {content}
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default JourneyTabs;
