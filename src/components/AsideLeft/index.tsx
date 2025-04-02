import { parseAsStringEnum, useQueryState } from "nuqs"
import Icon from "../Icon"

import { cx } from "../../utils/cx"
import { ARRAY_NAV, ARRAY_SETTINGS, EQueryPath } from "./constants/nav"

function AsideLeft() {
  const [state, setState] = useQueryState("pages", parseAsStringEnum<EQueryPath>(Object.values(EQueryPath)).withDefault(EQueryPath.MAIN))

  return (
    <aside className="w-full h-full bg-[var(--root-black)] flex flex-col justify-between items-center py-5 px-1.5">
      <div className="flex flex-col gap-5">
        <a className="w-9 h-9 aspect-square relative text-white" onClick={() => setState(null)}>
          <Icon id="main-logo" className="w-9 h-9 aspect-square" />
        </a>
        {ARRAY_NAV.map(([path, icon]) => (
          <a
            key={`sd-${path}`}
            className={cx("w-9 h-9 aspect-square relative text-white rounded-lg", state === path ? "bg-[#FFFFFF33]" : "bg-transparent")}
            onClick={() => setState(path)}
          >
            <Icon id={`${icon}`} className="w-5 h-5" />
          </a>
        ))}
      </div>
      <footer className="flex flex-col items-center gap-5">
        <div className="w-5 h-[1px] bg-[#FFFFFF33]" />
        {ARRAY_SETTINGS.map(([path, icon]) => (
          <a
            key={`sd-${path}`}
            className={cx("w-9 h-9 aspect-square relative text-white rounded-lg", state === path ? "bg-[#FFFFFF33]" : "bg-transparent")}
            onClick={() => setState(path)}
          >
            <Icon id={`${icon}`} className="w-5 h-5" />
          </a>
        ))}
      </footer>
    </aside>
  )
}

AsideLeft.displayName = "AsideLeft"
export default AsideLeft
