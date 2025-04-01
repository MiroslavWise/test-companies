import { type PropsWithChildren } from "react"

function ItemWrapper({ children }: PropsWithChildren) {
  return <div className="w-full rounded-2xl bg-white p-6 gap-4 text-[#000000CC]">{children}</div>
}

ItemWrapper.displayName = "ItemWrapper"
export default ItemWrapper
