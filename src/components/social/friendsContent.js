import React from "react";
import FriendList from "./friendList";
import PeopleUmN from "./peopleUmN";

const FriendsContent = () => {
  return (
    <div className="w-full flex  flex-col gap-8">
        
      <FriendList />
      <PeopleUmN />
    </div>
  );
};

export default FriendsContent;
