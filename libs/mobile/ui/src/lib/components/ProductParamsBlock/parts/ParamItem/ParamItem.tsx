import { Text } from 'react-native-paper'

import { ParamItemRoot, ParamValue } from './ParamItem.styles'

import type { FC } from 'react'
import type { ParamItemProps } from './ParamItem.types'

const ParamItem: FC<ParamItemProps> = ({ title, value, size = 'sm', postfix=''}) => {
  const textVariant = size === 'sm' ? 'titleMedium' : 'titleLarge'

  return (
    <ParamItemRoot>
      <ParamValue variant={textVariant}>{value}{postfix}</ParamValue>
      <Text>{title}</Text>
    </ParamItemRoot>
  )
}

export default ParamItem
