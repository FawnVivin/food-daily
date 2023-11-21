import { z } from 'zod'

import type { ZodType } from 'zod';
import type { MealProductFormProps } from '../MealProductForm.types'

export const mealProductFormSchema: ZodType<MealProductFormProps> = z.object({
  weight: z.coerce.number().min(1).max(5000)
})
