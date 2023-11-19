import type { Product } from '@food-daily/shared/types'
import type { ProductScreens } from '@food-daily/mobile/types'
import { RootStackParamList } from '@food-daily/mobile/types'

export type ProductItemProps = Product & {
  itemNumber: number
  screenType: ProductScreens
}
