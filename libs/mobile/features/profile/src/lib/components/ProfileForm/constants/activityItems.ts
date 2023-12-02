import { SelectItem } from '@food-daily/mobile/ui'
import { Activity } from '@food-daily/mobile/types'


export const activityItems: SelectItem[] = Object.entries(Activity).map((item) => ({
  _id: item[0],
  value: item[1]
}))
