import { z } from 'zod'

import type { Login } from '@food-daily/shared/types'
import type { ZodType } from 'zod'

export const authorizationFormSchema: ZodType<Login> = z.object({
  email: z.string().max(30).min(5).email(),
  password: z.string().max(20).min(5)
})
