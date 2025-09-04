import { useQuery } from "@tanstack/react-query"

import { githubClient } from "@/shared/api/github/client/github-client"
import type { Repository } from "../model"

type UseRepositoryDetailsParams = {
  owner: string
  repo: string
  enabled?: boolean
}

export function useRepositoryDetails({ owner, repo, enabled = true }: UseRepositoryDetailsParams) {
  return useQuery<Repository, Error>({
    queryKey: ["repository-details", owner, repo],
    queryFn: () => githubClient.getRepository(owner, repo),
    enabled: enabled && !!owner && !!repo,
    staleTime: 10 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  })
}
