import { z } from 'zod'

import type { ZodType } from 'zod'
import { AuthorizationFormParams } from '../Authorization.types'

export const authorizationFormSchema: ZodType<AuthorizationFormParams> = z.object({
  login: z.string().max(30).min(5).email(),
  password: z.string().max(20).min(5)
})
