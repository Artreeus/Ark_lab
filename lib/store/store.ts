import { configureStore } from "@reduxjs/toolkit"
import agentReducer from "./slices/agentSlice"
import filterReducer from "./slices/filterSlice"
import authReducer from "./slices/authSlice"

export const store = configureStore({
  reducer: {
    agents: agentReducer,
    filters: filterReducer,
    auth: authReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
