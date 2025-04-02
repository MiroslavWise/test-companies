import { create } from "zustand"

export const useDeletePhoto = create<IState>(() => ({
  photo: null,
}))

export const dispatchDeletePhoto = (companyId?: string | number, name?: string) =>
  useDeletePhoto.setState((_) => {
    if (companyId && name) {
      return {
        photo: {
          companyId: companyId,
          name: name,
        },
      }
    } else {
      return {
        photo: null,
      }
    }
  }, true)

interface IState {
  photo: {
    companyId: string | number
    name: string
  } | null
}
