import type { ProductParams } from "@food-daily/shared/types";
import type { ProductScreens } from "@food-daily/mobile/types";

export type ProductItemProps = ProductParams & {
  itemNumber: number
  screenType: ProductScreens
  name: string
  id: number
}
