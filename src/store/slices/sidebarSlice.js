import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isSidebarOpen: true,
  openItems: {},
}

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen
    },
    toggleMenuItem: (state, action) => {
      const { name } = action.payload
      state.openItems = {
        ...state.openItems,
        [name]: !state.openItems[name],
      }
    },
  },
})

export const { toggleSidebar, toggleMenuItem } = sidebarSlice.actions

// Selectors
export const selectIsSidebarOpen = (state) => state.sidebar.isSidebarOpen
export const selectOpenItems = (state) => state.sidebar.openItems

export default sidebarSlice.reducer
