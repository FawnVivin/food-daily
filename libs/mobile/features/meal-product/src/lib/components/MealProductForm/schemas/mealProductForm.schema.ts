import { z } from 'zod'

import type { UpdateConsumedProductDto } from "@food-daily/shared/types";
import type { ZodType } from 'zod';

export const mealProductFormSchema: ZodType<UpdateConsumedProductDto> = z.object({
  weight: z.coerce.number().min(1).max(5000)
})
