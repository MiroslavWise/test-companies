import { createRoot } from "react-dom/client"

import App from "./App.tsx"
import Sprite from "./icon/sprite.tsx"
import MainLayout from "./layout/MainLayout"
import ProviderNUQS from "./provider/nuqs.tsx"
import ProviderTanstack from "./provider/tanstack.tsx"
import ProvideCheckAuth from "./provider/check-auth.tsx"
const ModalDeletePhoto = lazy(() => import("./template/ModalDeletePhoto"))
const ModalRenameCompany = lazy(() => import("./template/ModalRenameCompany"))
const ModalDeleteCompany = lazy(() => import("./template/ModalDeleteCompany"))

import "./styles/init.scss"
import { lazy } from "react"

createRoot(document.getElementById("root")!).render(
  <>
    <ProviderNUQS>
      <ProviderTanstack>
        <ProvideCheckAuth>
          <MainLayout>
            <App />
          </MainLayout>
          <ModalDeletePhoto />
          <ModalRenameCompany />
          <ModalDeleteCompany />
        </ProvideCheckAuth>
      </ProviderTanstack>
    </ProviderNUQS>
    <Sprite />
  </>,
)
