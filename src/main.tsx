import { createRoot } from "react-dom/client"

import App from "./App.tsx"
import Sprite from "./icon/sprite.tsx"
import MainLayout from "./layout/MainLayout"
import ProviderNUQS from "./provider/nuqs.tsx"
import ProviderTanstack from "./provider/tanstack.tsx"
import ProvideCheckAuth from "./provider/check-auth.tsx"
import ModalDeletePhoto from "./template/ModalDeletePhoto"

import "./styles/init.scss"

createRoot(document.getElementById("root")!).render(
  <>
    <ProviderNUQS>
      <ProviderTanstack>
        <ProvideCheckAuth>
          <MainLayout>
            <App />
            <ModalDeletePhoto />
          </MainLayout>
        </ProvideCheckAuth>
      </ProviderTanstack>
    </ProviderNUQS>
    <Sprite />
  </>,
)
