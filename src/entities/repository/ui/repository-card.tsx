import Link from "next/link"

import { Star } from "lucide-react"

import { formatStars } from "@/shared/lib"
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card"

import type { SearchRepositoryItem } from "../model"

type RepositoryCardProps = {
  repository: SearchRepositoryItem
}

export function RepositoryCard({ repository }: RepositoryCardProps) {
  const formattedStars = formatStars(repository.stargazers_count)

  return (
    <Link href={`/repository/${repository.owner?.login}/${repository.name}`}>
      <Card className="hover:border-gray-300 transition-colors cursor-pointer">
        <CardHeader>
          <div className="flex items-start justify-between gap-2">
            <div className="grid gap-2">
              <CardTitle className="text-lg font-semibold text-blue-600">
                {repository.full_name}
              </CardTitle>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4" />
              <span>{formattedStars}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {repository.description && (
            <p className="text-gray-500 line-clamp-2">{repository.description}</p>
          )}
          {/* <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <GitFork className="h-4 w-4" />
              <span>{repository.open_issues_count}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{formattedDate}</span>
            </div>
          </div> */}
        </CardContent>
      </Card>
    </Link>
  )
}
