import { Sex } from '@food-daily/mobile/types'

import type { SelectItem } from '@food-daily/mobile/ui'

export const sexItems: SelectItem[] = Object.entries(Sex).map((item) => ({
  _id: item[0],
  value: item[1]
}))
