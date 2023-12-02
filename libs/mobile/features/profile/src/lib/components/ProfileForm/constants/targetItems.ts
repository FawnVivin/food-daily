import { Target } from '@food-daily/mobile/types'

import type { SelectItem } from '@food-daily/mobile/ui'

export const targetItems: SelectItem[] = Object.entries(Target).map((item) => ({ _id: item[0], value: item[1] })
)
