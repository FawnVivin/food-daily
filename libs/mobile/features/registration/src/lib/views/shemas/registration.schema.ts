import { z } from 'zod'
import type { ZodType } from 'zod';
import { CreateUserType } from "../Registration.types";

export const registrationSchema: ZodType<CreateUserType> = z.object({
  weight: z.coerce.number().min(10).max(300),
  age: z.coerce.number().max(120).min(1),
  height: z.coerce.number().max(300).min(50),
  target: z.string(),
  sex: z.string(),
  activity: z.string(),
  name: z.string().min(3).max(25),
  email: z.string().email(),
  password: z.string().min(5).max(20)
})
