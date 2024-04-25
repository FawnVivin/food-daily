import type { UpdateVisitorDto } from '@food-daily/shared/types'

export type ProfileFormParams = Omit<UpdateVisitorDto,   'activity' | 'sex' | 'target'>&{
  sex: string,
  target: string,
  activity: string
}
