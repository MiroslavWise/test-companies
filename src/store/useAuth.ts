import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

import { EIsAuth } from "../types/enum"
import { TTypeToken } from "../types/type"

export const useAuth = create(
  persist<IState>(
    () => ({
      state: EIsAuth.CHECK,
      token: null,
    }),
    {
      storage: createJSONStorage(() => localStorage),
      name: "__auth_data_test__",
      version: 0.1,
      partialize: (_) =>
        ({
          token: _.token,
        } as IState),
    },
  ),
)

export const dispatchToken = (value: TTypeToken | null) =>
  useAuth.setState((_) => {
    if (!!value) {
      return {
        state: EIsAuth.AUTHORIZED,
        token: value,
      }
    } else {
      return {
        state: EIsAuth.UNAUTHORIZED,
        token: null,
      }
    }
  }, true)

interface IState {
  state: EIsAuth
  token: TTypeToken | null
}
