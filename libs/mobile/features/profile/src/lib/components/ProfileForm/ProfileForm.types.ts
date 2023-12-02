import type { UpdateUserDto } from '@food-daily/shared/types'

export type ProfileFormParams = Omit<UpdateUserDto,   'sex' | 'target'|'activity'>&{
  sex: string,
  target: string,
  activity: string
}
