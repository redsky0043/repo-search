"use client"

import { useState } from "react"

import { useDebounce } from "@/shared/hooks"

import { SearchInput } from "./search-input"
import { SearchResults } from "./search-results"
import { SearchHeader } from "./search-header"
import { SearchEmptyState } from "./search-empty-state"

export function SearchRepos() {
  const [query, setQuery] = useState("")
  const debouncedQuery = useDebounce(query, 500)

  const shouldShowResults = debouncedQuery && debouncedQuery.length >= 3

  return (
    <section className="max-w-4xl mx-auto grid gap-8">
      <SearchInput
        value={query}
        onChange={setQuery}
      />

      {shouldShowResults ? (
        <div className="mb-6">
          <SearchHeader query={debouncedQuery} />
          <SearchResults query={debouncedQuery} />
        </div>
      ) : (
        <SearchEmptyState />
      )}
    </section>
  )
}