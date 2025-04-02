import { useState } from "react"

import { useQuery } from "@tanstack/react-query"

import ItemWrapper from "../../ItemWrapper"
import FromEditCompany from "./FromEditCompany"
import ButtonEdit from "../../buttons/ButtonEdit"

import { TStateDate } from "../types"
import { ID_COMPANY } from "../../../mocks/id"
import { useAuth } from "../../../store/useAuth"
import { getCompanyId } from "../../../services/companies"
import { formatDate } from "../../../utils/date"

export function updateType(type: string[]): string {
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

function ItemOrganization() {
  const [state, setState] = useState<TStateDate>("data")
  const token = useAuth(({ token }) => token)

  const { data, isLoading } = useQuery({
    queryFn: () => getCompanyId(ID_COMPANY),
    queryKey: ["companies", ID_COMPANY],
    enabled: !!token,
  })

  function onEdit() {
    setState("edit")
  }

  const { businessEntity = null, type = [], contract } = data?.data ?? {}

  const { no = "", issue_date = null } = contract ?? {}

  const types = updateType(type)
  const date = formatDate(issue_date)

  return (
    <ItemWrapper>
      {state === "data" ? (
        <>
          <div className="w-full flex flex-row items-center justify-between">
            <h2 className="font-bold text-sm">Company Details</h2>
            <ButtonEdit onClick={onEdit} />
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
        </>
      ) : state === "edit" && !isLoading ? (
        <FromEditCompany setState={setState} data={data?.data!} id={ID_COMPANY} />
      ) : (
        "Загрузка"
      )}
    </ItemWrapper>
  )
}

ItemOrganization.displayName = "ItemOrganization"
export default ItemOrganization
