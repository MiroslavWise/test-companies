import { createRoot } from "react-dom/client"
import { NuqsAdapter } from "nuqs/adapters/react"

import App from "./App.tsx"
import Sprite from "./icon/sprite.tsx"
import MainLayout from "./layout/MainLayout"

import "./styles/init.scss"

createRoot(document.getElementById("root")!).render(
  <NuqsAdapter>
    <MainLayout>
      <App />
      <Sprite />
    </MainLayout>
  </NuqsAdapter>,
)
