import { format } from "date-fns"

export function formatDate(date: string | null) {
  if (!date) return null
  return format(new Date(date), "MM.dd.yyyy")
}
