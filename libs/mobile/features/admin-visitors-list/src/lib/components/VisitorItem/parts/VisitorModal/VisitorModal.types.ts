import type { SelectItem } from "@food-daily/mobile/ui"
import type { TrainerType } from "@food-daily/shared/types"

export type VisitorModalProps = {
  trainer?: TrainerType
  visitorName: string
  visitorId: number
  trainerItems: SelectItem[]
  onClose: () => void
}