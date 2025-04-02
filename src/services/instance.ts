import { URL_API } from "../config/api"
import { useAuth } from "../store/useAuth"

interface IPropInst {
  route: string
  /** @default GET */
  method?: "GET" | "POST" | "PATCH" | "DELETE"
  query?: any
  body?: object
}

interface IReturn<R = any> {
  data: R
  error?: any
}

function authToken(): string | null {
  if (typeof window === "undefined") return null
  const token = useAuth.getState().token

  return token
}

function header(): HeadersInit {
  const head: HeadersInit = {
    "Content-Type": "application/json",
  }

  const fullTokenString = authToken()

  if (fullTokenString) {
    head.Authorization = fullTokenString
  }

  return head
}

export const instance = async <R = any>({ route, method = "GET", body }: IPropInst): Promise<IReturn<R>> => {
  try {
    const endpoint = new URL(`${URL_API}${route}`)

    const obj: RequestInit = {
      method: method,
      headers: header(),
    }

    if (method && ["POST", "PATCH"].includes(method) && body) {
      obj.body = JSON.stringify(body)
    }

    const response = await fetch(endpoint, obj)

    const data = await response.json()

    return {
      data: data as R,
    }
  } catch (e) {
    return {
      data: null as R,
      error: e,
    }
  }
}
