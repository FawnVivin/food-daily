import type { User } from '@food-daily/shared/types'

export type ProfileFormParams = Omit<User, 'id' | 'name' | 'sex' | 'target'>&{
  sex: string,
  target: string
}
