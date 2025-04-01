import ItemLink from "./components/ItemLink"

import { ARRAY_NAVIGATION } from "./constants/navigation"

import styles from "./styles/styles.module.scss"

function HomeAside() {
  return (
    <aside className={`w-full h-full bg-[#FFFFFF] p-5 pb-6 flex flex-col gap-4 justify-between items-center ${styles.container}`}>
      <div className="w-full flex flex-col gap-5">
        <article className="w-full flex flex-col text-[#000000CC]">
          <h2 className="font-bold text-sm">Oak Tree Cemetery</h2>
          <p className="text-[11px] font-normal leading-4">Process Manager</p>
        </article>
        <div className="w-full h-[1px] bg-[#0000001A]" />
        <nav className="w-full flex flex-col gap-3">
          {ARRAY_NAVIGATION.map(([path, item]) => (
            <ItemLink key={`sd-f-${path}`} path={path} {...item} />
          ))}
        </nav>
      </div>
      <footer className="w-full flex items-center justify-center">
        <span className="font-normal text-[11px] leading-4 text-center text-[#0000004D]">All Funeral Services © 2015-2025</span>
      </footer>
    </aside>
  )
}

HomeAside.displayName = "HomeAside"
export default HomeAside
