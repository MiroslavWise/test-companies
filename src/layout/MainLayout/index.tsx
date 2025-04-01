import { type PropsWithChildren } from "react"

import AsideLeft from "../../components/AsideLeft"

function MainLayout({ children }: PropsWithChildren) {
  return (
    <main className="w-full h-dvh md:h-screen grid grid-cols-[3rem_minmax(0,1fr)]">
      <AsideLeft />
      {children}
    </main>
  )
}

MainLayout.displayName = "MainLayout"
export default MainLayout
