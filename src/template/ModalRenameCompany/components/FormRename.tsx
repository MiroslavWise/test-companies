import { useState } from "react"
import { Controller, useForm } from "react-hook-form"

import { resolverSchema, TSchema } from "../utils/schema"
import { dispatchRenameCompany } from "../../../store/useRenameCompany"
import { cx } from "../../../utils/cx"
import { patchCompany, TPatchBodyCompany } from "../../../services/companies"

interface IProps {
  name: string | null
  id: string | number

  refetch(): Promise<any>
}

function FormRename({ name, refetch, id }: IProps) {
  const [loading, setLoading] = useState(false)

  const { handleSubmit, getValues, control } = useForm<TSchema>({
    defaultValues: {
      name: name ?? "",
    },
    resolver: resolverSchema,
  })

  function close() {
    dispatchRenameCompany()
  }

  const onSubmit = handleSubmit(async () => {
    const values = getValues()
    if (!loading) {
      setLoading(true)
      console.log(values)
      const body: TPatchBodyCompany = {}

      const newName = values.name.trim()
      const oldName = name

      if (newName !== oldName && newName) {
        body.name = newName
      }

      if (Object.keys(body).length > 0) {
        await patchCompany(id, body)
        await refetch()
      }

      close()

      setLoading(false)
    }
  })

  return (
    <form onSubmit={onSubmit} className="w-full bg-[#FFFFFF] p-6 gap-6 flex flex-col items-center max-w-[22.5rem] rounded-lg">
      <article className="w-full flex flex-col gap-6 items-center text-[#000000CC]">
        <h2 className="text-sm font-semibold leading-6">Specify the Organization's name</h2>
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <input
              {...field}
              className={cx(
                "border w-full h-10 flex items-center text-sm leading-6 px-3 text-[#000000CC] rounded-lg hover:border-[#00000080] outline-2 outline-[#35CDFD] bg-white",
                !!error?.message ? "border-[#D72323]" : "border-[#00000033]",
              )}
            />
          )}
        />
      </article>
      <footer className="w-full grid grid-cols-2 gap-4">
        <button
          type="button"
          className="border border-[#00000033] bg-[#ffffff] w-full h-10 rounded-lg text-center font-semibold text-[13px] leading-5 flex items-center justify-center text-[#3B3B3B] hover:text-[#6D4AFF] hover:border-[#00000066] focus:border-[#6243E6] focus:text-[#6243E6]"
          disabled={loading}
          onClick={close}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="shadow-primary-button bg-[#3B3B3B] w-full h-10 rounded-lg text-center font-semibold text-[13px] leading-5 flex items-center justify-center text-[#ffffff] disabled:bg-[#FFFFFF4D]"
          disabled={loading}
        >
          Save changes
        </button>
      </footer>
    </form>
  )
}

FormRename.displayName = "FormRename"
export default FormRename
