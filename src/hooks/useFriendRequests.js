"use client"

import { useState } from "react"

export function useFriendRequests() {
  // Friend requests state
  const [requests, setRequests] = useState([
    {
      id: 1,
      name: "Jessica",
      mutualFriends: 3,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      name: "Scarlet",
      mutualFriends: 3,
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      id: 3,
      name: "Mai",
      mutualFriends: 3,
      avatar: "https://randomuser.me/api/portraits/women/46.jpg",
    },
  ])

  // State to store accepted friend requests
  const [acceptedRequests, setAcceptedRequests] = useState([])

  // Function to handle accepting a friend request
  const handleAcceptRequest = (request) => {
    // Remove from pending requests
    setRequests(requests.filter((req) => req.id !== request.id))

    // Create the accepted friend object
    const acceptedFriend = {
      ...request,
      lastActive: "Just now",
      role: "New Friend",
      level: 1,
    }

    // Add to accepted requests
    setAcceptedRequests([...acceptedRequests, acceptedFriend])

    // Dispatch custom event to notify other components
    const event = new CustomEvent("friendRequestAccepted", {
      detail: acceptedFriend,
    })
    window.dispatchEvent(event)
  }

  // Function to handle declining a friend request
  const handleDeclineRequest = (request) => {
    // Remove from pending requests
    setRequests(requests.filter((req) => req.id !== request.id))
  }

  return {
    requests,
    acceptedRequests,
    handleAcceptRequest,
    handleDeclineRequest,
  }
}
