import type { CreateConsumedProductDto } from '@food-daily/shared/types'

export type SearchProductFormParams = Pick<CreateConsumedProductDto, 'weight'>&{
  meal:string
}
