import styled from 'styled-components'
import {Image} from 'react-native'
import { Block } from '@food-daily/mobile/ui'

export const MealImage = styled(Image)`
  width: 50px;
  height: 50px;
`

export const MealItemRoot = styled(Block)`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  background-color: ${({theme})=>theme.colors.backdrop};
  border-radius: 16px;
  padding:15px;
`
