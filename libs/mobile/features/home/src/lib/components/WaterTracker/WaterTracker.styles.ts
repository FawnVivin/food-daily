import styled from 'styled-components'
import { Block } from '@food-daily/mobile/ui'
import { View } from 'react-native'
import {Text} from 'react-native-paper'

export const WaterTrackerRoot = styled(Block)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`

export const Content = styled(View)`
  gap:10px;
  align-items: center;
`

export const CountText =  styled(Text)`
  color: #8CC4DF;
`

export const PostfixText = styled(Text)`
  font-size: 10px;
`
