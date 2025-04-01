import { ELinkManager } from "../../../types/enum"

export interface INLinkNavigation {
  icon: string
  label: string
}

const OBJ_NAVIGATION: Record<ELinkManager, INLinkNavigation> = {
  [ELinkManager.ORGANIZATIONS]: {
    icon: "icon-briefcase",
    label: "Organizations",
  },
  [ELinkManager.CONTRACTORS]: {
    icon: "icon-helmet",
    label: "Contractors",
  },
  [ELinkManager.CLIENTS]: {
    icon: "icon-users",
    label: "Clients",
  },
}

export const ARRAY_NAVIGATION = Object.entries(OBJ_NAVIGATION) as [ELinkManager, INLinkNavigation][]
