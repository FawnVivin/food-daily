import { z } from 'zod'

import type { SearchProductFormParams } from '../SearchProductForm.types'
import type { ZodType } from 'zod';

export const searchProductFormSchema: ZodType<SearchProductFormParams> = z.object({
  weight: z.coerce.number().min(1).max(5000),
  meal: z.string().min(1)
})
