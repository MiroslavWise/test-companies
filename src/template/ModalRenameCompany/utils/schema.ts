import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

const schema = z.object({
  name: z.string().min(1, { message: "Обязательное поле" }),
})

export type TSchema = z.infer<typeof schema>
export const resolverSchema = zodResolver(schema)
