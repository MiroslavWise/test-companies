import { create } from "zustand"

type TAny = number | string | null

export const useDeleteCompany = create<IState>(() => ({ companyId: null }))

export const dispatchDeleteCompany = (value?: TAny) =>
  useDeleteCompany.setState(() => {
    if (value) {
      return {
        companyId: value,
      }
    } else {
      return {
        companyId: null,
      }
    }
  }, true)

interface IState {
  companyId: TAny
}
