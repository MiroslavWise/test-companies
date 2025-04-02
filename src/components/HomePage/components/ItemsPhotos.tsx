import { useQuery } from "@tanstack/react-query"

import ItemPhoto from "./ItemPhoto"
import ItemWrapper from "../../ItemWrapper"

import { ID_COMPANY } from "../../../mocks/id"
import { useAuth } from "../../../store/useAuth"
import { getCompanyId } from "../../../services/companies"

function ItemsPhotos() {
  const token = useAuth(({ token }) => token)

  const { data } = useQuery({
    queryFn: () => getCompanyId(ID_COMPANY),
    queryKey: ["companies", ID_COMPANY],
    enabled: !!token,
  })

  const { photos = [] } = data?.data ?? {}

  return (
    <ItemWrapper>
      <div className="w-full flex flex-row items-center justify-between">
        <h2 className="font-bold text-sm">Photos</h2>
      </div>
      <div className="w-full grid grid-cols-4 gap-3">
        {photos.map((item) => (
          <ItemPhoto key={`s-df-${item.thumbpath}`} {...item} />
        ))}
      </div>
    </ItemWrapper>
  )
}

ItemsPhotos.displayName = "ItemsPhotos"
export default ItemsPhotos
