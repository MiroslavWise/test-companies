import { instance } from "../instance"

const route = `/contacts`

interface IContact {
  id: string | number
  lastname: string
  firstname: string
  phone: string
  email: `${string}@${string}.${string}`
  createdAt: string
  updatedAt: string
}

export const getContactId = (id: number) => instance<IContact>({ route: `${route}/${id}` })
