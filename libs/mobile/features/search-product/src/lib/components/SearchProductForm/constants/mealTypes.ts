import { Meals } from '@food-daily/mobile/types'

import type { SelectItem } from '@food-daily/mobile/ui'

export const mealTypes: SelectItem[] = Object.entries(Meals).map((item)=>({
  _id:item[0],
  value:item[1]
}))
