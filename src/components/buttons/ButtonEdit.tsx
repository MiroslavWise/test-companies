import { type DispatchWithoutAction } from "react"

import Icon from "../Icon"

import { cx } from "../../utils/cx"

interface IProps {
  className?: string
  onClick: DispatchWithoutAction
}

function ButtonEdit({ className, onClick }: IProps) {
  return (
    <button
      type="button"
      className={cx(
        className,
        "h-7 border border-[#00000033] grid grid-cols-[1rem_minmax(0,1fr)] gap-3 items-center pr-3 pl-2 rounded-lg",
        "hover:text-[#6D4AFF] hover:border-[#00000066] focus:border-[#6243E6] focus:text-[#6243E6]",
      )}
      onClick={onClick}
    >
      <div className="relative w-4 h-4 aspect-square">
        <Icon id="icon-pencil" className="w-4 h-4 aspect-square" />
      </div>
      <span className="text-[11px] font-semibold leading-5">Edit</span>
    </button>
  )
}

ButtonEdit.displayName = "ButtonEdit"
export default ButtonEdit
