"use client"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks"
import { setSearchQuery } from "@/lib/store/slices/filterSlice"

export function SearchBar() {
  const dispatch = useAppDispatch()
  const searchQuery = useAppSelector((state) => state.filters.searchQuery)

  const handleSearchChange = (value: string) => {
    dispatch(setSearchQuery(value))
  }

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
      <Input
        placeholder="Search agents by name or description..."
        value={searchQuery}
        onChange={(e) => handleSearchChange(e.target.value)}
        className="pl-10 h-11"
      />
    </div>
  )
}
