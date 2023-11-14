import { useTheme } from 'react-native-paper'

import { PFCItem } from '../../../PFCItem'

import { PFCBlockRoot } from './PFCBlock.styles'

import type { FC } from 'react'
import type { Stats } from '@food-daily/mobile/types'


const PFCBlock:FC<Stats> = ({normB,normU,normG,currentB,currentG,currentU}) => {
  const {colors} = useTheme()

  return(
    <PFCBlockRoot>
      <PFCItem title={'Белки'} maxValue={normB} currentValue={currentB} color={colors.secondaryContainer}/>
      <PFCItem title={'Жиры'} maxValue={normG} currentValue={currentG} color={colors.tertiaryContainer}/>
      <PFCItem title={'Углеводы'} maxValue={normU} currentValue={currentU} color={colors.secondary}/>
    </PFCBlockRoot>
  )
}

export default PFCBlock
