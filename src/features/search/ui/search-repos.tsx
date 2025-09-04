"use client"

import { useMemo, useState } from "react"

import { useSearchRepositories } from "@/shared/api/github"
import { useDebounce } from "@/shared/hooks"
import { Button } from "@/shared/ui/button"

import { RepositoryList } from "@/entities/repository/ui"

import { SearchInput } from "@/features/search/ui"

export function SearchRepos() {
  const [query, setQuery] = useState("")
  const debouncedQuery = useDebounce(query, 500)
  const { data, isLoading, isError, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useSearchRepositories({
      query: debouncedQuery,
      perPage: 10,
    })

  const repositories = useMemo(() => {
    return data?.pages.flatMap((page) => page.items) || []
  }, [data])

  return (
    <section className="max-w-4xl mx-auto grid gap-8">
      <SearchInput
        value={query}
        onChange={setQuery}
      />

      {isError ? (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="text-red-600">Error: Failed to fetch repositories</p>
        </div>
      ) : debouncedQuery && debouncedQuery.length >= 3 ? (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">
            Results for "{debouncedQuery}"
            {data && (
              <span className="text-gray-500 text-sm ml-2">
                ({data.pages[0]?.total_count || 0} found)
              </span>
            )}
          </h2>

          {isLoading ? (
            <div className="space-y-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className="animate-pulse"
                >
                  <div className="bg-gray-200 h-32 rounded-lg"></div>
                </div>
              ))}
            </div>
          ) : repositories && repositories.length > 0 ? (
            <div className="space-y-6">
              <RepositoryList repositories={repositories} />

              {hasNextPage && (
                <div className="text-center">
                  <Button
                    onClick={() => fetchNextPage()}
                    disabled={isFetchingNextPage}
                  >
                    {isFetchingNextPage ? "Loading..." : "Load More"}
                  </Button>
                </div>
              )}
            </div>
          ) : repositories && repositories.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-lg font-semibold text-gray-600 mb-2">No repositories found</h3>
              <p className="text-gray-500">Try adjusting your search query</p>
            </div>
          ) : null}
        </div>
      ) : (
        <h2 className="text-2xl font-semibold text-gray-600 py-12 text-center">
          Find repositories on GitHub
        </h2>
      )}
    </section>
  )
}
