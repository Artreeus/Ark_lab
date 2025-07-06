import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { Agent, AgentState } from "@/lib/types"

const initialState: AgentState = {
  agents: [],
  filteredAgents: [],
  loading: false,
  error: null,
}

const agentSlice = createSlice({
  name: "agents",
  initialState,
  reducers: {
    setAgents: (state, action: PayloadAction<Agent[]>) => {
      state.agents = action.payload
      state.filteredAgents = action.payload
      state.loading = false
      state.error = null
    },
    setFilteredAgents: (state, action: PayloadAction<Agent[]>) => {
      state.filteredAgents = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    },
  },
})

export const { setAgents, setFilteredAgents, setLoading, setError } = agentSlice.actions
export default agentSlice.reducer
