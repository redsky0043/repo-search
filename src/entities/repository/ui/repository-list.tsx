"use client"

import type { SearchRepositoryItem } from "../model"

import { RepositoryCard } from "./repository-card"

type RepositoryListProps = {
  repositories: SearchRepositoryItem[]
}

export function RepositoryList({ repositories }: RepositoryListProps) {
  return (
    <div className="grid gap-4">
      {repositories.map((repository) => (
        <RepositoryCard
          key={repository.id}
          repository={repository}
        />
      ))}
    </div>
  )
}
