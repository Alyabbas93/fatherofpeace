import React from "react";
import FriendList from "./friendList";
import PeopleUmN from "./peopleUmN";

const FriendsContent = ({dummyFriends ,dummyFriends2 , acceptedFriends = []}) => {
  return (
    <div className="w-full flex  flex-col gap-8">
        
      <FriendList dummyFriends={dummyFriends} acceptedFriends={acceptedFriends} />
      <PeopleUmN dummyFriends2={dummyFriends2}/>
    </div>
  );
};

export default FriendsContent;
