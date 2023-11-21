import { z } from 'zod'

import type { ProfileFormParams } from '../ProfileForm.types'
import type { ZodType } from 'zod';

export const profileFormSchema: ZodType<ProfileFormParams> = z.object({
  weight: z.coerce.number().min(10).max(300),
  age: z.coerce.number().max(120).min(1),
  height: z.coerce.number().max(300).min(50),
  target: z.string(),
  sex: z.string()

})
