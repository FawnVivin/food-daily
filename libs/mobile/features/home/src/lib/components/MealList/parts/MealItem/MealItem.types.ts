import type { RootStackParamList } from '@food-daily/mobile/types'

export type MealItemProps = RootStackParamList['MealScreen'] & {
  title: string,
  description: string,
}
