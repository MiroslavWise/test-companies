import { instance } from "../instance"
import { z } from "zod"

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

const schemaBody = z.object({
  name: z.string().default(""),
})

export type TPostBodyCompany = z.infer<typeof schemaBody>
export type TPatchBodyCompany = Partial<TPostBodyCompany>

type TStringNumber = number | string

export const getCompanyId = (id: TStringNumber) => instance<ICompany>({ route: `${route}/${id}` })
export const deletePhotoCompany = (id: TStringNumber, name: string) => instance({ route: `${route}/${id}/image/${name}`, method: "DELETE" })
export const deleteCompany = (id: TStringNumber) => instance({ route: `${route}/${id}`, method: "DELETE" })
export const patchCompany = (id: TStringNumber, body: TPatchBodyCompany) => instance({ route: `${route}/${id}`, method: "PATCH", body })
