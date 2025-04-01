import { type PropsWithChildren } from "react"

import HomeAside from "../../components/HomeAside"

function HomeLayout({ children }: PropsWithChildren) {
  return (
    <section className="w-full h-full grid grid-cols-[15.625rem_minmax(0,1fr)]">
      <HomeAside />
      {children}
    </section>
  )
}

HomeLayout.displayName = "HomeLayout"
export default HomeLayout
