import { Text } from 'react-native-paper'

import { MaxValueText, PFCItemRoot, StatProgressBar } from './PFCItem.styles'

import type { FC } from 'react'
import type { PFCItemProps } from './PFCItem.types'

const PFCItem:FC<PFCItemProps> = ({title,maxValue,currentValue, color}) => {
  const progressValue = currentValue/maxValue

  return(
    <PFCItemRoot>
      <Text variant={'labelMedium'}>{title}</Text>
      <StatProgressBar progress={progressValue} color={color}/>
      <Text>{currentValue} /
        <MaxValueText $color={color}>{maxValue}г.</MaxValueText>
      </Text>
    </PFCItemRoot>)
}

export default PFCItem
