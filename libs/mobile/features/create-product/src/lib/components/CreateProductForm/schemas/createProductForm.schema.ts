import { z } from 'zod'

import type { CreateProductFormParams } from '../CreateProductForm.types'
import type { ZodType } from 'zod'

export const createProductFormSchema: ZodType<CreateProductFormParams> = z.object({
  name: z.string().max(20).min(3),
  fats: z.coerce.number().max(100).min(0),
  proteins: z.coerce.number().max(100).min(0),
  calories: z.coerce.number().max(100).min(0),
  carbohydrates: z.coerce.number().max(100).min(0),
  description: z.string().max(250).min(100)
})
