import dynamic from "next/dynamic"

const ReactQueryDevtools = dynamic(
  () => import("@tanstack/react-query-devtools").then((d) => d.ReactQueryDevtools),
  {
    ssr: false,
  }
)

export function ReactQueryDevtoolsProvider() {
  return <ReactQueryDevtools initialIsOpen={false} />
}
