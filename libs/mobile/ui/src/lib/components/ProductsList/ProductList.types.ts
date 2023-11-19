import type { Product } from '@food-daily/shared/types'
import type { ProductScreens } from '@food-daily/mobile/types'

export type ProductListProps = {
  products: Product[]
  screenType: ProductScreens
}
