
import { configureStore } from "@reduxjs/toolkit"
import friendsReducer from "./slices/friendsSlice"
import sidebarReducer from "./slices/sidebarSlice"

export const store = configureStore({
  reducer: {
    friends: friendsReducer,
    sidebar: sidebarReducer,
  },
})

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
