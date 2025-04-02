import { useEffect, type PropsWithChildren } from "react"

import { EIsAuth } from "../types/enum"

import { getAuth } from "../services/auth"
import { dispatchToken, useAuth } from "../store/useAuth"

function ProvideCheckAuth({ children }: PropsWithChildren) {
  const state = useAuth(({ state }) => state)

  useEffect(() => {
    if (state === EIsAuth.CHECK) {
      getAuth().then((res) => {
        dispatchToken(res)
      })
    }
  }, [state])

  return children
}

ProvideCheckAuth.displayName = "ProvideCheckAuth"
export default ProvideCheckAuth
