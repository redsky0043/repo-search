type ErrorStateProps = {
  owner: string
  repo: string
}

export function ErrorState({ owner, repo }: ErrorStateProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Repository not found</h1>
        <p className="text-gray-500">
          The repository {owner}/{repo} could not be found.
        </p>
      </div>
    </div>
  )
}
