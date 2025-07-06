export interface Agent {
  id: string
  name: string
  description: string
  status: "Active" | "Beta" | "Archived"
  category: string
  pricingModel: "Free Tier" | "Subscription" | "Per-Use"
}

export interface FilterState {
  searchQuery: string
  selectedStatuses: string[]
  selectedCategories: string[]
  selectedPricingModel: string
}

export interface AgentState {
  agents: Agent[]
  filteredAgents: Agent[]
  loading: boolean
  error: string | null
}
