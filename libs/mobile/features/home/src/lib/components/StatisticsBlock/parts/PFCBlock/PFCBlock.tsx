import { useTheme } from 'react-native-paper'

import { PFCItem } from '../../../PFCItem'

import { PFCBlockRoot } from './PFCBlock.styles'

import type { FC } from 'react'
import type { Stats } from '@food-daily/mobile/types'
import { DailyStats, UserNorms } from '@food-daily/shared/types'


const PFCBlock: FC<UserNorms & DailyStats> = ({ carbohydrateNorm, carbohydrates, proteinNorm, proteins, fatsNorm, fats }) => {
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
