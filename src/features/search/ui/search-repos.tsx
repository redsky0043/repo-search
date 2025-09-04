"use client"

import { useState } from "react"

import { useDebounce } from "@/shared/hooks"
import { SEARCH_CONSTANTS } from "@/shared/lib"

import { SearchEmptyState } from "./search-empty-state"
import { SearchHeader } from "./search-header"
import { SearchInput } from "./search-input"
import { SearchResults } from "./search-results"

export function SearchRepos() {
  const [query, setQuery] = useState("")
  const debouncedQuery = useDebounce(query, SEARCH_CONSTANTS.DEBOUNCE_DELAY)

  const shouldShowResults =
    debouncedQuery && debouncedQuery.length >= SEARCH_CONSTANTS.MIN_QUERY_LENGTH

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
