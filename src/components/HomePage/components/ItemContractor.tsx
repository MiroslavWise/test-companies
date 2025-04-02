import { useQuery } from "@tanstack/react-query"

import ItemWrapper from "../../ItemWrapper"

import { ID_CONTACT } from "../../../mocks/id"
import { useAuth } from "../../../store/useAuth"
import { getContactId } from "../../../services/contacts"

function conversionPhone(value: string | null) {
  if (!value) return null
  const match = value.replace(/\D/g, "").match(/^1(\d{3})(\d{3})(\d{4})$/)

  if (match) return `+1 ${match[1]} ${match[2]} ${match[3]}`
  return null
}

function ItemContractor() {
  const token = useAuth(({ token }) => token)

  const { data } = useQuery({
    queryFn: () => getContactId(ID_CONTACT),
    queryKey: ["contacts", ID_CONTACT],
    enabled: !!token,
  })

  const { firstname = null, lastname = null, email = null, phone = null } = data?.data ?? {}

  const number = conversionPhone(phone)

  return (
    <ItemWrapper>
      <div className="w-full flex flex-row items-center justify-between">
        <h2 className="font-bold text-sm">Contacts</h2>
      </div>
      <div className="w-full flex flex-col gap-0.5 font-normal *:h-8">
        <div className="w-full grid grid-cols-[10rem_minmax(0,1fr)] gap-3 items-center">
          <span className="text-[#00000080] text-[13px] leading-5">Responsible person:</span>
          <p className="text-sm">
            {firstname} {lastname}
          </p>
        </div>
        <div className="w-full grid grid-cols-[10rem_minmax(0,1fr)] gap-3 items-center">
          <span className="text-[#00000080] text-[13px] leading-5">Phone number:</span>
          <p className="text-sm">{number}</p>
        </div>
        <div className="w-full grid grid-cols-[10rem_minmax(0,1fr)] gap-3 items-center">
          <span className="text-[#00000080] text-[13px] leading-5">E-mail:</span>
          <p className="text-sm">{email}</p>
        </div>
      </div>
    </ItemWrapper>
  )
}

ItemContractor.displayName = "ItemContractor"
export default ItemContractor
