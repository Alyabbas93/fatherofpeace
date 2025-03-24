import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AchievementsCard from "@/components/achivmentsCard";

const JourneyTabs = () => {
  return (
    <div className="w-full flex flex-col">
      <h1 className="text-xl font-semibold text-[#1E2535] mb-4 self-start">
        Your Journey
      </h1>

      <Tabs defaultValue="achievements" className="w-full flex flex-col">
        <div className="flex justify-center w-full ">
          <TabsList className="bg-[#1E2535] p-1 rounded-full overflow-hidden flex w-full">
            <TabsTrigger
              value="achievements"
              className="data-[state=active]:bg-white data-[state=active]:text-black 
                         px-4 py-2 rounded-full text-white transition flex-1 text-center"
            >
              Achievements
            </TabsTrigger>
            <TabsTrigger
              value="challenges"
              className="data-[state=active]:bg-white data-[state=active]:text-black 
                         px-4 py-2 rounded-full text-white transition flex-1 text-center"
            >
              Challenges
            </TabsTrigger>
            <TabsTrigger
              value="activity"
              className="data-[state=active]:bg-white data-[state=active]:text-black 
                         px-4 py-2 rounded-full text-white transition flex-1 text-center"
            >
              Activity
            </TabsTrigger>
          </TabsList>
        </div>

        <div className="w-full mt-1 flex-1">
          <TabsContent value="achievements" className="w-full">
            <AchievementsCard />
          </TabsContent>
          <TabsContent value="challenges" className="w-full">
            <p className="text-left">Challenges Content</p>
          </TabsContent>
          <TabsContent value="activity" className="w-full">
            <p className="text-left">Activity Content</p>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default JourneyTabs;