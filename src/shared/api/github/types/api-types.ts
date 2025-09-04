import type { paths } from "./github-api"

export type Repository =
  paths["/repos/{owner}/{repo}"]["get"]["responses"]["200"]["content"]["application/json"]

export type SearchRepositoriesResponse =
  paths["/search/repositories"]["get"]["responses"]["200"]["content"]["application/json"]

export type SearchRepositoryItem =
  paths["/search/repositories"]["get"]["responses"]["200"]["content"]["application/json"]["items"][0]

export type SearchRepositoriesParams = paths["/search/repositories"]["get"]["parameters"]["query"]

export type GetRepositoryParams = paths["/repos/{owner}/{repo}"]["get"]["parameters"]["path"]
