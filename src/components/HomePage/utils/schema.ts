import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { EBusinessEntity } from "../../../types/enum"

const schema = z.object({
  businessEntity: z.nativeEnum(EBusinessEntity),
})

export type TSchema = z.infer<typeof schema>
export const resolverSchema = zodResolver(schema)
