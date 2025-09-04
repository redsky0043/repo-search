import { useInfiniteQuery } from "@tanstack/react-query"

import { githubClient } from "@/shared/api/github/client/github-client"
import type { SearchRepositoriesResponse } from "../model"

type UseSearchRepositoriesParams = {
  query: string
  perPage?: number
  enabled?: boolean
}

export function useSearchRepositories({
  query,
  perPage = 30,
  enabled = true,
}: UseSearchRepositoriesParams) {
  return useInfiniteQuery<SearchRepositoriesResponse, Error>({
    queryKey: ["search-repositories", query, perPage],
    queryFn: ({ pageParam = 1 }) =>
      githubClient.searchRepositories(query, pageParam as number, perPage),
    enabled: enabled && query.length >= 3,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    getNextPageParam: (lastPage, allPages) => {
      const totalPages = Math.ceil(lastPage.total_count / perPage)
      const currentPage = allPages.length
      return currentPage < totalPages ? currentPage + 1 : undefined
    },
    initialPageParam: 1,
  })
}
