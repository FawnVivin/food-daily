import { z } from 'zod'

import type { ZodType } from 'zod';
import type { MealProductFormParams } from '../MealProductForm.types'

export const mealProductFormSchema: ZodType<MealProductFormParams> = z.object({
  weight: z.string().regex(/^[0-9]+$/).max(4)
})
