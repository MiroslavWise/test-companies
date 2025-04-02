import { PropsWithChildren } from "react"
import { NuqsAdapter } from "nuqs/adapters/react"

function ProviderNUQS({ children }: PropsWithChildren) {
  return <NuqsAdapter>{children}</NuqsAdapter>
}

ProviderNUQS.displayName = "ProviderNUQS"
export default ProviderNUQS
