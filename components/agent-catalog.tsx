"use client"

import { useEffect, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AgentCard } from "./agent-card"
import { SearchBar } from "./search-bar"
import { FilterControls } from "./filter-controls"
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks"
import { setAgents, setFilteredAgents } from "@/lib/store/slices/agentSlice"
import type { Agent } from "@/lib/types"
import { Card, CardContent } from "@/components/ui/card"
import { Search } from "lucide-react"

interface AgentCatalogProps {
  initialAgents: Agent[]
}

export function AgentCatalog({ initialAgents }: AgentCatalogProps) {
  const dispatch = useAppDispatch()
  const { filteredAgents } = useAppSelector((state) => state.agents)
  const { searchQuery, selectedStatuses, selectedCategories, selectedPricingModel } = useAppSelector(
    (state) => state.filters,
  )

  // Initialize agents in Redux store
  useEffect(() => {
    dispatch(setAgents(initialAgents))
  }, [dispatch, initialAgents])

  // Filter agents based on current filters
  const filteredResults = useMemo(() => {
    let filtered = initialAgents

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (agent) =>
          agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          agent.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    // Status filter
    if (selectedStatuses.length > 0) {
      filtered = filtered.filter((agent) => selectedStatuses.includes(agent.status))
    }

    // Category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((agent) => selectedCategories.includes(agent.category))
    }

    // Pricing model filter
    if (selectedPricingModel) {
      filtered = filtered.filter((agent) => agent.pricingModel === selectedPricingModel)
    }

    return filtered
  }, [initialAgents, searchQuery, selectedStatuses, selectedCategories, selectedPricingModel])

  // Update filtered agents in store
  useEffect(() => {
    dispatch(setFilteredAgents(filteredResults))
  }, [dispatch, filteredResults])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl font-bold text-center mb-2">ArkLab AI Agent Catalog</h1>
          <p className="text-muted-foreground text-center text-lg mb-6">
            Discover and explore our collection of AI agents
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SearchBar />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filters Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:col-span-1"
        >
          <FilterControls />
        </motion.div>

        {/* Agent Grid */}
        <div className="lg:col-span-3">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-4"
          >
            <p className="text-sm text-muted-foreground">
              Showing {filteredResults.length} of {initialAgents.length} agents
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            {filteredResults.length > 0 ? (
              <motion.div
                key="agent-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
              >
                {filteredResults.map((agent, index) => (
                  <AgentCard key={agent.id} agent={agent} index={index} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="no-results"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-12 text-center">
                  <CardContent className="space-y-4">
                    <Search className="w-12 h-12 text-muted-foreground mx-auto" />
                    <h3 className="text-lg font-semibold">No agents found</h3>
                    <p className="text-muted-foreground">
                      Try adjusting your search criteria or clearing some filters.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
