import type { ProductParams } from '@food-daily/shared/types'

export type MealProductFormProps = Pick<ProductParams, 'weight'>

export type MealProductFormParams = {
  weight: string
}
