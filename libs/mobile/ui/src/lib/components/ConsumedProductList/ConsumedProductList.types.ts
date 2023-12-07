import type { ConsumedProductDto } from "@food-daily/shared/types";
import type { ProductScreens } from '@food-daily/mobile/types'

export type ConsumedProductListProps = {
  products: ConsumedProductDto[]
  screenType: ProductScreens
}
