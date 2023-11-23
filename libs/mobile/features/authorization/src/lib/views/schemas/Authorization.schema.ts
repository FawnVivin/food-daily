import { z } from 'zod'

import type { AuthorizationFormParams } from '../Authorization.types'
import type { ZodType } from 'zod'

export const authorizationFormSchema: ZodType<AuthorizationFormParams> = z.object({
  login: z.string().max(30).min(5).email(),
  password: z.string().max(20).min(5)
})
