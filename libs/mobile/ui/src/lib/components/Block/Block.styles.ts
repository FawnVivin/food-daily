import styled from 'styled-components'
import { View } from 'react-native'

export const BlockRoot = styled(View)`
  background-color: ${({theme})=>theme.colors.backdrop};
  border-radius: 16px;
  padding:15px;
`
