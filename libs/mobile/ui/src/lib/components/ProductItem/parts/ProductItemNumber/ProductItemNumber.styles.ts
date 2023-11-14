import styled from 'styled-components'
import { View } from 'react-native'
import { Text } from 'react-native-paper'

export const ProductItemNumberRoot = styled(View)`
  width: 40px;
  height: 40px;
  border-radius: 1000px;
  justify-content: center;
  align-items: center;
  background-color: ${({theme})=>theme.colors.primary};
`
export const NumberText = styled(Text)`
  color: ${({theme})=>theme.colors.primaryContainer};
  font-weight: 800;
`
