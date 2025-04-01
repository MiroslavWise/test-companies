interface IProps {
  id: string
  className?: string
}

function Icon({ id, className = "" }: IProps) {
  return (
    <svg className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${className}`}>
      <use href={`#${id}`} />
    </svg>
  )
}

Icon.displayName = "Icon"
export default Icon
