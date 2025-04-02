import { useQuery } from "@tanstack/react-query"

import FormRename from "./components/FormRename"

import { cx } from "../../utils/cx"
import { useAuth } from "../../store/useAuth"
import { getCompanyId } from "../../services/companies"
import { useRenameCompany } from "../../store/useRenameCompany"

function ModalRenameCompany() {
  const token = useAuth(({ token }) => token)
  const company = useRenameCompany(({ company }) => company)

  const { data, isLoading, refetch } = useQuery({
    queryFn: () => getCompanyId(company!),
    queryKey: ["companies", company!],
    enabled: !!token && !!company,
  })

  const { name = null } = data?.data ?? {}

  if (!company) return null

  return (
    <div
      className={cx(
        "fixed bg-black/50 inset-0 w-full h-full flex items-center justify-center",
        company ? "visible pointer-events-auto opacity-100" : "invisible pointer-events-none opacity-0",
      )}
    >
      {isLoading ? (
        <section className="w-full bg-[#FFFFFF] p-6 gap-6 flex flex-col items-center max-w-[22.5rem] rounded-lg"></section>
      ) : (
        <FormRename id={company!} name={name} refetch={refetch} />
      )}
    </div>
  )
}

ModalRenameCompany.displayName = "ModalRenameCompany"
export default ModalRenameCompany
