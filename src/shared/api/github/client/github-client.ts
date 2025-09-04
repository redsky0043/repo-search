import type { Repository, SearchRepositoriesResponse } from "../types/api-types"

const GITHUB_API_BASE = "https://api.github.com"

export class GitHubClient {
  private baseUrl: string

  constructor(baseUrl: string = GITHUB_API_BASE) {
    this.baseUrl = baseUrl
  }

  async searchRepositories(
    query: string,
    page: number = 1,
    perPage: number = 10
  ): Promise<SearchRepositoriesResponse> {
    const url = `${this.baseUrl}/search/repositories?q=${encodeURIComponent(
      query
    )}&page=${page}&per_page=${perPage}&sort=stars&order=desc`

    const response = await fetch(url, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    })

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`)
    }

    return response.json()
  }

  async getRepository(owner: string, repo: string): Promise<Repository> {
    const url = `${this.baseUrl}/repos/${owner}/${repo}`

    const response = await fetch(url, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    })

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`)
    }

    return response.json()
  }
}

export const githubClient = new GitHubClient()
