import { useTheme } from 'react-native-paper'


import { PFCItem } from '../../../PFCItem'

import { PFCBlockRoot } from './PFCBlock.styles'

import type { DailyStats, VisitorNorms } from '@food-daily/shared/types'
import type { FC } from 'react'


const PFCBlock: FC<DailyStats & VisitorNorms> = ({ carbohydrateNorm, carbohydrates, proteinNorm, proteins, fatsNorm, fats }) => {
  const { colors } = useTheme()

  return (
    <PFCBlockRoot>
      <PFCItem title={'Белки'} maxValue={proteinNorm} currentValue={proteins} color={colors.secondaryContainer} />
      <PFCItem title={'Жиры'} maxValue={fatsNorm} currentValue={fats} color={colors.tertiaryContainer} />
      <PFCItem title={'Углеводы'} maxValue={carbohydrateNorm} currentValue={carbohydrates} color={colors.secondary} />
    </PFCBlockRoot>
  )
}

export default PFCBlock
