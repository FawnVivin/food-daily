import { z } from 'zod'

import type { ZodType } from 'zod';
import type { SearchProductFormParams } from '../SearchProductForm.types'

export const searchProductFormSchema: ZodType<SearchProductFormParams> = z.object({
  weight: z.string().regex(/^[0-9]+$/).max(4),
  mealType: z.string()
})
