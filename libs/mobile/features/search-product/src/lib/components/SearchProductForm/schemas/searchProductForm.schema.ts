import { z } from 'zod'

import type { ZodType } from 'zod';
import type { SearchProductFormParams } from '../SearchProductForm.types'

export const searchProductFormSchema: ZodType<SearchProductFormParams> = z.object({
  weight: z.coerce.number().min(1).max(5000),
  mealType: z.string()
})
