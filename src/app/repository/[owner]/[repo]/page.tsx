import { notFound } from "next/navigation"

import { RepositoryDetails } from "@/widgets/repository-details/ui"

interface RepositoryPageProps {
  params: Promise<{
    owner: string
    repo: string
  }>
}

export default async function RepositoryPage({ params }: RepositoryPageProps) {
  const { owner, repo } = await params

  if (!owner || !repo) {
    notFound()
  }

  return (
    <RepositoryDetails owner={owner} repo={repo} />
  )
}
