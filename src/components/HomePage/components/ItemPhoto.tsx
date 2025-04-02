import Icon from "../../Icon"

import { IPhoto } from "../../../services/companies"
import { dispatchDeletePhoto } from "../../../store/useDeletePhoto"
import { ID_COMPANY } from "../../../mocks/id"

function ItemPhoto(props: IPhoto) {
  const { filepath, name } = props ?? {}

  function handleDelete() {
    dispatchDeletePhoto(ID_COMPANY, name)
  }

  return (
    <div className="w-full relative rounded-lg overflow-hidden aspect-[144/108]">
      <button type="button" className="absolute top-4 right-4 rounded-lg bg-[var(--root-black)] w-7 h-7 z-10" onClick={handleDelete}>
        <Icon id="icon-trash" className="text-white w-4 h-4" />
      </button>
      <img src={filepath} alt={name} loading="lazy" className="absolute w-full inset-0 z-0 object-cover h-full" />
    </div>
  )
}

ItemPhoto.displayName = "ItemPhoto"
export default ItemPhoto
