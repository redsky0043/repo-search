import { useMemo } from "react"

import { useSearchRepositories } from "@/entities/repository/api"
import { useIntersectionObserver } from "@/shared/hooks"

import { RepositoryList, RepositoryCardSkeleton } from "@/entities/repository/ui"

interface SearchResultsProps {
  query: string
}

export function SearchResults({ query }: SearchResultsProps) {
  const { data, isLoading, isError, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useSearchRepositories({
      query,
      perPage: 10,
    })

  const [loadMoreRef, entry] = useIntersectionObserver({
    threshold: 0.1,
  })

  if (entry?.isIntersecting && hasNextPage && !isFetchingNextPage) {
    fetchNextPage()
  }

  const repositories = useMemo(() => {
    return data?.pages.flatMap((page) => page.items) || []
  }, [data])

  if (isError) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
        <p className="text-red-600">Error: Failed to fetch repositories</p>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <RepositoryCardSkeleton key={index} />
        ))}
      </div>
    )
  }

  if (repositories.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-semibold text-gray-600 mb-2">No repositories found</h3>
        <p className="text-gray-500">Try adjusting your search query</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <RepositoryList repositories={repositories} />

      {hasNextPage && (
        <div ref={loadMoreRef} className="flex justify-center py-8">
          {isFetchingNextPage ? (
            <div className="space-y-4 w-full">
              {Array.from({ length: 3 }).map((_, index) => (
                <RepositoryCardSkeleton key={index} />
              ))}
            </div>
          ) : (
            <div className="text-gray-500 text-sm">Scroll down to load more...</div>
          )}
        </div>
      )}
    </div>
  )
}
