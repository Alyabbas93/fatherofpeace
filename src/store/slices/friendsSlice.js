import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  friendsList: [
    {
      id: 1,
      name: "Terry",
      lastActive: "2 hours ago",
      role: "Peace Ambassador",
      level: 8,
      avatarSrc: "/assets/achievements/Ellipse16.svg",
    },
    {
      id: 2,
      name: "Alex ",
      lastActive: "15 minutes ago",
      role: "Meditation Master",
      level: 12,
      avatarSrc: "/assets/achievements/Ellipse16.svg",
    },
    {
      id: 3,
      name: "Jamie ",
      lastActive: "1 day ago",
      role: "Wisdom Seeker",
      level: 5,
      avatarSrc: "/assets/achievements/Ellipse16.svg",
    },
    {
      id: 4,
      name: "Terry ",
      lastActive: "1 day ago",
      role: "Wisdom Seeker",
      level: 5,
      avatarSrc: "/assets/achievements/Ellipse16.svg",
    },
  ],
  peopleYouMayKnow: [
    {
      id: 1,
      name: "Terry",
      lastActive: "2 hours ago",
      role: "Peace Ambassador",
      level: 8,
      avatarSrc: "/assets/achievements/Ellipse16.svg",
      pin: "/assets/social/pin.svg",
      dots: "/assets/social/more-vertical.svg",
    },
    // ... other people
  ],
  friendRequests: [
    {
      id: 101,
      name: "Jessica",
      mutualFriends: 3,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 102,
      name: "Scarlet",
      mutualFriends: 3,
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      id: 103,
      name: "Mai",
      mutualFriends: 3,
      avatar: "https://randomuser.me/api/portraits/women/46.jpg",
    },

    {
      id: 104,
      name: "Stark",
      mutualFriends: 3,
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    },
  ],
  filteredFriends: [],
  filteredPeople: [],
  currentPage: 0,
  searchTerm: "",
}

export const friendsSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {
    acceptFriendRequest: (state, action) => {
      const { id } = action.payload

      // Find the friend request
      const requestIndex = state.friendRequests.findIndex((req) => req.id === id)

      if (requestIndex !== -1) {
        const request = state.friendRequests[requestIndex]

        // Create new friend from request
        const newFriend = {
          id: request.id,
          name: request.name,
          lastActive: "Just now",
          role: "New Friend",
          level: 1,
          avatarSrc: request.avatar,
        }

        // Add to friends list
        state.friendsList.push(newFriend)

        // Remove from requests
        state.friendRequests.splice(requestIndex, 1)
      }
    },

    declineFriendRequest: (state, action) => {
      const { id } = action.payload
      state.friendRequests = state.friendRequests.filter((req) => req.id !== id)
    },

    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload

      // Filter friends and people based on search term
      if (state.searchTerm === "") {
        state.filteredFriends = []
        state.filteredPeople = []
      } else {
        state.filteredFriends = state.friendsList.filter((friend) =>
          friend.name.toLowerCase().includes(state.searchTerm.toLowerCase()),
        )

        state.filteredPeople = state.peopleYouMayKnow.filter((person) =>
          person.name.toLowerCase().includes(state.searchTerm.toLowerCase()),
        )
      }
    },

    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },

    nextPage: (state) => {
      const totalFriends = state.friendsList.length
      const friendsPerPage = 4
      const totalPages = Math.ceil(totalFriends / friendsPerPage)

      if (state.currentPage < totalPages - 1) {
        state.currentPage += 1
      }
    },

    prevPage: (state) => {
      if (state.currentPage > 0) {
        state.currentPage -= 1
      }
    },
  },
})

export const { acceptFriendRequest, declineFriendRequest, setSearchTerm, setCurrentPage, nextPage, prevPage } =
  friendsSlice.actions

// Selectors
export const selectFriendsList = (state) => state.friends.friendsList
export const selectPeopleYouMayKnow = (state) => state.friends.peopleYouMayKnow
export const selectFriendRequests = (state) => state.friends.friendRequests
export const selectFilteredFriends = (state) => state.friends.filteredFriends
export const selectFilteredPeople = (state) => state.friends.filteredPeople
export const selectCurrentPage = (state) => state.friends.currentPage
export const selectSearchTerm = (state) => state.friends.searchTerm

// Computed selectors
export const selectDisplayFriends = (state) => {
  const { filteredFriends, friendsList, currentPage } = state.friends
  const friendsToDisplay = filteredFriends.length > 0 ? filteredFriends : friendsList

  const friendsPerPage = 4
  const startIndex = currentPage * friendsPerPage
  return friendsToDisplay.slice(startIndex, startIndex + friendsPerPage)
}

export const selectTotalPages = (state) => {
  const { filteredFriends, friendsList } = state.friends
  const friendsToCount = filteredFriends.length > 0 ? filteredFriends : friendsList
  const friendsPerPage = 4
  return Math.ceil(friendsToCount.length / friendsPerPage)
}

export default friendsSlice.reducer
