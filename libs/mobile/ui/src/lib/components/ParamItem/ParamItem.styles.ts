import styled from 'styled-components'
import { View } from 'react-native'
import { Text } from 'react-native-paper'

export const ParamItemRoot = styled(View)`
  align-items: center;
`

export const ParamValue = styled(Text)`
  color: ${({theme})=>theme.colors.primary};
`
