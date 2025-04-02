import { create } from "zustand"

type TAny = number | string | null

export const useRenameCompany = create<IState>(() => ({ company: null }))

export const dispatchRenameCompany = (value?: TAny) =>
  useRenameCompany.setState(() => {
    if (value) {
      return {
        company: value,
      }
    } else {
      return {
        company: null,
      }
    }
  }, true)

interface IState {
  company: TAny
}
