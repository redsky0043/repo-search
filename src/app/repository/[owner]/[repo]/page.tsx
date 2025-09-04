import { notFound } from "next/navigation"

import { RepositoryDetails } from "@/widgets/repository-details/ui"

interface RepositoryPageProps {
  params: {
    owner: string
    repo: string
  }
}

export default function RepositoryPage({ params }: RepositoryPageProps) {
  const { owner, repo } = params

  if (!owner || !repo) {
    notFound()
  }

  return (
    <RepositoryDetails owner={owner} repo={repo} />
  )
}
