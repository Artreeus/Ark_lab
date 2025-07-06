"use client"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, Filter } from "lucide-react"
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks"
import {
  setSelectedStatuses,
  setSelectedCategories,
  setSelectedPricingModel,
  clearAllFilters,
} from "@/lib/store/slices/filterSlice"

const statuses = ["Active", "Beta", "Archived"]
const categories = [
  "Customer Service",
  "Operations",
  "Marketing",
  "Data Analysis",
  "Development",
  "Human Resources",
  "Finance",
  "Legal",
]
const pricingModels = ["Free Tier", "Subscription", "Per-Use"]

export function FilterControls() {
  const dispatch = useAppDispatch()
  const { selectedStatuses, selectedCategories, selectedPricingModel, searchQuery } = useAppSelector(
    (state) => state.filters,
  )

  const handleStatusChange = (status: string, checked: boolean) => {
    if (checked) {
      dispatch(setSelectedStatuses([...selectedStatuses, status]))
    } else {
      dispatch(setSelectedStatuses(selectedStatuses.filter((s) => s !== status)))
    }
  }

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      dispatch(setSelectedCategories([...selectedCategories, category]))
    } else {
      dispatch(setSelectedCategories(selectedCategories.filter((c) => c !== category)))
    }
  }

  const handlePricingModelChange = (value: string) => {
    dispatch(setSelectedPricingModel(value))
  }

  const handleClearFilters = () => {
    dispatch(clearAllFilters())
  }

  const hasActiveFilters =
    searchQuery || selectedStatuses.length > 0 || selectedCategories.length > 0 || selectedPricingModel

  return (
    <Card>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <Filter className="w-5 h-5" />
            Filters
          </CardTitle>
          {hasActiveFilters && (
            <Button variant="outline" size="sm" onClick={handleClearFilters} className="text-xs bg-transparent">
              <X className="w-3 h-3 mr-1" />
              Clear All
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Status Filter */}
        <div>
          <Label className="text-sm font-medium mb-3 block">Status</Label>
          <div className="space-y-2">
            {statuses.map((status) => (
              <div key={status} className="flex items-center space-x-2">
                <Checkbox
                  id={`status-${status}`}
                  checked={selectedStatuses.includes(status)}
                  onCheckedChange={(checked) => handleStatusChange(status, checked as boolean)}
                />
                <Label htmlFor={`status-${status}`} className="text-sm font-normal cursor-pointer">
                  {status}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div>
          <Label className="text-sm font-medium mb-3 block">Category</Label>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {categories.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox
                  id={`category-${category}`}
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                />
                <Label htmlFor={`category-${category}`} className="text-sm font-normal cursor-pointer">
                  {category}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Model Filter */}
        <div>
          <Label className="text-sm font-medium mb-3 block">Pricing Model</Label>
          <RadioGroup value={selectedPricingModel} onValueChange={handlePricingModelChange}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="" id="pricing-all" />
              <Label htmlFor="pricing-all" className="text-sm font-normal cursor-pointer">
                All Models
              </Label>
            </div>
            {pricingModels.map((model) => (
              <div key={model} className="flex items-center space-x-2">
                <RadioGroupItem value={model} id={`pricing-${model}`} />
                <Label htmlFor={`pricing-${model}`} className="text-sm font-normal cursor-pointer">
                  {model}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div>
            <Label className="text-sm font-medium mb-2 block">Active Filters</Label>
            <div className="flex flex-wrap gap-1">
              {searchQuery && (
                <Badge variant="secondary" className="text-xs">
                  Search: {searchQuery}
                </Badge>
              )}
              {selectedStatuses.map((status) => (
                <Badge key={status} variant="secondary" className="text-xs">
                  {status}
                </Badge>
              ))}
              {selectedCategories.map((category) => (
                <Badge key={category} variant="secondary" className="text-xs">
                  {category}
                </Badge>
              ))}
              {selectedPricingModel && (
                <Badge variant="secondary" className="text-xs">
                  {selectedPricingModel}
                </Badge>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
