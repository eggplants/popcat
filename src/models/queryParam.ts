import { z } from 'zod'

export const queryParamSchema = z.object({
  flip: z
    .enum(['true', 'false'])
    .transform((s) => s === 'true')
    .optional(),
  t: z.preprocess((v) => Number(v), z.number().positive()).default(1000),
})

export type QueryParam = z.infer<typeof queryParamSchema>
export type QueryParamKey = keyof QueryParam
