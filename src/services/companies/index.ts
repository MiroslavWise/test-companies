import { instance } from "../instance"

const route = `/companies`

export interface IPhoto {
  name: `${string}.${string}`
  filepath: `${string}/${string}.${string}`
  thumbpath: `${string}/${string}.${string}`
  createdAt: string
}

interface ICompany {
  id: number | string
  contactId: string
  name: string
  shortName: string
  businessEntity: string
  contract: {
    no: string
    issue_date: string
  }
  type: [string, string]
  status: string
  photos: IPhoto[]
  createdAt: string
  updatedAt: string
}

export const getCompanyId = (id: number) => instance<ICompany>({ route: `${route}/${id}` })
export const deletePhotoCompany = (id: number | string, name: string) =>
  instance({ route: `${route}/${id}/image/${name}`, method: "DELETE" })
