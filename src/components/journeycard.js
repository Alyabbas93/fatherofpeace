import React from "react";
import JourneyTabs from "./tabscomponent";
import AchievementsCard from "./achivmentsCard";

const JourneyCard = () => {
  const tabsData = [
    { label: "Achievements", value: "achievements", content: <AchievementsCard /> },
    { label: "Challenges", value: "challenges", content: <p className="text-left">Challenges Content</p> },
    { label: "Activity", value: "activity", content: <p className="text-left">Activity Content</p> }
  ];

  return (
    <div>
      <h1 className="text-xl font-semibold text-[#1E2535] mb-4 self-start">
        Your Journey
      </h1>
      <JourneyTabs tabs={tabsData} />
    </div>
  );
};

export default JourneyCard;
