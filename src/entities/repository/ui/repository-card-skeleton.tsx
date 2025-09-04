import { Card } from "@/shared/ui/card"
import { Skeleton } from "@/shared/ui/skeleton"

export function RepositoryCardSkeleton() {
  return (
    <Card className="p-4">
      <div className="flex items-start justify-between gap-2 mb-1">
        <Skeleton className="h-6 w-64" />
        <Skeleton className="h-4 w-16" />
      </div>
      <Skeleton className="h-4 w-full mb-1" />
      <Skeleton className="h-4 w-3/4" />
    </Card>
  )
}
