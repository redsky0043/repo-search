"use client"

import Link from "next/link"
import { Star } from "lucide-react"

import { useRepositoryDetails } from "@/entities/repository/api"
import { formatDate, formatStars } from "@/shared/lib"
import { Badge } from "@/shared/ui/badge"
import { Button } from "@/shared/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card"

import { ErrorState, LoadingState } from "./"

type RepositoryDetailsProps = {
  owner: string
  repo: string
}

export function RepositoryDetails({ owner, repo }: RepositoryDetailsProps) {
  const {
    data: repository,
    isLoading,
    isError,
  } = useRepositoryDetails({
    owner,
    repo,
  })

  if (isLoading) {
    return <LoadingState />
  }

  if (isError || !repository) {
    return (
      <ErrorState
        owner={owner}
        repo={repo}
      />
    )
  }

  const formattedStars = formatStars(repository.stargazers_count)
  const formattedDate = formatDate(repository.created_at)

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
          >
            ← Back to search
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-semibold text-blue-600 mb-4">
              {repository.full_name}
            </CardTitle>
            {repository.description && (
              <p className="text-lg text-gray-400 mb-4">{repository.description}</p>
            )}
          </CardHeader>

          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="grid gap-4">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-muted-foreground">Stars:</span>
                  <Star className="h-4 w-4" />
                  <span>{formattedStars}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-semibold text-muted-foreground">Language:</span>
                  <Badge variant="outline">{repository.language || "Unknown"}</Badge>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-semibold text-muted-foreground">Created:</span>
                  <span>{formattedDate}</span>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-muted-foreground">Forks:</span>
                  <span>{repository.forks_count}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-semibold text-muted-foreground">Open Issues:</span>
                  <span>{repository.open_issues_count}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-semibold text-muted-foreground">Watchers:</span>
                  <span>{repository.watchers_count}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {repository.homepage && (
                <Link
                  href={repository.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="sm"
                  >
                    Visit Homepage
                  </Button>
                </Link>
              )}

              <Link
                href={repository.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="sm"
                >
                  View on GitHub
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
