export function cx(...classes: any[]): string {
  let str = ""

  for (const _ of classes) {
    if (typeof _ === "string") {
      str += ` ${_}`
    }
  }

  return str.trim().replace(/\s+/g, " ")
}
