import styled from 'styled-components'
import { View } from 'react-native'

import { Block } from '../Block'

export const ProductParamsBlockRoot = styled(Block)`
  padding: 16px 0;
`

export const CaloriesBlock = styled(View)`
  background-color: ${({theme})=>theme.colors.background};
  height: 65px;
  justify-content: center;
`

export const MacroNutrients = styled(View)`
  margin-top: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`
