import { useQuery } from "@tanstack/react-query"

import Icon from "../Icon"
import ItemsPhotos from "./components/ItemsPhotos"
import ItemContractor from "./components/ItemContractor"
import ItemOrganization from "./components/ItemOrganization"

import { ID_COMPANY } from "../../mocks/id"
import { useAuth } from "../../store/useAuth"
import { getCompanyId } from "../../services/companies"

function HomePage() {
  const token = useAuth(({ token }) => token)

  const { data } = useQuery({
    queryFn: () => getCompanyId(ID_COMPANY),
    queryKey: ["companies", ID_COMPANY],
    enabled: !!token,
  })
  const { name = null } = data?.data ?? {}

  return (
    <section className="w-full flex flex-col items-center h-screen overflow-x-hidden overflow-y-auto px-4">
      <div className="w-full py-10 flex flex-col gap-10 max-w-[40rem]">
        <header className="w-full flex flex-row items-center justify-between gap-2 relative">
          <h4 className="text-[#000000CC] text-[1.75rem] leading-10 font-medium">{name}</h4>
          <div className="flex items-center gap-1">
            <button type="button" className="w-8 h-8 aspect-square relative text-[#3B3B3B]">
              <Icon id="icon-pencil" className="w-5 h-5 aspect-square" />
            </button>
            <button type="button" className="w-8 h-8 aspect-square relative text-[#D72323]">
              <Icon id="icon-trash" className="w-5 h-5 aspect-square" />
            </button>
          </div>
        </header>
        <ul className="w-full flex flex-col gap-4">
          <ItemOrganization />
          <ItemContractor />
          <ItemsPhotos />
        </ul>
      </div>
    </section>
  )
}

HomePage.displayName = "HomePage"
export default HomePage
