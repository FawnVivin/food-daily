import { z } from 'zod'

import type { CreateProductFormParams } from '../CreateProductForm.types'
import type { ZodType } from 'zod'

export const createProductFormSchema: ZodType<CreateProductFormParams> = z.object({
  name: z.string().max(20).min(3),
  fats: z.string().regex(/^[0-9]+$/, { message: 'This parameter must be a number' }).max(4),
  proteins: z.string().regex(/^[0-9]+$/, { message: 'This parameter must be a number' }).max(4),
  calories: z.string().regex(/^[0-9]+$/, { message: 'This parameter must be a number' }).max(4),
  carbohydrates: z.string().regex(/^[0-9]+$/, { message: 'This parameter must be a number' }).max(4),
  description: z.string().max(250).min(100)
})
