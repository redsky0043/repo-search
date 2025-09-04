interface SearchHeaderProps {
  query: string
  totalCount?: number
}

export function SearchHeader({ query, totalCount }: SearchHeaderProps) {
  return (
    <h2 className="text-xl font-semibold mb-4">
      Results for "{query}"
      {totalCount !== undefined && (
        <span className="text-gray-500 text-sm ml-2">({totalCount} found)</span>
      )}
    </h2>
  )
}
