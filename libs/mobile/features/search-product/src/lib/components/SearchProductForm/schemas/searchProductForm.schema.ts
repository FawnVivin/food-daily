import { z } from 'zod'

import type { ZodType } from 'zod';
import { SearchProductFormParams } from '../SearchProductForm.types'
import { Meal } from '@food-daily/shared/types'

export const searchProductFormSchema: ZodType<SearchProductFormParams> = z.object({
  weight: z.coerce.number().min(1).max(5000),
  meal: z.string().min(1)
})
