import { z } from 'zod'

import type { CreateProductDto } from '@food-daily/shared/types'
import type { ZodType } from 'zod'

export const createProductFormSchema: ZodType<Omit<CreateProductDto,'authorId'>> = z.object({
  name: z.string().max(20).min(3),
  fats: z.coerce.number().max(100).min(0),
  proteins: z.coerce.number().max(100).min(0),
  calories: z.coerce.number().max(5000).min(0),
  carbohydrates: z.coerce.number().max(100).min(0),
  description: z.string().max(250).min(100)
})
