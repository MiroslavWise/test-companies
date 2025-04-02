import { format } from "date-fns"
import { useQuery } from "@tanstack/react-query"

import ItemWrapper from "../../ItemWrapper"

import { ID_COMPANY } from "../../../mocks/id"
import { useAuth } from "../../../store/useAuth"
import { getCompanyId } from "../../../services/companies"


function updateType(type: string[]): string {
  const newArray: string[] = []

  for (const item of type) {
    const _ = item
      .split("_")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ")

    newArray.push(_)
  }

  return newArray.join(", ")
}

function formatDate(date: string | null) {
  if (!date) return null
  return format(new Date(date), "MM.dd.yyyy")
}

function ItemOrganization() {
  const token = useAuth(({ token }) => token)

  const { data } = useQuery({
    queryFn: () => getCompanyId(ID_COMPANY),
    queryKey: ["companies", ID_COMPANY],
    enabled: !!token,
  })

  const { businessEntity = null, type = [], contract } = data?.data ?? {}

  const { no = "", issue_date = null } = contract ?? {}

  const types = updateType(type)
  const date = formatDate(issue_date)

  return (
    <ItemWrapper>
      <div className="w-full flex flex-row items-center justify-between">
        <h2 className="font-bold text-sm">Company Details</h2>
      </div>
      <div className="w-full flex flex-col gap-0.5 font-normal *:h-8">
        <div className="w-full grid grid-cols-[10rem_minmax(0,1fr)] gap-3 items-center">
          <span className="text-[#00000080] text-[13px] leading-5">Agreement:</span>
          <div className="text-sm flex flex-row items-center flex-nowrap">
            {no}&nbsp;<span className="text-[#0000004D]">/</span>&nbsp;{date}
          </div>
        </div>
        <div className="w-full grid grid-cols-[10rem_minmax(0,1fr)] gap-3 items-center">
          <span className="text-[#00000080] text-[13px] leading-5">Business entity:</span>
          <p className="text-sm">{businessEntity}</p>
        </div>
        <div className="w-full grid grid-cols-[10rem_minmax(0,1fr)] gap-3 items-center">
          <span className="text-[#00000080] text-[13px] leading-5">Company type:</span>
          <p className="text-sm">{types}</p>
        </div>
      </div>
    </ItemWrapper>
  )
}

ItemOrganization.displayName = "ItemOrganization"
export default ItemOrganization
