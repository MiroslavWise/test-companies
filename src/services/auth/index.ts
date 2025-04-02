import { URL_API } from "../../config/api"
import { TTypeToken } from "../../types/type"

const AUTH_NAME = "MiroslavWise"

export const getAuth = async () => {
  try {
    const endpoint = new URL(`${URL_API}/auth`)
    endpoint.searchParams.set("user", AUTH_NAME)
    const response = await fetch(endpoint)

    if (response?.ok) {
      const token = response?.headers.get("Authorization")
      return token as TTypeToken
    }

    return null
  } catch (e) {
    console.warn("data: e", e)

    return null
  }
}
