import React from 'react'

import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    userTribes: [
        {
            id: 1,
            name: "Peace Builders",
            status: "Admin",
            members: "28 members",
            level: 8,
            desc: "A group dedicated to sharing and discussing True Mother's on peace",
            avatarSrc: "/assets/achievements/Ellipse16.svg",
          },
          {
            id: 2,
            name: "Family Values",
            status: "Admin",
            members: "42 members",
            level: 12,
            desc: "Exploring True Mother's wisdom on family and relationship",
            avatarSrc: "/assets/achievements/Ellipse16.svg",
          },
          {
            id: 3,
            name: "Youth Leadership",
            status: "Admin",
            members: "15 members",
            level: 5,
            desc: "Young leaders inspired by True Mother's vision",
            avatarSrc: "/assets/achievements/Ellipse16.svg",
          },
    ],
    suggestedTribes:[
        {
            id: 4,
            name: "Global Peace Initiative",
            members: 124,
            membersText: "124 members",
            level: 10,
            status: "Member",
            desc: "A community dedicated to global peace efforts inspired by True Mother's vision.",
            avatarSrc: "/assets/achievements/Ellipse16.svg",
          },
          {
            id: 5,
            name: "Interfaith Dialogue",
            members: 87,
            membersText: "87 members",
            level: 7,
            status: "Member",
            desc: "Exploring True Mother's teachings on interfaith harmony and cooperation.",
            avatarSrc: "/assets/achievements/Ellipse16.svg",
          },
    ]
}

 const tribeSlice = createSlice({
    name:"tribes",
    initialState,
    reducers:{
        joinTribe:(state, action) => {
            const tribeId = action.payload;
            const tribeToJoin = state.suggestedTribes.find(tribe => tribe.id === tribeId);
            
            if(tribeToJoin){
                state.userTribes.push({...tribeToJoin, status: "Member" , members: `${tribeToJoin.members} members`});
                
                state.suggestedTribes = state.suggestedTribes.filter(tribe => tribe.id !== tribeId);

           
            }
        }
    }
})


export const { joinTribe } = tribeSlice.actions;

export default tribeSlice.reducer;
