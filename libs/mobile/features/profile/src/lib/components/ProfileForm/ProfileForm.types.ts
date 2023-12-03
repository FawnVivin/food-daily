import type { UpdateUserDto } from '@food-daily/shared/types'

export type ProfileFormParams = Omit<UpdateUserDto,   'activity' | 'sex' | 'target'>&{
  sex: string,
  target: string,
  activity: string
}
