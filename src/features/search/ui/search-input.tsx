"use client"

import { Search } from "lucide-react"

import { Input } from "@/shared/ui/input"

interface SearchInputProps {
  value: string
  onChange: (query: string) => void
}

export function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Repository search..."
          className="w-full pl-10"
        />
      </div>
      {value.length > 0 && value.length < 3 && (
        <p className="text-sm text-gray-500 mt-1">Enter at least 3 characters</p>
      )}
    </div>
  )
}
