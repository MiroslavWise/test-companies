import { parseAsStringEnum, useQueryState } from "nuqs"

import Icon from "../../Icon"

import { ELinkManager } from "../../../types/enum"
import { INLinkNavigation } from "../constants/navigation"

function ItemLink(props: INLinkNavigation & { path: ELinkManager }) {
  const { path, label, icon } = props ?? {}

  const [state, setState] = useQueryState(
    "link",
    parseAsStringEnum<ELinkManager>(Object.values(ELinkManager)).withDefault(ELinkManager.ORGANIZATIONS),
  )

  return (
    <a
      className={`w-full grid grid-cols-[1.25rem_minmax(0,1fr)] items-center gap-2 border transition-colors h-10 rounded-lg px-3 ${
        path === state
          ? "text-[#FFFFFFF2] bg-[var(--root-black)] border-[var(--root-black)]"
          : "text-[var(--root-black)] bg-white border-[#00000033]"
      }`}
      onClick={() => setState(path)}
    >
      <div className="w-5 h-5 aspect-square relative">
        <Icon id={icon} className="w-5 h-5" />
      </div>
      <span className="text-center text-current transition-colors text-[13px] leading-5 font-semibold">{label}</span>
    </a>
  )
}

ItemLink.displayName = "ItemLink"
export default ItemLink
