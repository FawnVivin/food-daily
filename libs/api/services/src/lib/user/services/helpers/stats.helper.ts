import { UpdateUserDto } from '@food-daily/shared/types'
import {
  ActivityCoef,
  SexCoef,
  TargetCaloriesCoef,
  TargetCarbohydratesCoef,
  TargetFatsCoef,
  TargetProteinsCoef
} from '../constants'

export const StatsHelper = ({ weight, height, target, age, sex, activity }: UpdateUserDto) => {
  const calories = (10 * weight + 6.25 * height - 5 * age + SexCoef[sex]) * ActivityCoef[activity] + TargetCaloriesCoef[target]
  const proteinNorm = calories * TargetProteinsCoef[target] / 4
  const fatsNorm = calories * TargetFatsCoef[target] / 9
  const carbohydrateNorm = calories * TargetCarbohydratesCoef[target] / 4
  return [calories, proteinNorm, fatsNorm, carbohydrateNorm]
}
