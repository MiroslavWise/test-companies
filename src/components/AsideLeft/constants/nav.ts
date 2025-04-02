export enum EQueryPath {
  MAIN = "main",
  SEARCH = "search",
  SETTINGS = "settings",
  OUT = "out",
}

type TIconString = `icon-${string}`

const OBJ_NAV: Partial<Record<EQueryPath, TIconString>> = {
  [EQueryPath.MAIN]: "icon-briefcase",
  [EQueryPath.SEARCH]: "icon-search",
}

const OBJ_SETTINGS: Partial<Record<EQueryPath, TIconString>> = {
  [EQueryPath.SETTINGS]: "icon-gear-six",
  [EQueryPath.OUT]: "icon-sign-out",
}

export const ARRAY_NAV = Object.entries(OBJ_NAV) as [EQueryPath, TIconString][]
export const ARRAY_SETTINGS = Object.entries(OBJ_SETTINGS) as [EQueryPath, TIconString][]
