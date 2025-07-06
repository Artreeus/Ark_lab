import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { FilterState } from "@/lib/types"

const initialState: FilterState = {
  searchQuery: "",
  selectedStatuses: [],
  selectedCategories: [],
  selectedPricingModel: "",
}

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
    },
    setSelectedStatuses: (state, action: PayloadAction<string[]>) => {
      state.selectedStatuses = action.payload
    },
    setSelectedCategories: (state, action: PayloadAction<string[]>) => {
      state.selectedCategories = action.payload
    },
    setSelectedPricingModel: (state, action: PayloadAction<string>) => {
      state.selectedPricingModel = action.payload
    },
    clearAllFilters: (state) => {
      state.searchQuery = ""
      state.selectedStatuses = []
      state.selectedCategories = []
      state.selectedPricingModel = ""
    },
  },
})

export const { setSearchQuery, setSelectedStatuses, setSelectedCategories, setSelectedPricingModel, clearAllFilters } =
  filterSlice.actions
export default filterSlice.reducer
