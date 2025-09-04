import { useQuery } from "@tanstack/react-query"

import { githubClient } from "../client/github-client"
import type { Repository } from "@/entities/repository/model"

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
