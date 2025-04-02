import { Controller, useForm } from "react-hook-form"
import { Dispatch, SetStateAction, useState } from "react"

import Icon from "../../Icon"

import { TStateDate } from "../types"
import { cx } from "../../../utils/cx"
import { updateType } from "./ItemOrganization"
import { formatDate } from "../../../utils/date"
import { EBusinessEntity } from "../../../types/enum"
import { resolverSchema, TSchema } from "../utils/schema"
import { useOutsideClickEvent } from "../../../utils/useOutsideClickEvent"
import { ICompany, patchCompany, TPatchBodyCompany } from "../../../services/companies"

import styles from "../styles/menu.module.scss"

interface IProps {
  id: number | string
  data: ICompany

  setState: Dispatch<SetStateAction<TStateDate>>
}
const cnButton =
  "h-7 border border-[#00000033] grid grid-cols-[1rem_minmax(0,1fr)] gap-3 items-center pr-3 pl-2 rounded-lg hover:text-[#6D4AFF] hover:border-[#00000066] focus:border-[#6243E6] focus:text-[#6243E6]"

function FromEditCompany({ setState, data, id }: IProps) {
  const [loading, setLoading] = useState(false)
  const { contract, businessEntity, type = [] } = data ?? {}
  const [open, setOpen, ref] = useOutsideClickEvent()

  const { no = "", issue_date = null } = contract ?? {}

  const { handleSubmit, getValues, control } = useForm<TSchema>({
    defaultValues: {
      businessEntity: businessEntity,
    },
    resolver: resolverSchema,
  })

  const date = formatDate(issue_date)

  const onSubmit = handleSubmit(async () => {
    if (!loading) {
      setLoading(true)
      const values = getValues()
      const body: TPatchBodyCompany = {}

      if (values.businessEntity !== businessEntity) {
        body.businessEntity = values.businessEntity
      }

      if (Object.keys(body).length > 0) {
        await patchCompany(id, body)
      }

      setLoading(false)
      setState("data")
    }
  })

  const types = updateType(type)

  return (
    <form className="w-full flex flex-col gap-3" onSubmit={onSubmit}>
      <div className="w-full flex flex-row items-center justify-between">
        <h2 className="font-bold text-sm">Company Details</h2>
        <div className="flex flex-row items-center justify-end gap-3">
          <button type="submit" className={cnButton}>
            <div className="relative w-4 h-4 aspect-square">
              <Icon id="icon-pencil" className="w-4 h-4 aspect-square" />
            </div>
            <span className="text-[11px] font-semibold leading-5">Save changes</span>
          </button>
          <button type="button" onClick={() => setState("data")} className={cnButton}>
            <div className="relative w-4 h-4 aspect-square">
              <Icon id="icon-pencil" className="w-4 h-4 aspect-square" />
            </div>
            <span className="text-[11px] font-semibold leading-5">Cancel</span>
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-0.5 font-normal">
        <div className="w-full grid grid-cols-[10rem_minmax(0,1fr)] gap-3 items-center h-8">
          <span className="text-[#00000080] text-[13px] leading-5">Agreement:</span>
          <div className="text-sm flex flex-row items-center flex-nowrap">
            {no}&nbsp;<span className="text-[#0000004D]">/</span>&nbsp;{date}
          </div>
        </div>
        <Controller
          name="businessEntity"
          control={control}
          render={({ field }) => (
            <div className="w-full grid grid-cols-[10rem_minmax(0,1fr)] gap-3 items-center">
              <span className="text-[#00000080] text-[13px] leading-5">Business entity:</span>
              <div className="relative w-full" ref={ref}>
                <input
                  readOnly
                  value={field.value}
                  className="w-full border h-10 flex items-center text-sm leading-6 px-3 text-[#000000CC] rounded-lg hover:border-[#00000080] outline-2 outline-[#35CDFD] bg-white border-[#00000033] cursor-pointer"
                  onClick={(event) => {
                    event.stopPropagation()
                    setOpen((_) => !_)
                  }}
                />
                <div className="absolute top-1/2 -translate-y-1/2 right-3 w-5 h-5 pointer-events-none">
                  <Icon id="icon-chevron-left" className={cx("w-5 h-5 aspect-square ", open ? "rotate-90" : "-rotate-90")} />
                </div>
                <div
                  className={cx(
                    "absolute top-[calc(100%_+_0.25rem)] left-0 right-0 flex flex-col z-20 transition-all pt-2 bg-[#FFFFFF] rounded-lg",
                    open ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none",
                    styles.containerMenu,
                  )}
                >
                  {Object.values(EBusinessEntity).map((item) => (
                    <a
                      key={`xxxx-${item}`}
                      className={cx(
                        "w-full h-11 flex items-center justify-start px-4",
                        item === field.value ? "bg-[#0000000D]" : "bg-transparent",
                      )}
                      onClick={(event) => {
                        event.stopPropagation()
                        setOpen(false)
                        field.onChange(item)
                      }}
                    >
                      <span className={cx("text-[#000000CC] text-[13px] leading-5", field.value === item ? "font-medium" : "font-normal")}>
                        {item}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        />
        <div className="w-full grid grid-cols-[10rem_minmax(0,1fr)] gap-3 items-center h-8">
          <span className="text-[#00000080] text-[13px] leading-5">Company type:</span>
          <p className="text-sm">{types}</p>
        </div>
      </div>
    </form>
  )
}

FromEditCompany.displayName = "FromEditCompany"
export default FromEditCompany
